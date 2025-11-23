
from playwright.sync_api import Page, expect, sync_playwright
import time
import os

def test_face_scanner(page: Page):
    page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.text}"))

    # Block the real face-api.js from loading so it doesn't overwrite our mock
    def handle_route(route):
        print(f"Blocking request to: {route.request.url}")
        route.abort()

    page.route("**/*face-api.min.js", handle_route)
    page.route("**/model/*", handle_route)

    # Mock face-api.js to avoid downloading models and using real camera
    page.add_init_script("""
        console.log("Injecting mocks...");

        // Ensure faceapi namespace exists
        window.faceapi = {
            nets: {
                tinyFaceDetector: {
                    loadFromUri: async () => console.log("Mock model loaded")
                }
            },
            detectSingleFace: async () => {
                if (window.mockDetectionResult) {
                    console.log("Mock: Face Detected!");
                    return { box: { x: 0, y: 0, width: 100, height: 100 } };
                }
                return null;
            },
            TinyFaceDetectorOptions: class {}
        };

        // Mock getUserMedia
        navigator.mediaDevices.getUserMedia = async () => {
            console.log("Mock: getUserMedia called");
            const canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'red';
            ctx.fillRect(0,0,640,480);
            const stream = canvas.captureStream();
            return stream;
        };

        window.mockDetectionResult = null; // Default no face
    """)

    page.goto("http://localhost:8080")

    # 1. Navigate to Face Detection
    page.get_by_role("button", name="ISI BIODATA X5").click()
    page.get_by_label("Saya menyetujui").check()
    page.get_by_role("button", name="Lanjutkan").click()

    # 2. Start Webcam (Mocked)
    start_btn = page.get_by_role("button", name="Mulai Deteksi")
    start_btn.click()

    # Allow time for "loading model" message to pass and "Kamera aktif" to appear
    page.wait_for_timeout(2000)

    # --- TEST CASE 1: FAILURE (ACCESS DENIED) ---
    print("Testing Access Denied...")
    # Wait for failure (10s timeout + buffer)
    page.wait_for_timeout(11000)

    expect(page.locator("#accessDeniedOverlay")).to_be_visible()
    page.screenshot(path="verification/access_denied.png")
    print("Access Denied verified.")

    # --- TEST CASE 2: SUCCESS (LOGS) ---
    print("Testing Success Flow...")
    # Click Retry
    page.get_by_role("button", name="COBA LAGI").click()
    print("Clicked Retry")

    # Wait for restart
    page.wait_for_timeout(1000)

    # Enable face detection mock
    print("Enabling face detection...")
    page.evaluate("window.mockDetectionResult = true")

    # Wait for logs
    page.wait_for_timeout(4000)

    # Check if logs are visible
    expect(page.locator("#scannerLogs")).to_be_visible()
    expect(page.locator(".log-entry").first).to_contain_text("Analyzing wajah")

    # Take screenshot of success state
    page.screenshot(path="verification/success_logs.png")
    print("Success Logs screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_face_scanner(page)
        finally:
            browser.close()
