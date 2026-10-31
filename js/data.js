/**
 * data.js - Base de datos bilingüe (ES / EN) de Arturo Urbina Velasco & AjuscoFix
 * Soporte internacional, arquitectura desacoplada y congruencia técnica 100%.
 */

const SITE_DATA = {
  es: {
    info: {
      nombre: "Arturo Urbina Velasco",
      tituloProfesional: "Desarrollador de Aplicaciones Senior | Múltiples Lenguajes, Tecnologías & IA Aplicada",
      marca: "Arturo Urbina Velasco",
      submarca: "AjuscoFix · Soluciones Tecnológicas & Desarrollo",
      slogan: "Software Empresarial · Sitios Web a Medida · Automatización de Procesos · IA & Sistemas Operativos",
      perfil: "Desarrollador de aplicaciones con más de 13 años construyendo software empresarial de extremo a extremo —modelo de datos, API, interfaz, despliegue y capacitación— en salud, manufactura y retail. Especialista en múltiples lenguajes y tecnologías: desarrollo de sitios web en base a necesidad, mejora y automatización de procesos en múltiples áreas de negocio (eliminación de flujos manuales en Excel/Word con scripts y tableros), instalación y soporte de sistemas operativos (Windows, Linux, macOS), paqueterías comerciales, software libre y Open Source, desarrollo móvil nativo en Android, arquitecturas de Inteligencia Artificial On-Premise (sistemas multiagente, RAG documental con pgvector y LLMs locales sin fuga de datos), interoperabilidad clínica (DICOM/PACS, HL7) e infraestructura integral de hardware y redes.",
      telefono: "55 5969 4250",
      telefonoRaw: "525559694250",
      email: "arturo.urbina.velasco@gmail.com",
      telegram: "https://t.me/+525559694250",
      ubicacion: "Ciudad de México (Atención a proyectos remotos, presenciales y soporte en sitio)",
      redes: {
        github: "https://github.com/ArturoUrbinaVelasco",
        facebook: "https://www.facebook.com/AjuscoFix/",
        whatsapp: "https://wa.me/525559694250",
        telegram: "https://t.me/+525559694250"
      }
    },

    ui: {
      navInicio: "Inicio",
      navStack: "Stack & IA",
      navPortafolio: "Portafolio",
      navTrayectoria: "Trayectoria",
      navServicios: "Servicios",
      navCotizador: "Cotizador",
      navContacto: "Contacto",

      heroTag: "Múltiples Lenguajes & Tecnologías · IA Aplicada · 13+ Años",
      heroTitle1: "Software Empresarial, ",
      heroTitleGradient: "Sitios Web a Medida",
      heroTitle2: ", Automatización e IA",
      heroDesc: "Más de 13 años construyendo software de extremo a extremo en múltiples lenguajes y tecnologías. Desarrollo de sitios web en base a tu necesidad, mejora y automatización de procesos en múltiples áreas (eliminación de flujos manuales), instalación y soporte de sistemas operativos y paqueterías (comercial, software libre y open source), aplicaciones móviles nativas, IA On-Premise y la división de infraestructura y soporte AjuscoFix.",
      heroBtnProjects: "Ver Portafolio Técnico",
      heroBtnWa: "WhatsApp",
      heroBtnTg: "Telegram",
      heroBtnGithub: "GitHub",
      heroBadgeWeb: "Sitios Web en Base a Necesidad",
      heroBadgeAuto: "Automatización de Procesos (Python/BAT)",
      heroBadgeSO: "Sistemas Operativos, Software Comercial & Open Source",
      heroBadgeIA: "IA Privada sin fuga de datos (On-Premise)",

      terminalPrompt1: "enterprise-ai --rag-status",
      terminalTagOk: "[OK]",
      terminalStatus1: "pgvector (HNSW) + RRF Reranking activo en servidores locales",
      terminalPrompt2: "multiagente --langgraph",
      terminalTagActive: "[ACTIVO]",
      terminalStatus2: "7 agentes de área + 13 subagentes con Ollama (qwen2.5-coder)",
      terminalPrompt3: "mcp-protocol --status",
      terminalTagConnected: "[CONECTADO]",
      terminalStatus3: "Model Context Protocol a PostgreSQL en solo lectura",
      terminalPrompt4: "banderazo-android --version",
      terminalStatus4: "Banderazo v0.3.0 Release · Kotlin Satelital Puro (690+ tests OK)",
      terminalPromptCopiloto: "copiloto-seguro --dashcam-status",
      terminalTagCopiloto: "[GRABANDO]",
      terminalStatusCopiloto: "Copiloto Seguro v0.1.0 · Dashcam Dual + Telemetría OSD (.SRT) 100% Offline",
      terminalPrompt5: "dicom-pacs --mirth-connect",
      terminalTagOnline: "[EN LÍNEA]",
      terminalStatus5: "Interoperabilidad hospitalaria en centros médicos públicos y privados",
      terminalPrompt6: "android-mirror-hub --wireless",
      terminalTagReady: "[PROYECCIÓN]",
      terminalStatus6: "ADB Wi-Fi 5555 + Scrcpy 4.1 · Suite Desktop Pro (CustomTkinter)",
      terminalPrompt7: "mediastream --sse-telemetry",
      terminalTagStreaming: "[EN VIVO]",
      terminalStatus7: "React 19 + FastAPI + yt-dlp · Vercel Edge & Render (SSE 100% OK)",

      competenciasTag: "Dominio Tecnológico",
      competenciasTitle: "Competencias Técnicas & Stack de Ingeniería",
      competenciasDesc: "Arquitectura integral que abarca desde la inferencia de Inteligencia Artificial en servidores propios hasta el hardware hospitalario, sistemas administrativos y aplicaciones móviles nativas.",

      proyectosTag: "Casos Reales en Producción",
      proyectosTitle: "Portafolio Técnico & Soluciones",
      proyectosDesc: "Sistemas empresariales en operación continua, infraestructura de IA On-Premise y aplicaciones móviles desarrolladas con los más altos estándares de calidad (Clean Code y pruebas automáticas).",

      trayectoriaTag: "Experiencia Comprobada",
      trayectoriaTitle: "Trayectoria Profesional (2009 – 2026)",
      trayectoriaDesc: "Más de 13 años participando en el ciclo completo de vida del software, desde el levantamiento de requerimientos y modelado de datos hasta el despliegue y soporte operativo.",

      serviciosTag: "Soluciones Especializadas",
      serviciosTitle: "Servicios de Desarrollo, IA & Soporte IT",
      serviciosDesc: "Soluciones de ingeniería a la medida para empresas y organizaciones, complementadas con el soporte técnico y de redes de la división AjuscoFix.",
      servicePopular: "Destacado",
      serviceBtnConsult: "Consultar",

      cotizadorTag: "Cotizador & Diagnóstico",
      cotizadorTitle: "Calcula y Agenda tu Solución Técnica",
      cotizadorDesc: "Selecciona tu necesidad y esquema de entrega para generar un mensaje estructurado y coordinar una consulta técnica directa.",
      cotizadorStep1: "1. Especialidad técnica requerida:",
      cotizadorStep2: "2. Servicio o solución específica:",
      cotizadorStep3: "3. Nivel de prioridad / esquema (% de ajuste):",
      cotizadorStep4: "4. Notas técnicas, equipo o requerimiento:",
      cotizadorPlaceholderNotes: "Ej: Implementación RAG, App Android, Servidor NAS, ERP, Laptop...",
      cotizadorSummaryTitle: "Resumen de tu Solicitud",
      cotizadorSummarySelected: "Solución seleccionada:",
      cotizadorSummaryNone: "Ninguna seleccionada",
      cotizadorSummaryTime: "Tiempo habitual de entrega:",
      cotizadorSummaryPriority: "Esquema de prioridad:",
      cotizadorSummaryBase: "REFERENCIA BASE:",
      cotizadorSummaryCustom: "Cotización a medida",
      cotizadorBtnWa: "Solicitar por WhatsApp",
      cotizadorBtnTg: "Solicitar por Telegram",
      cotizadorDirectReply: "Respuesta directa de Arturo Urbina Velasco.",

      aboutTag: "Filosofía & Estándares",
      aboutTitle: "Arturo Urbina Velasco",
      aboutSubtitle: "Desarrollador de Aplicaciones Senior | Múltiples Lenguajes, Tecnologías & IA Aplicada",
      aboutP1: "Mi compromiso profesional es construir software que resista el paso del tiempo y resuelva problemas críticos de negocio: desde mantener la privacidad absoluta de los datos de un hospital mediante modelos de Inteligencia Artificial que jamás tocan servidores externos, hasta asegurar que una aplicación móvil funcione con exactitud matemática al centavo en medio del tráfico de la CDMX.",
      aboutP2: "A través de AjuscoFix, mantengo una conexión directa con la infraestructura física y el soporte de hardware, garantizando que cada computadora, servidor o red local funcione a su máxima capacidad térmica y operativa.",
      aboutBox1Title: "Sitios Web a Medida",
      aboutBox1Desc: "Landing pages, catálogos y portales adaptados exactamente a tu necesidad.",
      aboutBox2Title: "Automatización",
      aboutBox2Desc: "Scripts en Python/BAT que eliminan trabajo manual en múltiples áreas.",
      aboutBox3Title: "SO & Software Libre",
      aboutBox3Desc: "Windows, Linux, macOS, Office, suites libres y migración Open Source.",
      aboutBox4Title: "IA On-Premise & Mobile",
      aboutBox4Desc: "RAG local sin fuga de datos, sistemas multiagente y apps nativas en Kotlin.",
      aboutEduTitle: "Formación Académica & Enfoque Técnico",
      aboutEduSub: "Sustento Académico y Práctico",
      aboutEdu1Title: "Técnico en Informática · CECyTEM",
      aboutEdu1Desc: "Colegio de Estudios Científicos y Tecnológicos del Estado de México",
      aboutEdu2Title: "Ingeniería en Informática · UPVM",
      aboutEdu2Desc: "Universidad Politécnica del Valle de México",
      aboutEdu3Title: "Ciberseguridad Defensiva & Análisis Forense",
      aboutEdu3Desc: "Ingeniería inversa, recuperación de medios magnéticos/sólidos y seguridad de sistemas",

      faqTag: "Dudas Comunes",
      faqTitle: "Preguntas Frecuentes",
      faqDesc: "Claridad técnica y metodológica sobre desarrollo de software, IA y servicios de infraestructura.",

      contactTag: "Contacto Directo",
      contactTitle: "Iniciemos tu Proyecto o Solución",
      contactDesc: "Disponible para consultoría técnica, desarrollo de software en múltiples tecnologías, agentes de IA On-Premise y soporte de infraestructura en sitio y remoto.",
      contactWaLabel: "WhatsApp Directo:",
      contactTgLabel: "Telegram Directo:",
      contactEmailLabel: "Correo Electrónico:",
      contactLocationLabel: "Ubicación:",
      contactLocationVal: "Ciudad de México (Atención presencial, soporte en sitio y proyectos remotos)",
      contactCardTitle: "¿Tienes un requerimiento técnico o proyecto?",
      contactCardDesc: "Escríbeme directamente por WhatsApp o Telegram para coordinar una llamada de diagnóstico o propuesta técnica:",
      contactCardBtnWa: "Iniciar por WhatsApp",
      contactCardBtnTg: "Contactar por Telegram",
      contactCardBtnFb: "Escribir por Messenger (AjuscoFix)",
      contactCardSecure: "Confidencialidad y respuesta directa garantizadas",

      footerRights: "Todos los derechos reservados.",
      footerSub: "Desarrollador de Aplicaciones Senior · Múltiples Lenguajes, Tecnologías & IA Aplicada.",
      visitorLabel: "Visitas:",
      visitorTitle: "Visitas totales al portal",
      visitorTitleShow: "Ver estadísticas de visitas",
      visitorTitleHide: "Ocultar estadísticas de visitas",
      visitorStatsTooltip: "Ver métricas y estadísticas detalladas por día, semana y mes"
    },

    metricas: [
      { numero: "13+", label: "Años de Trayectoria", sub: "Software empresarial de extremo a extremo" },
      { numero: "Multi-Área", label: "Automatización & Procesos", sub: "Eliminación de tareas manuales repetitivas" },
      { numero: "On-Prem", label: "IA Privada & Segura", sub: "Modelos locales sin fuga de datos" },
      { numero: "Open/Com", label: "Software Libre & Comercial", sub: "Sistemas operativos, suites y licencias" }
    ],

    competenciasClave: [
      {
        categoria: "Sistemas Operativos & Entornos Virtuales",
        icono: "fab fa-windows",
        items: [
          "Windows (11, 10, 8, 7, XP)",
          "Windows Server (2003 – 2022)",
          "Linux (Ubuntu Server, Fedora, Debian)",
          "macOS",
          "VirtualBox & VMware",
          "Optimización de Rendimiento & Servicios",
          "Directorio Activo & Cuentas de Usuario",
          "Servidores FTP & Almacenamiento NAS"
        ]
      },
      {
        categoria: "Paqueterías, Software Comercial & Open Source",
        icono: "fas fa-box-open",
        items: [
          "Microsoft Office 365 (Excel Avanzado, Word, Access, Outlook)",
          "LibreOffice & OpenOffice (Software Libre)",
          "Sistemas Administrativos (COI, NOI, SUA)",
          "ERP Castelec SAI & SICIA (Inventarios)",
          "Adobe Pack & Corel Draw",
          "Antivirus & Seguridad (SonicWall, Fortinet, Nod32)",
          "Herramientas Open Source para Negocios y PyMEs",
          "Soporte Remoto (TeamViewer, AnyDesk)"
        ]
      },
      {
        categoria: "Mejora & Automatización de Procesos",
        icono: "fas fa-cogs",
        items: [
          "Eliminación de Procesos Manuales en Excel/Word",
          "Scripts de Automatización (Python, PowerShell, Bash, BAT)",
          "Carga e Importación Semántica de Documentos",
          "Tableros Web Autoadministrables",
          "Generación Oficial de Reportes PDF y Excel",
          "Integración entre Áreas (RRHH, Compras, Almacén, Ventas)",
          "Tareas Programadas & Respaldos Automáticos"
        ]
      },
      {
        categoria: "Sitios Web a Medida & Plataformas Full-Stack",
        icono: "fas fa-globe",
        items: [
          "Sitios Web en Base a tu Necesidad",
          "Landing Pages de Alta Conversión",
          "Catálogos en Línea & Portales Comerciales",
          "React 19, TypeScript, Vite, Tailwind CSS, FastAPI",
          "Streaming en Tiempo Real con Server-Sent Events (SSE)",
          "Diseño First-Mobile Responsivo & PWA",
          "HUB de Aplicaciones Corporativo (SSO con JWT)"
        ]
      },
      {
        categoria: "Inteligencia Artificial Aplicada",
        icono: "fas fa-brain",
        items: [
          "LangGraph (Sistemas Multiagente)",
          "Ollama (Inferencia Local On-Premise)",
          "RAG Privado (pgvector, HNSW, RRF)",
          "Model Context Protocol (MCP)",
          "Human-in-the-Loop",
          "MinerU & Extracción Inteligente",
          "Prompt Engineering"
        ]
      },
      {
        categoria: "Desarrollo Móvil Nativo & Hardware",
        icono: "fas fa-mobile-alt",
        items: [
          "Kotlin (Android Nativo, Jetpack Compose)",
          "Capacitor (Android Cross-Platform & ADB Deploy)",
          "Clean Architecture & Room SQLite (100% Offline)",
          "Control & Proyección Android Desktop (CustomTkinter, Scrcpy, ADB Wi-Fi)",
          "Criptografía Asimétrica ECDSA Offline",
          "DICOM / PACS & HL7 Mirth Connect",
          "Telemetría Puerto COM (Equipos Médicos, Lámparas)",
          "Cableado Estructurado Cat 6/6A",
          "Wi-Fi Mesh Unificado & Soporte AjuscoFix"
        ]
      }
    ],

    categorias: [
      { id: "todos", nombre: "Todas las Especialidades", icono: "fas fa-layer-group" },
      { id: "web", nombre: "Sitios Web & Automatización", icono: "fas fa-laptop-code" },
      { id: "ia", nombre: "IA Aplicada & Multiagente", icono: "fas fa-brain" },
      { id: "movil", nombre: "Apps Móviles & Multidispositivo", icono: "fas fa-mobile-alt" },
      { id: "onpremise", nombre: "Infraestructura & On-Premise", icono: "fas fa-server" },
      { id: "ajuscofix", nombre: "Sistemas Operativos, Software & IT", icono: "fas fa-tools" }
    ],

    servicios: [
      {
        id: "sitios-web-a-medida",
        categoria: "web",
        titulo: "Desarrollo de Sitios Web en Base a tu Necesidad",
        destacado: true,
        descripcion: "Diseño y desarrollo de sitios web modernos, landing pages, catálogos en línea y portales autoadministrables adaptados a tu objetivo comercial y presupuesto. Ligeros, ultrarrápidos, optimizados para celulares y con conexión directa a WhatsApp y Telegram.",
        detalles: [
          "Desarrollo a la medida de tu negocio, sin plantillas genéricas lentas",
          "Optimización para dispositivos móviles y posicionamiento en Google (SEO)",
          "Conexión directa con WhatsApp, Telegram y cotizador interactivo",
          "Opciones de hosting gratuito o autoadministrado de bajo costo"
        ],
        tiempo: "3 a 7 días según requerimiento",
        precioDesde: "Cotización a medida",
        icono: "fas fa-globe"
      },
      {
        id: "automatizacion-procesos",
        categoria: "web",
        titulo: "Mejora & Automatización de Procesos en Múltiples Áreas",
        destacado: true,
        descripcion: "Transformación digital de flujos de trabajo en recursos humanos, inventarios, compras, almacén, ventas y soporte. Eliminamos la captura manual en hojas de cálculo y procesadores de texto mediante scripts automáticos, validaciones y tableros interactivos.",
        detalles: [
          "Eliminación de tareas repetitivas en Excel y Word mediante automatización",
          "Scripts en Python, PowerShell y archivos BAT para integración de datos",
          "Importación masiva, generación de reportes oficiales en PDF/Excel y bitácoras",
          "Tableros web autoadministrables para monitoreo y seguimiento operativo"
        ],
        tiempo: "Por sprint o proyecto",
        precioDesde: "Cotización a medida",
        icono: "fas fa-cogs"
      },
      {
        id: "so-paqueterias-software",
        categoria: "ajuscofix",
        titulo: "Sistemas Operativos, Paqueterías & Software (Comercial y Open Source)",
        destacado: true,
        descripcion: "Instalación, configuración y mantenimiento de sistemas operativos (Windows, Linux, macOS), paqueterías de productividad (Office, LibreOffice), software administrativo (COI, NOI, SUA, ERP) y asesoría para migrar a soluciones Open Source de costo cero.",
        detalles: [
          "Instalación limpia de Windows (11/10/Server), distribuciones Linux y macOS",
          "Despliegue de suites de productividad: Microsoft Office 365, LibreOffice y OpenOffice",
          "Implementación de software administrativo, contable (COI, NOI, SUA) y ERP SAI/SICIA",
          "Asesoría para sustitución de licencias costosas por software Open Source de calidad"
        ],
        tiempo: "Mismo día / 24 hrs",
        precioDesde: "Cotización a medida",
        icono: "fas fa-laptop"
      },
      {
        id: "ia-onpremise-rag",
        categoria: "ia",
        titulo: "Arquitecturas de IA Privadas (RAG On-Premise & LLMs)",
        destacado: true,
        descripcion: "Implementación de infraestructura de búsqueda semántica documental (RAG) con pgvector, recuperación híbrida RRF y reranking ejecutados en servidores propios. Máxima privacidad: cero envío de datos confidenciales a nubes públicas.",
        detalles: [
          "Inferencia local con Ollama y modelos abiertos de vanguardia",
          "Indexación vectorial en PostgreSQL (pgvector HNSW y tsvector)",
          "Deduplicación por hash y pipelines de ingesta asíncrona de documentos",
          "Conexión segura vía Model Context Protocol (MCP) en modo solo lectura"
        ],
        tiempo: "Por sprint / requerimiento",
        precioDesde: "Cotización a medida",
        icono: "fas fa-brain"
      },
      {
        id: "sistemas-multiagente",
        categoria: "ia",
        titulo: "Sistemas Multiagente Autónomos (LangGraph)",
        destacado: true,
        descripcion: "Diseño y orquestación de asistentes multiagente con agentes de área y subagentes especializados, trazabilidad de ejecución paso a paso, historial persistente y panel de control.",
        detalles: [
          "Orquestación con LangGraph y validación humana (Human-in-the-Loop)",
          "Integración con canales empresariales (WhatsApp, Telegram, Teams, SAP)",
          "Agentes para RRHH, soporte técnico, auditoría y asistencia al desarrollador",
          "Evaluación de costo-beneficio de modelos abiertos vs. modelos frontera"
        ],
        tiempo: "Arquitectura a la medida",
        precioDesde: "Cotización a medida",
        icono: "fas fa-robot"
      },
      {
        id: "desarrollo-android-nativo",
        categoria: "movil",
        titulo: "Desarrollo Móvil Android Nativo (Kotlin / Compose)",
        destacado: true,
        descripcion: "Ingeniería de aplicaciones móviles nativas en Kotlin puro bajo principios de Clean Architecture, persistencia en Room y funcionamiento garantizado 100% offline.",
        detalles: [
          "Persistencia local en base de datos SQLite / Room sin requerir internet continuo",
          "Geolocalización satelital pura de alta precisión y filtros GPS (caso Banderazo)",
          "Sistemas de licencias con criptografía asimétrica offline (firmas ECDSA)",
          "Aplicaciones de control en sitio, asistencia de personal y toma de datos"
        ],
        tiempo: "Desarrollo ágil",
        precioDesde: "Cotización a medida",
        icono: "fas fa-mobile-alt"
      },
      {
        id: "plataformas-web-hub",
        categoria: "web",
        titulo: "Desarrollo Web Full-Stack & HUB de Aplicaciones Corporativo",
        destacado: false,
        descripcion: "Desarrollo de portales web corporativos, tableros autoadministrables, sistemas transaccionales y HUBs de aplicaciones con autenticación unificada (SSO).",
        detalles: [
          "Frontend moderno con React, Vite y TailwindCSS de alta velocidad",
          "Backend robusto con Node.js / Express y Python / FastAPI",
          "Autenticación Single Sign-On (SSO) con JWT RS256 y JWKS",
          "Generación oficial de reportes PDF dinámicos y exportación masiva"
        ],
        tiempo: "Según alcance",
        precioDesde: "Cotización a medida",
        icono: "fas fa-network-wired"
      },
      {
        id: "integracion-clinica-com",
        categoria: "onpremise",
        titulo: "Interoperabilidad Clínica & Hardware Especializado (DICOM / HL7 / COM)",
        destacado: false,
        descripcion: "Integración de sistemas de salud con servidores PACS (comandos DICOM C-ECHO, C-FIND, C-MOVE), mensajería HL7 sobre Mirth Connect y captura de datos por puerto COM.",
        detalles: [
          "Simuladores de signos vitales para validación de mensajería sin equipo físico",
          "Implantación y puesta en marcha en sitio en centros hospitalarios públicos y privados",
          "Monitoreo por puerto COM de lámparas quirúrgicas y signos vitales",
          "Sistemas de expedientes clínicos y gestión masiva de folios médicos"
        ],
        tiempo: "Consultoría especializada",
        precioDesde: "Cotización a medida",
        icono: "fas fa-hospital"
      },
      {
        id: "infraestructura-docker-linux",
        categoria: "onpremise",
        titulo: "DevOps On-Premise, Dockerización & Vaultwarden",
        destacado: false,
        descripcion: "Aislamiento de servicios mediante contenedores Docker, proxies inversos seguros (nginx / Traefik con SSL) y gestión centralizada de secretos y credenciales corporativas.",
        detalles: [
          "Contenedorización integral de servicios con Docker Compose",
          "Retiro de credenciales dispersas en código mediante Vaultwarden corporativo",
          "Migraciones de bases de datos versionadas por código (Flyway)",
          "Laboratorios de máquinas virtuales para réplica de producción antes de desplegar"
        ],
        tiempo: "1 a 5 días",
        precioDesde: "Cotización a medida",
        icono: "fas fa-server"
      },
      {
        id: "erp-pos-administrativo",
        categoria: "web",
        titulo: "Sistemas Administrativos, ERP a Medida & Integración TPV Bancaria",
        destacado: false,
        descripcion: "Desarrollo y mantenimiento de sistemas ERP a medida, control de inventarios, facturación, reportería ejecutiva e integración transaccional directa de terminales punto de venta bancarias al POS.",
        detalles: [
          "Integración de terminales bancarias (Banorte, Bancomer) al sistema de cobro en sucursales",
          "Módulos integrales de inventarios, catálogo de clientes y folios de servicio",
          "Sistemas de apoyo para exposiciones, eventos y ferias comerciales",
          "Soporte a sistemas administrativos (SAI, SICIA, COI, NOI, SUA)"
        ],
        tiempo: "Proyecto a medida",
        precioDesde: "Cotización a medida",
        icono: "fas fa-cash-register"
      },
      {
        id: "ajuscofix-redes-cableado",
        categoria: "ajuscofix",
        titulo: "Redes Estructuradas, Wi-Fi Mesh & Servidores Locales (AjuscoFix)",
        destacado: true,
        descripcion: "Instalación de cableado Cat 6/6A para despachos, consultorios y hogares, junto con redes inalámbricas tipo malla sin zonas muertas y servidores NAS de respaldo.",
        detalles: [
          "Tendido y canalización estética de cableado Cat 6 libre de interferencias",
          "Configuración de Wi-Fi unificado Mesh (un solo SSID en todo el inmueble)",
          "Servidores NAS locales para respaldos automáticos fuera de red",
          "Instalación de conmutadores y cámaras de seguridad locales"
        ],
        tiempo: "Mismo día o según proyecto",
        precioDesde: "Cotización a medida",
        icono: "fas fa-wifi"
      },
      {
        id: "ajuscofix-mantenimiento-hardware",
        categoria: "ajuscofix",
        titulo: "Mantenimiento Preventivo, Correctivo & Térmica Gamer/Oficina",
        destacado: false,
        descripcion: "Servicio técnico a nivel componente para laptops, PCs de escritorio y estaciones de trabajo. Desensamble minucioso, limpieza antiestática y cambio de pasta térmica de alto rendimiento.",
        detalles: [
          "Desensamble cuidadoso y eliminación de polvo en disipadores y ventiladores",
          "Aplicación de pasta térmica de alta conductividad para control de temperatura",
          "Diagnóstico de estrés térmico antes y después del servicio",
          "Atención en taller o servicio presencial en sitio en CDMX"
        ],
        tiempo: "2 a 4 horas",
        precioDesde: "Cotización a medida",
        icono: "fas fa-microchip"
      },
      {
        id: "ajuscofix-formateo-recuperacion",
        categoria: "ajuscofix",
        titulo: "Formateo Limpio, Upgrades a SSD y Recuperación de Datos",
        destacado: false,
        descripcion: "Reinstalación limpia de Windows, Linux y macOS sin software basura, clonación y actualización a unidades SSD ultrarrápidas y rescate de información.",
        detalles: [
          "Respaldo espejo completo de archivos y documentos antes de intervenir",
          "Instalación de SSD NVMe / SATA que reviven tu equipo hasta 10 veces más rápido",
          "Recuperación de datos de discos con sectores dañados o particiones RAW",
          "Atención remota por TeamViewer / AnyDesk y presencial en sitio"
        ],
        tiempo: "Mismo día / 24 hrs",
        precioDesde: "Cotización a medida",
        icono: "fas fa-hdd"
      }
    ],

    proyectos: [
      {
        id: "ia-rag-empresarial",
        titulo: "Infraestructura RAG Documental & Asistente Multiagente (Sector Salud)",
        etiqueta: "IA Aplicada & Multiagente",
        categoria: "LangGraph · Ollama · pgvector · MCP · Python",
        descripcion: "Diseño, arquitectura y puesta en producción de infraestructura de búsqueda semántica documental híbrida (RRF + reranking) sobre modelos abiertos locales ejecutados en servidores propios para no exponer datos clínicos ni de Recursos Humanos a servicios externos. Asistente de desarrollo con 7 agentes y 13 subagentes con panel de trazabilidad, y conexión a bases relacionales vía Model Context Protocol (MCP) en modo solo lectura.",
        puntosClave: [
          "Búsqueda semántica sobre PostgreSQL + pgvector (HNSW) y tsvector",
          "Inferencia local con Ollama (qwen2.5-coder) en infraestructura on-premise",
          "Conectores MCP seguros con permisos estrictos de solo lectura",
          "Prototipos de agentes conversacionales para RRHH con validación humana en cada decisión",
          "Integración prototipada con canales de mensajería (WhatsApp, Telegram, Teams, SAP)"
        ],
        enlace: "https://wa.me/525559694250?text=Hola%20Arturo,%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20detalles%20sobre%20tu%20Infraestructura%20RAG%20Documental%20y%20Asistente%20Multiagente",
        enlaceTexto: "Consultar por WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-brain"
      },
      {
        id: "hub-corporativo-sso",
        titulo: "HUB de Aplicaciones Corporativo & Orquestador de Módulos Web e IA",
        etiqueta: "Plataforma & Integración",
        categoria: "Node 22 · Express · React · Vite · PostgreSQL 18 · Docker · Traefik",
        descripcion: "Punto de acceso único y seguro (SSO) para aplicaciones internas con autenticación JWT RS256 y JWKS, permisos granulares por usuario y puesto, monitor en tiempo real de contenedores Docker y bitácora de accesos. Integra los sistemas de Descriptivos de Puesto (con importación semántica de Word y PDF oficial), Control de Asistencia con app Android y orquestador Traefik.",
        puntosClave: [
          "Despliegues segregados: red interna corporativa y acceso externo seguro",
          "Contrato de integración documentado para aplicativos de terceros desarrolladores",
          "Unificación de bases de datos por dominios con migraciones versionadas (Flyway)",
          "Orquestador de módulos web y módulos-agente de IA bajo dominio único con Traefik"
        ],
        enlace: "https://wa.me/525559694250?text=Hola%20Arturo,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20el%20HUB%20Corporativo%20SSO%20y%20Orquestador",
        enlaceTexto: "Consultar por WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-cubes"
      },
      {
        id: "mediastream-downloader",
        titulo: "MediaStream Downloader · App Full-Stack First-Mobile & Cross-Platform",
        etiqueta: "Full-Stack Web, Mobile & Cloud API",
        categoria: "React 19 · TypeScript · FastAPI · yt-dlp · SSE · Capacitor · Docker · Vercel & Render",
        descripcion: "Aplicación full-stack First-Mobile y multiplataforma (Web PWA, Android nativo vía Capacitor y Desktop) para extracción y descarga de video y audio en máxima fidelidad con un solo toque. Implementa Clean Architecture, telemetría reactiva en tiempo real vía Server-Sent Events (SSE), motor asíncrono con FastAPI y yt-dlp sobre Render, interfaz de alta conversión en React 19 sobre Vercel y arquitectura Zero-Data Retention con almacenamiento local privado.",
        puntosClave: [
          "Flujo de 1-toque: pegado inteligente de enlace, detección de plataforma y descarga en Video HD o Audio MP3 HQ (320kbps)",
          "Telemetría en vivo vía SSE: barra de progreso reactiva con velocidad en MB/s y tiempo estimado (ETA) en tiempo real",
          "Despliegue distribuido de alta disponibilidad: Frontend en Vercel Edge y Backend API contenerizado en Render",
          "Arquitectura Cross-Platform: ejecutable en Web PWA, Android nativo (Capacitor + ADB) y entornos Docker Compose",
          "Soporte bilingüe en caliente (ES / EN), temas Claro/Oscuro/Sistema y privacidad total con almacenamiento 100% en el dispositivo"
        ],
        enlace: "https://github.com/ArturoUrbinaVelasco/MediaStream-Downloader",
        enlaceTexto: "Ver en GitHub",
        enlaceIcono: "fab fa-github",
        enlaceDemo: "https://media-stream-downloader-bice.vercel.app/",
        enlaceDemoTexto: "Probar App Web",
        enlaceDemoIcono: "fas fa-play",
        icono: "fas fa-cloud-arrow-down"
      },
      {
        id: "banderazo-app",
        titulo: "Banderazo · Taxímetro Satelital Android Nativo Oficial CDMX",
        etiqueta: "App Móvil Android",
        categoria: "Kotlin · Clean Architecture · Room · Criptografía ECDSA · CI/CD",
        descripcion: "Aplicación móvil para conductores de CDMX y Edomex desarrollada bajo principios de Clean Code y Clean Architecture. Calcula con precisión satelital absoluta el cobro por distancia y tiempo de espera en tráfico, 100% funcional sin internet ni saldo, sin anuncios y respaldada por una suite de 690+ pruebas unitarias automatizadas.",
        puntosClave: [
          "Filtro GPS satelital puro con detección de congelamiento y descarte de derivas",
          "Licenciamiento criptográfico asimétrico offline con firma ECDSA de 136 caracteres",
          "Tarifas oficiales CDMX precargadas y 100% configurables por el usuario",
          "Generador instantáneo de comprobantes y tickets desglosados para mensajería"
        ],
        enlace: "https://arturourbinavelasco.github.io/banderazo/",
        enlaceTexto: "Ver Sitio de Banderazo",
        enlaceIcono: "fas fa-external-link-alt",
        icono: "fas fa-taxi"
      },
      {
        id: "copiloto-seguro-app",
        titulo: "Copiloto Seguro · Grabadora de Cabina & Dashcam Profesional para Android",
        etiqueta: "App Móvil Android",
        categoria: "Kotlin · Jetpack Compose · Camera2 API · Criptografía ECDSA · Forense OSD",
        descripcion: "Aplicación móvil nativa complementaria para choferes de taxi y transporte privado desarrollada bajo Clean Architecture. Graba audio de cabina y video dashcam de forma discreta y robusta en segundo plano (pantalla apagada o con Waze/Maps al frente), con soporte de lente dual (carretera + pasaje), telemetría forense OSD sincronizada en subtítulos .SRT (km/h y GPS), rotación FIFO inteligente y sensor de colisión.",
        puntosClave: [
          "Grabación en segundo plano continua mediante Foreground Service de alta prioridad",
          "Soporte de cámara dual simultánea (carretera y cabina) con Camera2 API",
          "Telemetría forense OSD con subtítulos .SRT sincronizados segundo a segundo (velocidad km/h y coordenadas GPS)",
          "Protección anti-purga automática ante impacto (acelerómetro G) y atajo de pánico por volumen",
          "Modo pantalla negra OLED para discreción absoluta y máximo ahorro de batería",
          "Sistema de licencias criptográficas asimétricas offline con ECDSA P-256 en Base32 Crockford"
        ],
        enlace: "https://arturourbinavelasco.github.io/copiloto-seguro/",
        enlaceTexto: "Ver Sitio de Copiloto Seguro",
        enlaceIcono: "fas fa-external-link-alt",
        icono: "fas fa-shield-halved"
      },
      {
        id: "android-mirror-hub",
        titulo: "Android Mirror Hub · Suite Desktop Pro de Proyección & Control Android",
        etiqueta: "App de Escritorio & Android Tools",
        categoria: "Python 3.12 · CustomTkinter · Scrcpy 4.1 · ADB Wireless · Clean Architecture · Docker",
        descripcion: "Suite de escritorio moderna e intuitiva para controlar y proyectar dispositivos Android por USB y Wi-Fi sin lidiar con comandos de consola. Construida con Clean Architecture y SOLID, integra switch inalámbrico en 1 clic (detección automática de IP y puerto 5555), asistente visual de vinculación (Android 11+ Pairing Code), soporte bilingüe en caliente, temas dinámicos Claro/Oscuro y contenedor Docker multi-stage.",
        puntosClave: [
          "One-Click Wireless Switch: autodetección de IP y cambio transparente de cable a Wi-Fi (adb tcpip)",
          "Asistente visual de vinculación (Android 11+) con código de 6 dígitos y diagnóstico de errores en lenguaje humano",
          "Control de proyección avanzado: apagado de pantalla del móvil, keep-awake, always on top y selector 1080p/720p a 60 FPS",
          "Panel de telemetría en tiempo real: modelo del dispositivo, porcentaje de batería y tipo de conexión",
          "Arquitectura limpia desacoplada (ADB/Scrcpy services), empaquetado Docker y suite de pruebas unitarias automatizadas"
        ],
        enlace: "https://github.com/ArturoUrbinaVelasco/android-mirror-hub",
        enlaceTexto: "Ver en GitHub",
        enlaceIcono: "fab fa-github",
        icono: "fas fa-mobile-screen-button"
      },
      {
        id: "interoperabilidad-clinica",
        titulo: "Interoperabilidad Clínica PACS / DICOM, HL7 & Telemetría COM",
        etiqueta: "Sector Salud & Dispositivos Médicos",
        categoria: "DICOM · PACS · Mirth Connect (HL7) · Puerto COM · Hospitales",
        descripcion: "Implementación de comunicación con servidores PACS gestionando comandos DICOM (C-ECHO, C-FIND, C-MOVE) con control de descargas, simuladores de monitores de signos vitales para validar mensajería HL7 sin depender de equipo físico, e implantación en sitio en centros hospitalarios públicos y privados.",
        puntosClave: [
          "Gestión de imágenes médicas y expedientes clínicos",
          "Monitoreo por puerto COM para lámparas quirúrgicas, trazas RGB y signos vitales",
          "Motor granular de reportes quirúrgicos reutilizable entre nosocomios",
          "Capacitación presencial al personal médico, técnico y administrativo"
        ],
        enlace: "https://wa.me/525559694250?text=Hola%20Arturo,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20soluciones%20de%20interoperabilidad%20m%C3%A9dica",
        enlaceTexto: "Consultar por WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-notes-medical"
      },
      {
        id: "erp-pos-retail",
        titulo: "ERP Empresarial a Medida & Integración POS Bancario (Sector Retail)",
        etiqueta: "Sistemas Empresariales",
        categoria: "C# · .NET · SQL Server · POS Banorte/Bancomer · Retail",
        descripcion: "Desarrollo y testing durante 9 años, coordinando el ciclo completo de vida del ERP integral de la compañía: módulos de inventarios, facturación, reportería ejecutiva y la integración directa de terminales punto de venta bancarias con el sistema POS para cobro con tarjeta en sucursales.",
        puntosClave: [
          "9 años de evolución continua y soporte a sucursales y dirección",
          "Integración bancaria transaccional segura y cobro con tarjeta",
          "Aplicaciones de apoyo para eventos masivos y expos comerciales",
          "Capacitación de personal y alta disponibilidad operativa"
        ],
        enlace: "https://wa.me/525559694250?text=Hola%20Arturo,%20me%20gustar%C3%ADa%20consultar%20sobre%20tu%20experiencia%20en%20ERP%20y%20POS%20bancario",
        enlaceTexto: "Consultar por WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-cash-register"
      },
      {
        id: "ajuscofix-infraestructura",
        titulo: "AjuscoFix · Redes Estructuradas, Soporte IT & Automatización",
        etiqueta: "Automatización & Infraestructura",
        categoria: "Playwright CDP · Python · Redes Cat 6 · Soporte Hardware",
        descripcion: "División de soporte de infraestructura IT y automatización de procesos: tendido de redes estructuradas Gigabit, Wi-Fi Mesh empresarial, rescate y respaldo forense de datos, y herramientas de control de navegador para gestión desatendida en plataformas digitales.",
        puntosClave: [
          "Automatización de procesos con control directo de navegador",
          "Cableado Cat 6/6A y validación de redes locales",
          "Respaldo y recuperación de datos en medios magnéticos y sólidos",
          "Atención presencial en CDMX y soporte remoto para negocios y particulares"
        ],
        enlace: "https://www.facebook.com/AjuscoFix/",
        enlaceTexto: "Página AjuscoFix",
        enlaceIcono: "fab fa-facebook",
        icono: "fab fa-facebook"
      }
    ],

    trayectoriaEmpresarial: [
      {
        periodo: "Enero 2023 – Actualidad",
        empresa: "Sector Hospitalario y Salud",
        rol: "Desarrollador de Aplicaciones (Múltiples Tecnologías & IA)",
        resumen: "Desarrollo de software de extremo a extremo, del modelado de datos al despliegue en producción. Diseño de infraestructura RAG documental privada sobre pgvector y Ollama, asistente multiagente con LangGraph, conexión MCP, HUB corporativo con SSO JWT y sistemas de interoperabilidad DICOM/PACS en hospitales públicos y privados."
      },
      {
        periodo: "Junio 2013 – Diciembre 2022 (9 años)",
        empresa: "Sector Retail Comercial",
        rol: "Desarrollador de Sistemas · Desarrollo y Testing",
        resumen: "Desarrollo en todo el ciclo de vida de software. Creación y mantenimiento de los módulos del ERP a la medida, integración de terminales punto de venta bancarias (Banorte, Bancomer) al POS, reportería ejecutiva y soporte a sucursales y dirección."
      },
      {
        periodo: "Diciembre 2012 – Junio 2013",
        empresa: "Sector Farmacéutico Hospitalario",
        rol: "Analista de Sistemas · HelpDesk Hospitalario",
        resumen: "Implantación del sistema de control de inventarios SICIA en 50 farmacias hospitalarias de ISSEMyM con soporte presencial y remoto."
      },
      {
        periodo: "Octubre 2009 – Julio 2012",
        empresa: "Sector Industrial e Hidráulico",
        rol: "Sistemas & Infraestructura",
        resumen: "Administración de infraestructura de cómputo, servidores FTP, soporte al ERP (SAI) y reportería de ventas y estadísticas."
      }
    ],

    faqs: [
      {
        q: "¿Cómo abordan el desarrollo de sitios web en base a la necesidad del cliente?",
        a: "No utilizo plantillas genéricas pesadas ni soluciones que te aten a costos mensuales ocultos. Analizo tu giro comercial, tus servicios y tu público meta para desarrollar un sitio web a la medida (landing page, catálogo, o portal comercial) ultrarrápido, optimizado para celulares, con posicionamiento en Google (SEO) e integración directa con WhatsApp y Telegram para captar clientes desde el primer día."
      },
      {
        q: "¿En qué consiste la mejora y automatización de procesos en las distintas áreas de un negocio?",
        a: "Identifico cuellos de botella y tareas manuales repetitivas en recursos humanos, inventarios, compras, almacén, facturación y soporte. Mediante scripts especializados en Python, PowerShell y archivos BAT, automatizo la captura de datos, la importación/exportación masiva entre sistemas, la generación oficial de reportes en PDF/Excel y el diseño de tableros autoadministrables para seguimiento en tiempo real."
      },
      {
        q: "¿Instalan y configuran software comercial, libre y alternativas Open Source?",
        a: "Sí. Ofrezco instalación limpia y optimización de sistemas operativos (Windows 11/10/Server, distribuciones Linux como Ubuntu y Fedora, y macOS), paqueterías de oficina (Office 365, LibreOffice), software de diseño (Adobe, Corel) y herramientas administrativas (COI, NOI, SUA, ERP). Además, brindo asesoría para que pequeñas y medianas empresas puedan sustituir licencias comerciales costosas por alternativas Open Source y software libre de alto rendimiento con costo cero de licenciamiento."
      },
      {
        q: "¿Qué tipo de soluciones de Inteligencia Artificial desarrollan para empresas?",
        a: "Desarrollo soluciones de IA con un enfoque estricto en privacidad y soberanía de datos (On-Premise). Implemento sistemas RAG (Retrieval-Augmented Generation) sobre pgvector y modelos abiertos con Ollama para que tu empresa pueda consultar millones de documentos internos sin enviar información confidencial a servidores externos. También orquesto sistemas multiagente con LangGraph con validación humana en cada paso crítico y conectores seguros Model Context Protocol (MCP)."
      },
      {
        q: "¿Desarrollas aplicaciones móviles nativas o híbridas?",
        a: "Especialidad en desarrollo nativo para Android en Kotlin puro con Jetpack Compose y Clean Architecture (como el caso de éxito de Banderazo). Esto garantiza que la aplicación funcione a máxima velocidad, sin trabarse, consuma el mínimo de batería y pueda operar 100% sin conexión a internet mediante bases de datos locales en Room y geolocalización satelital pura."
      },
      {
        q: "¿Cómo agendamos una cotización o consulta técnica?",
        a: "Puedes contactarme directamente por WhatsApp al 55 5969 4250, por Telegram al @+525559694250, o escribirme a arturo.urbina.velasco@gmail.com con los detalles de tu proyecto o requerimiento. Atiendo proyectos de desarrollo a nivel nacional e internacional, y servicios presenciales de hardware, software y redes en la Ciudad de México y zona metropolitana."
      }
    ]
  },

  en: {
    info: {
      nombre: "Arturo Urbina Velasco",
      tituloProfesional: "Senior Software Developer | Multi-Stack, Technologies & Applied AI",
      marca: "Arturo Urbina Velasco",
      submarca: "AjuscoFix · Technology Solutions & Development",
      slogan: "Enterprise Software · Custom Websites · Process Automation · AI & Operating Systems",
      perfil: "Senior application developer with over 13 years building end-to-end enterprise software —data modeling, APIs, interfaces, deployment, and training— across healthcare, manufacturing, and retail. Expert in multiple languages and technologies: custom websites tailored to need, multi-area process improvement and automation (eliminating manual spreadsheet workflows with scripts and dashboards), installation and support of operating systems (Windows, Linux, macOS), commercial and Open Source software, native Android mobile development, private On-Premise AI architectures (multi-agent systems, document RAG with pgvector and local LLMs with zero data leaks), clinical interoperability (DICOM/PACS, HL7), and comprehensive IT infrastructure and networking.",
      telefono: "55 5969 4250",
      telefonoRaw: "525559694250",
      email: "arturo.urbina.velasco@gmail.com",
      telegram: "https://t.me/+525559694250",
      ubicacion: "Mexico City (Available for remote projects, on-site services, and IT support)",
      redes: {
        github: "https://github.com/ArturoUrbinaVelasco",
        facebook: "https://www.facebook.com/AjuscoFix/",
        whatsapp: "https://wa.me/525559694250",
        telegram: "https://t.me/+525559694250"
      }
    },

    ui: {
      navInicio: "Home",
      navStack: "Stack & AI",
      navPortafolio: "Portfolio",
      navTrayectoria: "Experience",
      navServicios: "Services",
      navCotizador: "Estimator",
      navContacto: "Contact",

      heroTag: "Multi-Stack & Technologies · Applied AI · 13+ Years",
      heroTitle1: "Enterprise Software, ",
      heroTitleGradient: "Custom Websites",
      heroTitle2: ", Automation & AI",
      heroDesc: "Over 13 years building end-to-end enterprise software across multiple languages and technologies. Custom websites tailored to your needs, multi-area process improvement and automation (eliminating manual workflows), operating systems and software installation (commercial, open source and free software), native mobile applications, private On-Premise AI, and the AjuscoFix IT infrastructure branch.",
      heroBtnProjects: "View Technical Portfolio",
      heroBtnWa: "WhatsApp",
      heroBtnTg: "Telegram",
      heroBtnGithub: "GitHub",
      heroBadgeWeb: "Custom Websites Tailored to Need",
      heroBadgeAuto: "Process Automation (Python/BAT)",
      heroBadgeSO: "Operating Systems, Commercial & Open Source",
      heroBadgeIA: "Private AI with Zero Data Leaks (On-Prem)",

      terminalPrompt1: "enterprise-ai --rag-status",
      terminalTagOk: "[OK]",
      terminalStatus1: "pgvector (HNSW) + RRF Reranking active on local private nodes",
      terminalPrompt2: "multiagente --langgraph",
      terminalTagActive: "[ACTIVE]",
      terminalStatus2: "7 area agents + 13 subagents powered by Ollama (qwen2.5-coder)",
      terminalPrompt3: "mcp-protocol --status",
      terminalTagConnected: "[CONNECTED]",
      terminalStatus3: "Model Context Protocol to PostgreSQL in read-only mode",
      terminalPrompt4: "banderazo-android --version",
      terminalStatus4: "Banderazo v0.3.0 Release · Pure Satellite Kotlin (690+ tests OK)",
      terminalPromptCopiloto: "copiloto-seguro --dashcam-status",
      terminalTagCopiloto: "[RECORDING]",
      terminalStatusCopiloto: "Copiloto Seguro v0.1.0 · Dual Dashcam + OSD (.SRT) Telemetry 100% Offline",
      terminalPrompt5: "dicom-pacs --mirth-connect",
      terminalTagOnline: "[ONLINE]",
      terminalStatus5: "Clinical interoperability across public and private hospitals",
      terminalPrompt6: "android-mirror-hub --wireless",
      terminalTagReady: "[MIRRORING]",
      terminalStatus6: "ADB Wi-Fi 5555 + Scrcpy 4.1 · Pro Desktop Suite (CustomTkinter)",
      terminalPrompt7: "mediastream --sse-telemetry",
      terminalTagStreaming: "[LIVE STREAM]",
      terminalStatus7: "React 19 + FastAPI + yt-dlp · Vercel Edge & Render (SSE 100% OK)",

      competenciasTag: "Technical Mastery",
      competenciasTitle: "Engineering Stack & Technical Competencies",
      competenciasDesc: "Comprehensive architecture spanning from private On-Premise AI inference and clinical hardware to custom administrative systems and native mobile apps.",

      proyectosTag: "Real Cases in Production",
      proyectosTitle: "Technical Portfolio & Production Solutions",
      proyectosDesc: "Enterprise platforms in daily operation, private On-Premise AI infrastructure, and native mobile apps built under the highest standards (Clean Code & automated testing).",

      trayectoriaTag: "Proven Track Record",
      trayectoriaTitle: "Professional Experience (2009 – 2026)",
      trayectoriaDesc: "Over 13 years participating in the full software lifecycle, from domain modeling and database architecture to deployment and technical user support.",

      serviciosTag: "Specialized Solutions",
      serviciosTitle: "Development, AI & IT Infrastructure Services",
      serviciosDesc: "Tailor-made engineering solutions for companies and organizations, backed by the physical hardware and networking support of AjuscoFix.",
      servicePopular: "Featured",
      serviceBtnConsult: "Inquire",

      cotizadorTag: "Estimator & Diagnosis",
      cotizadorTitle: "Calculate & Schedule Your Solution",
      cotizadorDesc: "Choose your technical need and delivery priority scheme to generate a structured message and coordinate a direct consultation.",
      cotizadorStep1: "1. Required technical specialty:",
      cotizadorStep2: "2. Specific service or solution:",
      cotizadorStep3: "3. Priority level / delivery scheme (% adjustment):",
      cotizadorStep4: "4. Technical notes, hardware or requirements:",
      cotizadorPlaceholderNotes: "E.g.: RAG implementation, Android app, NAS server, ERP, Laptop...",
      cotizadorSummaryTitle: "Request Summary",
      cotizadorSummarySelected: "Selected solution:",
      cotizadorSummaryNone: "None selected",
      cotizadorSummaryTime: "Standard delivery time:",
      cotizadorSummaryPriority: "Priority scheme:",
      cotizadorSummaryBase: "BASE REFERENCE:",
      cotizadorSummaryCustom: "Custom Quote",
      cotizadorBtnWa: "Inquire via WhatsApp",
      cotizadorBtnTg: "Inquire via Telegram",
      cotizadorDirectReply: "Direct response from Arturo Urbina Velasco.",

      aboutTag: "Philosophy & Standards",
      aboutTitle: "Arturo Urbina Velasco",
      aboutSubtitle: "Senior Application Developer | Multi-Stack, Technologies & Applied AI",
      aboutP1: "My professional commitment is to engineer software that withstands the test of time and solves critical business challenges: from guaranteeing absolute patient data privacy through private AI models that never send data to external clouds, to ensuring a satellite mobile app operates with exact cent-level precision amid Mexico City traffic.",
      aboutP2: "Through AjuscoFix, I maintain a direct connection with physical infrastructure and hardware engineering, ensuring every computer, server, or local network runs at peak thermal and operational efficiency.",
      aboutBox1Title: "Custom Websites",
      aboutBox1Desc: "Landing pages, online catalogs, and corporate portals tailored to your exact needs.",
      aboutBox2Title: "Process Automation",
      aboutBox2Desc: "Python/BAT scripts eliminating tedious manual spreadsheet work across departments.",
      aboutBox3Title: "OS & Open Source",
      aboutBox3Desc: "Windows, Linux, macOS, office suites, ERPs, and zero-license Open Source migration.",
      aboutBox4Title: "On-Prem AI & Mobile",
      aboutBox4Desc: "Private RAG without data leaks, multi-agent frameworks, and native Kotlin apps.",
      aboutEduTitle: "Academic Background & Technical Focus",
      aboutEduSub: "Academic & Practical Foundation",
      aboutEdu1Title: "Computer Science Technician · CECyTEM",
      aboutEdu1Desc: "Colegio de Estudios Científicos y Tecnológicos del Estado de México",
      aboutEdu2Title: "Computer Science Engineering · UPVM",
      aboutEdu2Desc: "Universidad Politécnica del Valle de México",
      aboutEdu3Title: "Defensive Cybersecurity & Digital Forensics",
      aboutEdu3Desc: "Reverse engineering, storage media recovery (HDD/SSD/RAW), and systems security",

      faqTag: "Common Questions",
      faqTitle: "Frequently Asked Questions",
      faqDesc: "Clear technical and methodological answers regarding software development, AI, and IT infrastructure.",

      contactTag: "Direct Contact",
      contactTitle: "Let's Start Your Project or Solution",
      contactDesc: "Available for technical consulting, multi-stack software development, private On-Premise AI agents, and on-site/remote infrastructure support.",
      contactWaLabel: "Direct WhatsApp:",
      contactTgLabel: "Direct Telegram:",
      contactEmailLabel: "Email Address:",
      contactLocationLabel: "Location:",
      contactLocationVal: "Mexico City (Available for on-site services, nationwide and international remote projects)",
      contactCardTitle: "Do you have a project or technical requirement?",
      contactCardDesc: "Message me directly on WhatsApp or Telegram to coordinate a diagnostic call or technical proposal:",
      contactCardBtnWa: "Chat via WhatsApp",
      contactCardBtnTg: "Contact via Telegram",
      contactCardBtnFb: "Message on Messenger (AjuscoFix)",
      contactCardSecure: "Absolute confidentiality and direct response guaranteed",

      footerRights: "All rights reserved.",
      footerSub: "Senior Application Developer · Multi-Stack, Technologies & Applied AI.",
      visitorLabel: "Visitors:",
      visitorTitle: "Total site visits",
      visitorTitleShow: "View visit statistics",
      visitorTitleHide: "Hide visit statistics",
      visitorStatsTooltip: "View detailed metrics and statistics by day, week, and month"
    },

    metricas: [
      { numero: "13+", label: "Years of Experience", sub: "End-to-end enterprise software engineering" },
      { numero: "Multi-Area", label: "Process Automation", sub: "Eliminating repetitive manual spreadsheet tasks" },
      { numero: "On-Prem", label: "Private & Secure AI", sub: "Local models with zero external data leaks" },
      { numero: "Open/Com", label: "Open Source & Commercial", sub: "Operating systems, office suites and licenses" }
    ],

    competenciasClave: [
      {
        categoria: "Operating Systems & Virtual Environments",
        icono: "fab fa-windows",
        items: [
          "Windows (11, 10, 8, 7, XP)",
          "Windows Server (2003 – 2022)",
          "Linux (Ubuntu Server, Fedora, Debian)",
          "macOS",
          "VirtualBox & VMware Workstation",
          "Performance & Service Tuning",
          "Active Directory & User Accounts",
          "FTP Servers & NAS Storage"
        ]
      },
      {
        categoria: "Office Suites, Commercial & Open Source Software",
        icono: "fas fa-box-open",
        items: [
          "Microsoft Office 365 (Advanced Excel, Word, Access, Outlook)",
          "LibreOffice & OpenOffice (Free Software)",
          "Administrative Systems (COI, NOI, SUA)",
          "ERP Castelec SAI & SICIA (Inventory Control)",
          "Adobe Creative Pack & Corel Draw",
          "Antivirus & Network Firewalls (SonicWall, Fortinet, Nod32)",
          "Open Source Solutions for Small & Medium Businesses",
          "Remote Assistance (TeamViewer, AnyDesk)"
        ]
      },
      {
        categoria: "Process Improvement & Workflow Automation",
        icono: "fas fa-cogs",
        items: [
          "Eliminating Manual Workflows in Excel & Word",
          "Automation Scripts (Python, PowerShell, Bash, BAT)",
          "Semantic Document Parsing & Bulk Upload",
          "Self-Administered Web Dashboards",
          "Official Automated PDF and Excel Reports",
          "Cross-Department Integration (HR, Purchasing, Warehouse, Sales)",
          "Scheduled Background Jobs & Automatic Backups"
        ]
      },
      {
        categoria: "Custom Websites & Full-Stack Platforms",
        icono: "fas fa-globe",
        items: [
          "Websites Custom-Built to Your Exact Needs",
          "High-Converting Landing Pages",
          "Online Catalogs & Commercial Portals",
          "React 19, TypeScript, Vite, Tailwind CSS, FastAPI",
          "Real-Time Telemetry with Server-Sent Events (SSE)",
          "First-Mobile Responsive Design & PWA",
          "Corporate Application HUB (SSO with JWT)"
        ]
      },
      {
        categoria: "Applied Artificial Intelligence",
        icono: "fas fa-brain",
        items: [
          "LangGraph (Autonomous Multi-Agent Systems)",
          "Ollama (On-Premise Local Inference)",
          "Private RAG (pgvector, HNSW, RRF)",
          "Model Context Protocol (MCP)",
          "Human-in-the-Loop Validation",
          "MinerU & Intelligent Document Extraction",
          "Prompt Engineering"
        ]
      },
      {
        categoria: "Native Mobile Development & Hardware",
        icono: "fas fa-mobile-alt",
        items: [
          "Kotlin (Native Android, Jetpack Compose)",
          "Capacitor (Android Cross-Platform & ADB Deploy)",
          "Clean Architecture & Room SQLite (100% Offline)",
          "Desktop Android Pro Mirroring (CustomTkinter, Scrcpy, Wi-Fi ADB)",
          "Asymmetric ECDSA Cryptography Offline",
          "DICOM / PACS & HL7 Mirth Connect",
          "COM Serial Port Telemetry (Medical Devices, Surgical Lights)",
          "Structured Cabling Cat 6/6A",
          "Unified Mesh Wi-Fi & AjuscoFix Support"
        ]
      }
    ],

    categorias: [
      { id: "todos", nombre: "All Specialties", icono: "fas fa-layer-group" },
      { id: "web", nombre: "Websites & Automation", icono: "fas fa-laptop-code" },
      { id: "ia", nombre: "Applied AI & Multi-Agent", icono: "fas fa-brain" },
      { id: "movil", nombre: "Mobile & Multi-Device Apps", icono: "fas fa-mobile-alt" },
      { id: "onpremise", nombre: "Infrastructure & On-Prem", icono: "fas fa-server" },
      { id: "ajuscofix", nombre: "Operating Systems, Software & IT", icono: "fas fa-tools" }
    ],

    servicios: [
      {
        id: "sitios-web-a-medida",
        categoria: "web",
        titulo: "Custom Websites Built to Your Needs",
        destacado: true,
        descripcion: "Design and engineering of modern websites, landing pages, digital catalogs, and self-administered portals tailored to your budget and business goals. Lightweight, lightning-fast, mobile-optimized, and connected to WhatsApp and Telegram.",
        detalles: [
          "Built to measure for your business, no slow generic templates",
          "Mobile-first responsive optimization and Google Search SEO",
          "Direct integration with WhatsApp, Telegram, and interactive quote tool",
          "Free or low-cost self-hosted deployment options"
        ],
        tiempo: "3 to 7 days depending on scope",
        precioDesde: "Custom Quote",
        icono: "fas fa-globe"
      },
      {
        id: "automatizacion-procesos",
        categoria: "web",
        titulo: "Process Improvement & Workflow Automation Across Departments",
        destacado: true,
        descripcion: "Digital transformation of operational workflows in HR, inventory, purchasing, warehouse, sales, and support. We replace tedious manual data entry in spreadsheets with automated scripts, data validation, and real-time dashboards.",
        detalles: [
          "Elimination of repetitive tasks in Excel and Word via automation",
          "Custom scripts in Python, PowerShell, and BAT files for data pipeline",
          "Bulk data import/export and official dynamic PDF/Excel report generation",
          "Self-administered web dashboards for operational monitoring"
        ],
        tiempo: "Per sprint or project",
        precioDesde: "Custom Quote",
        icono: "fas fa-cogs"
      },
      {
        id: "so-paqueterias-software",
        categoria: "ajuscofix",
        titulo: "Operating Systems, Office Suites & Software (Commercial & Open Source)",
        destacado: true,
        descripcion: "Clean installation, configuration, and maintenance of operating systems (Windows, Linux, macOS), productivity suites (Office, LibreOffice), administrative ERP software, and guidance on migrating to zero-license Open Source alternatives.",
        detalles: [
          "Clean installation of Windows (11/10/Server), Linux distros, and macOS",
          "Deployment of productivity suites: Office 365, LibreOffice, and OpenOffice",
          "Implementation of accounting/admin software (COI, NOI, SUA) and ERP systems",
          "Consulting to replace costly proprietary licenses with high-grade Open Source"
        ],
        tiempo: "Same day / 24 hrs",
        precioDesde: "Custom Quote",
        icono: "fas fa-laptop"
      },
      {
        id: "ia-onpremise-rag",
        categoria: "ia",
        titulo: "Private On-Premise AI Architectures (RAG & Local LLMs)",
        destacado: true,
        descripcion: "Engineering of semantic document search (RAG) with pgvector, hybrid RRF retrieval, and reranking running on private servers. Maximum confidentiality: zero data sent to external cloud vendors.",
        detalles: [
          "Local model inference powered by Ollama and state-of-the-art open weights",
          "Vector indexing in PostgreSQL (pgvector HNSW and tsvector)",
          "Hash deduplication and asynchronous document ingestion pipelines",
          "Secure Model Context Protocol (MCP) connectors in read-only mode"
        ],
        tiempo: "Per sprint / requirement",
        precioDesde: "Custom Quote",
        icono: "fas fa-brain"
      },
      {
        id: "sistemas-multiagente",
        categoria: "ia",
        titulo: "Autonomous Multi-Agent Systems (LangGraph)",
        destacado: true,
        descripcion: "Orchestration of multi-agent assistants with area agents and specialized subagents, step-by-step execution traceability, persistent memory, and administrative control panels.",
        detalles: [
          "LangGraph orchestration with mandatory Human-in-the-Loop validation",
          "Integration with enterprise communication channels (WhatsApp, Telegram, Teams, SAP)",
          "Specialized agents for HR, developer assistance, technical support, and audit",
          "Cost-benefit benchmarking of open-weight models vs. frontier models"
        ],
        tiempo: "Custom architecture",
        precioDesde: "Custom Quote",
        icono: "fas fa-robot"
      },
      {
        id: "desarrollo-android-nativo",
        categoria: "movil",
        titulo: "Native Android Mobile Development (Kotlin / Compose)",
        destacado: true,
        descripcion: "Engineering of native mobile apps in pure Kotlin following Uncle Bob's Clean Architecture, Room SQLite persistence, and guaranteed 100% offline functionality.",
        detalles: [
          "Local SQLite / Room persistence operating without continuous internet connection",
          "Pure satellite high-precision GPS filtering and drift rejection (Banderazo)",
          "Offline asymmetric cryptographic licensing with ECDSA signatures",
          "Field telemetry, staff attendance, and on-site inspection applications"
        ],
        tiempo: "Agile delivery",
        precioDesde: "Custom Quote",
        icono: "fas fa-mobile-alt"
      },
      {
        id: "plataformas-web-hub",
        categoria: "web",
        titulo: "Full-Stack Web Development & Corporate Application HUB",
        destacado: false,
        descripcion: "Development of corporate web portals, self-administered dashboards, transactional systems, and application HUBs with unified Single Sign-On (SSO) authentication.",
        detalles: [
          "Modern high-speed frontend with React, Vite, and TailwindCSS",
          "Robust backend with Node.js 22 (Express) and Python (FastAPI)",
          "Single Sign-On (SSO) authentication with JWT RS256 and JWKS",
          "Official dynamic PDF report generation and mass export features"
        ],
        tiempo: "According to scope",
        precioDesde: "Custom Quote",
        icono: "fas fa-network-wired"
      },
      {
        id: "integracion-clinica-com",
        categoria: "onpremise",
        titulo: "Clinical Interoperability & Medical Hardware (DICOM / HL7 / COM)",
        destacado: false,
        descripcion: "Healthcare system integration with PACS servers (DICOM commands C-ECHO, C-FIND, C-MOVE), HL7 messaging over Mirth Connect, and real-time serial COM port acquisition.",
        detalles: [
          "Vital signs simulators for HL7 messaging validation without physical hardware",
          "On-site deployment and rollout in public and private tertiary hospital centers",
          "COM serial port telemetry for surgical lights, RGB tracking, and patient monitors",
          "Electronic health record systems and medical service sheet management"
        ],
        tiempo: "Specialized consulting",
        precioDesde: "Custom Quote",
        icono: "fas fa-hospital"
      },
      {
        id: "infraestructura-docker-linux",
        categoria: "onpremise",
        titulo: "On-Premise DevOps, Dockerization & Vaultwarden",
        destacado: false,
        descripcion: "Service isolation via Docker containers, secure reverse proxies (nginx / Traefik with automatic SSL), and corporate centralized secrets management.",
        detalles: [
          "Comprehensive multi-service containerization with Docker Compose",
          "Removal of plaintext credentials from code repositories via Vaultwarden",
          "Code-versioned database migrations using Flyway",
          "Virtual machine testbeds replicating production environments prior to rollout"
        ],
        tiempo: "1 to 5 days",
        precioDesde: "Custom Quote",
        icono: "fas fa-server"
      },
      {
        id: "erp-pos-administrativo",
        categoria: "web",
        titulo: "Administrative ERP Systems & Banking POS Integration",
        destacado: false,
        descripcion: "Custom ERP development and maintenance, inventory control, billing, executive reporting, and direct transactional integration of bank POS terminals with retail checkout.",
        detalles: [
          "Direct banking POS terminal integration (Banorte, Bancomer) for store card payments",
          "Comprehensive inventory, client catalog, and service sheet management",
          "Companion applications for commercial trade shows, expos, and conventions",
          "Support and data migration for administrative ERPs (SAI, SICIA, COI, NOI, SUA)"
        ],
        tiempo: "Custom project",
        precioDesde: "Custom Quote",
        icono: "fas fa-cash-register"
      },
      {
        id: "ajuscofix-redes-cableado",
        categoria: "ajuscofix",
        titulo: "Structured Cabling, Mesh Wi-Fi & Local Servers (AjuscoFix)",
        destacado: true,
        descripcion: "Installation of Cat 6/6A Gigabit cabling for clinics, law offices, and homes, unified mesh wireless networks eliminating dead zones, and local NAS backup servers.",
        detalles: [
          "Aesthetic and shielded Cat 6 cabling deployment free of interference",
          "Unified Mesh Wi-Fi setup with single SSID roaming across entire facilities",
          "Local NAS storage servers for automated off-grid backups",
          "Local switchboard and security camera installations"
        ],
        tiempo: "Same day or per project",
        precioDesde: "Custom Quote",
        icono: "fas fa-wifi"
      },
      {
        id: "ajuscofix-mantenimiento-hardware",
        categoria: "ajuscofix",
        titulo: "Preventive, Corrective & Thermal Maintenance (Gamer & Workstations)",
        destacado: false,
        descripcion: "Component-level technical maintenance for laptops, desktop computers, and workstations. Deep cleaning, anti-static treatment, and high-performance thermal paste re-application.",
        detalles: [
          "Careful disassembly and dust removal from heat pipes and blower fans",
          "Application of top-tier thermal compounds for maximum heat dissipation",
          "Pre- and post-service thermal stress testing and diagnostic validation",
          "Workshop service or direct on-site assistance in Mexico City"
        ],
        tiempo: "2 to 4 hours",
        precioDesde: "Custom Quote",
        icono: "fas fa-microchip"
      },
      {
        id: "ajuscofix-formateo-recuperacion",
        categoria: "ajuscofix",
        titulo: "Clean OS Reinstallation, SSD Upgrades & Data Recovery",
        destacado: false,
        descripcion: "Clean bloatware-free OS reinstallations (Windows, Linux, macOS), NVMe/SATA SSD upgrades for 10x faster performance, and data rescue from damaged drives.",
        detalles: [
          "Complete mirror backup of documents and user data prior to any intervention",
          "NVMe / SATA SSD installations that revitalize older hardware",
          "Data rescue from disks with damaged sectors, filesystem corruption, or RAW partitions",
          "Remote assistance via TeamViewer / AnyDesk or on-site service"
        ],
        tiempo: "Same day / 24 hrs",
        precioDesde: "Custom Quote",
        icono: "fas fa-hdd"
      }
    ],

    proyectos: [
      {
        id: "ia-rag-empresarial",
        titulo: "Private Document RAG & Multi-Agent Assistant (Healthcare Sector)",
        etiqueta: "Applied AI & Multi-Agent",
        categoria: "LangGraph · Ollama · pgvector · MCP · Python",
        descripcion: "Architectural design and production rollout of hybrid semantic document search (RRF + reranking) running on private On-Premise nodes, ensuring zero clinical or employee data leakage to third-party clouds. Developer assistant featuring 7 area agents and 13 specialized subagents with execution tracing, connected to relational databases via Model Context Protocol (MCP) in strict read-only mode.",
        puntosClave: [
          "Hybrid semantic search over PostgreSQL + pgvector (HNSW) and tsvector",
          "Local private inference with Ollama (qwen2.5-coder) on bare-metal servers",
          "Secure MCP database connectors with read-only permission isolation",
          "Conversational HR prototype agents with mandatory human-in-the-loop approval",
          "Prototyped integrations with enterprise channels (WhatsApp, Telegram, Teams, SAP)"
        ],
        enlace: "https://wa.me/525559694250?text=Hello%20Arturo,%20I'm%20interested%20in%20learning%20more%20about%20your%20private%20RAG%20and%20AI%20agents%20infrastructure",
        enlaceTexto: "Inquire via WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-brain"
      },
      {
        id: "hub-corporativo-sso",
        titulo: "Corporate Application HUB & Modular Web/AI Orchestrator",
        etiqueta: "Platform & Integration",
        categoria: "Node 22 · Express · React · Vite · PostgreSQL 18 · Docker · Traefik",
        descripcion: "Unified, secure access portal (SSO) for internal corporate software with JWT RS256 and JWKS authentication, granular role-based permissions, live Docker service monitoring, and access logs. Unifies Job Descriptions with semantic Word parsing, Staff Attendance with a companion Android app, and Traefik reverse proxy orchestration.",
        puntosClave: [
          "Segregated production networks: internal corporate LAN and secure external access",
          "Documented integration contracts for third-party developer microservices",
          "Domain-driven database consolidation versioned via Flyway code migrations",
          "Unified orchestrator for web and AI agent modules under a single domain with Traefik"
        ],
        enlace: "https://wa.me/525559694250?text=Hello%20Arturo,%20I'd%20like%20more%20details%20about%20the%20Corporate%20SSO%20HUB",
        enlaceTexto: "Inquire via WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-cubes"
      },
      {
        id: "mediastream-downloader",
        titulo: "MediaStream Downloader · First-Mobile & Cross-Platform Full-Stack App",
        etiqueta: "Full-Stack Web, Mobile & Cloud API",
        categoria: "React 19 · TypeScript · FastAPI · yt-dlp · SSE · Capacitor · Docker · Vercel & Render",
        descripcion: "First-Mobile, cross-platform full-stack application (Web PWA, native Android via Capacitor, and Desktop) engineered for single-touch video and high-fidelity audio extraction. Built with Clean Architecture, live streaming telemetry over Server-Sent Events (SSE), asynchronous FastAPI and yt-dlp backend deployed on Render, high-performance React 19 UI on Vercel Edge, and strict Zero-Data Retention with 100% client-side privacy.",
        puntosClave: [
          "Single-touch workflow: smart URL paste, platform metadata detection, and instant Video HD or 320kbps MP3 audio download",
          "Live SSE streaming telemetry: reactive progress bar showing download speed in MB/s and real-time ETA calculation",
          "Distributed cloud deployment: Next-gen React frontend on Vercel Edge and containerized FastAPI backend on Render",
          "Cross-Platform architecture: runs on Web/PWA, native Android (Capacitor with ADB automation), and Docker environments",
          "Hot-swap bilingual i18n (ES / EN), dynamic Light/Dark/System themes, and zero-retention private client storage"
        ],
        enlace: "https://github.com/ArturoUrbinaVelasco/MediaStream-Downloader",
        enlaceTexto: "View on GitHub",
        enlaceIcono: "fab fa-github",
        enlaceDemo: "https://media-stream-downloader-bice.vercel.app/",
        enlaceDemoTexto: "Launch Web App",
        enlaceDemoIcono: "fas fa-play",
        icono: "fas fa-cloud-arrow-down"
      },
      {
        id: "banderazo-app",
        titulo: "Banderazo · Official CDMX Native Android Satellite Taximeter",
        etiqueta: "Android Native Mobile App",
        categoria: "Kotlin · Clean Architecture · Room · ECDSA Crypto · CI/CD",
        descripcion: "Android mobile application for commercial drivers in Mexico City and State of Mexico, built under strict Clean Code and Clean Architecture standards. Computes wait times and distance fares with absolute satellite accuracy, operates 100% offline without mobile data or credit, displays zero ads, and is verified by a suite of 690+ automated unit tests.",
        puntosClave: [
          "Pure satellite GPS filtering with lock detection and drift rejection",
          "Offline asymmetric cryptographic licensing verified by 136-character ECDSA signatures",
          "Official preloaded CDMX municipal rates with full user customization",
          "Instant receipt and itemized fare ticket generator ready for messaging"
        ],
        enlace: "https://arturourbinavelasco.github.io/banderazo/",
        enlaceTexto: "Visit Banderazo Site",
        enlaceIcono: "fas fa-external-link-alt",
        icono: "fas fa-taxi"
      },
      {
        id: "copiloto-seguro-app",
        titulo: "Copiloto Seguro · Cabin Voice Recorder & Professional Dashcam for Android",
        etiqueta: "Android Native Mobile App",
        categoria: "Kotlin · Jetpack Compose · Camera2 API · ECDSA Crypto · OSD Telemetry",
        descripcion: "Native Android application engineered for taxi and rideshare drivers built under Clean Architecture. Records cabin voice audio and road video dashcam discreetly in the background (with screen locked or while navigating with Google Maps/Waze), supporting dual concurrent lens recording, synchronized forensic OSD telemetry in .SRT sidecars (speed in km/h and GPS coordinates), intelligent FIFO rotation, and G-force collision detection.",
        puntosClave: [
          "Seamless background recording via Android 14+ high-priority Foreground Service",
          "Concurrent dual camera support (front cabin + rear road) utilizing native Camera2 API",
          "Forensic OSD telemetry generating synchronized .SRT subtitle sidecars (live km/h and GPS coordinates)",
          "Anti-purge protection triggered by hardware accelerometer G-sensor impact or silent volume panic key",
          "Pure OLED black screen mode for absolute discretion and optimal battery preservation",
          "100% offline asymmetric cryptographic licensing verified by ECDSA P-256 in Crockford Base32"
        ],
        enlace: "https://arturourbinavelasco.github.io/copiloto-seguro/",
        enlaceTexto: "Visit Copiloto Seguro Site",
        enlaceIcono: "fas fa-external-link-alt",
        icono: "fas fa-shield-halved"
      },
      {
        id: "android-mirror-hub",
        titulo: "Android Mirror Hub · Pro Desktop Android Mirroring & Control Suite",
        etiqueta: "Desktop App & Android Tooling",
        categoria: "Python 3.12 · CustomTkinter · Scrcpy 4.1 · ADB Wireless · Clean Architecture · Docker",
        descripcion: "Modern, high-performance desktop suite designed for wireless and USB Android device mirroring, debugging, and management without console overhead. Engineered with Clean Architecture and SOLID principles, featuring one-click Wi-Fi transition, visual Android 11+ pairing wizard, dynamic Dark/Light themes, on-the-fly bilingual i18n, and multi-stage Docker orchestration.",
        puntosClave: [
          "One-Click Wireless Switch: automatic IP discovery and seamless cable-to-Wi-Fi transition (adb tcpip)",
          "Visual pairing assistant for Android 11+ with 6-digit codes and humanized connection diagnostics",
          "Advanced mirroring controls: device screen-off to save battery, keep-awake, always on top, and 1080p/720p 60 FPS",
          "Real-time device telemetry: hardware model, live battery percentage, and connection link status",
          "Clean Architecture with decoupled ADB/Scrcpy services, multi-stage Dockerfile, and automated unittest suites"
        ],
        enlace: "https://github.com/ArturoUrbinaVelasco/android-mirror-hub",
        enlaceTexto: "View on GitHub",
        enlaceIcono: "fab fa-github",
        icono: "fas fa-mobile-screen-button"
      },
      {
        id: "interoperabilidad-clinica",
        titulo: "Clinical Interoperability: PACS / DICOM, HL7 & COM Telemetry",
        etiqueta: "Healthcare Sector & Medical Hardware",
        categoria: "DICOM · PACS · Mirth Connect (HL7) · COM Port · Hospitals",
        descripcion: "Implementation of PACS server communication supporting DICOM operations (C-ECHO, C-FIND, C-MOVE) with download progress monitoring and cancellation, vital signs simulators validating HL7 messaging without requiring live medical monitors, and on-site rollout in major public and private hospitals.",
        puntosClave: [
          "Medical imaging and electronic health records management",
          "COM serial port telemetry monitoring surgical lights, RGB traces, and patient monitors",
          "Granular surgical reporting engine reusable across diverse hospital facilities",
          "Direct in-person training for medical, nursing, and administrative personnel"
        ],
        enlace: "https://wa.me/525559694250?text=Hello%20Arturo,%20I'm%20interested%20in%20your%20clinical%20interoperability%20solutions",
        enlaceTexto: "Inquire via WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-notes-medical"
      },
      {
        id: "erp-pos-retail",
        titulo: "Custom Enterprise ERP & Banking POS Integration (Retail Sector)",
        etiqueta: "Enterprise Systems",
        categoria: "C# · .NET · SQL Server · Banorte/Bancomer POS · Retail",
        descripcion: "Full development and testing coordination over 9 years, leading the complete lifecycle of the company's proprietary ERP: inventory management, electronic invoicing, executive analytics, and direct transactional integration of bank point-of-sale card terminals with branch checkouts.",
        puntosClave: [
          "9 years of continuous software evolution and direct executive/branch support",
          "Secure bank transaction processing for credit/debit card payments",
          "Auxiliary standalone sales applications for trade expos and commercial conventions",
          "Direct staff training and near-zero operational downtime"
        ],
        enlace: "https://wa.me/525559694250?text=Hello%20Arturo,%20I'd%20like%20to%20learn%20more%20about%20your%20experience%20in%20custom%20ERP%20and%20banking%20POS",
        enlaceTexto: "Inquire via WhatsApp",
        enlaceIcono: "fab fa-whatsapp",
        icono: "fas fa-cash-register"
      },
      {
        id: "ajuscofix-infraestructura",
        titulo: "AjuscoFix · Structured Networking, IT Support & Automation",
        etiqueta: "Automation & Infrastructure",
        categoria: "Playwright CDP · Python · Cat 6 Networking · Hardware Support",
        descripcion: "Physical IT infrastructure support and process automation: Cat 6/6A Gigabit cabling, business-grade Mesh Wi-Fi, forensic data rescue from failed storage drives, and automated browser control bots via Chrome DevTools Protocol for headless management on digital platforms.",
        puntosClave: [
          "Browser process automation for unattended business workflows",
          "Cat 6/6A structured cabling installation and local LAN validation",
          "Data backup and recovery from magnetic and solid-state media",
          "On-site support in Mexico City and remote assistance for SMBs and individuals"
        ],
        enlace: "https://www.facebook.com/AjuscoFix/",
        enlaceTexto: "AjuscoFix Facebook",
        enlaceIcono: "fab fa-facebook",
        icono: "fab fa-facebook"
      }
    ],

    trayectoriaEmpresarial: [
      {
        periodo: "January 2023 – Present",
        empresa: "Healthcare & Clinical Sector",
        rol: "Application Developer (Multi-Stack & Applied AI)",
        resumen: "End-to-end software development, from data architecture to production rollout. Engineered private document RAG on pgvector and Ollama, LangGraph multi-agent assistants, Model Context Protocol connectors, corporate SSO HUB with JWT, and DICOM/PACS clinical interoperability across public and private hospitals."
      },
      {
        periodo: "June 2013 – December 2022 (9 years)",
        empresa: "Retail Commercial Sector",
        rol: "Systems Developer · Software Development & Testing",
        resumen: "Full lifecycle engineering for custom enterprise ERP software: inventory, invoicing, executive analytics, direct banking POS integration (Banorte, Bancomer) for in-store card payments, and comprehensive technical support to retail branches and corporate leadership."
      },
      {
        periodo: "December 2012 – June 2013",
        empresa: "Hospital Pharmaceutical Sector",
        rol: "Systems Analyst · Hospital HelpDesk Support",
        resumen: "Implementation of the SICIA pharmacy inventory system across 50 hospital pharmacies of ISSEMyM, providing on-site and remote technical assistance."
      },
      {
        periodo: "October 2009 – July 2012",
        empresa: "Industrial & Hydraulics Sector",
        rol: "Systems & IT Infrastructure",
        resumen: "Administration of corporate computing infrastructure, FTP file servers, ERP (SAI) support for internal and external users, and executive sales analytics."
      }
    ],

    faqs: [
      {
        q: "How do you approach developing custom websites tailored to business needs?",
        a: "I never use slow, bloated generic themes or solutions that lock you into unnecessary monthly fees. I analyze your business domain, target audience, and key services to build a tailored website (landing page, online catalog, or business portal) that is lightweight, lightning-fast, mobile-first, SEO-ready for Google, and directly connected with WhatsApp and Telegram to convert visitors from day one."
      },
      {
        q: "What does process improvement and multi-area automation entail?",
        a: "I identify operational bottlenecks and repetitive manual spreadsheet work across Human Resources, inventory, purchasing, warehouse, sales, and support. Through specialized Python, PowerShell, and BAT automation scripts, I automate data capture, bulk cross-system synchronization, official PDF/Excel report generation, and interactive self-administered dashboards for real-time visibility."
      },
      {
        q: "Do you install and configure commercial software, free software, and Open Source alternatives?",
        a: "Yes. I provide clean installation, tuning, and licensing support for operating systems (Windows 11/10/Server, Linux distributions like Ubuntu/Fedora, and macOS), productivity suites (Office 365, LibreOffice), design software (Adobe, Corel), and administrative ERP software. Additionally, I advise businesses on replacing costly commercial licenses with high-performance Open Source alternatives at zero software licensing cost."
      },
      {
        q: "What type of Artificial Intelligence solutions do you build for businesses?",
        a: "I specialize in private, sovereign On-Premise AI architectures. I implement Retrieval-Augmented Generation (RAG) over PostgreSQL with pgvector and open-weight models with Ollama, enabling your organization to search millions of internal documents without exposing confidential data to external cloud services. I also build multi-agent systems via LangGraph with Human-in-the-Loop validation and secure Model Context Protocol (MCP) connectors."
      },
      {
        q: "Do you develop native mobile applications or hybrid apps?",
        a: "My specialty is native Android development in pure Kotlin with Jetpack Compose and Clean Architecture (as demonstrated in Banderazo). This guarantees maximum performance, fluid responsiveness, minimal battery consumption, and 100% offline functionality using local Room SQLite databases and pure satellite GPS."
      },
      {
        q: "How can we schedule a consultation or quote?",
        a: "You can message me directly on WhatsApp at +52 55 5969 4250, on Telegram at @+525559694250, or email me at arturo.urbina.velasco@gmail.com with your project specifications. I take on nationwide and international remote development projects, as well as on-site hardware, software, and networking services across Mexico City and surrounding areas."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
