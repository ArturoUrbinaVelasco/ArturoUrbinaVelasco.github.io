# 🤖 AGENTS.md · Guía de Arquitectura, Estado y Reglas para Agentes de IA

> **Propósito de este documento:**  
> Este archivo es la **fuente de la verdad técnica y de negocio** del proyecto. Cualquier agente de IA (Antigravity, Claude, ChatGPT, Cursor, Copilot, etc.) o desarrollador que clone o retome este repositorio debe leer este archivo para comprender el estado actual, las directrices no negociables, la arquitectura, el backlog y el flujo de trabajo.

---

## 📌 1. Regla Mandatoria de Mantenimiento Continuo
> [!IMPORTANT]
> **REGLA OBLIGATORIA:**  
> Cada vez que una IA o desarrollador realice mejoras, correcciones, refactorizaciones o ajustes en el proyecto, **DEBE actualizar este archivo (`AGENTS.md`) y el `README.md`** reflejando los cambios, el nuevo estado y los pendientes antes de finalizar la tarea.  
> Todos los commits en Git deben seguir estrictamente el estándar de **Conventional Commits** y realizarse a nombre de:  
> **Committer:** `Arturo Urbina Velasco` <`arturo.urbina.velasco@gmail.com`>.

---

## 🎯 2. Visión y Posicionamiento del Portal
- **Sitio en Producción:** [https://arturourbinavelasco.github.io/](https://arturourbinavelasco.github.io/)
- **Propietario:** Arturo Urbina Velasco.
- **División de Soporte:** AjuscoFix (Soporte técnico, redes, mantenimiento e infraestructura).
- **Enfoque Profesional:** Desarrollador de Aplicaciones Senior con más de 13 años de trayectoria construyendo soluciones de extremo a extremo en múltiples lenguajes y tecnologías, Inteligencia Artificial aplicada (agentes locales On-Premise, RAG, Ollama), desarrollo de sitios web a la medida, mejora y automatización de procesos multi-área (Python/PowerShell/BAT) y soporte IT integral.

---

## 🔒 3. Directrices y Restricciones Estrictas de Contenido (No Negociables)
Al redactar o modificar textos en `js/data.js`, `index.html` o cualquier componente, se deben acatar rigurosamente las siguientes reglas:

1. **Confidencialidad de Clientes / Empleadores Anteriores:**  
   - **NUNCA** mencionar nombres de empresas previas (ej. prohibido explícitamente escribir *BIOSSMANN*, *MANDO Corporation*, *Deurope*).
   - Se describen los proyectos, logros de ingeniería y arquitecturas sin revelar nombres comerciales de los clientes.
2. **Rol y Liderazgo:**  
   - **NO** usar etiquetas como *"Líder de..."* ni posicionar a Arturo como *"responsable único al frente"*.  
   - Redactar en términos de *"Desarrollador de Aplicaciones Senior en múltiples lenguajes, tecnologías e Inteligencia Artificial"*.
3. **Formación Académica:**  
   - Describir únicamente las áreas de enfoque técnico y especialidades.  
   - **NO** incluir años de cursos académicos (ej. eliminados cursos como *(2004 – 2007)* o *(2007 – 2009)*).
4. **Cédula y Certificaciones:**  
   - **NO** mostrar sección de Cédula Profesional ni certificaciones sensibles en el portal público.
5. **Estructura de Precios:**  
   - Para servicios de desarrollo y software empresarial, indicar **"Cotización a medida"** o presupuestos basados en alcance.
   - En el cotizador interactivo, el nivel de prioridad/urgencia opera como un porcentaje de incremento sobre el subtotal (+0% Estándar, +25% Prioritaria, +50% Crítica/Inmediata).
6. **Canales de Comunicación Paritarios:**  
   - Todo llamado a la acción debe ofrecer **WhatsApp (+52 55 5969 4250)** y **Telegram (@+525559694250)** con la misma visibilidad, complementado por **Messenger de AjuscoFix** y correo electrónico.

---

## 🏗️ 4. Arquitectura y Stack Tecnológico

El proyecto está diseñado bajo una arquitectura **Jamstack Estática Pura**, sin dependencias de compiladores pesados (Webpack/Vite/Node) en runtime, garantizando carga instantánea (<1s), costo cero de alojamiento en GitHub Pages y máxima mantenibilidad.

```
ArturoUrbinaVelasco.github.io/
├── index.html              # Estructura semántica HTML5, tags i18n data-i18n, accesibilidad ARIA
├── css/
│   └── styles.css          # Sistema de diseño Tech, variables CSS dark/light, responsive breakpoints
├── js/
│   ├── data.js             # Capa desacoplada de contenido y traducciones (SITE_DATA.es / SITE_DATA.en)
│   └── app.js              # Controlador reactivo: renderizado dinámico, i18n, tema, cotizador y métricas
├── img/                    # Activos gráficos y capturas
├── README.md               # Resumen ejecutivo para visitantes y desarrolladores
└── AGENTS.md               # Fuente de la verdad, reglas operativas y estado técnico (este archivo)
```

### 🧩 Componentes Principales
1. **Separación Contenido / Presentación:**  
   - Todo el contenido textual, servicios, proyectos, trayectoria, preguntas frecuentes y textos de UI residen en [`js/data.js`](js/data.js). Modificar un texto o precio no requiere alterar HTML ni CSS.
2. **Motor de Internacionalización (i18n):**  
   - Soporte nativo para **Español (`es`)** e **Inglés (`en`)**.  
   - Las etiquetas HTML contienen el atributo `data-i18n="clave"`. La función `applyTranslations()` en [`js/app.js`](js/app.js) traduce el DOM al instante y almacena la preferencia en `localStorage`.
3. **Sistema de Tema Claro / Oscuro con Transición Fluida:**  
   - Alternancia entre `[data-theme="dark"]` y `[data-theme="light"]`.  
   - Incluye clase `.theme-transition` para suavizar colores durante el cambio sin parpadeos.  
   - En tema claro, el bloque interactivo del Hero ([`.hero-card`](css/styles.css)) se mantiene como consola oscura (`#0f172a`) para brindar máxima legibilidad en prompts y sintaxis de comandos, acorde a estándares de la industria (GitHub, Vercel).
4. **Cotizador Express Interactivo:**  
   - Asistente de presupuesto en 4 pasos: Tipo de Proyecto -> Alcance -> Nivel de Prioridad (+0%, +25%, +50%) -> Entrega de propuesta.  
   - Genera automáticamente un desglose estimado y un botón directo a WhatsApp / Telegram con el mensaje formateado listo para enviar.
5. **Contador de Visitas Ultra-Discreto & Panel Analítico:**  
   - Por defecto muestra únicamente el icono de métricas `📈` en el footer.
   - Al pulsar el botón, despliega suavemente el contador `Visitas: [ N ]`.
   - Al pulsar el número `N`, abre en una nueva pestaña el panel en vivo de **[hits.sh](https://hits.sh/arturourbinavelasco.github.io/)**, permitiendo revisar estadísticas de visitas por día, semana (`WEEKLY HITS`), mes (`MONTHLY HITS`) y mapa de calor de tráfico.
   - Sincroniza silenciosamente cada visita mediante un ping en background (`new Image().src = ...`).

---

## 📱 5. Breakpoints Responsivos & UX
- **Desktop Grande (>1040px):** Barra de navegación horizontal completa con 7 enlaces (`white-space: nowrap`), botones de idioma, tema y accesos compactos circulares a WhatsApp y Telegram.
- **Tablets y Laptops Compactas (≤1040px):** El menú colapsa elegantemente al modo hamburguesa (`.mobile-toggle`), evitando saturación horizontal.
- **Móviles (≤768px y ≤480px):** Adaptación a 1 columna en grillas, botones de acción en ancho completo y botones flotantes fijos en esquina inferior derecha para WhatsApp y Telegram.

---

## 🚦 6. Estado Actual del Proyecto (Features Implementadas)

| Módulo / Característica | Estado | Archivos Involucrados | Notas de Implementación |
| :--- | :---: | :--- | :--- |
| **Hero & Terminal Interactiva** | ✅ Completado | `index.html`, `css/styles.css`, `data.js` | Terminal oscura fija con comandos simulados y enlaces directos |
| **Dominio Tecnológico (Stack)** | ✅ Completado | `index.html`, `css/styles.css`, `data.js` | 6 tarjetas de especialidad (Web, On-Premise, Automatización, etc.) |
| **Portafolio de Proyectos** | ✅ Completado | `js/app.js`, `js/data.js` | Filtros por categoría, etiquetas y botones a repositorios |
| **Trayectoria Profesional** | ✅ Completado | `js/app.js`, `js/data.js` | Cronograma confidencial sin nombres de empresas ni fechas de cursos |
| **Catálogo de Servicios** | ✅ Completado | `js/app.js`, `js/data.js` | Filtros dinámicos y enlaces de consulta directa por WhatsApp |
| **Cotizador Express** | ✅ Completado | `js/app.js`, `js/data.js` | Cálculo dinámico con porcentaje de prioridad y checkout a mensajería |
| **Preguntas Frecuentes (FAQ)** | ✅ Completado | `js/app.js`, `js/data.js` | Acordeón interactivo accesible |
| **Contacto & Redes** | ✅ Completado | `index.html`, `css/styles.css`, `data.js` | Canales oficiales, tarjeta de acción directa y confidencialidad |
| **Bilingüe ES / EN** | ✅ Completado | `js/app.js`, `js/data.js` | Traducción completa de UI y datos con persistencia en `localStorage` |
| **Temas Oscuro / Claro** | ✅ Completado | `css/styles.css`, `js/app.js` | Alto contraste WCAG AA, transición suave y preservación de consola |
| **Contador Discreto & Dashboard** | ✅ Completado | `index.html`, `css/styles.css`, `js/app.js` | Toggle discreto, CountAPI + enlace directo a hits.sh por día/semana/mes |
| **Botones Flotantes (WA/TG)** | ✅ Completado | `index.html`, `css/styles.css` | Acceso rápido flotante con efecto ping en WhatsApp |

---

## 📋 7. Backlog y Hoja de Ruta (Pendientes & Mejoras Futuras)

Cualquier IA o desarrollador puede seleccionar una tarea de este backlog para continuar mejorando el portal:

### 🟡 Prioridad Media / Corto Plazo
1. **Metadatos Open Graph & Twitter Cards:**  
   - Agregar en `<head>` de `index.html` las etiquetas `og:title`, `og:description`, `og:image`, `og:url` y `twitter:card`.
   - Crear una imagen optimizada (1200x630 px) en `img/og-preview.png` para que al compartir el link en redes sociales, WhatsApp o Telegram aparezca una tarjeta profesional destacada.
2. **Schema.org Structured Data (JSON-LD):**  
   - Incorporar un bloque `<script type="application/ld+json">` con tipos `Person` y `ProfessionalService` para maximizar el posicionamiento SEO en Google en búsquedas de desarrollo de software y soporte en CDMX.
3. **Progressive Web App (PWA):**  
   - Generar `manifest.json` e iconos (192x192, 512x512).  
   - Registrar un `service-worker.js` básico para permitir instalación en dispositivos móviles y funcionamiento sin conexión.

### 🟢 Prioridad Baja / Mediano Plazo
4. **Galería / Modal de Capturas de Proyectos:**  
   - Integrar un visor de imágenes ligero (lightbox puro o CSS-only) para ver capturas de pantalla de interfaces de proyectos sin salir de la página.
5. **Formulario de Contacto por Correo (Fallback):**  
   - Integrar un endpoint ligero (ej. Formspree o EmailJS) para visitantes corporativos que prefieran enviar un mensaje formal por formulario web sin abrir su cliente de correo.
6. **Pipeline de Pruebas Continuas (CI/CD con GitHub Actions):**  
   - Configurar un workflow `.github/workflows/ci.yml` que valide HTML/CSS con linters y ejecute pruebas Playwright en modo headless antes de fusionar cambios en `main`.

---

## 🛠️ 8. Cómo Probar y Ejecutar Localmente

### Opción 1: Servidor Local Rápido (Python)
```bash
cd "C:\Users\Arturo Urbina\Desktop\IA\ArturoUrbinaVelasco.github.io"
python -m http.server 8000
# Abrir en el navegador: http://localhost:8000
```

### Opción 2: Pruebas Automatizadas con Playwright
El proyecto cuenta con scripts de verificación visual y funcional en el entorno de pruebas:
```bash
python -m playwright install chromium
python scratch/test_portfolio_full_ux.py
```
Verifica:
- Alineación del navbar en un solo renglón en desktop.
- Activación del menú hamburguesa en tablet (1024px).
- Legibilidad y contraste de colores en tema claro y oscuro.
- Funcionamiento del toggle de visitas y apertura del enlace a `hits.sh`.

---

## 📝 9. Convención de Commits y Control de Versiones

Todo cambio debe realizarse siguiendo la especificación **Conventional Commits**:
- `feat: <descripción>` — Nueva funcionalidad visible para el usuario o sistema.
- `fix: <descripción>` — Corrección de errores de diseño, contraste o comportamiento.
- `refactor: <descripción>` — Reestructuración de código sin alterar funcionalidad.
- `docs: <descripción>` — Modificaciones exclusivas en documentación (`README.md`, `AGENTS.md`).
- `style: <descripción>` — Ajustes de formato, espaciados o CSS sin cambio de lógica.
- `test: <descripción>` — Adición o ajuste de pruebas automatizadas.
- `chore: <descripción>` — Mantenimiento de configuración o herramientas.

**Ejemplo de comando Git para guardar avances:**
```bash
git add AGENTS.md README.md index.html css/styles.css js/data.js js/app.js
git commit -m "docs: actualizar estado del proyecto, arquitectura y guia de agentes"
git push origin main
```
