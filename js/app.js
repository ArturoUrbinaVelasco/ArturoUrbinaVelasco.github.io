/**
 * app.js - Lógica interactiva para el portal de Arturo Urbina / AjuscoFix
 * Conecta los datos de data.js con la interfaz, maneja filtros, cotizador, trayectoria y modo oscuro/claro.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderMetrics();
  renderCompetencias();
  renderCategoryPills();
  renderServices("todos");
  renderProjects();
  renderTrayectoria();
  renderFaqs();
  initCotizador();
  initMobileMenu();
  setupSmoothScroll();
});

/* ==============================================================================
   1. GESTIÓN DE TEMA (DARK / LIGHT)
   ============================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#themeToggle i");
  if (icon) {
    icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}

/* ==============================================================================
   2. RENDERIZADO DE MÉTRICAS
   ============================================================================== */
function renderMetrics() {
  const container = document.getElementById("statsGrid");
  if (!container || !SITE_DATA.metricas) return;

  container.innerHTML = SITE_DATA.metricas.map(m => `
    <div class="stat-card">
      <div class="stat-number">${m.numero}</div>
      <div class="stat-label">${m.label}</div>
      <div class="stat-sub">${m.sub}</div>
    </div>
  `).join("");
}

/* ==============================================================================
   3. RENDERIZADO DE COMPETENCIAS CLAVE (DEL CV)
   ============================================================================== */
function renderCompetencias() {
  const container = document.getElementById("competenciasGrid");
  if (!container || !SITE_DATA.competenciasClave) return;

  container.innerHTML = SITE_DATA.competenciasClave.map(c => `
    <div class="competencia-card">
      <div class="competencia-header">
        <div class="competencia-icon"><i class="${c.icono}"></i></div>
        <h3 class="competencia-title">${c.categoria}</h3>
      </div>
      <div class="competencia-tags">
        ${c.items.map(it => `<span class="tech-tag">${it}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ==============================================================================
   4. FILTRADO Y RENDERIZADO DE SERVICIOS
   ============================================================================== */
function renderCategoryPills() {
  const container = document.getElementById("filterPills");
  if (!container || !SITE_DATA.categorias) return;

  container.innerHTML = SITE_DATA.categorias.map(c => `
    <button class="filter-btn ${c.id === 'todos' ? 'active' : ''}" data-cat="${c.id}">
      <i class="${c.icono}"></i>
      <span>${c.nombre}</span>
    </button>
  `).join("");

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const catId = btn.getAttribute("data-cat");
      renderServices(catId);
    });
  });
}

function renderServices(categoria) {
  const container = document.getElementById("servicesGrid");
  if (!container || !SITE_DATA.servicios) return;

  const filtrados = categoria === "todos" 
    ? SITE_DATA.servicios 
    : SITE_DATA.servicios.filter(s => s.categoria === categoria);

  container.innerHTML = filtrados.map(s => {
    const msg = encodeURIComponent(`Hola Arturo, me interesa cotizar / consultar sobre: ${s.titulo}`);
    const waUrl = `${SITE_DATA.info.redes.whatsapp}?text=${msg}`;

    return `
      <div class="service-card ${s.destacado ? 'destacado' : ''}">
        <div class="service-icon-wrap">
          <i class="${s.icono}"></i>
        </div>
        <h3 class="service-title">${s.titulo}</h3>
        <p class="service-desc">${s.descripcion}</p>
        
        <ul class="service-bullets">
          ${s.detalles.map(d => `
            <li class="service-bullet">
              <i class="fas fa-check-circle"></i>
              <span>${d}</span>
            </li>
          `).join("")}
        </ul>

        <div class="service-footer">
          <div>
            <span class="service-price">${s.precioDesde}</span>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${s.tiempo}</div>
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.825rem;">
            <i class="fab fa-whatsapp" style="color: #25d366;"></i> Consultar
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/* ==============================================================================
   5. RENDERIZADO DE PROYECTOS (SHOWCASE)
   ============================================================================== */
function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container || !SITE_DATA.proyectos) return;

  container.innerHTML = SITE_DATA.proyectos.map(p => `
    <div class="project-card">
      <div class="project-header">
        <span class="project-tag"><i class="${p.icono}"></i> ${p.etiqueta}</span>
        <h3 class="project-title">${p.titulo}</h3>
        <p class="project-desc">${p.descripcion}</p>
      </div>

      <div class="project-body">
        <ul class="project-points">
          ${p.puntosClave.map(pt => `
            <li class="project-point">
              <i class="fas fa-arrow-right"></i>
              <span>${pt}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="project-footer">
        <span style="font-size: 0.8rem; color: var(--text-muted); font-family: monospace;">${p.categoria}</span>
        <a href="${p.enlace}" target="_blank" rel="noopener" class="btn btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.825rem;">
          ${p.enlaceTexto} <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
        </a>
      </div>
    </div>
  `).join("");
}

/* ==============================================================================
   6. RENDERIZADO DE TRAYECTORIA EMPRESARIAL (DEL CV)
   ============================================================================== */
function renderTrayectoria() {
  const container = document.getElementById("trayectoriaTimeline");
  if (!container || !SITE_DATA.trayectoriaEmpresarial) return;

  container.innerHTML = SITE_DATA.trayectoriaEmpresarial.map(t => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-periodo">${t.periodo}</span>
          <h4 class="timeline-empresa">${t.empresa}</h4>
        </div>
        <div class="timeline-rol">${t.rol}</div>
        <p class="timeline-resumen">${t.resumen}</p>
      </div>
    </div>
  `).join("");
}

/* ==============================================================================
   7. COTIZADOR EXPRESS INTERACTIVO
   ============================================================================== */
function initCotizador() {
  const catSelect = document.getElementById("cotizadorCategoria");
  const servicioSelect = document.getElementById("cotizadorServicio");
  const urgenciaSelect = document.getElementById("cotizadorUrgencia");
  const detallesInput = document.getElementById("cotizadorDetalles");
  
  const summaryServicio = document.getElementById("summaryServicio");
  const summaryTiempo = document.getElementById("summaryTiempo");
  const summaryEstimado = document.getElementById("summaryEstimado");
  const btnEnviar = document.getElementById("btnCotizadorWhatsApp");

  if (!catSelect || !servicioSelect) return;

  // Poblar categorías
  catSelect.innerHTML = `
    <option value="">-- Selecciona una especialidad --</option>
    <option value="ia">Inteligencia Artificial & RAG On-Premise</option>
    <option value="movil">Desarrollo de App Móvil Android / Multiplataforma</option>
    <option value="web">Desarrollo Web Full-Stack & HUB de Aplicaciones</option>
    <option value="onpremise">Infraestructura On-Premise, Docker & Servidores</option>
    <option value="ajuscofix">Soporte IT, Hardware y Redes (AjuscoFix)</option>
  `;

  catSelect.addEventListener("change", () => {
    const cat = catSelect.value;
    if (!cat) {
      servicioSelect.innerHTML = `<option value="">-- Primero elige especialidad --</option>`;
      actualizarResumen(null);
      return;
    }

    const disponibles = SITE_DATA.servicios.filter(s => s.categoria === cat);
    servicioSelect.innerHTML = `<option value="">-- Elige un servicio o solución --</option>` +
      disponibles.map(s => `<option value="${s.id}">${s.titulo}</option>`).join("");
    
    actualizarResumen(null);
  });

  servicioSelect.addEventListener("change", () => {
    const sId = servicioSelect.value;
    const sObj = SITE_DATA.servicios.find(s => s.id === sId);
    actualizarResumen(sObj);
  });

  if (urgenciaSelect) {
    urgenciaSelect.addEventListener("change", () => {
      const sId = servicioSelect.value;
      const sObj = SITE_DATA.servicios.find(s => s.id === sId);
      actualizarResumen(sObj);
    });
  }

  function actualizarResumen(servicio) {
    if (!servicio) {
      summaryServicio.textContent = "Ninguno seleccionado";
      summaryTiempo.textContent = "--";
      summaryEstimado.textContent = "$0 MXN";
      btnEnviar.setAttribute("href", `${SITE_DATA.info.redes.whatsapp}?text=Hola%20Arturo,%20me%20gustar%C3%ADa%20una%20consulta%20técnica`);
      return;
    }

    summaryServicio.textContent = servicio.titulo;
    summaryTiempo.textContent = servicio.tiempo;
    summaryEstimado.textContent = servicio.precioDesde;

    const urgenciaTxt = urgenciaSelect ? urgenciaSelect.options[urgenciaSelect.selectedIndex].text : "Estándar";
    const notas = detallesInput && detallesInput.value.trim() ? `\n• Detalles adicionales: ${detallesInput.value.trim()}` : "";

    const mensaje = 
      `Hola Arturo, solicito información y cotización para:\n` +
      `📌 *${servicio.titulo}*\n` +
      `⏱️ Tiempo habitual: ${servicio.tiempo}\n` +
      `💵 Referencia: ${servicio.precioDesde}\n` +
      `⚡ Prioridad / Esquema: ${urgenciaTxt}` +
      notas + `\n\n¿Cuándo podríamos agendar una llamada o revisión técnica?`;

    btnEnviar.setAttribute("href", `${SITE_DATA.info.redes.whatsapp}?text=${encodeURIComponent(mensaje)}`);
  }
}

/* ==============================================================================
   8. RENDERIZADO DE PREGUNTAS FRECUENTES (FAQS)
   ============================================================================== */
function renderFaqs() {
  const container = document.getElementById("faqList");
  if (!container || !SITE_DATA.faqs) return;

  container.innerHTML = SITE_DATA.faqs.map((f, i) => `
    <div class="faq-item ${i === 0 ? 'active' : ''}">
      <button class="faq-question">
        <span>${f.q}</span>
        <i class="fas fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + 30 + "px";
    }

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      container.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + 30 + "px";
      }
    });
  });
}

/* ==============================================================================
   9. MENÚ MÓVIL Y NAVEGACIÓN SUAVE
   ============================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      const isOpen = menu.classList.contains("open");
      toggle.innerHTML = isOpen ? `<i class="fas fa-times"></i>` : `<i class="fas fa-bars"></i>`;
    });

    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.innerHTML = `<i class="fas fa-bars"></i>`;
      });
    });
  }
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}
