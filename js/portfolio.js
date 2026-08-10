// Portfolio interactive logic
// Handles: language, theme, navigation, start screen, animations, analytics

(function () {
  "use strict";

  // ── Constants ────────────────────────────────────────────────
  const STORAGE_LANG = "portfolio-lang";
  const STORAGE_THEME = "portfolio-theme";

  const LINKS = {
    github: "https://github.com/favoriiklim",
    linkedin: "https://www.linkedin.com/in/ilker-coskunsel-6767ic/",
    instagram: "https://www.instagram.com/_ilker_c/",
    email: "mailto:icoskunsel@gmail.com",
    budgetRepo: "https://github.com/GoktugSaylam/Budget",
  };

  // ── State ─────────────────────────────────────────────────────
  let currentLang = "en";
  let currentTheme = "dark";
  let prefersReducedMotion = false;

  // ── Init ──────────────────────────────────────────────────────
  function init() {
    prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    initTheme();
    initLang();
    renderAll();
    initStartScreen();
    initMobileMenu();
    initSmoothScroll();
    populateStaticLinks();
  }

  // ── Theme ─────────────────────────────────────────────────────
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved) {
      currentTheme = saved;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      currentTheme = prefersDark ? "dark" : "light";
    }
    applyTheme(currentTheme);
  }

  function applyTheme(theme) {
    const body = document.getElementById("portfolio-body");
    if (!body) return;
    if (theme === "light") {
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
    }
    currentTheme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
  }

  function toggleTheme() {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  }

  // ── Language ──────────────────────────────────────────────────
  function initLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved && (saved === "tr" || saved === "en")) {
      currentLang = saved;
      return;
    }
    const browserLang = navigator.language || navigator.userLanguage || "en";
    currentLang = browserLang.startsWith("tr") ? "tr" : "en";
  }

  function setLang(lang) {
    if (lang !== "tr" && lang !== "en") return;
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    document.documentElement.lang = lang;
    renderAll();
  }

  function toggleLang() {
    setLang(currentLang === "en" ? "tr" : "en");
  }

  // ── Render ────────────────────────────────────────────────────
  function renderAll() {
    const c = window.portfolioContent[currentLang];
    if (!c) return;

    document.documentElement.lang = c.htmlLang;
    updateMeta(c);
    renderNav(c.nav);
    renderStartScreen(c.startScreen);
    renderHero(c.hero);
    renderFocus(c.focus);
    renderExperience(c.experience);
    renderProjects(c.projects);
    renderCompetitions(c.competitions);
    renderSkills(c.skills);
    renderEducation(c.education);
    renderContact(c.contact);
    renderFooter(c.footer);
  }

  function updateMeta(c) {
    document.title = c.metaTitle;
    setMeta("description", c.metaDescription);
    setMeta("og:title", c.ogTitle, true);
    setMeta("og:description", c.ogDescription, true);
    setMeta("twitter:title", c.ogTitle, false, "twitter:title");
    setMeta("twitter:description", c.ogDescription, false, "twitter:description");
  }

  function setMeta(name, content, isOg, twitterName) {
    let el;
    if (isOg) {
      el = document.querySelector(`meta[property="${name}"]`);
    } else if (twitterName) {
      el = document.querySelector(`meta[name="${twitterName}"]`);
    } else {
      el = document.querySelector(`meta[name="${name}"]`);
    }
    if (el) el.setAttribute("content", content);
  }

  // ── Nav render ────────────────────────────────────────────────
  function renderNav(nav) {
    setText("nav-about", nav.about);
    setText("nav-experience", nav.experience);
    setText("nav-projects", nav.projects);
    setText("nav-competitions", nav.competitions);
    setText("nav-skills", nav.skills);
    setText("nav-contact", nav.contact);
    setText("nav-lang-toggle", nav.langToggle);
    setText("nav-theme-toggle", nav.themeToggle);
    setText("mobile-lang-toggle", nav.langToggle);
    setText("mobile-theme-toggle", nav.themeToggle);
  }

  // ── Start Screen render ────────────────────────────────────────
  function renderStartScreen(ss) {
    setText("ss-player-label", ss.player);
    setText("ss-name", ss.name);

    const rolesEl = document.getElementById("ss-roles");
    if (rolesEl) {
      rolesEl.innerHTML = ss.roles
        .map((r) => `<div class="ss-role">${r}</div>`)
        .join("");
    }

    setText("ss-enter-btn", ss.enterBtn);
  }

  // ── Hero render ───────────────────────────────────────────────
  function renderHero(hero) {
    setText("hero-title", hero.title);
    setText("hero-bio1", hero.bio1);
    setText("hero-bio2", hero.bio2);
    setText("hero-projects-btn", hero.viewProjects);
    setText("hero-contact-btn", hero.contact);

    // CV button label
    const cvBtn = document.getElementById("hero-cv-btn");
    if (cvBtn) {
      cvBtn.textContent = "📄 " + (hero.downloadCv || "CV") + " ↓";
    }
  }

  // ── Current Focus render ──────────────────────────────────────
  function renderFocus(focus) {
    setText("focus-section-title", focus.sectionTitle);
    const container = document.getElementById("focus-cards");
    if (!container) return;
    container.innerHTML = focus.cards
      .map(
        (card) => `
        <div class="focus-card quest-card">
          <div class="focus-card-icon" aria-hidden="true">${card.icon}</div>
          <h3 class="quest-title focus-card-title">${card.title}</h3>
          <p class="focus-card-body">${card.body}</p>
        </div>`
      )
      .join("");
  }

  // ── Experience render ─────────────────────────────────────────
  function renderExperience(experience) {
    setText("experience-section-title", experience.sectionTitle);
    const container = document.getElementById("experience-list");
    if (!container) return;
    const labels = window.portfolioContent[currentLang].labels;

    container.innerHTML = experience.items
      .map(
        (item) => `
        <article class="quest-card experience-card">
          <div class="exp-header">
            <h3 class="quest-title exp-position">${item.position}</h3>
            <span class="exp-status-badge status-${item.status.toLowerCase().replace(/\s/g, "-")}">${labels[item.status === "Completed" || item.status === "Tamamlandı" ? "completed" : "ongoing"]}</span>
          </div>
          <div class="exp-meta">
            <span class="exp-company">⚙ ${item.company}</span>
            <span class="exp-location">📍 ${item.location}</span>
            <span class="exp-date">📅 ${item.date}</span>
          </div>
          <p class="exp-description">${item.description}</p>
          ${
            item.responsibilities.length
              ? `<div class="exp-section">
              <div class="exp-label">${labels.responsibilities}</div>
              <ul class="exp-list">
                ${item.responsibilities.map((r) => `<li>${r}</li>`).join("")}
              </ul>
            </div>`
              : ""
          }
          <div class="exp-section">
            <div class="exp-label">${labels.technologies}</div>
            <div class="tech-tags">
              ${item.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
            </div>
          </div>
        </article>`
      )
      .join("");
  }

  // ── Projects render ───────────────────────────────────────────
  function renderProjects(projects) {
    setText("projects-section-title", projects.sectionTitle);
    const labels = window.portfolioContent[currentLang].labels;

    const categoryOrder = ["aerospace", "software", "games"];
    categoryOrder.forEach((cat) => {
      const container = document.getElementById(`projects-cat-${cat}`);
      const titleEl = document.getElementById(`projects-cat-title-${cat}`);
      if (titleEl) titleEl.textContent = projects.categories[cat];
      if (!container) return;

      const items = projects.items.filter((p) => p.category === cat);
      container.innerHTML = items
        .map((item) => renderProjectCard(item, labels))
        .join("");
    });
  }

  function renderProjectCard(item, labels) {
    const statusKey =
      item.status === "Ongoing" || item.status === "Devam Ediyor"
        ? "ongoing"
        : item.status === "Completed" || item.status === "Tamamlandı"
        ? "completed"
        : item.status === "Various" || item.status === "Çeşitli"
        ? "various"
        : "planned";

    const repoBtn = item.repoUrl
      ? `<a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer" class="pixel-btn pixel-btn-sm">${labels.viewRepo} ↗</a>`
      : "";

    const demoBtn = item.demoUrl
      ? `<a href="${item.demoUrl}" target="_blank" rel="noopener noreferrer" class="pixel-btn pixel-btn-sm pixel-btn-alt">${labels.viewDemo} ↗</a>`
      : "";

    const respList =
      item.responsibilities.length
        ? `<div class="project-section">
          <div class="project-label">${labels.responsibilities}</div>
          <ul class="project-list">
            ${item.responsibilities.map((r) => `<li>${r}</li>`).join("")}
          </ul>
        </div>`
        : "";

    const techList =
      item.technologies.length
        ? `<div class="project-section">
          <div class="project-label">${labels.technologies}</div>
          <div class="tech-tags">
            ${item.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </div>`
        : "";

    return `
      <article class="quest-card project-card" id="project-${item.id}">
        <div class="project-header">
          <h4 class="quest-title project-name">${item.name}</h4>
          <span class="project-status-badge status-${statusKey}">${labels[statusKey]}</span>
        </div>
        <p class="project-description">${item.description}</p>
        <div class="project-meta-row">
          <span class="project-role-label">${labels.role}:</span>
          <span class="project-role">${item.role}</span>
        </div>
        ${respList}
        ${techList}
        ${repoBtn || demoBtn ? `<div class="project-btns">${repoBtn}${demoBtn}</div>` : ""}
      </article>`;
  }

  // ── Competitions render ───────────────────────────────────────
  function renderCompetitions(competitions) {
    setText("competitions-section-title", competitions.sectionTitle);
    const container = document.getElementById("competitions-list");
    if (!container) return;
    const labels = window.portfolioContent[currentLang].labels;

    container.innerHTML = competitions.items
      .map((item) => {
        const featuresList =
          item.features && item.features.length
            ? `<div class="comp-section">
              <div class="comp-label">${labels.features}</div>
              <ul class="comp-list">
                ${item.features.map((f) => `<li>${f}</li>`).join("")}
              </ul>
            </div>`
            : "";

        const techList =
          item.technologies && item.technologies.length
            ? `<div class="comp-section">
              <div class="comp-label">${labels.technologies}</div>
              <div class="tech-tags">
                ${item.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
              </div>
            </div>`
            : "";

        const repoBtn =
          item.repoUrl
            ? `<a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer" class="pixel-btn pixel-btn-sm">${item.repoLabel} ↗</a>`
            : "";

        const metaItems = [
          item.type ? `<span class="comp-type">🎮 ${item.type}</span>` : "",
          item.project ? `<span class="comp-project">📦 ${item.project}</span>` : "",
          item.teamSize ? `<span class="comp-team">👥 ${item.teamSize}</span>` : "",
          item.date ? `<span class="comp-date">📅 ${item.date}</span>` : "",
        ]
          .filter(Boolean)
          .join("");

        return `
          <article class="quest-card competition-card" id="comp-${item.id}">
            <h3 class="quest-title comp-name">${item.name}</h3>
            <div class="comp-meta">${metaItems}</div>
            <p class="comp-description">${item.description}</p>
            ${featuresList}
            ${techList}
            ${repoBtn ? `<div class="comp-btns">${repoBtn}</div>` : ""}
          </article>`;
      })
      .join("");

    if (competitions.otherJams && competitions.otherJams.length > 0) {
      const title = competitions.otherJamsTitle || "Diğer Etkinlikler";
      const otherJamsHtml = `
        <div class="skill-category quest-card" style="margin-top: 24px;">
          <h3 class="skill-cat-title">${title}</h3>
          <div class="skill-items">
            ${competitions.otherJams.map((jam) => `<span class="skill-tag">${jam}</span>`).join("")}
          </div>
        </div>
      `;
      container.innerHTML += otherJamsHtml;
    }
  }

  // ── Skills render ─────────────────────────────────────────────
  function renderSkills(skills) {
    setText("skills-section-title", skills.sectionTitle);
    const container = document.getElementById("skills-grid");
    if (!container) return;

    container.innerHTML = skills.categories
      .map(
        (cat) => `
        <div class="skill-category quest-card">
          <h3 class="skill-cat-title">${cat.name}</h3>
          <div class="skill-items">
            ${cat.items.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
          </div>
        </div>`
      )
      .join("");
  }

  // ── Education render ──────────────────────────────────────────
  function renderEducation(edu) {
    setText("education-section-title", edu.sectionTitle);
    setText("edu-degree", edu.degree);
    setText("edu-university", edu.university);
    setText("edu-interests-title", edu.interestsTitle);

    const list = document.getElementById("edu-interests-list");
    if (list) {
      list.innerHTML = edu.interests
        .map((i) => `<li>${i}</li>`)
        .join("");
    }
  }

  // ── Contact render ────────────────────────────────────────────
  function renderContact(contact) {
    setText("contact-section-title", contact.sectionTitle);
    setText("contact-title", contact.title);
    setText("contact-description", contact.description);
    setText("contact-github-label", contact.github);
    setText("contact-linkedin-label", contact.linkedin);
    setText("contact-instagram-label", contact.instagram);
    setText("contact-email-label", contact.email);
  }

  // ── Footer render ─────────────────────────────────────────────
  function renderFooter(footer) {
    setText("footer-location", footer.location);
    setText("footer-made-with", footer.madeWith);
  }

  // ── Helpers ───────────────────────────────────────────────────
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // ── Start Screen ──────────────────────────────────────────────
  // ALWAYS shows on every visit — no localStorage skip
  function initStartScreen() {
    const screen = document.getElementById("start-screen");
    const enterBtn = document.getElementById("ss-enter-btn");

    if (!screen) return;

    // Always show the start screen
    screen.style.display = "flex";
    screen.style.opacity = "1";

    // Hide portfolio wrapper until enter
    const portfolio = document.getElementById("portfolio-wrapper");
    if (portfolio) portfolio.style.display = "none";

    if (enterBtn) {
      enterBtn.addEventListener("click", () => {
        if (prefersReducedMotion) {
          hideStartScreen(true);
        } else {
          enterBtn.classList.add("mario-jump");
          setTimeout(() => hideStartScreen(false), 800);
        }
      });
    }

    // Also allow Enter/Space/Escape to dismiss
    document.addEventListener("keydown", function handler(e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        if (screen.style.display !== "none") {
          hideStartScreen(prefersReducedMotion);
          document.removeEventListener("keydown", handler);
        }
      }
    });
  }

  function hideStartScreen(instant) {
    const screen = document.getElementById("start-screen");
    const portfolio = document.getElementById("portfolio-wrapper");
    if (!screen) return;

    if (instant) {
      screen.style.display = "none";
      if (portfolio) portfolio.style.display = "block";
      return;
    }

    screen.style.opacity = "0";
    screen.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      screen.style.display = "none";
      if (portfolio) {
        portfolio.style.display = "block";
        portfolio.style.opacity = "0";
        portfolio.style.transition = "opacity 0.4s ease";
        requestAnimationFrame(() => {
          portfolio.style.opacity = "1";
        });
      }
    }, 500);
  }

  // ── Mobile Menu ───────────────────────────────────────────────
  function initMobileMenu() {
    const toggle = document.getElementById("mobile-menu-toggle");
    const menu = document.getElementById("mobile-nav-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("open");
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    menu.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      const hud = document.querySelector(".hud-bar");
      if (hud && !hud.contains(e.target)) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ── Smooth Scroll ─────────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          const hudHeight =
            document.querySelector(".hud-bar")?.offsetHeight || 80;
          const top =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            hudHeight -
            16;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
  }

  // ── Static Links ──────────────────────────────────────────────
  function populateStaticLinks() {
    setHref("contact-github-link", LINKS.github);
    setHref("contact-linkedin-link", LINKS.linkedin);
    setHref("contact-instagram-link", LINKS.instagram);
    setHref("contact-email-link", LINKS.email);
  }

  function setHref(id, href) {
    const el = document.getElementById(id);
    if (el) el.href = href;
  }

  // ── Global Exports ────────────────────────────────────────────
  window.portfolioToggleTheme = toggleTheme;
  window.portfolioToggleLang = toggleLang;
  window.portfolioSetLang = setLang;

  // ── Bootstrap ─────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
