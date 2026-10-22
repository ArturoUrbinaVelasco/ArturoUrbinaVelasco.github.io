/**
 * BANDERAZO · TAXÍMETRO DIGITAL SATELITAL
 * Controlador JavaScript: Tema Dark/Light, i18n (ES/EN), Showcase, Cotizador y FAQ
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DICCIONARIO INTERNACIONALIZACIÓN (i18n: ES / EN)
  // ==========================================================================
  const translations = {
    es: {
      brand_subtitle: "Taxímetro Digital Satelital",
      nav_features: "Características",
      nav_screens: "Pantallas",
      nav_comparison: "Comparativa",
      nav_calculator: "Cotizador",
      nav_faq: "Preguntas",
      nav_contact: "Contacto",
      nav_cta: "Prueba 5 Días Gratis",
      nav_home: "Inicio",

      hero_badge: "100% Profesional · Cero Anuncios",
      hero_title_1: "El Taxímetro Digital",
      hero_title_2: "Preciso, Confiable y Satelital",
      hero_desc: "Diseñado especialmente para operadores de taxi. Olvídate de aplicaciones llenas de publicidad invasiva que consumen tus datos y se traban a medio viaje. Banderazo mide con satélites GPS en tiempo real con total transparencia para ti y tu pasajero.",
      chip_offline: "100% Offline (Sin datos)",
      chip_no_ads: "Sin publicidad ni videos",
      chip_font: "Dígitos ajustables hasta 160%",
      chip_ticket: "Comprobante WhatsApp",
      chip_custom: "Tarifas personalizadas",
      hero_cta_primary: "Solicitar Prueba Gratuita",
      hero_cta_secondary: "Ver Pantallas de la App",

      showcase_tag: "Recorrido Visual",
      showcase_title: "Explora Banderazo por Dentro",
      showcase_desc: "Toca cada módulo para ver capturas reales tomadas directamente de la aplicación en funcionamiento.",
      tab_1_title: "Taxímetro Principal en Tiempo Real",
      tab_1_desc: "Dígitos enormes de alta legibilidad, indicador satelital GPS en vivo, distancia recorrida y tiempo detenido.",
      tab_2_title: "Ergonomía Visual & Tamaño de Fuente",
      tab_2_desc: "Ajusta el tamaño del texto hasta un 160% para ver la tarifa sin forzar la vista y que tu pasajero viaje tranquilo.",
      tab_3_title: "Tarifas Oficiales y Personalizadas",
      tab_3_desc: "Libre, Sitio y Radio Taxi CDMX precargadas. Crea tus propias tarifas por zona, foráneas, nocturnas o de sitio privado.",
      tab_4_title: "Cotizador Rápido de Viajes",
      tab_4_desc: "Calcula en segundos el costo exacto antes de arrancar. Ideal para convenios, presupuestos o viajes foráneos.",
      tab_5_title: "Ticket Digital para WhatsApp",
      tab_5_desc: "Genera un comprobante profesional con tu logo, placas, desglose y mapa para enviarlo al pasajero en un toque.",
      tab_6_title: "Estadísticas e Historial de Ganancias",
      tab_6_desc: "Monitorea tus ingresos diarios y semanales, kilómetros productivos, cobros promedio y desglose completo.",
      tab_7_title: "Respaldos y Seguridad con PIN",
      tab_7_desc: "Exporta tu configuración o viajes completos. Protege tus tarifas con código PIN para evitar alteraciones.",

      comp_tag: "Ventajas Reales",
      comp_title: "¿Por qué Elegir Banderazo?",
      comp_desc: "Una herramienta de trabajo profesional frente a las aplicaciones genéricas llenas de publicidad.",
      th_feature: "Característica",
      th_banderazo: "Banderazo Taxímetro",
      th_others: "Apps Genéricas Gratuitas",
      row_1_name: "Publicidad y comerciales",
      row_1_banderazo: "Cero anuncios. Pantalla 100% limpia para trabajar.",
      row_1_others: "Videos con sonido y banners invasivos a mitad de viaje.",
      row_2_name: "Conexión a Internet y datos móviles",
      row_2_banderazo: "100% Satelital GPS offline. No gasta tus megas.",
      row_2_others: "Requiere internet obligatorio para cargar publicidad.",
      row_3_name: "Ergonomía visual y tamaño de texto",
      row_3_banderazo: "Ajustable hasta 160%. Lectura clara para chofer y cliente.",
      row_3_others: "Tamaño fijo pequeño difícil de leer bajo el sol.",
      row_4_name: "Edición y creación de tarifas",
      row_4_banderazo: "Oficiales CDMX + tarifas personalizadas ilimitadas.",
      row_4_others: "Tarifas rígidas o bloqueadas sin poder ajustarlas.",
      row_5_name: "Comprobante digital para el cliente",
      row_5_banderazo: "Ticket con tu logo e identidad listo para WhatsApp.",
      row_5_others: "Sin comprobante o con marca de agua publicitaria.",
      row_6_name: "Protección con PIN de seguridad",
      row_6_banderazo: "PIN para evitar cambios no autorizados en tarifas.",
      row_6_others: "Cualquiera puede desconfigurar la aplicación.",
      row_7_name: "Soporte técnico directo en español",
      row_7_banderazo: "Atención personalizada por WhatsApp y teléfono.",
      row_7_others: "Desarrolladores extranjeros sin respuesta ni soporte.",

      bento_tag: "Funcionalidades",
      bento_title: "Todo lo que Necesitas en Ruta",
      bento_desc: "Herramientas pensadas por y para conductores profesionales.",
      card_1_title: "Motor GPS Satelital de Alta Precisión",
      card_1_desc: "Algoritmo calibrado para medir simultáneamente la distancia avanzada y el tiempo detenido en semáforos o tráfico pesado, con cálculo instantáneo por saltos de tarifa según el reglamento oficial.",
      card_2_title: "PIN de Bloqueo",
      card_2_desc: "Configura una clave de 4 dígitos para que sólo tú puedas editar tarifas o modificar parámetros clave del taxímetro.",
      card_3_title: "Identidad & Logo Propio",
      card_3_desc: "Personaliza el nombre de tu sitio, base o unidad y sube tu propio logo para que aparezca en el encabezado de los comprobantes.",
      card_4_title: "Historial Completo con Traza GPS",
      card_4_desc: "Cada viaje guarda hora de inicio, fin, tarifa aplicada, distancia exacta, tiempo detenido e importe final. Revisa tu jornada en cualquier momento y compártela si requieres una aclaración con el usuario.",
      card_5_title: "Respaldos Flexibles",
      card_5_desc: "Elige entre respaldo completo (viajes + configuración) o únicamente tus tarifas y ajustes para migrar fácilmente a otro teléfono.",
      card_6_title: "Consumo de Batería Optimizado",
      card_6_desc: "Diseñado para operar jornadas completas de 12 horas continuas con mínimo calentamiento y eficiente gestión de pantalla.",
      card_7_title: "Modo Nocturno de Alto Contraste",
      card_7_desc: "Paleta oscura profunda para no encandilar tu vista durante la noche ni incomodar a los pasajeros en el habitáculo.",

      calc_tag: "Simulador en Vivo",
      calc_title: "Calculadora de Tarifas Oficiales",
      calc_desc: "Prueba cómo calcula Banderazo en base a los parámetros oficiales de la CDMX.",
      calc_type: "Tipo de Taxi:",
      calc_libre: "Taxi Libre",
      calc_sitio: "Taxi de Sitio",
      calc_radio: "Radio Taxi",
      calc_distance: "Distancia del viaje:",
      calc_time: "Tiempo de espera / tráfico:",
      calc_schedule: "Horario:",
      calc_day: "☀️ Diurno (05:00 - 22:00)",
      calc_night: "🌙 Nocturno (+20%)",
      calc_estimated: "Estimado de Cobro",

      faq_tag: "Resolución de Dudas",
      faq_title: "Preguntas Frecuentes",
      faq_desc: "Respuestas claras sobre la instalación, funcionamiento y licencias de Banderazo.",
      faq_q1: "¿Necesito tener saldo o internet activo para que funcione?",
      faq_a1: "No. Banderazo funciona al 100% de manera satelital a través del chip GPS de tu teléfono Android. Puedes usarlo en modo avión o sin chip SIM y medirá la distancia y tiempo con exactitud total.",
      faq_q2: "¿Puedo modificar las tarifas si trabajo en el Estado de México o en un sitio foráneo?",
      faq_a2: "Sí. Además de incluir las tarifas oficiales de la CDMX (Libre, Sitio y Radio Taxi), Banderazo cuenta con un editor completo donde puedes crear tus propias tarifas: fijar el banderazo que desees, el costo por brinco, los metros por salto y los segundos de espera.",
      faq_q3: "¿Por qué Banderazo no tiene anuncios como otras aplicaciones?",
      faq_a3: "Porque es una herramienta de trabajo profesional. En ruta no puedes arriesgarte a que un video comercial con sonido tape la pantalla o distraiga tu conducción cuando un pasajero va a bordo.",
      faq_q4: "¿En qué teléfonos se puede instalar?",
      faq_a4: "En cualquier smartphone o tableta con sistema operativo Android 8.0 en adelante que cuente con sensor GPS integrado.",
      faq_q5: "¿Cómo se activa la licencia después de la prueba de 5 días?",
      faq_a5: "Muy fácil. Nos mandas un mensaje por WhatsApp con el código de tu teléfono y realizas una transferencia bancaria rápida. Te enviamos tu código de activación al instante sin trámites complicados.",
      faq_q6: "¿Puedo cambiar de teléfono después sin perder mi información?",
      faq_a6: "Por supuesto. Banderazo incluye una función de respaldo que guarda tus tarifas e historial en un archivo para que puedas restaurarlo en tu nuevo dispositivo sin empezar de cero.",

      cta_title: "Empieza a Rodar con Banderazo Hoy Mismo",
      cta_desc: "Instala la aplicación en tu teléfono Android, pruébala gratis durante 5 días en tus jornadas reales y comprueba la diferencia de trabajar con una herramienta profesional.",
      cta_btn: "Escríbenos por WhatsApp",
      contact_portfolio: "Portafolio del Desarrollador",
      footer_rights: "© 2026 Banderazo · Desarrollado por Arturo Urbina Velasco. Todos los derechos reservados.",
      footer_legal: "Banderazo es una herramienta de cálculo y gestión digital para operadores de taxi. Las marcas y referencias a tarifas oficiales corresponden a la normativa de la CDMX."
    },

    en: {
      brand_subtitle: "Satellite Digital Taximeter",
      nav_features: "Features",
      nav_screens: "Screens",
      nav_comparison: "Comparison",
      nav_calculator: "Calculator",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_cta: "Free 5-Day Trial",
      nav_home: "Home",

      hero_badge: "100% Professional · Zero Ads",
      hero_title_1: "The Digital Taximeter",
      hero_title_2: "Accurate, Reliable & Satellite-Powered",
      hero_desc: "Tailored specifically for professional taxi drivers. Say goodbye to apps cluttered with intrusive advertising that drain your mobile data and freeze mid-ride. Banderazo measures via real-time GPS satellites with complete transparency for you and your passenger.",
      chip_offline: "100% Offline (No data needed)",
      chip_no_ads: "No ads or pop-up videos",
      chip_font: "Font size adjustable up to 160%",
      chip_ticket: "WhatsApp Digital Receipt",
      chip_custom: "Custom & official tariffs",
      hero_cta_primary: "Request Free Trial",
      hero_cta_secondary: "View App Screens",

      showcase_tag: "Visual Tour",
      showcase_title: "Explore Banderazo Inside Out",
      showcase_desc: "Tap each module to see genuine screenshots captured directly from the live application.",
      tab_1_title: "Real-Time Main Taximeter",
      tab_1_desc: "Huge high-contrast digits, live satellite GPS lock, distance traveled and idle traffic counter.",
      tab_2_title: "Visual Ergonomics & Font Scaling",
      tab_2_desc: "Scale the font up to 160% to read effortlessly in bright sunlight while keeping passengers calm and confident.",
      tab_3_title: "Official & Custom Tariffs",
      tab_3_desc: "CDMX Libre, Sitio and Radio Taxi preloaded. Create unlimited custom rates for private bases, suburbs, or night trips.",
      tab_4_title: "Instant Trip Quote Calculator",
      tab_4_desc: "Calculate precise fares in seconds before rolling out. Perfect for fixed contracts, quotes, or out-of-town trips.",
      tab_5_title: "Digital Receipt for WhatsApp",
      tab_5_desc: "Generate professional receipts complete with your unit logo, plates, route summary, and fare breakdown in one tap.",
      tab_6_title: "Earnings History & Analytics",
      tab_6_desc: "Track your daily and weekly income, billable mileage, average fare size, and trip logs.",
      tab_7_title: "Full Backups & PIN Security",
      tab_7_desc: "Export your settings or full history safely. Lock your rates with a 4-digit PIN to prevent unauthorized alterations.",

      comp_tag: "Real Value",
      comp_title: "Why Choose Banderazo?",
      comp_desc: "A genuine professional work tool versus generic ad-heavy hobby applications.",
      th_feature: "Feature",
      th_banderazo: "Banderazo Taximeter",
      th_others: "Generic Free Apps",
      row_1_name: "Ads & commercial popups",
      row_1_banderazo: "Zero ads. 100% clean screen built for daily driving.",
      row_1_others: "Noisy video ads and banner takeovers mid-trip.",
      row_2_name: "Internet & data plan required",
      row_2_banderazo: "100% Offline Satellite GPS. Zero data consumed.",
      row_2_others: "Requires active internet connection to deliver ad feeds.",
      row_3_name: "Visual ergonomics & font sizing",
      row_3_banderazo: "Adjustable up to 160%. Crystal clear for driver and rider.",
      row_3_others: "Fixed tiny fonts that wash out in direct glare.",
      row_4_name: "Custom tariff creation & editing",
      row_4_banderazo: "Official CDMX + unlimited custom personalized rates.",
      row_4_others: "Locked or rigid tariffs with zero personalization.",
      row_5_name: "Digital passenger receipt",
      row_5_banderazo: "Branded ticket with your logo ready for WhatsApp sharing.",
      row_5_others: "No receipt or watermarked with third-party ads.",
      row_6_name: "Security PIN protection",
      row_6_banderazo: "PIN lock prevents accidental or unauthorized tariff changes.",
      row_6_others: "Unprotected settings prone to unwanted tampering.",
      row_7_name: "Direct Spanish/English developer support",
      row_7_banderazo: "Direct support via WhatsApp and phone from the engineer.",
      row_7_others: "Anonymous foreign creators with zero customer service.",

      bento_tag: "Key Capabilities",
      bento_title: "Everything You Need on the Road",
      bento_desc: "Purpose-built tools designed by and for transport operators.",
      card_1_title: "High-Precision Satellite GPS Engine",
      card_1_desc: "Calibrated dual-tracking algorithm that concurrently computes distance traveled and traffic idle time according to regulatory standards.",
      card_2_title: "Security PIN Lock",
      card_2_desc: "Set a 4-digit master code so only you can adjust tariffs or key operating parameters.",
      card_3_title: "Custom Unit Identity & Logo",
      card_3_desc: "Personalize your fleet name, license plate, and logo to appear proudly atop customer digital receipts.",
      card_4_title: "Detailed GPS Trip Trace Log",
      card_4_desc: "Every trip logs departure, arrival, tariff applied, exact distance, stopped duration, and total fare. Transparent record-keeping anytime.",
      card_5_title: "Flexible Backup Options",
      card_5_desc: "Export full archives (rides + configurations) or lightweight config snapshots to switch phones effortlessly.",
      card_6_title: "Battery & Thermal Efficiency",
      card_6_desc: "Engineered to withstand grueling 12-hour shifts with minimal heat generation and optimized screen rendering.",
      card_7_title: "High-Contrast Dark Mode",
      card_7_desc: "Deep OLED dark palette engineered to prevent night-time glare and ensure passenger comfort.",

      calc_tag: "Live Simulator",
      calc_title: "Official CDMX Tariff Calculator",
      calc_desc: "Test how Banderazo calculates fares based on official Mexican regulations.",
      calc_type: "Taxi Service Type:",
      calc_libre: "Street Cab (Libre)",
      calc_sitio: "Stand Taxi (Sitio)",
      calc_radio: "Radio Taxi",
      calc_distance: "Trip distance:",
      calc_time: "Waiting / traffic time:",
      calc_schedule: "Time of day:",
      calc_day: "☀️ Day Rate (05:00 - 22:00)",
      calc_night: "🌙 Night Rate (+20%)",
      calc_estimated: "Estimated Fare",

      faq_tag: "Common Questions",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Straight answers about installation, offline functionality, and licensing.",
      faq_q1: "Do I need active cellular data or phone balance for it to work?",
      faq_a1: "No. Banderazo runs 100% via your Android phone's hardware GPS satellite sensor. You can operate in airplane mode or without any SIM card with complete accuracy.",
      faq_q2: "Can I customize tariffs if I drive outside CDMX or in private bases?",
      faq_a2: "Yes. Along with official CDMX rates (Libre, Sitio, Radio Taxi), Banderazo features a comprehensive editor to define base fares, drop costs, distance intervals, and waiting seconds.",
      faq_q3: "Why does Banderazo have zero advertisements unlike other apps?",
      faq_a3: "Because it is a professional work tool. On the road, you cannot afford sudden loud video ads blocking your screen while a passenger is onboard.",
      faq_q4: "Which devices are compatible?",
      faq_a4: "Any smartphone or tablet running Android 8.0 or newer equipped with an integrated GPS sensor.",
      faq_q5: "How do I activate the license after the 5-day trial?",
      faq_a5: "Simple. Message us on WhatsApp with your phone's registration code and complete a fast bank transfer. Your activation code is delivered instantly without red tape.",
      faq_q6: "Can I transfer my data to a new phone later?",
      faq_a6: "Certainly. Banderazo includes a backup tool that exports your tariffs and ride history so you can restore them on a new handset in seconds.",

      cta_title: "Start Driving with Banderazo Today",
      cta_desc: "Install the app on your Android phone, test it free for 5 full days on your real shifts, and experience the power of a purpose-built professional tool.",
      cta_btn: "Chat with Us on WhatsApp",
      contact_portfolio: "Developer Portfolio",
      footer_rights: "© 2026 Banderazo · Developed by Arturo Urbina Velasco. All rights reserved.",
      footer_legal: "Banderazo is a digital calculation and management tool for taxi drivers. Official tariff references correspond to Mexico City regulatory standards."
    }
  };

  // ==========================================================================
  // 2. GESTIÓN DE TEMA DARK / LIGHT
  // ==========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
  const currentTheme = localStorage.getItem('banderazo_theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('banderazo_theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // ==========================================================================
  // 3. GESTIÓN DE IDIOMA (i18n: ES / EN)
  // ==========================================================================
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('banderazo_lang') || 'es';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('banderazo_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    if (langToggle) {
      langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    const dict = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Re-ejecutar cotizador para refrescar textos dinámicos
    updateCotizador();
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(newLang);
    });
  }

  // ==========================================================================
  // 4. SHOWCASE INTERACTIVO DE PANTALLAS
  // ==========================================================================
  const showcaseTabs = document.querySelectorAll('.showcase-tab');
  const showcaseImg = document.getElementById('showcaseImg');

  showcaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      showcaseTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetImg = tab.getAttribute('data-img');
      if (showcaseImg && targetImg) {
        showcaseImg.style.opacity = '0';
        setTimeout(() => {
          showcaseImg.src = targetImg;
          showcaseImg.style.opacity = '1';
        }, 180);
      }
    });
  });

  // ==========================================================================
  // 5. MOTOR DE CÁLCULO DEL COTIZADOR INTERACTIVO
  // ==========================================================================
  const kmSlider = document.getElementById('kmSlider');
  const timeSlider = document.getElementById('timeSlider');
  const kmValue = document.getElementById('kmValue');
  const timeValue = document.getElementById('timeValue');
  const calcPrice = document.getElementById('calcPrice');
  const calcBreakdown = document.getElementById('calcBreakdown');

  const tariffButtons = document.querySelectorAll('#tariffTypeGroup .toggle-btn');
  const scheduleButtons = document.querySelectorAll('#scheduleGroup .toggle-btn');

  let activeTariff = 'libre';
  let activeSchedule = 'diurno';

  // Parámetros oficiales CDMX
  const tariffs = {
    libre: { base: 8.74, drop: 1.07, nameEs: 'Taxi Libre', nameEn: 'Street Cab' },
    sitio: { base: 13.10, drop: 1.30, nameEs: 'Taxi de Sitio', nameEn: 'Stand Taxi' },
    radio: { base: 27.30, drop: 1.84, nameEs: 'Radio Taxi', nameEn: 'Radio Taxi' }
  };

  tariffButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tariffButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTariff = btn.getAttribute('data-type');
      updateCotizador();
    });
  });

  scheduleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      scheduleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSchedule = btn.getAttribute('data-schedule');
      updateCotizador();
    });
  });

  if (kmSlider) {
    kmSlider.addEventListener('input', () => {
      kmValue.textContent = `${parseFloat(kmSlider.value).toFixed(1)} km`;
      updateCotizador();
    });
  }

  if (timeSlider) {
    timeSlider.addEventListener('input', () => {
      const val = parseInt(timeSlider.value, 10);
      timeValue.textContent = currentLang === 'en' ? `${val} min` : `${val} min`;
      updateCotizador();
    });
  }

  function updateCotizador() {
    if (!kmSlider || !timeSlider || !calcPrice || !calcBreakdown) return;

    const km = parseFloat(kmSlider.value);
    const mins = parseInt(timeSlider.value, 10);
    const tariff = tariffs[activeTariff] || tariffs.libre;
    const isNight = activeSchedule === 'nocturno';

    // 1 brinco de distancia cada 250 m
    const distDrops = Math.floor((km * 1000) / 250);
    // 1 brinco de tiempo cada 45 seg
    const timeDrops = Math.floor((mins * 60) / 45);

    let total = tariff.base + ((distDrops + timeDrops) * tariff.drop);
    if (isNight) {
      total *= 1.20;
    }

    // Redondear a dos decimales
    calcPrice.textContent = `$${total.toFixed(2)}`;

    if (currentLang === 'en') {
      const nightNote = isNight ? ' (+20% night surcharge)' : '';
      calcBreakdown.textContent = `Base: $${tariff.base.toFixed(2)} + ${distDrops} distance drops + ${timeDrops} idle drops${nightNote}`;
    } else {
      const nightNote = isNight ? ' (+20% tarifa nocturna)' : '';
      calcBreakdown.textContent = `Banderazo: $${tariff.base.toFixed(2)} + ${distDrops} saltos distancia + ${timeDrops} saltos espera${nightNote}`;
    }
  }

  // ==========================================================================
  // 6. FAQ ACCORDION INTERACTIVO
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Cerrar todos los demás
        faqItems.forEach(i => i.classList.remove('active'));
        // Si no estaba abierto, abrirlo
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // Inicializar estado de idioma y cotizador
  applyLanguage(currentLang);
  updateCotizador();
});
