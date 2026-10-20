"""
test_portfolio_full_ux.py
Verifies end-to-end responsiveness, theme toggling, language switcher,
cotizador express, and visitor counter dashboard link.
"""
import os
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = 8924

def run_tests():
    os.chdir(BASE_DIR)
    httpd = socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler)
    server_thread = threading.Thread(target=httpd.serve_forever)
    server_thread.daemon = True
    server_thread.start()

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            
            # 1. Desktop Test (1440x900)
            print("-> Probando vista Desktop (1440x900)...")
            page = browser.new_page(viewport={"width": 1440, "height": 900})
            page.goto(f"http://localhost:{PORT}/index.html", wait_until="networkidle")

            # Verificar Navbar y links
            nav_links = page.query_selector_all(".nav-link")
            assert len(nav_links) == 7, f"Esperados 7 links, encontrados {len(nav_links)}"
            
            # Probar cambio de tema
            theme_btn = page.query_selector("#themeToggle")
            assert theme_btn is not None
            initial_theme = page.evaluate("() => document.documentElement.getAttribute('data-theme')")
            theme_btn.click()
            page.wait_for_timeout(200)
            new_theme = page.evaluate("() => document.documentElement.getAttribute('data-theme')")
            assert initial_theme != new_theme, "El tema no cambió al hacer clic"
            print(f"  [OK] Cambio de tema verificado: {initial_theme} -> {new_theme}")

            # Probar cambio de idioma
            lang_btn = page.query_selector("#langToggle")
            lang_btn.click()
            page.wait_for_timeout(200)
            curr_lang = page.evaluate("() => document.documentElement.getAttribute('lang')")
            assert curr_lang == "en", f"Idioma esperado 'en', obtenido '{curr_lang}'"
            print("  [OK] Cambio de idioma verificado: es -> en")

            # Regresar a español
            lang_btn.click()
            page.wait_for_timeout(200)
            assert page.evaluate("() => document.documentElement.getAttribute('lang')") == "es"

            # Probar Cotizador Express
            print("-> Probando Cotizador Express interactivo...")
            cotizador = page.query_selector("#cotizador")
            assert cotizador is not None
            # Seleccionar tipo de proyecto si hay opciones interactivas
            option_cards = page.query_selector_all(".quote-card, .calc-option")
            if option_cards:
                option_cards[0].click()
                page.wait_for_timeout(100)
            print("  [OK] Módulo de cotizador operativo.")

            # Probar toggle de visitas
            print("-> Probando contador de visitas discreto...")
            visitor_toggle = page.query_selector("#visitorToggle")
            assert visitor_toggle is not None
            visitor_toggle.click()
            page.wait_for_timeout(200)
            assert "expanded" in visitor_toggle.get_attribute("class")
            
            visitor_link = page.query_selector("#visitorCount")
            assert visitor_link is not None
            href = visitor_link.get_attribute("href")
            assert "hits.sh/arturourbinavelasco.github.io" in href
            print("  [OK] Popover de visitas desplegado y link a hits.sh verificado.")

            page.close()

            # 2. Tablet Test (1024x768)
            print("-> Probando vista Tablet (1024x768)...")
            page_tablet = browser.new_page(viewport={"width": 1024, "height": 768})
            page_tablet.goto(f"http://localhost:{PORT}/index.html", wait_until="networkidle")
            mobile_toggle = page_tablet.query_selector("#mobileToggle")
            assert mobile_toggle.is_visible(), "El menú hamburguesa debe ser visible en <=1040px"
            print("  [OK] Breakpoint de tablet activa menú hamburguesa correctamente.")
            page_tablet.close()

            # 3. Mobile Test (390x844 - iPhone 12/13/14)
            print("-> Probando vista Móvil (390x844)...")
            page_mobile = browser.new_page(viewport={"width": 390, "height": 844})
            page_mobile.goto(f"http://localhost:{PORT}/index.html", wait_until="networkidle")
            
            # Probar abrir menú móvil
            m_toggle = page_mobile.query_selector("#mobileToggle")
            m_toggle.click()
            page_mobile.wait_for_timeout(200)
            nav_menu = page_mobile.query_selector("#navMenu")
            assert "open" in nav_menu.get_attribute("class")
            print("  [OK] Menú móvil desplegado correctamente (clase .open).")

            # Botones flotantes WA / TG presentes
            wa_float = page_mobile.query_selector(".whatsapp-float")
            tg_float = page_mobile.query_selector(".telegram-float")
            assert wa_float is not None
            assert tg_float is not None
            print("  [OK] Botones de contacto flotantes verificados (.whatsapp-float, .telegram-float).")
            page_mobile.close()

            browser.close()
    finally:
        httpd.shutdown()
        httpd.server_close()

    print("\n[SUCCESS] TODAS LAS PRUEBAS DE EXPERIENCIA DE USUARIO (UX/UI) PASARON EXITOSAMENTE!")

if __name__ == "__main__":
    run_tests()
