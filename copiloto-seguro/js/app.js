/**
 * COPILOTO SEGURO - GRABADORA DE CABINA Y DASHCAM PROFESIONAL
 * Controlador JavaScript: Tema Dark/Light, i18n (ES/EN), Showcase Interactivo y FAQ
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DICCIONARIO INTERNACIONALIZACIÓN (i18n: ES / EN)
  // ==========================================================================
  const translations = {
    es: {
      brand_subtitle: "Grabadora de Cabina & Dashcam",
      nav_features: "Características",
      nav_screens: "Pantallas",
      nav_comparison: "Comparativa",
      nav_plans: "Planes",
      nav_downloads: "Descargas",
      nav_faq: "Preguntas",
      nav_contact: "Contacto",
      nav_cta: "Prueba 5 Días Gratis",

      hero_badge: "100% Offline • Seguridad para Choferes y Taxistas",
      hero_title_1: "Tu Testigo Silencioso",
      hero_title_2: "en Cada Viaje",
      hero_desc: "Grabadora de cabina y Dashcam profesional para Android. Graba discretamente en segundo plano con pantalla apagada o encima de Waze/Maps. Telemetría GPS forense, sensor de impacto y cero consumo de datos.",
      chip_offline: "100% Offline (Sin internet)",
      chip_stealth: "Pantalla apagada o modo OLED",
      chip_dual: "Cámara trasera, frontal o dual",
      chip_telemetry: "Telemetría OSD (.SRT)",
      chip_panic: "Botón de pánico y sensor G",
      hero_cta_primary: "Solicitar Prueba Gratuita",
      hero_cta_secondary: "Descargar Manual PDF",

      showcase_tag: "Galería de la Aplicación",
      showcase_title: "Explora Copiloto Seguro en Acción",
      showcase_desc: "Capturas reales tomadas directamente de un Samsung Galaxy S21 en operación continua.",
      tab_1_title: "Cabina Principal & Telemetría OSD",
      tab_1_desc: "Control táctil gigante, indicador satelital GPS en tiempo real y accesos rápidos de protección y modo OLED.",
      tab_2_title: "Grabación en Segundo Plano (REC Activo)",
      tab_2_desc: "Cronómetro en vivo, indicador parpadeante discreto y monitor de consumo de almacenamiento en tramos atómicos.",
      tab_3_title: "Modos de Captura Configurables",
      tab_3_desc: "Selecciona entre Solo Audio (~25 MB/h), Solo Video o Audio + Video Dashcam según tu capacidad de memoria.",
      tab_4_title: "Soporte de Cámara Dual (Carretera + Pasaje)",
      tab_4_desc: "Conmuta entre lente trasera, lente delantera o captura simultánea dual en dispositivos compatibles.",
      tab_5_title: "Historial de Evidencias y Telemetría .SRT",
      tab_5_desc: "Lista de tramos grabados con subtítulos forenses sincronizados segundo a segundo (velocidad km/h y coordenadas).",
      tab_6_title: "Protección Anti-Purga ante Impacto o Pánico",
      tab_6_desc: "Los archivos marcados con candado quedan protegidos permanentemente y nunca son borrados por la rotación FIFO.",
      tab_7_title: "Licencias Criptográficas Offline ECDSA P-256",
      tab_7_desc: "Seguridad asimétrica de grado militar vinculada al hardware del teléfono, sin requerir conexión a internet.",
      tab_8_title: "Coexistencia Perfecta con Banderazo",
      tab_8_desc: "Opera al mismo tiempo que el taxímetro Banderazo o apps de navegación sin interferencias ni cierres.",

      comp_tag: "Ventajas Competitivas",
      comp_title: "¿Por qué Elegir Copiloto Seguro?",
      comp_desc: "Seguridad profesional para tu fuente de trabajo sin gastos excesivos ni vulnerabilidades.",
      th_feature: "Característica",
      th_copiloto: "Copiloto Seguro",
      th_dashcam: "Dashcam Física Tradicional",
      th_others: "Apps Genéricas de Video",
      row_1_name: "Costo de inversión",
      row_1_copiloto: "Cero equipo extra. Usa tu mismo celular.",
      row_1_dashcam: "$1,500 - $3,500 MXN + instalación",
      row_1_others: "Gratis pero saturadas de anuncios",
      row_2_name: "Conexión a internet / Privacidad",
      row_2_copiloto: "100% Offline. Tus videos son solo tuyos.",
      row_2_dashcam: "Offline (tarjeta SD frágil)",
      row_2_others: "Exige datos y sube telemetría",
      row_3_name: "Operación en segundo plano",
      row_3_copiloto: "Graba con pantalla apagada o Waze al frente.",
      row_3_dashcam: "Fija al parabrisas, visible al pasaje",
      row_3_others: "Se congela al minimizar o apagar pantalla",
      row_4_name: "Telemetría forense jurídica",
      row_4_copiloto: "Subtítulos .SRT sincronizados (km/h y GPS)",
      row_4_dashcam: "Texto quemado en video de baja nitidez",
      row_4_others: "No disponible o imprecisa",
      row_5_name: "Protección ante asalto o choque",
      row_5_copiloto: "Acelerómetro G + Botones de volumen",
      row_5_dashcam: "Se la pueden arrancar y robar",
      row_5_others: "No detecta impacto ni pánico",

      download_title: "Archivos Oficiales de Distribución",
      download_desc: "Descarga la versión estable oficial y el manual del conductor completo para comenzar de inmediato.",
      download_apk_title: "Copiloto Seguro APK (Release)",
      download_apk_sub: "Versión Oficial Firmada (12.5 MB)",
      download_pdf_title: "Manual del Conductor (PDF)",
      download_pdf_sub: "Guía Completa de Operación (18 Pág.)"
    },
    en: {
      brand_subtitle: "Cabin Recorder & Dashcam",
      nav_features: "Features",
      nav_screens: "Screens",
      nav_comparison: "Comparison",
      nav_plans: "Plans",
      nav_downloads: "Downloads",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_cta: "Free 5-Day Trial",

      hero_badge: "100% Offline • Security for Professional Drivers",
      hero_title_1: "Your Silent Eyewitness",
      hero_title_2: "on Every Trip",
      hero_desc: "Cabin voice recorder and professional Dashcam for Android. Records discreetly in the background with screen locked or behind navigation apps. Forensic GPS telemetry, collision sensor, and zero data consumption.",
      chip_offline: "100% Offline (No internet)",
      chip_stealth: "Screen locked or OLED mode",
      chip_dual: "Rear, Front, or Dual lens",
      chip_telemetry: "OSD Telemetry (.SRT)",
      chip_panic: "Panic trigger & G-sensor",
      hero_cta_primary: "Request Free Trial",
      hero_cta_secondary: "Download Driver Manual (PDF)",

      showcase_tag: "Application Showcase",
      showcase_title: "Explore Copiloto Seguro in Action",
      showcase_desc: "Real screenshots taken directly from a Samsung Galaxy S21 in continuous operation.",
      tab_1_title: "Main Cockpit & OSD Telemetry",
      tab_1_desc: "Giant touch controls, real-time GPS satellite badge, and quick access to incident lock and OLED stealth.",
      tab_2_title: "Background Recording (Active REC)",
      tab_2_desc: "Live duration timer, subtle blinking indicator, and real-time buffer tracker in atomic video chunks.",
      tab_3_title: "Configurable Capture Modes",
      tab_3_desc: "Choose between Cabin Audio (~25 MB/h), Video Dashcam, or Combined Audio+Video according to your needs.",
      tab_4_title: "Dual Camera Support (Road + Passengers)",
      tab_4_desc: "Switch between rear road lens, front cabin lens, or simultaneous dual recording on supported phones.",
      tab_5_title: "Evidence Browser & .SRT Sidecars",
      tab_5_desc: "List of recorded chunks with second-by-second synchronized forensic subtitles (speed km/h and coordinates).",
      tab_6_title: "Anti-Purge Protection on Impact or Panic",
      tab_6_desc: "Locked recordings are permanently protected and never erased by FIFO circular buffer rotation.",
      tab_7_title: "ECDSA P-256 Offline Cryptographic Licensing",
      tab_7_desc: "Military-grade asymmetric cryptography hardware-bound to your phone, zero external license servers required.",
      tab_8_title: "Seamless Coexistence with Banderazo",
      tab_8_desc: "Runs concurrently with Banderazo digital taximeter or GPS navigation apps without memory throttling.",

      comp_tag: "Competitive Advantages",
      comp_title: "Why Choose Copiloto Seguro?",
      comp_desc: "Professional vehicle and passenger security without expensive dashcam gadgets or cloud leaks.",
      th_feature: "Feature",
      th_copiloto: "Copiloto Seguro",
      th_dashcam: "Traditional Dashcam Hardware",
      th_others: "Generic Video Apps",
      row_1_name: "Hardware investment",
      row_1_copiloto: "Zero extra cost. Uses your existing smartphone.",
      row_1_dashcam: "$80 - $200 USD + windshield wiring",
      row_1_others: "Free but filled with battery-draining ads",
      row_2_name: "Internet connection / Privacy",
      row_2_copiloto: "100% Offline. Your video evidence stays with you.",
      row_2_dashcam: "Offline (fragile SD cards)",
      row_2_others: "Requires mobile data and uploads telemetry",
      row_3_name: "Background execution",
      row_3_copiloto: "Records seamlessly with screen off or GPS maps.",
      row_3_dashcam: "Fixed on windshield, visible to all passengers",
      row_3_others: "Freezes when minimized or locked",
      row_4_name: "Forensic telemetry export",
      row_4_copiloto: "Synchronized .SRT subtitle sidecars (km/h & GPS)",
      row_4_dashcam: "Low-resolution timestamp stamped onto pixels",
      row_4_others: "Not available or inaccurate",
      row_5_name: "Theft and collision protection",
      row_5_copiloto: "Hardware G-sensor + Volume button shortcuts",
      row_5_dashcam: "Easily stolen or yanked during break-ins",
      row_5_others: "No impact detection or emergency lock",

      download_title: "Official Client Distribution Files",
      download_desc: "Download the official signed release APK and full driver manual to get protected today.",
      download_apk_title: "Copiloto Seguro APK (Release)",
      download_apk_sub: "Official Signed Build (12.5 MB)",
      download_pdf_title: "Driver's Manual (PDF)",
      download_pdf_sub: "Complete Operational Guide (18 Pages)"
    }
  };

  let currentLang = 'es';

  // ==========================================================================
  // 2. TEMA DARK / LIGHT
  // ==========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;
  const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

  function aplicarTema(tema) {
    htmlEl.setAttribute('data-theme', tema);
    localStorage.setItem('copiloto_theme', tema);
    if (themeIcon) {
      themeIcon.textContent = tema === 'light' ? '🌙' : '☀️';
    }
  }

  const temaGuardado = localStorage.getItem('copiloto_theme') || 'dark';
  aplicarTema(temaGuardado);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const actual = htmlEl.getAttribute('data-theme') || 'dark';
      aplicarTema(actual === 'dark' ? 'light' : 'dark');
    });
  }

  // ==========================================================================
  // 3. CAMBIO DE IDIOMA (i18n)
  // ==========================================================================
  const langToggle = document.getElementById('langToggle');

  function aplicarIdioma(lang) {
    currentLang = lang;
    const dic = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dic[key]) {
        el.textContent = dic[key];
      }
    });

    if (langToggle) {
      langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    localStorage.setItem('copiloto_lang', lang);
  }

  const langGuardado = localStorage.getItem('copiloto_lang') || 'es';
  aplicarIdioma(langGuardado);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      aplicarIdioma(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // ==========================================================================
  // 4. SHOWCASE DE PANTALLAS INTERACTIVO
  // ==========================================================================
  const showcaseTabs = document.querySelectorAll('.showcase-tab');
  const showcaseImg = document.getElementById('showcaseMainImg');

  const imagenesShowcase = {
    '1': 'img/01_cabina_principal_hud.png',
    '2': 'img/02_grabacion_activa_telemetria.png',
    '3': 'img/03_ajustes_modos_captura.png',
    '4': 'img/04_modo_dual_camaras.png',
    '5': 'img/05_historial_evidencias_srt.png',
    '6': 'img/06_evidencias_protegidas_panico.png',
    '7': 'img/07_licencia_activada_ecdsa.png',
    '8': 'img/08_coexistencia_banderazo.png'
  };

  showcaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      showcaseTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-tab');
      if (showcaseImg && imagenesShowcase[targetId]) {
        showcaseImg.style.opacity = '0.3';
        setTimeout(() => {
          showcaseImg.src = imagenesShowcase[targetId];
          showcaseImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  // ==========================================================================
  // 5. ACCORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

});
