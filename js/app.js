/**
 * app.js - Lógica interactiva bilingüe (ES / EN) y reactiva
 * Arturo Urbina Velasco & AjuscoFix
 * Soporte multi-dispositivo, transición suave de tema e internacionalización instantánea.
 */

let currentLang = localStorage.getItem("lang") || "es";
let currentCategory = "todos";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  renderAll();
  initVisitorCounter();
  initVisitorToggle();
  initMobileMenu();
  setupSmoothScroll();
});

function getData() {
  return SITE_DATA[currentLang] || SITE_DATA.es;
}

/* ==============================================================================
   1. GESTIÓN DE TEMA (DARK / LIGHT) CON TRANSICIÓN SUAVE
   ============================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      // Activar clase de transición suave
      document.documentElement.classList.add("theme-transition");
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "light" ? "dark" : "light";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);

      window.setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
      }, 500);
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
   2. GESTIÓN DE IDIOMA (ES / EN)
   ============================================================================== */
function initLanguage() {
  const langBtn = document.getElementById("langToggle");
  document.documentElement.setAttribute("lang", currentLang);
  updateLangButton();

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      localStorage.setItem("lang", currentLang);
      document.documentElement.setAttribute("lang", currentLang);
      updateLangButton();
      renderAll();
    });
  }
}

function updateLangButton() {
  const label = document.getElementById("langLabel");
  const langBtn = document.getElementById("langToggle");
  if (label) {
    // Si estamos en español, el botón invita a cambiar a EN; y viceversa
    label.textContent = currentLang === "es" ? "EN" : "ES";
  }
  if (langBtn) {
    langBtn.setAttribute("title", currentLang === "es" ? "Switch to English" : "Cambiar a Español");
  }
}

function updateStaticTexts() {
  const data = getData();
  const ui = data.ui;
  if (!ui) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (ui[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", ui[key]);
      } else {
        el.innerHTML = ui[key];
      }
    }
  });

  // Actualizar metadatos del título
  document.title = currentLang === "es"
    ? "Arturo Urbina Velasco | Senior Software Developer · Múltiples Tecnologías & IA · AjuscoFix"
    : "Arturo Urbina Velasco | Senior Software Developer · Multi-Stack & Applied AI · AjuscoFix";
}

function renderAll() {
  updateStaticTexts();
  renderMetrics();
  renderCompetencias();
  renderCategoryPills();
  renderServices(currentCategory);
  renderProjects();
  renderTrayectoria();
  renderFaqs();
  initCotizador();
  renderVisitorCount();
  updateVisitorToggleTitle();
}

/* ==============================================================================
   3. RENDERIZADO DE MÉTRICAS
   ============================================================================== */
function renderMetrics() {
  const container = document.getElementById("statsGrid");
  const data = getData();
  if (!container || !data.metricas) return;

  container.innerHTML = data.metricas.map(m => `
    <div class="stat-card">
      <div class="stat-number">${m.numero}</div>
      <div class="stat-label">${m.label}</div>
      <div class="stat-sub">${m.sub}</div>
    </div>
  `).join("");
}

/* ==============================================================================
   4. RENDERIZADO DE COMPETENCIAS CLAVE
   ============================================================================== */
function renderCompetencias() {
  const container = document.getElementById("competenciasGrid");
  const data = getData();
  if (!container || !data.competenciasClave) return;

  container.innerHTML = data.competenciasClave.map(c => `
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
   5. FILTRADO Y RENDERIZADO DE SERVICIOS
   ============================================================================== */
function renderCategoryPills() {
  const container = document.getElementById("filterPills");
  const data = getData();
  if (!container || !data.categorias) return;

  container.innerHTML = data.categorias.map(c => `
    <button class="filter-btn ${c.id === currentCategory ? 'active' : ''}" data-cat="${c.id}">
      <i class="${c.icono}"></i>
      <span>${c.nombre}</span>
    </button>
  `).join("");

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-cat");
      renderServices(currentCategory);
    });
  });
}

function renderServices(categoria) {
  const container = document.getElementById("servicesGrid");
  const data = getData();
  if (!container || !data.servicios) return;

  const filtrados = categoria === "todos" 
    ? data.servicios 
    : data.servicios.filter(s => s.categoria === categoria);

  const btnConsultText = data.ui.serviceBtnConsult || (currentLang === "es" ? "Consultar" : "Inquire");
  const popularText = data.ui.servicePopular || (currentLang === "es" ? "Destacado" : "Featured");

  container.innerHTML = filtrados.map(s => {
    const defaultMsg = currentLang === "es"
      ? `Hola Arturo, me interesa cotizar / consultar sobre: ${s.titulo}`
      : `Hello Arturo, I am interested in inquiring about: ${s.titulo}`;
    const waUrl = `${data.info.redes.whatsapp}?text=${encodeURIComponent(defaultMsg)}`;

    return `
      <div class="service-card ${s.destacado ? 'destacado' : ''}" data-popular="${popularText}">
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
            <i class="fab fa-whatsapp" style="color: #25d366;"></i> ${btnConsultText}
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/* ==============================================================================
   6. RENDERIZADO DE PROYECTOS (SHOWCASE)
   ============================================================================== */
function renderProjects() {
  const container = document.getElementById("projectsGrid");
  const data = getData();
  if (!container || !data.proyectos) return;

  container.innerHTML = data.proyectos.map(p => `
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
   7. RENDERIZADO DE TRAYECTORIA EMPRESARIAL
   ============================================================================== */
function renderTrayectoria() {
  const container = document.getElementById("trayectoriaTimeline");
  const data = getData();
  if (!container || !data.trayectoriaEmpresarial) return;

  container.innerHTML = data.trayectoriaEmpresarial.map(t => `
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
   8. COTIZADOR EXPRESS INTERACTIVO CON PRIORIDAD PORCENTUAL Y BILINGÜE
   ============================================================================== */
function initCotizador() {
  const catSelect = document.getElementById("cotizadorCategoria");
  const servicioSelect = document.getElementById("cotizadorServicio");
  const urgenciaSelect = document.getElementById("cotizadorUrgencia");
  const detallesInput = document.getElementById("cotizadorDetalles");
  
  const summaryServicio = document.getElementById("summaryServicio");
  const summaryTiempo = document.getElementById("summaryTiempo");
  const summaryPrioridad = document.getElementById("summaryPrioridad");
  const summaryEstimado = document.getElementById("summaryEstimado");
  const btnEnviar = document.getElementById("btnCotizadorWhatsApp");
  const btnTelegram = document.getElementById("btnCotizadorTelegram");

  const data = getData();
  if (!catSelect || !servicioSelect) return;

  // Poblar categorías en el idioma activo
  const catOptions = currentLang === "es" ? `
    <option value="">-- Selecciona una especialidad --</option>
    <option value="web">Sitios Web a Medida & Automatización de Procesos</option>
    <option value="ajuscofix">Sistemas Operativos, Software (Comercial / Libre) & Hardware</option>
    <option value="ia">Inteligencia Artificial & RAG On-Premise</option>
    <option value="movil">Desarrollo de App Móvil Android (Kotlin / Offline)</option>
    <option value="onpremise">Infraestructura On-Premise, Docker & Redes</option>
  ` : `
    <option value="">-- Select a specialty --</option>
    <option value="web">Custom Websites & Workflow Automation</option>
    <option value="ajuscofix">Operating Systems, Software (Commercial / Open Source) & IT</option>
    <option value="ia">Applied Artificial Intelligence & On-Premise RAG</option>
    <option value="movil">Native Android Mobile Apps (Kotlin / Offline)</option>
    <option value="onpremise">On-Premise Infrastructure, Docker & Networking</option>
  `;

  catSelect.innerHTML = catOptions;

  // Poblar opciones de urgencia con porcentajes en el idioma activo
  const urgenciaOptions = currentLang === "es" ? `
    <option value="0" data-pct="0">Esquema Estándar (+0% · Tiempo habitual)</option>
    <option value="15" data-pct="15">Prioritario (+15% · Atención preferente)</option>
    <option value="25" data-pct="25">Alta Prioridad (+25% · Despliegue acelerado)</option>
    <option value="50" data-pct="50">Urgencia Inmediata / Fin de semana (+50% · Atención 24/7)</option>
  ` : `
    <option value="0" data-pct="0">Standard Scheme (+0% · Regular turnaround)</option>
    <option value="15" data-pct="15">Priority (+15% · Expedited attention)</option>
    <option value="25" data-pct="25">High Priority (+25% · Accelerated delivery)</option>
    <option value="50" data-pct="50">Immediate Urgency (+50% · 24/7 Priority support)</option>
  `;

  if (urgenciaSelect) {
    const currentVal = urgenciaSelect.value || "0";
    urgenciaSelect.innerHTML = urgenciaOptions;
    urgenciaSelect.value = currentVal;
  }

  catSelect.onchange = () => {
    const cat = catSelect.value;
    if (!cat) {
      servicioSelect.innerHTML = currentLang === "es"
        ? `<option value="">-- Primero elige especialidad --</option>`
        : `<option value="">-- First choose a specialty --</option>`;
      actualizarResumen(null);
      return;
    }

    const disponibles = data.servicios.filter(s => s.categoria === cat);
    const placeholder = currentLang === "es"
      ? `<option value="">-- Elige un servicio o solución --</option>`
      : `<option value="">-- Select a service or solution --</option>`;

    servicioSelect.innerHTML = placeholder + disponibles.map(s => `<option value="${s.id}">${s.titulo}</option>`).join("");
    actualizarResumen(null);
  };

  servicioSelect.onchange = () => {
    const sId = servicioSelect.value;
    const sObj = data.servicios.find(s => s.id === sId);
    actualizarResumen(sObj);
  };

  if (urgenciaSelect) {
    urgenciaSelect.onchange = () => {
      const sId = servicioSelect.value;
      const sObj = data.servicios.find(s => s.id === sId);
      actualizarResumen(sObj);
    };
  }

  if (detallesInput) {
    detallesInput.oninput = () => {
      const sId = servicioSelect.value;
      const sObj = data.servicios.find(s => s.id === sId);
      actualizarResumen(sObj);
    };
  }

  function actualizarResumen(servicio) {
    const urgenciaOption = urgenciaSelect ? urgenciaSelect.options[urgenciaSelect.selectedIndex] : null;
    const pct = urgenciaOption ? urgenciaOption.getAttribute("data-pct") || urgenciaOption.value || "0" : "0";
    const urgenciaTxt = urgenciaOption ? urgenciaOption.text : (currentLang === "es" ? "Estándar (+0%)" : "Standard (+0%)");

    if (!servicio) {
      summaryServicio.textContent = currentLang === "es" ? "Ninguno seleccionado" : "None selected";
      summaryTiempo.textContent = "--";
      if (summaryPrioridad) summaryPrioridad.textContent = currentLang === "es" ? `Estándar (+${pct}%)` : `Standard (+${pct}%)`;
      summaryEstimado.textContent = data.ui.cotizadorSummaryCustom || (currentLang === "es" ? "Cotización a medida" : "Custom Quote");
      
      const defaultWa = currentLang === "es" ? "Hola Arturo, me gustaría una consulta técnica" : "Hello Arturo, I would like to request a technical consultation";
      btnEnviar.setAttribute("href", `${data.info.redes.whatsapp}?text=${encodeURIComponent(defaultWa)}`);
      if (btnTelegram) btnTelegram.setAttribute("href", data.info.redes.telegram);
      return;
    }

    summaryServicio.textContent = servicio.titulo;
    summaryTiempo.textContent = servicio.tiempo;
    
    if (summaryPrioridad) {
      const nombreEsquema = urgenciaTxt.split("(")[0].trim();
      summaryPrioridad.textContent = `${nombreEsquema} (+${pct}%)`;
    }
    
    summaryEstimado.textContent = Number(pct) > 0 
      ? (currentLang === "es" ? `Cotización a medida (+${pct}% prioridad)` : `Custom Quote (+${pct}% priority)`)
      : (data.ui.cotizadorSummaryCustom || (currentLang === "es" ? "Cotización a medida" : "Custom Quote"));

    const notas = detallesInput && detallesInput.value.trim() 
      ? (currentLang === "es" ? `\n• Requerimiento / Notas: ${detallesInput.value.trim()}` : `\n• Project Notes: ${detallesInput.value.trim()}`)
      : "";

    const mensaje = currentLang === "es"
      ? `Hola Arturo, solicito información y cotización para:\n` +
        `📌 *${servicio.titulo}*\n` +
        `⏱️ Tiempo habitual: ${servicio.tiempo}\n` +
        `⚡ Esquema de Prioridad: ${urgenciaTxt} (+${pct}% ajuste)\n` +
        `💵 Referencia Base: ${servicio.precioDesde}` +
        notas + `\n\n¿Cuándo podríamos agendar una llamada o revisión técnica?`
      : `Hello Arturo, I would like to request information and a quote for:\n` +
        `📌 *${servicio.titulo}*\n` +
        `⏱️ Standard turnaround: ${servicio.tiempo}\n` +
        `⚡ Priority Scheme: ${urgenciaTxt} (+${pct}% adjustment)\n` +
        `💵 Base Reference: ${servicio.precioDesde}` +
        notas + `\n\nWhen could we schedule a diagnostic call or technical meeting?`;

    btnEnviar.setAttribute("href", `${data.info.redes.whatsapp}?text=${encodeURIComponent(mensaje)}`);
    if (btnTelegram) {
      btnTelegram.setAttribute("href", data.info.redes.telegram);
    }
  }

  // Inicializar placeholder de servicio y resumen en el idioma activo
  if (!catSelect.value) {
    servicioSelect.innerHTML = currentLang === "es"
      ? `<option value="">-- Primero elige una especialidad --</option>`
      : `<option value="">-- First choose a specialty --</option>`;
    actualizarResumen(null);
  } else {
    const sId = servicioSelect.value;
    const sObj = data.servicios.find(s => s.id === sId);
    actualizarResumen(sObj || null);
  }
}

/* ==============================================================================
   9. RENDERIZADO DE PREGUNTAS FRECUENTES (FAQS)
   ============================================================================== */
function renderFaqs() {
  const container = document.getElementById("faqList");
  const data = getData();
  if (!container || !data.faqs) return;

  container.innerHTML = data.faqs.map((f, i) => `
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
   10. MENÚ MÓVIL Y NAVEGACIÓN SUAVE MULTI-DISPOSITIVO
   ============================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("open");
      const isOpen = menu.classList.contains("open");
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.className = isOpen ? "fas fa-times" : "fas fa-bars";
      }
    });

    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.innerHTML = `<i class="fas fa-bars"></i>`;
      });
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.innerHTML = `<i class="fas fa-bars"></i>`;
      }
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

/* ==============================================================================
   11. CONTADOR DE VISITAS DISCRETO (API + FALLBACK SVG)
   ============================================================================== */
let currentVisitorCount = null;

async function initVisitorCounter() {
  const counterEl = document.getElementById("visitorCount");
  if (!counterEl) return;

  const key = "arturourbinavelasco-portfolio";
  const hasVisited = sessionStorage.getItem("portfolio_visited");
  const url = hasVisited
    ? `https://countapi.mileshilliard.com/api/v1/get/${key}`
    : `https://countapi.mileshilliard.com/api/v1/hit/${key}`;

  // Sincronizar silenciosamente con hits.sh para registrar la métrica por día/semana/mes en su panel de analíticas
  try {
    const hitsTracker = new Image();
    hitsTracker.src = `https://hits.sh/arturourbinavelasco.github.io.svg?t=${Date.now()}`;
  } catch (e) {}

  try {
    const res = await fetch(url, { mode: "cors" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (data && typeof data.value === "number") {
      currentVisitorCount = data.value;
      sessionStorage.setItem("portfolio_visited", "true");
      localStorage.setItem("portfolio_cached_visits", String(data.value));
      renderVisitorCount();
    } else {
      throw new Error("Invalid payload");
    }
  } catch (err) {
    const cached = localStorage.getItem("portfolio_cached_visits");
    if (cached) {
      currentVisitorCount = parseInt(cached, 10);
      renderVisitorCount();
    } else {
      // Fallback seguro a badge SVG de hits.sh
      counterEl.innerHTML = `<img src="https://hits.sh/arturourbinavelasco.github.io.svg?style=flat-square&color=06b6d4&labelColor=0f172a&label=${currentLang === 'en' ? 'views' : 'visitas'}" alt="Visitas" style="vertical-align: middle; height: 16px; border-radius: 3px;">`;
    }
  }
}

function renderVisitorCount() {
  const counterEl = document.getElementById("visitorCount");
  if (!counterEl || currentVisitorCount === null) return;
  const locale = currentLang === "en" ? "en-US" : "es-MX";
  counterEl.textContent = Number(currentVisitorCount).toLocaleString(locale);
  const data = getData();
  const tooltip = (data.ui && data.ui.visitorStatsTooltip) 
    || (currentLang === "en" ? "View detailed metrics (day, week, month)" : "Ver estadísticas detalladas por día, semana y mes");
  counterEl.setAttribute("title", tooltip);
}

function initVisitorToggle() {
  const toggleBtn = document.getElementById("visitorToggle");
  const countLink = document.getElementById("visitorCount");
  if (!toggleBtn) return;

  // Clic en el número abre estadísticas detalladas en hits.sh sin colapsar el popover
  if (countLink) {
    countLink.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  toggleBtn.onclick = (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle("expanded");
    updateVisitorToggleTitle();
  };

  // Accesibilidad mediante teclado
  toggleBtn.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleBtn.classList.toggle("expanded");
      updateVisitorToggleTitle();
    }
  };

  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && toggleBtn.classList.contains("expanded")) {
      toggleBtn.classList.remove("expanded");
      updateVisitorToggleTitle();
    }
  });
}

function updateVisitorToggleTitle() {
  const toggleBtn = document.getElementById("visitorToggle");
  if (!toggleBtn) return;
  const isExpanded = toggleBtn.classList.contains("expanded");
  const data = getData();
  const ui = data.ui || {};

  if (isExpanded) {
    toggleBtn.setAttribute("title", ui.visitorTitleHide || (currentLang === "en" ? "Hide visits" : "Ocultar visitas"));
    toggleBtn.setAttribute("aria-expanded", "true");
  } else {
    toggleBtn.setAttribute("title", ui.visitorTitleShow || (currentLang === "en" ? "View visits" : "Ver visitas"));
    toggleBtn.setAttribute("aria-expanded", "false");
  }
}
