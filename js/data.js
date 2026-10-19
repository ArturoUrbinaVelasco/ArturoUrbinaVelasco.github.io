/**
 * data.js - Base de datos de Arturo Urbina Velasco & AjuscoFix
 * Congruente al 100% con CV profesional: 13+ años de trayectoria en desarrollo empresarial,
 * líder de IA Aplicada, sistemas multiagente on-premise, interoperabilidad clínica,
 * aplicaciones móviles nativas, full-stack y soporte de infraestructura IT.
 */

const SITE_DATA = {
  info: {
    nombre: "Arturo Urbina Velasco",
    tituloProfesional: "Desarrollador de Aplicaciones Senior | Lead de IA Aplicada & Integración de Sistemas",
    marca: "Arturo Urbina Velasco",
    submarca: "AjuscoFix · Soluciones Tecnológicas & Desarrollo",
    slogan: "Software Empresarial de Extremo a Extremo · IA On-Premise · Mobile & Infraestructura",
    perfil: "Desarrollador de aplicaciones con más de 13 años construyendo software empresarial de extremo a extremo —modelo de datos, API, interfaz, despliegue y capacitación— en salud, manufactura y retail. Responsable del frente de Inteligencia Artificial en Biossmann Group (sistemas multiagente, RAG documental y LLMs en infraestructura on-premise propia sin fuga de datos). Amplia experiencia en desarrollo móvil nativo Android, arquitecturas web modernas, interoperabilidad clínica (DICOM/PACS, HL7), infraestructura Docker/Linux y soporte integral de hardware y redes.",
    telefono: "55 5969 4250",
    telefonoRaw: "525559694250",
    email: "arturo.urbina.velasco@gmail.com",
    ubicacion: "Ciudad de México (Atención a proyectos remotos, presenciales y soporte en sitio)",
    cedulaProfesional: "Cédula profesional 5534454 · Certificación White Hat CCAT (Forense & Reverse Engineering)",
    redes: {
      github: "https://github.com/ArturoUrbinaVelasco",
      facebook: "https://www.facebook.com/AjuscoFix/",
      whatsapp: "https://wa.me/525559694250"
    }
  },

  metricas: [
    { numero: "13+", label: "Años de Trayectoria", sub: "Software empresarial de extremo a extremo" },
    { numero: "On-Prem", label: "IA Privada & Segura", sub: "Modelos locales sin fuga de datos" },
    { numero: "690+", label: "Tests Automatizados", sub: "Clean Architecture, SOLID y CI/CD" },
    { numero: "End-to-End", label: "Arquitectura Completa", sub: "Desde el chip/hardware hasta el LLM" }
  ],

  competenciasClave: [
    {
      categoria: "Inteligencia Artificial Aplicada",
      icono: "fas fa-brain",
      items: ["LangGraph", "Ollama (Inferencia Local)", "LLMs On-Premise", "RAG (pgvector, HNSW, RRF)", "Sistemas Multiagente", "Model Context Protocol (MCP)", "Human-in-the-Loop", "Prompt Engineering"]
    },
    {
      categoria: "Lenguajes & Frameworks",
      icono: "fas fa-code",
      items: ["Kotlin (Android Nativo, Compose)", "JavaScript / Node.js", "Python (FastAPI, ReportLab)", "React / Vite / TailwindCSS", "C# (.NET, WPF, WinForms)", "SQL Avanzado", "PowerShell & Bash"]
    },
    {
      categoria: "Bases de Datos & Persistencia",
      icono: "fas fa-database",
      items: ["PostgreSQL (pgvector, dominios)", "SQL Server", "MySQL", "SQLite / Room", "Migraciones Flyway", "Stored Procedures & Vistas", "Respaldos Automatizados"]
    },
    {
      categoria: "DevOps, Infraestructura & Seguridad",
      icono: "fas fa-server",
      items: ["Docker & Docker Compose", "Linux (Ubuntu Server)", "nginx & Traefik (HTTPS)", "SSO con JWT RS256 / JWKS", "Vaultwarden (Secretos)", "Certified White Hat (CCAT)", "Forense & Reverse Engineering"]
    },
    {
      categoria: "Integración Especializada & Hardware",
      icono: "fas fa-hospital",
      items: ["DICOM / PACS (C-ECHO, C-FIND, C-MOVE)", "HL7 sobre Mirth Connect", "Puerto Serie COM (Equipos Médicos)", "Cableado Estructurado Cat 6/6A", "Wi-Fi Mesh Unificado", "Soporte IT & Hardware (AjuscoFix)"]
    }
  ],

  categorias: [
    { id: "todos", nombre: "Todas las Especialidades", icono: "fas fa-layer-group" },
    { id: "ia", nombre: "IA Aplicada & Multiagente", icono: "fas fa-brain" },
    { id: "movil", nombre: "Apps Móviles & Multidispositivo", icono: "fas fa-mobile-alt" },
    { id: "web", nombre: "Desarrollo Web & APIs", icono: "fas fa-laptop-code" },
    { id: "onpremise", nombre: "Infraestructura & On-Premise", icono: "fas fa-server" },
    { id: "ajuscofix", nombre: "Hardware, Redes & Soporte IT", icono: "fas fa-tools" }
  ],

  servicios: [
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
      tiempo: "Por sprint / proyecto",
      precioDesde: "Consultoría Especializada",
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
        "Integración con canales empresariales (WhatsApp, Teams, SAP)",
        "Agentes para RRHH, soporte técnico, auditoría y asistencia al desarrollador",
        "Evaluación de costo-beneficio de modelos abiertos vs. modelos frontera"
      ],
      tiempo: "Arquitectura a la medida",
      precioDesde: "Proyecto a medida",
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
        "Sistemas de licencias con criptografía asimétrica offline (claves ECDSA)",
        "Aplicaciones de control en sitio, asistencia de personal y toma de datos"
      ],
      tiempo: "Desarrollo ágil",
      precioDesde: "Cotización por requerimiento",
      icono: "fas fa-mobile-alt"
    },
    {
      id: "plataformas-web-hub",
      categoria: "web",
      titulo: "Desarrollo Web Full-Stack & HUB de Aplicaciones",
      destacado: true,
      descripcion: "Desarrollo de portales web corporativos, tableros autoadministrables, sistemas transaccionales y HUBs de aplicaciones con autenticación unificada (SSO).",
      detalles: [
        "Frontend moderno con React, Vite y TailwindCSS de alta velocidad",
        "Backend robusto con Node.js / Express y Python / FastAPI",
        "Autenticación Single Sign-On (SSO) con JWT RS256 y JWKS",
        "Generación oficial de reportes PDF dinámicos y exportación masiva"
      ],
      tiempo: "Según alcance",
      precioDesde: "Cotización por proyecto",
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
        "Implantación y puesta en marcha en sitio en hospitales públicos y privados",
        "Monitoreo por puerto COM de lámparas quirúrgicas y signos vitales",
        "Sistemas de expedientes clínicos y gestión masiva de folios médicos"
      ],
      tiempo: "Consultoría clínica",
      precioDesde: "A evaluar",
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
      precioDesde: "Cotización según nodos",
      icono: "fas fa-server"
    },
    {
      id: "ajuscofix-redes-cableado",
      categoria: "ajuscofix",
      titulo: "Redes Estructuradas, Wi-Fi Mesh & Servidores Locales (AjuscoFix)",
      destacado: true,
      descripcion: "Instalación y certificación de cableado Cat 6/6A para despachos, consultorios y hogares, junto con redes inalámbricas tipo malla sin zonas muertas y servidores NAS de respaldo.",
      detalles: [
        "Tendido y canalización estética de cableado Cat 6 libre de ruido",
        "Configuración de Wi-Fi unificado Mesh (un solo SSID en todo el inmueble)",
        "Servidores NAS locales para respaldos automáticos fuera de red",
        "Aislamiento seguro de redes de visitas y configuración de routers"
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
        "Aplicación de pasta térmica de alta conductividad (Arctic MX-4 / Thermal Grizzly)",
        "Diagnóstico de estrés térmico antes y después del servicio",
        "Atención en taller (Ajusco, Tlalpan) o servicio a domicilio en CDMX"
      ],
      tiempo: "2 a 4 horas",
      precioDesde: "$350 MXN",
      icono: "fas fa-microchip"
    },
    {
      id: "ajuscofix-formateo-recuperacion",
      categoria: "ajuscofix",
      titulo: "Formateo Limpio, Upgrades a SSD y Recuperación de Datos",
      destacado: false,
      descripcion: "Reinstalación limpia de Windows, Linux y macOS sin software basura, clonación y actualización a unidades SSD ultrarrápidas y rescate forense de información dañada.",
      detalles: [
        "Respaldo espejo completo de archivos y documentos antes de intervenir",
        "Instalación de SSD NVMe / SATA que reviven tu equipo hasta 10 veces más rápido",
        "Recuperación de datos de discos con sectores dañados o particiones RAW",
        "Sustento con certificación White Hat CCAT en análisis forense de medios"
      ],
      tiempo: "Mismo día / 24 hrs",
      precioDesde: "$450 MXN",
      icono: "fas fa-hdd"
    }
  ],

  proyectos: [
    {
      id: "biossmann-ia-rag",
      titulo: "Infraestructura RAG Documental & Asistente Multiagente (Biossmann Group)",
      etiqueta: "IA Aplicada & Multiagente",
      categoria: "LangGraph · Ollama · pgvector · MCP · Python",
      descripcion: "Diseño, arquitectura y puesta en producción del frente de Inteligencia Artificial de Biossmann Group. Búsqueda semántica documental híbrida (RRF + reranking) sobre modelos abiertos locales ejecutados en servidores propios para no exponer datos clínicos ni de RRHH a servicios externos. Asistente de desarrollo con 7 agentes y 13 subagentes con panel de trazabilidad, y conexión a bases relacionales vía Model Context Protocol (MCP) en modo solo lectura.",
      puntosClave: [
        "Búsqueda semántica sobre PostgreSQL + pgvector (HNSW) y tsvector",
        "Inferencia local con Ollama (qwen2.5-coder) en infraestructura on-premise",
        "Conectores MCP seguros con permisos estrictos de solo lectura",
        "Prototipos de agentes conversacionales para RRHH con validación humana en cada decisión",
        "Integración prototipada con WhatsApp, Microsoft Teams y SAP"
      ],
      enlace: "https://github.com/ArturoUrbinaVelasco",
      enlaceTexto: "Ver Perfil en GitHub",
      icono: "fas fa-brain"
    },
    {
      id: "hub-biossmann-sso",
      titulo: "HUB de Aplicaciones Corporativo & Orquestador 'Mando'",
      etiqueta: "Plataforma & Integración",
      categoria: "Node 22 · Express · React · Vite · PostgreSQL 18 · Docker · Traefik",
      descripcion: "Punto de acceso único y seguro (SSO) para las aplicaciones internas del grupo empresarial con autenticación JWT RS256 y JWKS, permisos granulares por usuario y puesto, monitor en tiempo real de contenedores Docker y bitácora de accesos. Integra los sistemas de Descriptivos de Puesto (con importación semántica de Word y PDF oficial) y Control de Asistencia.",
      puntosClave: [
        "Despliegues segregados: red interna corporativa y acceso externo seguro",
        "Contrato de integración documentado para aplicativos de terceros desarrolladores",
        "Unificación de bases de datos por dominios con migraciones versionadas (Flyway)",
        "Orquestador de módulos web y módulos-agente de IA bajo dominio único con Traefik"
      ],
      enlace: "https://github.com/ArturoUrbinaVelasco",
      enlaceTexto: "Ver en GitHub",
      icono: "fas fa-cubes"
    },
    {
      id: "banderazo-app",
      titulo: "Banderazo · Taxímetro Satelital Android Nativo Oficial CDMX",
      etiqueta: "App Móvil Android",
      categoria: "Kotlin · Clean Architecture · Room · Criptografía ECDSA · CI/CD",
      descripcion: "Aplicación móvil para conductores de CDMX y Edomex desarrollada bajo los estándares más rigurosos de Clean Code (Uncle Bob) y Clean Architecture. Calcula con precisión satelital absoluta el cobro por distancia y tiempo de espera en tráfico, 100% funcional sin internet ni saldo, sin anuncios y respaldada por una suite de 690+ pruebas unitarias automatizadas.",
      puntosClave: [
        "Filtro GPS satelital puro con detección de congelamiento y descarte de derivas",
        "Licenciamiento criptográfico asimétrico offline con firma ECDSA de 136 caracteres",
        "Tarifas oficiales CDMX precargadas y 100% configurables por el usuario",
        "Generador instantáneo de comprobantes y tickets desglosados para WhatsApp"
      ],
      enlace: "https://github.com/ArturoUrbinaVelasco/banderazo",
      enlaceTexto: "Repositorio Banderazo",
      icono: "fas fa-taxi"
    },
    {
      id: "interoperabilidad-clinica",
      titulo: "Interoperabilidad Clínica PACS / DICOM & Mirth Connect",
      etiqueta: "Sector Salud & Hardware",
      categoria: "DICOM · PACS · Mirth Connect (HL7) · Puerto COM · Hospitales",
      descripcion: "Implementación de comunicación con servidores PACS gestionando comandos DICOM (C-ECHO, C-FIND, C-MOVE) con control de descargas, simuladores de monitores de signos vitales para validar mensajería HL7 sin depender de equipo físico, e implantación en sitio en hospitales de primer nivel (Hospitales Ángeles, IMSS, San Angelín).",
      puntosClave: [
        "Gestión de imágenes médicas y expedientes clínicos",
        "Monitoreo por puerto COM para lámparas quirúrgicas y trazas RGB",
        "Motor granular de reportes quirúrgicos reutilizable entre nosocomios",
        "Capacitación presencial al personal médico y administrativo"
      ],
      enlace: "https://wa.me/525559694250?text=Hola%20Arturo,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20soluciones%20de%20interoperabilidad%20m%C3%A9dica",
      enlaceTexto: "Consultar Solución",
      icono: "fas fa-notes-medical"
    },
    {
      id: "erp-pos-deurope",
      titulo: "ERP Empresarial a Medida & Integración POS Bancario (Deurope)",
      etiqueta: "Sistemas Empresariales",
      categoria: "C# · .NET · SQL Server · POS Banorte/Bancomer · Retail",
      descripcion: "Liderazgo del área de desarrollo y testing durante 9 años, coordinando el ciclo completo de vida del ERP integral de la compañía: módulos de inventarios, facturación, reportería ejecutiva y la integración directa de terminales punto de venta bancarias con el sistema POS para cobro con tarjeta en sucursales.",
      puntosClave: [
        "9 años de evolución continua y soporte a sucursales y dirección",
        "Integración bancaria transaccional segura y cobro con tarjeta",
        "Aplicaciones de apoyo para eventos masivos y expos comerciales",
        "Capacitación de personal y cero tiempo de inactividad operativa"
      ],
      enlace: "https://github.com/ArturoUrbinaVelasco",
      enlaceTexto: "Trayectoria en GitHub",
      icono: "fas fa-cash-register"
    },
    {
      id: "ajuscofix-meta-cdp",
      titulo: "AjuscoFix & Publicador Autónomo Meta CDP",
      etiqueta: "Automatización & Infraestructura",
      categoria: "Playwright CDP · Python · Redes Cat 6 · Soporte Hardware",
      descripcion: "División de soporte de infraestructura IT y automatización de procesos: tendido de redes estructuradas Gigabit, Wi-Fi Mesh empresarial, rescate forense de datos con certificación White Hat CCAT, y agentes autónomos de control de navegador vía Chrome DevTools Protocol para gestión desatendida en Meta Business Suite.",
      puntosClave: [
        "Automatización en Meta Business Suite con control directo de navegador",
        "Cableado Cat 6/6A y certificación de redes locales",
        "Respaldo y recuperación forense de datos certificados",
        "Comunidad activa en Facebook para soporte local y PyMEs"
      ],
      enlace: "https://www.facebook.com/AjuscoFix/",
      enlaceTexto: "Página AjuscoFix",
      icono: "fab fa-facebook"
    }
  ],

  trayectoriaEmpresarial: [
    {
      periodo: "Enero 2023 – Actualidad",
      empresa: "Biossmann Group",
      rol: "Desarrollador de Aplicaciones · Responsable del frente de IA",
      resumen: "Líder técnico del modelado de datos al despliegue en producción. Diseñé la infraestructura RAG documental privada sobre pgvector y Ollama, asistente multiagente LangGraph, conexión MCP, HUB corporativo con SSO JWT y sistemas de interoperabilidad DICOM/PACS en hospitales Ángeles, IMSS y San Angelín."
    },
    {
      periodo: "Junio 2013 – Diciembre 2022 (9 años)",
      empresa: "Deurope Muebles",
      rol: "Desarrollador de Sistemas · Líder de Desarrollo y Testing",
      resumen: "Liderazgo de todo el ciclo de desarrollo de software. Creación y mantenimiento de los módulos del ERP a la medida, integración de terminales punto de venta bancarias (Banorte, Bancomer) al POS, reportería ejecutiva y soporte a sucursales y dirección."
    },
    {
      periodo: "Diciembre 2012 – Junio 2013",
      empresa: "Audipharma, S.A. de C.V.",
      rol: "Analista de Sistemas · HelpDesk Proyecto ISSEMyM",
      resumen: "Implantación del sistema de control de inventarios SICIA en 50 farmacias hospitalarias de ISSEMyM con soporte presencial y remoto."
    },
    {
      periodo: "Octubre 2009 – Julio 2012",
      empresa: "Racine Hydraulics de México",
      rol: "Sistemas & Infraestructura",
      resumen: "Administración de infraestructura de cómputo, servidores FTP, soporte al ERP (SAI) y reportería de ventas y estadísticas."
    }
  ],

  faqs: [
    {
      q: "¿Qué tipo de soluciones de Inteligencia Artificial desarrollas para empresas?",
      a: "Desarrollo soluciones de IA con un enfoque estricto en privacidad y soberanía de datos (On-Premise). Implemento sistemas RAG (Retrieval-Augmented Generation) sobre pgvector y modelos abiertos con Ollama para que tu empresa pueda consultar millones de documentos internos sin enviar información confidencial a servidores externos. También orquesto sistemas multiagente con LangGraph con validación humana en cada paso crítico y conectores seguros Model Context Protocol (MCP)."
    },
    {
      q: "¿Desarrollas aplicaciones móviles nativas o híbridas?",
      a: "Especialidad en desarrollo nativo para Android en Kotlin puro con Jetpack Compose y Clean Architecture (como el caso de éxito de Banderazo). Esto garantiza que la aplicación funcione a máxima velocidad, sin trabarse, consuma el mínimo de batería y pueda operar 100 % sin conexión a internet mediante bases de datos locales en Room y geolocalización satelital pura."
    },
    {
      q: "¿Cómo se aborda la seguridad y el despliegue en infraestructura propia (On-Premise)?",
      a: "A través de contenedores Docker orquestados, proxies inversos nginx/Traefik con SSL automático, Single Sign-On (SSO) con tokens JWT RS256 y gestión corporativa de credenciales mediante Vaultwarden, eliminando contraseñas dispersas en código. Cuento además con certificación Certified White Hat Professional (CCAT) en análisis forense e ingeniería inversa."
    },
    {
      q: "¿Qué servicios ofrece la división AjuscoFix en soporte y redes?",
      a: "AjuscoFix es la rama especializada en infraestructura física: cableado estructurado Cat 6/6A, eliminación de zonas muertas con Wi-Fi Mesh unificado, configuración de servidores de respaldo NAS, mantenimiento preventivo/correctivo a nivel componente para equipos gamer y de oficina, formateo limpio con respaldo espejo garantizado y recuperación de datos."
    },
    {
      q: "¿Cómo agendamos una cotización o reunión técnica?",
      a: "Puedes mandarme un WhatsApp directo al 55 5969 4250 o escribirme a arturo.urbina.velasco@gmail.com con los detalles de tu proyecto o requerimiento de soporte. Atiendo proyectos de desarrollo a nivel nacional e internacional, y servicios de hardware/redes presenciales en la Ciudad de México y zona conurbada."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
