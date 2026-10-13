from __future__ import annotations

import http.server
import socketserver
from pathlib import Path

PORT = 8000
ROOT = Path(__file__).resolve().parent

Handler = http.server.SimpleHTTPRequestHandler

class QuietHandler(Handler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

with socketserver.TCPServer(("0.0.0.0", PORT), QuietHandler) as httpd:
    print(f"Serving GuV-Rechner on http://localhost:{PORT}")
    httpd.serve_forever()
