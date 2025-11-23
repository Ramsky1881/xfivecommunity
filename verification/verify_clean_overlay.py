
from playwright.sync_api import Page, expect, sync_playwright
import time
import os

def test_clean_overlay(page: Page):
    # Block external scripts
    page.route("**/*face-api.min.js", lambda route: route.abort())
    page.route("**/model/*", lambda route: route.abort())

    # Mock setup
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
            // Draw a face-like shape to verify transparency
            ctx.fillStyle = '#333';
            ctx.fillRect(0,0,640,480);
            ctx.fillStyle = '#ffccaa'; // Skin tone
            ctx.beginPath();
            ctx.arc(320, 240, 100, 0, Math.PI*2);
            ctx.fill();
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

    print("Waiting for Access Denied timeout...")
    page.wait_for_timeout(11000)

    # Verify overlay exists
    overlay = page.locator("#accessDeniedOverlay")
    expect(overlay).to_be_visible()

    # Check transparency (computed style)
    bg_color = overlay.evaluate("el => window.getComputedStyle(el).backgroundColor")
    print(f"Overlay Background Color: {bg_color}")

    # Check text visibility
    text = page.locator(".access-denied-text")
    expect(text).to_contain_text("WAJAHMU TIDAK DIKETEMUKAN")

    page.screenshot(path="verification/clean_overlay.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_clean_overlay(page)
        finally:
            browser.close()
