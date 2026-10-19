/**
 * data.js - Base de datos desacoplada para el sitio web de Arturo Urbina / AjuscoFix
 * Permite agregar, editar o quitar servicios, proyectos, precios y FAQs fácilmente sin tocar HTML.
 */

const SITE_DATA = {
  info: {
    nombre: "Arturo Urbina Velasco",
    marca: "AjuscoFix",
    submarca: "Ingeniería de Software & Soporte IT",
    slogan: "Soporte Técnico de Cómputo, Redes y Desarrollo de Software con IA",
    descripcion: "Más de 15 años brindando soluciones tecnológicas integrales en la Ciudad de México y proyectos de desarrollo a nivel nacional e internacional. Desde la reparación express de hardware y cableado de redes hasta arquitectura de software nativo, aplicaciones móviles y agentes de Inteligencia Artificial.",
    telefono: "55 5969 4250",
    telefonoRaw: "525559694250",
    email: "arturo.urbina.velasco@gmail.com",
    ubicacion: "Ajusco, Tlalpan, Ciudad de México (Atención a domicilio, en taller y soporte remoto)",
    horario: "Lunes a Sábado: 9:00 AM - 8:00 PM · Urgencias 24/7",
    redes: {
      facebook: "https://www.facebook.com/AjuscoFix/",
      github: "https://github.com/ArturoUrbinaVelasco",
      whatsapp: "https://wa.me/525559694250"
    }
  },

  metricas: [
    { numero: "15+", label: "Años de experiencia técnica", sub: "Trayectoria comprobada" },
    { numero: "100%", label: "Garantía de servicio", sub: "Diagnóstico transparente" },
    { numero: "0", label: "Costos ocultos ni sorpresas", sub: "Cotización previa aprobada" },
    { numero: "Multi", label: "Dispositivo & Plataforma", sub: "Android, Web, Linux, Windows, Cloud" }
  ],

  categorias: [
    { id: "todos", nombre: "Todos los servicios", icono: "fas fa-th-large" },
    { id: "hardware", nombre: "Hardware & Mantenimiento", icono: "fas fa-tools" },
    { id: "redes", nombre: "Redes & Servidores", icono: "fas fa-network-wired" },
    { id: "software", nombre: "Sistemas & Seguridad", icono: "fas fa-shield-alt" },
    { id: "desarrollo", nombre: "Desarrollo Web & Móvil", icono: "fas fa-code" },
    { id: "ia", nombre: "Inteligencia Artificial & Automatización", icono: "fas fa-robot" }
  ],

  servicios: [
    {
      id: "mantenimiento-preventivo",
      categoria: "hardware",
      titulo: "Mantenimiento Preventivo & Cambio de Pasta Térmica",
      destacado: true,
      descripcion: "Limpieza profunda de componentes, lubricación de ventiladores y aplicación de pasta térmica de alto rendimiento (Artic MX-4 / Thermal Grizzly). Ideal para evitar calentamiento y prolongar la vida útil.",
      detalles: [
        "Desensamble cuidadoso de laptop o gabinete de escritorio",
        "Limpieza con aire comprimido e hisopos antiestáticos",
        "Cambio de pasta térmica en procesador (CPU) y tarjeta gráfica (GPU)",
        "Pruebas de temperatura bajo carga con reporte térmico"
      ],
      tiempo: "2 a 4 horas",
      precioDesde: "$350 MXN",
      icono: "fas fa-fan"
    },
    {
      id: "formateo-profesional",
      categoria: "software",
      titulo: "Formateo Profesional con Respaldo Garantizado",
      destacado: true,
      descripcion: "Reinstalación limpia de Windows 10/11, macOS o distribuciones Linux corporativas. Cero bloatware, optimización de arranque y respaldo integral de documentos antes de formatear.",
      detalles: [
        "Respaldo previo de archivos personales, fotos y documentos",
        "Instalación limpia sin programas basura del fabricante",
        "Paquetería esencial completa (navegadores, visor PDF, compresores)",
        "Instalación de drivers certificados por el fabricante"
      ],
      tiempo: "3 a 5 horas",
      precioDesde: "$450 MXN",
      icono: "fas fa-desktop"
    },
    {
      id: "upgrade-ssd-ram",
      categoria: "hardware",
      titulo: "Actualización a SSD y Expansión de RAM",
      destacado: true,
      descripcion: "Multiplica la velocidad de tu equipo hasta 10 veces cambiando el disco duro mecánico viejo por una unidad de estado sólido (SSD NVMe o SATA) y memoria RAM adicional.",
      detalles: [
        "Diagnóstico de compatibilidad de placa madre",
        "Clonación exacta de tu sistema o instalación desde cero",
        "Conservas todos tus programas y archivos tal cual estaban",
        "Tu equipo viejo revive y vuela en segundos"
      ],
      tiempo: "Mismo día",
      precioDesde: "$300 MXN + Refacción",
      icono: "fas fa-microchip"
    },
    {
      id: "recuperacion-datos",
      categoria: "software",
      titulo: "Recuperación de Archivos & Datos Dañados",
      destacado: false,
      descripcion: "Rescate de información crítica en discos duros con sectores dañados, memorias USB formateadas por error, tarjetas SD ilegibles y particiones en formato RAW.",
      detalles: [
        "Inspección forense del medio de almacenamiento",
        "Extracción bit a bit sin sobrecalentar el medio",
        "Entrega en medio de almacenamiento seguro",
        "Máxima confidencialidad y privacidad de tus datos"
      ],
      tiempo: "24 a 48 horas",
      precioDesde: "$600 MXN",
      icono: "fas fa-database"
    },
    {
      id: "redes-cableado",
      categoria: "redes",
      titulo: "Cableado Estructurado & Certificación de Red",
      destacado: false,
      descripcion: "Instalación de cableado de red Cat 6 / 6A para casas, departamentos, oficinas y locales comerciales. Conexiones estables de baja latencia sin caídas.",
      detalles: [
        "Tendido y canalización estética con canaleta o tubería",
        "Rematado de jacks RJ45 y patch panels profesionales",
        "Pruebas de continuidad y velocidad punto a punto",
        "Eliminación de interferencias y ruido electromagnético"
      ],
      tiempo: "Según proyecto",
      precioDesde: "Cotización a medida",
      icono: "fas fa-ethernet"
    },
    {
      id: "wifi-mesh",
      categoria: "redes",
      titulo: "Soluciones Wi-Fi Mesh & Eliminación de Zonas Muertas",
      destacado: true,
      descripcion: "Configuración de redes inalámbricas unificadas tipo malla (Mesh) y puntos de acceso empresariales (Ubiquiti, TP-Link Omada). Cobertura total en todos los rincones.",
      detalles: [
        "Estudio de cobertura y análisis de espectro inalámbrico",
        "Unificación de señal (un solo nombre de red y contraseña en toda la casa)",
        "Configuración de red de invitados aislada y segura",
        "Control parental y priorización de tráfico para trabajo/gaming"
      ],
      tiempo: "2 a 4 horas",
      precioDesde: "$500 MXN + Equipos",
      icono: "fas fa-wifi"
    },
    {
      id: "servidores-onpremise",
      categoria: "redes",
      titulo: "Servidores Locales (On-Premise), NAS y Respaldos",
      destacado: false,
      descripcion: "Implementación de servidores de archivos compartidos locales, servidores de medios, nubes privadas tipo Nextcloud y sistemas de respaldo automatizado para negocios.",
      detalles: [
        "Configuración de almacenamiento redundante (RAID)",
        "Permisos por usuario y carpetas departamentales protegidas",
        "Respaldos automáticos programados fuera de horario laboral",
        "Acceso seguro vía VPN para trabajadores remotos"
      ],
      tiempo: "1 a 3 días",
      precioDesde: "Cotización a medida",
      icono: "fas fa-server"
    },
    {
      id: "desarrollo-apps-moviles",
      categoria: "desarrollo",
      titulo: "Desarrollo de Aplicaciones Móviles (Android / Multiplataforma)",
      destacado: true,
      descripcion: "Ingeniería de apps móviles de alto rendimiento con arquitectura limpia (Clean Architecture), persistencia local en Room, cero dependencia obligatoria de internet y seguridad criptográfica.",
      detalles: [
        "Desarrollo nativo en Kotlin y arquitecturas modernas",
        "Funcionamiento 100% offline con sincronización en segundo plano",
        "Geolocalización satelital de alta precisión (como Banderazo)",
        "Sistemas de licencias, criptografía asimétrica y validación offline"
      ],
      tiempo: "Proyecto ágil",
      precioDesde: "Cotización según requerimientos",
      icono: "fas fa-mobile-alt"
    },
    {
      id: "desarrollo-web-sistemas",
      categoria: "desarrollo",
      titulo: "Desarrollo de Aplicaciones Web & Portales a Medida",
      destacado: false,
      descripcion: "Creación de sitios web ultrarrápidos, plataformas de cotización, dashboards administrativos, catálogos de productos y portales interactivos multidispositivo.",
      detalles: [
        "Diseño responsivo móvil y escritorio de máxima velocidad",
        "Arquitectura Jamstack para hosting gratuito en GitHub Pages o Cloudflare",
        "Integración con APIs, pasarelas de pago y mensajería de WhatsApp",
        "Código limpio, modular y fácil de mantener a futuro"
      ],
      tiempo: "1 a 3 semanas",
      precioDesde: "Cotización accesible",
      icono: "fas fa-laptop-code"
    },
    {
      id: "ia-automatizacion",
      categoria: "ia",
      titulo: "Agentes de Inteligencia Artificial & Automatización de Procesos",
      destacado: true,
      descripcion: "Implementación de flujos autónomos con IA para empresas: bots de atención y cotización, automatización de publicaciones en redes sociales (CDP / Playwright) y asistentes operativos.",
      detalles: [
        "Control autónomo de navegadores para tareas repetitivas (CDP / Playwright)",
        "Integración con modelos de lenguaje de vanguardia (Gemini, Claude, GPT)",
        "Procesamiento y resumen inteligente de documentos y bitácoras",
        "Ahorro de horas hombre en tareas de oficina y difusión"
      ],
      tiempo: "Según flujo",
      precioDesde: "Consultoría & Desarrollo",
      icono: "fas fa-brain"
    }
  ],

  proyectos: [
    {
      id: "banderazo",
      titulo: "Banderazo · Taxímetro Digital Satelital CDMX",
      etiqueta: "App Móvil Android Nativa",
      categoria: "Móvil / Criptografía / GPS",
      descripcion: "Aplicación móvil Android desarrollada en Kotlin puro con Clean Architecture y Room. Taxímetro digital oficial de referencia para conductores de CDMX y Edomex. 100% funcional sin internet mediante GPS satelital, sin anuncios, con emisión y validación de licencias criptográficas ECDSA de 136 caracteres y cálculo exacto al centavo.",
      puntosClave: [
        "Medición satelital pura sin consumo de datos móviles",
        "Criptografía asimétrica para validación de licencias offline",
        "Algoritmo de cobro dual: distancia por saltos y tiempo de espera en tráfico",
        "Suite de 690+ pruebas unitarias automatizadas y CI/CD en GitHub Actions",
        "Generador de comprobantes y tickets instantáneos por WhatsApp"
      ],
      enlace: "https://github.com/ArturoUrbinaVelasco/banderazo",
      enlaceTexto: "Ver en GitHub",
      icono: "fas fa-taxi"
    },
    {
      id: "publicador-meta",
      titulo: "Meta Business Suite Autonomous Publisher",
      etiqueta: "Automatización & CDP",
      categoria: "Automatización / IA / Python",
      descripcion: "Herramienta autónoma desarrollada en Python con Playwright conectada directamente por Chrome DevTools Protocol (CDP) a navegadores activos. Permite publicar publicaciones compuestas con imágenes de alta resolución, textos persuasivos con emojis y hashtags, y confirmación en tiempo real en Meta Business Suite sin depender de tokens efímeros de la Graph API.",
      puntosClave: [
        "Conexión directa por WebSocket CDP a sesiones de navegador activas",
        "Automatización del compositor con detección de modales y recargas",
        "Catálogo desacoplado de flyers y copys publicitarios",
        "Registro y bitácora automatizada de publicaciones en formato JSON"
      ],
      enlace: "https://www.facebook.com/AjuscoFix/",
      enlaceTexto: "Ver Página en Facebook",
      icono: "fab fa-facebook-square"
    },
    {
      id: "redes-infraestructura",
      titulo: "Infraestructura de Redes & Servidores Locales",
      etiqueta: "Redes & Hardware",
      categoria: "Infraestructura / On-Premise",
      descripcion: "Diseño e implementación de redes estructuradas Gigabit y Wi-Fi administrado para despachos y comercios en la Ciudad de México, con servidores de almacenamiento redundante (NAS) para copias de seguridad automáticas y aislamiento de redes de invitados.",
      puntosClave: [
        "Topología física con cableado Cat 6 libre de interferencias",
        "Segmentación de red (VLANs) para separar administración de clientes",
        "Servidor local de respaldos con sincronización cifrada",
        "Cero caídas y latencia mínima para trabajo colaborativo"
      ],
      enlace: "https://wa.me/525559694250?text=Hola%20Arturo,%20me%20interesa%20una%20cotizaci%C3%B3n%20para%20redes%20o%20servidores",
      enlaceTexto: "Cotizar Instalación",
      icono: "fas fa-network-wired"
    }
  ],

  faqs: [
    {
      q: "¿Cómo solicito un servicio de soporte o reparación?",
      a: "Es muy fácil: nos mandas un WhatsApp al 55 5969 4250 o nos escribes por Messenger en Facebook. Nos describes qué problema presenta tu equipo o qué solución requieres y te damos una estimación inmediata. Puedes traer tu equipo a taller o coordinamos visita a domicilio en CDMX."
    },
    {
      q: "¿Mis datos y fotos están seguros durante un formateo o reparación?",
      a: "100 % seguros. Antes de realizar cualquier formateo o cambio de disco, realizamos un respaldo espejo completo de tus carpetas de usuario, documentos, fotos y escritorio. Tus datos se tratan con estricto secreto profesional y nunca se comparten."
    },
    {
      q: "¿Dan garantía por los trabajos de mantenimiento o reparación?",
      a: "Sí. Todos nuestros servicios de mano de obra cuentan con garantía de satisfacción. Si tu equipo presenta el mismo problema tras el servicio, lo revisamos sin costo adicional. En refacciones (SSDs, RAM, pantallas), la garantía cubre de 6 a 12 meses según el componente."
    },
    {
      q: "¿Qué tipo de proyectos de desarrollo de software realizan?",
      a: "Desarrollamos desde aplicaciones móviles nativas para Android (como Banderazo), plataformas web y herramientas administrativas hasta integraciones con Inteligencia Artificial y agentes automatizados para optimizar las operaciones de tu negocio."
    },
    {
      q: "¿Realizan trabajos fuera de la Ciudad de México?",
      a: "Para servicios de hardware y cableado físico cubrimos la Ciudad de México y zona conurbada del Estado de México. Para soporte técnico remoto, consultoría IT y desarrollo de software trabajamos con clientes de toda la República Mexicana y el extranjero."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
