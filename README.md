# 🌐 Arturo Urbina Velasco · Portal Web & AjuscoFix

> **Sitio Web Oficial alojado en GitHub Pages:** [https://arturourbinavelasco.github.io](https://arturourbinavelasco.github.io)  
> Portafolio profesional de Ingeniería de Software, Soporte IT especializado, Redes y Soluciones con Inteligencia Artificial.

---

## 🚀 Arquitectura del Proyecto

Construido bajo la filosofía **Jamstack estática de máxima velocidad y cero costos de hosting**:
- **HTML5 Semántico y Accesible.**
- **CSS Moderno Responsivo con Sistema de Diseño Tech** (Dark Mode nativo con soporte de temas claro/oscuro, Glassmorphism y microinteracciones).
- **Capa de Datos Desacoplada (`js/data.js`)**: Facilita agregar, editar o quitar servicios, precios, proyectos o preguntas frecuentes sin tocar una sola línea de código HTML o CSS.
- **Cotizador Express Interactivo**: Genera cotizaciones al instante y prepara mensajes directos formateados para WhatsApp.

---

## 🛠️ Cómo Administrar el Contenido (Fácil y Rápido)

Toda la información del sitio se administra desde el archivo [`js/data.js`](js/data.js):

### 1. Modificar Datos de Contacto o Redes
Edita la sección `SITE_DATA.info`:
```javascript
info: {
  telefono: "55 5969 4250",
  email: "arturo.urbina.velasco@gmail.com",
  ubicacion: "Ajusco, Tlalpan, CDMX",
  ...
}
```

### 2. Agregar o Modificar un Servicio
En `SITE_DATA.servicios`, añade un objeto con la estructura:
```javascript
{
  id: "mi-nuevo-servicio",
  categoria: "hardware", // hardware | redes | software | desarrollo | ia
  titulo: "Nombre del Servicio",
  destacado: true,
  descripcion: "Descripción clara del trabajo...",
  detalles: [
    "Punto 1 incluido",
    "Punto 2 incluido"
  ],
  tiempo: "Mismo día",
  precioDesde: "$XXX MXN",
  icono: "fas fa-laptop"
}
```

### 3. Agregar un Proyecto al Portafolio
En `SITE_DATA.proyectos`, agrega un nuevo caso de éxito o repositorio:
```javascript
{
  id: "mi-proyecto",
  titulo: "Nombre del Proyecto",
  etiqueta: "App Móvil / Web",
  categoria: "Especialidad",
  descripcion: "Descripción del reto y la solución...",
  puntosClave: ["Punto 1", "Punto 2"],
  enlace: "https://github.com/...",
  enlaceTexto: "Ver en GitHub",
  icono: "fas fa-star"
}
```

---

## 📦 Despliegue en GitHub Pages

Al estar en el repositorio nombrado `ArturoUrbinaVelasco.github.io`, GitHub Pages lo sirve automáticamente desde la rama `main` en la raíz `/` con HTTPS activo.

© 2026 **Arturo Urbina Velasco** · [AjuscoFix en Facebook](https://www.facebook.com/AjuscoFix/)
