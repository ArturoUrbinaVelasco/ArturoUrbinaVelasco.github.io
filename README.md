# 🌐 Arturo Urbina Velasco · Portal Web Profesional & AjuscoFix

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-22c55e?style=flat-square&logo=github)](https://arturourbinavelasco.github.io)
[![Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-06b6d4?style=flat-square)](https://arturourbinavelasco.github.io)
[![i18n](https://img.shields.io/badge/i18n-Español%20%7C%20English-6366f1?style=flat-square)](https://arturourbinavelasco.github.io)
[![Theme](https://img.shields.io/badge/Theme-Dark%20%7C%20Light-f59e0b?style=flat-square)](https://arturourbinavelasco.github.io)
[![Hits](https://hits.sh/arturourbinavelasco.github.io.svg?style=flat-square&color=06b6d4&labelColor=0f172a&label=visitas)](https://hits.sh/arturourbinavelasco.github.io/)

> **Sitio Web Oficial:** [https://arturourbinavelasco.github.io/](https://arturourbinavelasco.github.io/)  
> Portal profesional de **Desarrollo de Software Empresarial**, **Sitios Web a la Medida**, **Automatización Multi-Área**, **Agentes de Inteligencia Artificial On-Premise** e **Infraestructura IT y Soporte en Sitio/Remoto** a través de la división **AjuscoFix**.

---

## 📖 Tabla de Contenidos
- [Características Principales](#-características-principales)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Estructura de Directorios](#-estructura-de-directorios)
- [Administración del Contenido](#-administración-del-contenido-jsdatajs)
- [Contador de Visitas & Analíticas en Vivo](#-contador-de-visitas--analíticas-en-vivo)
- [Reglas y Directrices de Negocio](#-reglas-y-directrices-de-negocio)
- [Instrucciones para Agentes de IA & Desarrolladores](#-instrucciones-para-agentes-de-ia--desarrolladores)
- [Ejecución Local](#-ejecución-local)
- [Hoja de Ruta (Roadmap)](#-hoja-de-ruta-roadmap)

---

## ✨ Características Principales

1. **Bilingüe Nativo (i18n ES / EN):**
   - Selector en la barra de navegación para alternar instantáneamente entre Español e Inglés sin recargar la página.
   - Persistencia de preferencia de idioma en `localStorage`.
2. **Sistema de Tema Claro / Oscuro con Alto Contraste (WCAG AA):**
   - Transición fluida (`.theme-transition`) sin destellos.
   - En tema claro, el bloque interactivo del Hero preserva su estilo de consola oscura (`#0f172a`), garantizando un contraste óptimo en sintaxis de código y prompts.
3. **Barra de Navegación Responsiva y Despejada:**
   - Botones compactos de 36px para WhatsApp y Telegram, optimizando el espacio horizontal.
   - Breakpoint en `1040px`: las pantallas medianas o tablets cambian automáticamente al menú hamburguesa para evitar amontonamientos.
4. **Cotizador Express Dinámico:**
   - Calculadora en 4 pasos con selección de tipo de proyecto, alcance y esquema de prioridad (+0% Estándar, +25% Prioritaria, +50% Urgente).
   - Genera una cotización estimada al instante y formatea un mensaje listo para enviar a WhatsApp o Telegram.
5. **Portafolio y Trayectoria Confidencial:**
   - 7 proyectos de alta ingeniería en producción y código abierto: Infraestructura RAG Multiagente On-Premise, HUB Corporativo SSO, Banderazo (Taxímetro Android Nativo Kotlin), Android Mirror Hub (Suite Desktop de proyección Scrcpy y control Wi-Fi), Interoperabilidad PACS/DICOM y HL7, ERP Retail y soporte AjuscoFix. Cronograma confidencial sin exponer nombres comerciales de clientes ni fechas académicas sensibles.
6. **Contador de Visitas Ultra-Discreto con Dashboard:**
   - Icono minimalista en el pie de página que se expande bajo demanda.
   - Al pulsar el número de visitas, abre en una nueva pestaña el panel en vivo de `hits.sh` con métricas por día, semana, mes y mapa de calor.
7. **PWA (Progressive Web App) & Modo Offline:**
   - Instalable en dispositivos móviles y de escritorio mediante `manifest.json`.
   - `service-worker.js` con precaché del application shell y estrategia de recarga en segundo plano (*stale-while-revalidate*).
8. **SEO Avanzado, Schema.org y Tarjetas Sociales:**
   - Metadatos Open Graph y Twitter Cards con previsualización gráfica optimizada de 1200x630 px (`img/og-preview.png`).
   - Marcado estructurado JSON-LD con entidades `Person`, `ProfessionalService` y catálogo de servicios de desarrollo y soporte.
9. **Canales de Contacto Directo:**
   - Botones flotantes con microinteracciones para WhatsApp y Telegram.
   - Enlaces a correo electrónico y página de Facebook de AjuscoFix.

---

## 🏛️ Arquitectura del Proyecto

Construido bajo la filosofía **Jamstack estática de máxima velocidad y cero costos de alojamiento**:
- **HTML5 Semántico y Accesible (ARIA).**
- **CSS3 Moderno** basado en variables personalizadas (`CSS Custom Properties`), Flexbox, Grid y diseño responsivo Mobile-First.
- **Vanilla JavaScript Modular (ES6+):** Sin frameworks pesados ni dependencias externas en tiempo de ejecución.
- **Capa de Datos Desacoplada (`js/data.js`):** El 100% de los textos, servicios, proyectos, trayectoria, métricas y preguntas frecuentes están centralizados en diccionarios bilingües.

---

## 📁 Estructura de Directorios

```
ArturoUrbinaVelasco.github.io/
├── index.html              # Estructura principal, marcado semántico, Schema.org e i18n
├── manifest.json           # Manifiesto PWA para instalación móvil/desktop y shortcuts
├── service-worker.js       # Service worker: shell precache y fallback offline
├── favicon.ico             # Favicon multirresolución (16, 32, 48)
├── css/
│   └── styles.css          # Variables de diseño, temas claro/oscuro, media queries
├── js/
│   ├── data.js             # Fuente única de datos bilingüe (SITE_DATA.es / SITE_DATA.en)
│   └── app.js              # Controlador reactivo (tema, idioma, renderizado, cotizador)
├── img/                    # Activos visuales, iconos PWA y previsualizaciones
│   ├── og-preview.png      # Tarjeta Open Graph optimizada 1200x630 px
│   ├── icon-192.png        # Icono PWA estándar 192x192
│   ├── icon-512.png        # Icono PWA alta definición 512x512
│   ├── icon-maskable-192.png # Icono adaptativo Android maskable 192x192
│   ├── icon-maskable-512.png # Icono adaptativo Android maskable 512x512
│   ├── apple-touch-icon.png # Icono iOS 180x180
│   ├── favicon-32.png      # Favicon 32x32
│   └── favicon-16.png      # Favicon 16x16
├── scratch/                # Generadores de activos y suites de pruebas automatizadas
├── AGENTS.md               # Fuente de la verdad, directrices y reglas para Agentes de IA
└── README.md               # Documentación general del repositorio (este archivo)
```

---

## 🛠️ Administración del Contenido (`js/data.js`)

Para modificar cualquier dato o texto, solo edita el archivo [`js/data.js`](js/data.js) en sus secciones en español (`es`) e inglés (`en`):

### 1. Datos de Contacto y Redes
```javascript
info: {
  telefono: "55 5969 4250",
  email: "arturo.urbina.velasco@gmail.com",
  ubicacion: "Ciudad de México (Atención presencial, soporte en sitio y proyectos remotos)",
  redes: {
    whatsapp: "https://wa.me/525559694250",
    telegram: "https://t.me/+525559694250",
    github: "https://github.com/ArturoUrbinaVelasco",
    facebook: "https://www.facebook.com/AjuscoFix/"
  }
}
```

### 2. Agregar o Modificar un Servicio
```javascript
{
  id: "mi-nuevo-servicio",
  categoria: "desarrollo", // desarrollo | software | automatizacion | ia | infraestructura
  titulo: "Nombre del Servicio",
  destacado: true,
  descripcion: "Descripción orientada a resolver un problema de negocio...",
  detalles: [
    "Beneficio técnico 1",
    "Beneficio técnico 2"
  ],
  tiempo: "1 a 3 semanas",
  precioDesde: "Cotización a medida",
  icono: "fas fa-code"
}
```

### 3. Agregar un Proyecto al Portafolio
```javascript
{
  id: "proyecto-nuevo",
  titulo: "Nombre del Proyecto",
  etiqueta: "Desarrollo On-Premise / Web",
  categoria: "desarrollo",
  descripcion: "Solución de ingeniería implementada y su impacto...",
  puntosClave: ["Logro 1", "Logro 2"],
  enlace: "https://github.com/...",
  enlaceTexto: "Ver en GitHub",
  icono: "fas fa-cubes"
}
```

---

## 📊 Contador de Visitas & Analíticas en Vivo

El portal integra una solución de conteo de visitas discreta:
1. **API Primaria:** Cuenta de visitas a través de CountAPI con caché local.
2. **Ping en Segundo Plano:** En cada visita se registra un hit en `hits.sh`.
3. **Dashboard Detallado:** Al hacer clic en el número de visitas en el pie de página, se abre en una nueva pestaña:
   👉 **[https://hits.sh/arturourbinavelasco.github.io/](https://hits.sh/arturourbinavelasco.github.io/)**  
   Donde se consultan:
   - Visitas de la semana (`WEEKLY HITS`).
   - Visitas del mes actual (`MONTHLY HITS`).
   - Total acumulado histórico y mapa de calor diario.

---

## ⚖️ Reglas y Directrices de Negocio

Todo colaborador o IA que trabaje en este proyecto debe respetar las siguientes normas:
1. **Confidencialidad:** Jamás escribir nombres de clientes corporativos previos (prohibido explícitamente mencionar *BIOSSMANN*, *MANDO*, *Deurope*).
2. **Rol:** Presentar a Arturo como *Desarrollador de Aplicaciones Senior en múltiples lenguajes, tecnologías e Inteligencia Artificial*. Evitar la palabra *"Líder de..."*.
3. **Formación Académica:** Describir especialidades y materias clave sin colocar los años en que se cursaron.
4. **Sin Cédula Profesional:** No incluir cédulas ni certificaciones sensibles en el portal público.
5. **Cotización a Medida:** Salvo precios base de soporte de AjuscoFix, los desarrollos se etiquetan como *"Cotización a medida"*.
6. **Prioridad en Cotizador:** El esquema de urgencia suma porcentajes (+0% Estándar, +25% Prioritaria, +50% Crítica).
7. **Enlaces de Proyectos (Públicos vs. Privados):** Proyectos de código abierto (como *Android Mirror Hub*) enlazan a GitHub; *Banderazo* enlaza a su sitio web oficial dedicado; y los proyectos privados o corporativos (RAG Salud, HUB SSO, ERP) enlazan directamente a solicitud de información por WhatsApp para evitar enlaces rotos o inexistentes en perfiles públicos.

---

## 🤖 Instrucciones para Agentes de IA & Desarrolladores

> [!IMPORTANT]
> Consulta el archivo [`AGENTS.md`](AGENTS.md) para conocer las pautas de ingeniería completas.  
> **Regla de actualización continua:** Cada commit que aplique mejoras o ajustes al proyecto debe actualizar `AGENTS.md` y `README.md` para mantener el estado 100% al día.

### Convención de Commits:
- `feat: <descripción>` — Nueva característica.
- `fix: <descripción>` — Corrección de errores visuales o lógicos.
- `docs: <descripción>` — Actualización de documentación.
- `refactor: <descripción>` — Mejoras internas de código sin cambio de comportamiento.

---

## 💻 Ejecución Local & Pruebas Automatizadas

Para levantar el portal en tu entorno local sin instalar paquetes pesados:

```bash
# Con Python (cualquier versión 3.x)
cd ArturoUrbinaVelasco.github.io
python -m http.server 8000

# Abrir en el navegador:
# http://localhost:8000
```

### Ejecutar Pruebas de Calidad (Playwright):
```bash
# 1. Pruebas de UX completa, responsividad y temas:
python scratch/test_portfolio_full_ux.py

# 2. Pruebas de SEO, Schema.org JSON-LD, PWA y Service Worker:
python scratch/test_backlog_features.py
```

---

## 🗺️ Hoja de Ruta (Roadmap)

- [x] **SEO & Open Graph:** Etiquetas `og:*` y Twitter Card con imagen de previsualización para WhatsApp/Telegram/LinkedIn (`img/og-preview.png`).
- [x] **Schema.org JSON-LD:** Marcado estructurado de tipo `Person`, `ProfessionalService` y `WebSite`.
- [x] **PWA (Progressive Web App):** Archivo `manifest.json`, iconos adaptativos y `service-worker.js` para instalación y funcionamiento offline.
- [ ] **Modal de Capturas:** Visor ligero de capturas de pantalla de proyectos.
- [ ] **Formulario de Fallback:** Envío de correo directo para clientes que no deseen usar WhatsApp/Telegram.
- [ ] **CI/CD con GitHub Actions:** Pipeline automatizado de linting y pruebas Playwright headless.

---

© 2026 **Arturo Urbina Velasco** · [AjuscoFix en Facebook](https://www.facebook.com/AjuscoFix/)
