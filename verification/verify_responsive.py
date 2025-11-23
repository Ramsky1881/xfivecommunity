
from playwright.sync_api import Page, expect, sync_playwright
import time
import os

def test_responsive_layout(page: Page):
    # Block the real face-api.js to avoid errors and network requests
    page.route("**/*face-api.min.js", lambda route: route.abort())
    page.route("**/model/*", lambda route: route.abort())

    # Inject mocks for webcam and face-api
    page.add_init_script("""
        window.faceapi = {
            nets: { tinyFaceDetector: { loadFromUri: async () => {} } },
            detectSingleFace: async () => null,
            TinyFaceDetectorOptions: class {}
        };
        navigator.mediaDevices.getUserMedia = async () => {
            const canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'blue';
            ctx.fillRect(0,0,640,480);
            const stream = canvas.captureStream();
            return stream;
        };
    """)

    page.goto("http://localhost:8080")

    # Navigate to scanner
    page.get_by_role("button", name="ISI BIODATA X5").click()
    page.get_by_label("Saya menyetujui").check()
    page.get_by_role("button", name="Lanjutkan").click()

    # Start Webcam
    page.get_by_role("button", name="Mulai Deteksi").click()
    page.wait_for_timeout(1000)

    # --- DESKTOP CHECK ---
    print("Checking Desktop View...")
    page.set_viewport_size({"width": 1280, "height": 720})
    page.wait_for_timeout(500)

    # Verify video width is constrained to ~640px
    video = page.locator("#webcamVideo")
    box = video.bounding_box()
    print(f"Desktop Video Width: {box['width']}")

    page.screenshot(path="verification/responsive_desktop.png")

    # --- MOBILE CHECK ---
    print("Checking Mobile View...")
    page.set_viewport_size({"width": 375, "height": 667})
    page.wait_for_timeout(500)

    # Verify video fits the screen width (minus padding)
    box_mobile = video.bounding_box()
    print(f"Mobile Video Width: {box_mobile['width']}")

    page.screenshot(path="verification/responsive_mobile.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_responsive_layout(page)
        finally:
            browser.close()
