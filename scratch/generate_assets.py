"""
generate_assets.py
Generates high-definition Open Graph preview image (1200x630) and PWA icons
using Playwright and Pillow.
"""
import os
from playwright.sync_api import sync_playwright
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(BASE_DIR, "img")
os.makedirs(IMG_DIR, exist_ok=True)

# 1. HTML template for OG Image (1200 x 630 px)
OG_HTML = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 1200px;
    height: 630px;
    background: #0a0f1d;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #f8fafc;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 56px 64px;
  }

  /* Cyber ambient glowing orbs */
  .glow-1 {
    position: absolute;
    top: -120px;
    right: -100px;
    width: 520px;
    height: 520px;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.28) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }

  .glow-2 {
    position: absolute;
    bottom: -150px;
    left: 20%;
    width: 600px;
    height: 400px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(30, 58, 138, 0.15) 55%, transparent 75%);
    filter: blur(50px);
    pointer-events: none;
  }

  /* Grid overlay */
  .grid-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  /* Header row */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }

  .brand-group {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .logo-box {
    width: 54px;
    height: 54px;
    background: linear-gradient(135deg, #0284c7, #6366f1);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 25px rgba(2, 132, 199, 0.5);
    font-family: 'JetBrains Mono', monospace;
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
  }

  .brand-text {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  .brand-text span {
    color: #38bdf8;
  }

  .brand-text small {
    font-size: 15px;
    color: #94a3b8;
    font-weight: 600;
    margin-left: 8px;
  }

  .tag-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 9999px;
    background: rgba(14, 165, 233, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.35);
    color: #38bdf8;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .tag-badge .dot {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    box-shadow: 0 0 10px #22c55e;
  }

  /* Center hero content */
  .main-content {
    position: relative;
    z-index: 2;
    margin: auto 0;
  }

  .hero-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 17px;
    color: #a5b4fc;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .hero-role span.chevron {
    color: #38bdf8;
    font-weight: 700;
  }

  .hero-title {
    font-size: 52px;
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -1.5px;
    margin-bottom: 16px;
  }

  .gradient-text {
    background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-desc {
    font-size: 20px;
    line-height: 1.5;
    color: #cbd5e1;
    max-width: 980px;
  }

  /* Tech tags pill grid */
  .pills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
  }

  .pill {
    padding: 6px 14px;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 600;
    color: #e2e8f0;
    backdrop-filter: blur(6px);
  }

  .pill.highlight {
    background: rgba(2, 132, 199, 0.2);
    border-color: rgba(56, 189, 248, 0.4);
    color: #7dd3fc;
  }

  /* Footer bar */
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(148, 163, 184, 0.15);
    padding-top: 20px;
    position: relative;
    z-index: 2;
    font-size: 15px;
    color: #94a3b8;
  }

  .channels {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .channel-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e2e8f0;
    font-weight: 600;
  }

  .channel-item.wa { color: #4ade80; }
  .channel-item.tg { color: #38bdf8; }

  .domain {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    color: #64748b;
  }
</style>
</head>
<body>
  <div class="glow-1"></div>
  <div class="glow-2"></div>
  <div class="grid-bg"></div>

  <div class="header">
    <div class="brand-group">
      <div class="logo-box">&gt;_</div>
      <div class="brand-text">Arturo<span>Urbina</span><small>· AjuscoFix</small></div>
    </div>
    <div class="tag-badge">
      <span class="dot"></span>
      <span>13+ Años de Trayectoria · CDMX & Remoto</span>
    </div>
  </div>

  <div class="main-content">
    <div class="hero-role">
      <span class="chevron">&gt;</span> Senior Software Developer · Múltiples Lenguajes & IA On-Premise
    </div>
    <h1 class="hero-title">
      Software Empresarial, <span class="gradient-text">Sitios Web a Medida</span>,<br>Automatización e Inteligencia Artificial
    </h1>
    <p class="hero-desc">
      Soluciones integrales de código a producción: agentes IA locales (Ollama, LangGraph, RAG), apps móviles Android (Kotlin), microservicios, interoperabilidad clínica (DICOM/HL7) e infraestructura IT con AjuscoFix.
    </p>
    <div class="pills-row">
      <div class="pill highlight">⚡ Agentes IA & Ollama</div>
      <div class="pill highlight">🧠 LangGraph & RAG pgvector</div>
      <div class="pill">📱 Android Nativo (Kotlin)</div>
      <div class="pill">🐳 Docker & Microservicios</div>
      <div class="pill">🏥 DICOM PACS / HL7</div>
      <div class="pill">🌐 Full-Stack Web</div>
      <div class="pill">🐍 Python / PowerShell</div>
      <div class="pill highlight">🛠️ AjuscoFix Soporte IT</div>
    </div>
  </div>

  <div class="footer">
    <div class="channels">
      <div class="channel-item wa">💬 WhatsApp: +52 55 5969 4250</div>
      <div class="channel-item tg">✈️ Telegram: @+525559694250</div>
    </div>
    <div class="domain">arturourbinavelasco.github.io</div>
  </div>
</body>
</html>
"""

# 2. HTML template for PWA Icon (Square 512x512)
ICON_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 512px;
    height: 512px;
    background: #0a0f1d;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .card {
    width: 440px;
    height: 440px;
    background: linear-gradient(145deg, #0f172a 0%, #1e293b 100%);
    border-radius: 96px;
    border: 4px solid rgba(56, 189, 248, 0.35);
    box-shadow: 
      0 0 60px rgba(2, 132, 199, 0.4),
      inset 0 0 30px rgba(99, 102, 241, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .glow {
    position: absolute;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, transparent 70%);
    filter: blur(25px);
  }
  .symbol {
    font-family: 'JetBrains Mono', monospace;
    font-size: 150px;
    font-weight: 800;
    color: #ffffff;
    background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2;
    letter-spacing: -6px;
    text-shadow: 0 10px 30px rgba(2, 132, 199, 0.5);
    margin-top: -10px;
  }
  .sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 26px;
    font-weight: 700;
    color: #38bdf8;
    letter-spacing: 6px;
    margin-top: 8px;
    z-index: 2;
    text-transform: uppercase;
  }
  .status-dot {
    position: absolute;
    top: 40px;
    right: 48px;
    width: 22px;
    height: 22px;
    background: #22c55e;
    border-radius: 50%;
    box-shadow: 0 0 16px #22c55e;
    border: 3px solid #0f172a;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="glow"></div>
    <div class="status-dot"></div>
    <div class="symbol">&gt;_</div>
    <div class="sub">AU·DEV</div>
  </div>
</body>
</html>
"""

# 3. HTML template for Maskable Icon (512x512 with safe area margin 20%)
ICON_MASKABLE_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 512px;
    height: 512px;
    background: #0a0f1d;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  /* In maskable icons, the safe zone is an inner circle with diameter 80% (approx 410px) */
  .inner {
    width: 380px;
    height: 380px;
    background: linear-gradient(145deg, #0f172a 0%, #1e293b 100%);
    border-radius: 80px;
    border: 4px solid rgba(56, 189, 248, 0.4);
    box-shadow: 0 0 50px rgba(2, 132, 199, 0.45);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .symbol {
    font-family: 'JetBrains Mono', monospace;
    font-size: 130px;
    font-weight: 800;
    color: #ffffff;
    background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2;
    letter-spacing: -5px;
    margin-top: -6px;
  }
  .sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 22px;
    font-weight: 700;
    color: #38bdf8;
    letter-spacing: 5px;
    margin-top: 4px;
    z-index: 2;
    text-transform: uppercase;
  }
  .status-dot {
    position: absolute;
    top: 32px;
    right: 36px;
    width: 18px;
    height: 18px;
    background: #22c55e;
    border-radius: 50%;
    box-shadow: 0 0 14px #22c55e;
    border: 2px solid #0f172a;
  }
</style>
</head>
<body>
  <div class="inner">
    <div class="status-dot"></div>
    <div class="symbol">&gt;_</div>
    <div class="sub">AU·DEV</div>
  </div>
</body>
</html>
"""

def generate_all():
    print("Iniciando generación de activos gráficos con Playwright...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        
        # A. OG Preview (1200 x 630)
        page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
        page.set_content(OG_HTML)
        page.wait_for_timeout(1000)
        og_path = os.path.join(IMG_DIR, "og-preview.png")
        page.screenshot(path=og_path)
        print(f"Generado: {og_path} (1200x630)")
        page.close()

        # B. Icon 512x512
        page = browser.new_page(viewport={"width": 512, "height": 512}, device_scale_factor=1)
        page.set_content(ICON_HTML)
        page.wait_for_timeout(600)
        icon_512_path = os.path.join(IMG_DIR, "icon-512.png")
        page.screenshot(path=icon_512_path)
        print(f"Generado: {icon_512_path} (512x512)")
        page.close()

        # C. Maskable Icon 512x512
        page = browser.new_page(viewport={"width": 512, "height": 512}, device_scale_factor=1)
        page.set_content(ICON_MASKABLE_HTML)
        page.wait_for_timeout(600)
        maskable_512_path = os.path.join(IMG_DIR, "icon-maskable-512.png")
        page.screenshot(path=maskable_512_path)
        print(f"Generado: {maskable_512_path} (512x512 maskable)")
        page.close()

        browser.close()

    # Generar derivados con PIL a partir de los renders de alta fidelidad
    print("Generando tamaños derivados con Pillow...")
    img_512 = Image.open(icon_512_path)
    
    # icon-192.png
    img_192 = img_512.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save(os.path.join(IMG_DIR, "icon-192.png"))
    print("Generado: icon-192.png")

    # apple-touch-icon.png (180x180)
    img_apple = img_512.resize((180, 180), Image.Resampling.LANCZOS)
    img_apple.save(os.path.join(IMG_DIR, "apple-touch-icon.png"))
    print("Generado: apple-touch-icon.png")

    # favicon-32.png
    img_32 = img_512.resize((32, 32), Image.Resampling.LANCZOS)
    img_32.save(os.path.join(IMG_DIR, "favicon-32.png"))
    print("Generado: favicon-32.png")

    # favicon-16.png
    img_16 = img_512.resize((16, 16), Image.Resampling.LANCZOS)
    img_16.save(os.path.join(IMG_DIR, "favicon-16.png"))
    print("Generado: favicon-16.png")

    # favicon.ico (multi-resolución 16, 32, 48)
    favicon_path = os.path.join(BASE_DIR, "favicon.ico")
    img_512.save(favicon_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Generado: {favicon_path} (favicon.ico multi-resolución)")

    # Maskable 192
    maskable_512 = Image.open(maskable_512_path)
    maskable_192 = maskable_512.resize((192, 192), Image.Resampling.LANCZOS)
    maskable_192.save(os.path.join(IMG_DIR, "icon-maskable-192.png"))
    print("Generado: icon-maskable-192.png")

    print("¡Todos los activos visuales han sido creados con éxito!")

if __name__ == "__main__":
    generate_all()
