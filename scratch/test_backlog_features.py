"""
test_backlog_features.py
Comprehensive automated test suite for SEO Open Graph, Schema.org JSON-LD, and PWA.
"""
import os
import json
import re
from playwright.sync_api import sync_playwright

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def test_json_ld():
    print("-> Verificando Schema.org JSON-LD en index.html...")
    index_path = os.path.join(BASE_DIR, "index.html")
    with open(index_path, "r", encoding="utf-8") as f:
        html = f.read()

    match = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
    assert match is not None, "Error: No se encontró el bloque <script type=\"application/ld+json\">"
    
    json_text = match.group(1).strip()
    data = json.loads(json_text)
    assert "@graph" in data, "Error: No se encontró '@graph' en JSON-LD"
    types = [item["@type"] for item in data["@graph"]]
    assert "Person" in types, "Falta entidad Person en JSON-LD"
    assert "ProfessionalService" in types, "Falta entidad ProfessionalService en JSON-LD"
    assert "WebSite" in types, "Falta entidad WebSite en JSON-LD"
    print("  [OK] JSON-LD válido con entidades Person, ProfessionalService y WebSite.")

def test_open_graph_and_meta():
    print("-> Verificando meta etiquetas Open Graph y Twitter Cards...")
    index_path = os.path.join(BASE_DIR, "index.html")
    with open(index_path, "r", encoding="utf-8") as f:
        html = f.read()

    required_tags = [
        'property="og:title"',
        'property="og:description"',
        'property="og:image"',
        'property="og:image:width"',
        'property="og:image:height"',
        'property="og:url"',
        'property="og:type"',
        'name="twitter:card"',
        'name="twitter:title"',
        'name="twitter:description"',
        'name="twitter:image"',
        'rel="canonical"',
        'rel="manifest"'
    ]

    for tag in required_tags:
        assert tag in html, f"Falta etiqueta requerida: {tag}"
    
    # Verificar que og-preview.png existe físicamente
    og_file = os.path.join(BASE_DIR, "img", "og-preview.png")
    assert os.path.exists(og_file), f"No existe {og_file}"
    size = os.path.getsize(og_file)
    assert size > 10000, f"Tamaño de imagen sospechosamente pequeño: {size} bytes"
    print(f"  [OK] Open Graph, Twitter Cards y og-preview.png ({size} bytes) verificados.")

def test_manifest():
    print("-> Verificando manifest.json y existencia de iconos...")
    manifest_path = os.path.join(BASE_DIR, "manifest.json")
    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    assert "name" in manifest
    assert "icons" in manifest
    assert len(manifest["icons"]) >= 2

    for icon_entry in manifest["icons"]:
        icon_path = os.path.join(BASE_DIR, icon_entry["src"])
        assert os.path.exists(icon_path), f"El icono {icon_entry['src']} no existe en disco"
        print(f"  [OK] Icono presente: {icon_entry['src']} ({icon_entry['sizes']})")

def test_service_worker():
    print("-> Verificando service-worker.js y recursos pre-cacheados...")
    sw_path = os.path.join(BASE_DIR, "service-worker.js")
    assert os.path.exists(sw_path), "No existe service-worker.js"
    with open(sw_path, "r", encoding="utf-8") as f:
        sw_code = f.read()

    # Extraer CORE_ASSETS
    match = re.search(r'const CORE_ASSETS = \[(.*?)\];', sw_code, re.DOTALL)
    assert match is not None, "No se encontró CORE_ASSETS en service-worker.js"
    assets_block = match.group(1)
    assets = [a.strip().strip('"').strip("'") for a in assets_block.split(",") if a.strip()]

    for asset in assets:
        if asset in ["./", "."]:
            continue
        rel_path = asset.lstrip("./")
        file_path = os.path.join(BASE_DIR, rel_path)
        assert os.path.exists(file_path), f"El recurso precacheado {rel_path} no existe en disco"
    
    print(f"  [OK] {len(assets)} recursos de Service Worker verificados físicamente.")

def test_playwright_ux():
    print("-> Ejecutando verificación en navegador con Playwright...")
    import http.server
    import socketserver
    import threading

    PORT = 8923
    Handler = http.server.SimpleHTTPRequestHandler
    
    # Levantar servidor HTTP temporal
    os.chdir(BASE_DIR)
    httpd = socketserver.TCPServer(("", PORT), Handler)
    server_thread = threading.Thread(target=httpd.serve_forever)
    server_thread.daemon = True
    server_thread.start()

    errors = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            context = browser.new_context()
            page = context.new_page()

            page.on("pageerror", lambda err: errors.append(f"PageError: {err}"))
            page.on("console", lambda msg: errors.append(f"ConsoleError: {msg.text}") if msg.type == "error" else None)

            page.goto(f"http://localhost:{PORT}/index.html", wait_until="networkidle")

            # Comprobar título
            title = page.title()
            assert "Arturo Urbina Velasco" in title, f"Título inesperado: {title}"

            # Comprobar manifest link en DOM
            manifest_link = page.query_selector('link[rel="manifest"]')
            assert manifest_link is not None, "No se encontró link[rel=manifest] en DOM"

            # Esperar un momento a que el service worker se intente registrar
            page.wait_for_timeout(1000)

            # Comprobar que no hubo errores JS críticos
            # Nota: si hay errores de red por analytics o APIs externas bloqueadas, filtramos los que no son de código
            real_code_errors = [e for e in errors if "Failed to load resource" not in e]
            assert len(real_code_errors) == 0, f"Errores en consola detectados: {real_code_errors}"

            print("  [OK] Navegador cargó la página limpiamente con manifest y sin errores de script.")
            browser.close()
    finally:
        httpd.shutdown()
        httpd.server_close()

if __name__ == "__main__":
    test_json_ld()
    test_open_graph_and_meta()
    test_manifest()
    test_service_worker()
    test_playwright_ux()
    print("\n[SUCCESS] TODAS LAS PRUEBAS AUTOMATIZADAS PASARON SATISFACTORIAMENTE!")
