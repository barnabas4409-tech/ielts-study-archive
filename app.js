(function () {
  "use strict";

  const content = window.IELTS_CONTENT;
  const app = document.querySelector("#app");
  const navigation = document.querySelector("#navigation");
  const validRoutes = new Set(content.navigation.map((item) => item.route));

  const icons = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5M9 20v-6h6v6"/>',
    speaking: '<path d="M5 5.5h14v10H9l-4 3v-13Z"/><path d="M9 9h6M9 12h4"/>',
    writing: '<path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"/><path d="m14.5 7.5 3 3"/>',
    reading: '<path d="M4 5.5c3-1 5.7-.4 8 1.5v12c-2.3-1.9-5-2.5-8-1.5v-12Z"/><path d="M20 5.5c-3-1-5.7-.4-8 1.5v12c2.3-1.9 5-2.5 8-1.5v-12Z"/>',
    listening: '<path d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-7h4M4 13h4v7H6a2 2 0 0 1-2-2v-5Z"/>',
    expressions: '<path d="M5 5h14v12H8l-3 3V5Z"/><path d="M9 9h6M9 12h6"/>',
    pronunciation: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6"/>',
  };

  function icon(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
  }

  function renderNavigation(activeRoute) {
    navigation.innerHTML = content.navigation
      .map(
        (item) => `
          <a href="#/${item.route}" class="nav-link ${item.route === activeRoute ? "active" : ""}" ${item.route === activeRoute ? 'aria-current="page"' : ""}>
            ${icon(item.icon)}
            <span>${item.label}</span>
          </a>`,
      )
      .join("");
  }

  function pageHeader(kicker, title, description) {
    return `
      <header class="page-header">
        <div>
          <span class="eyebrow">${kicker}</span>
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
        <div class="date-chip">Study archive</div>
      </header>`;
  }

  function renderHome() {
    const skillCards = content.navigation
      .filter((item) => item.route !== "home")
      .map((item) => {
        const section = content[item.route];
        return `
          <a class="skill-card" href="#/${item.route}">
            <span class="skill-icon ${item.route}">${icon(item.icon)}</span>
            <span>
              <strong>${item.label}</strong>
              <small>${section.description}</small>
            </span>
            <span class="arrow" aria-hidden="true">→</span>
          </a>`;
      })
      .join("");

    return `
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Welcome back</span>
          <h1>${content.profile.title}</h1>
          <p>${content.profile.subtitle}</p>
          <a class="primary-button" href="#/speaking">Review speaking answers <span>→</span></a>
        </div>
        <div class="band-orbit" aria-label="Target score Band ${content.profile.targetBand}">
          <span>Target</span>
          <strong>${content.profile.targetBand}</strong>
          <small>IELTS Band</small>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <div><span class="eyebrow">Study areas</span><h2>Choose what to review</h2></div>
          <span class="section-count">6 sections</span>
        </div>
        <div class="skill-grid">${skillCards}</div>
      </section>

      <section class="focus-card">
        <span class="focus-number">23<small>/40</small></span>
        <div>
          <span class="eyebrow">Current focus</span>
          <h2>Listening details</h2>
          <p>Practise postcodes, numbers, units, and a wider range of accents.</p>
        </div>
        <a href="#/listening">Open notes →</a>
      </section>`;
  }

  function renderSpeaking() {
    const section = content.speaking;
    const cards = section.answers
      .map(
        (item, index) => `
          <article class="answer-card">
            <div class="answer-number">${String(index + 1).padStart(2, "0")}</div>
            <div>
              <span class="part-label">Part 1</span>
              <h2>${item.question}</h2>
              <p>“${item.answer}”</p>
            </div>
          </article>`,
      )
      .join("");
    const practiceNotes = section.practiceNotes
      .map(
        (item) => `
          <article class="practice-card">
            <span class="part-label">Practice idea</span>
            <h3>${item.topic}</h3>
            <p>“${item.answer}”</p>
          </article>`,
      )
      .join("");
    return `
      ${pageHeader("Speaking notes", section.title, section.description)}
      <div class="answer-list">${cards}</div>
      <section class="section-block" aria-labelledby="practice-heading">
        <div class="section-heading">
          <div><span class="eyebrow">More to practise</span><h2 id="practice-heading">Additional topic notes</h2></div>
          <span class="section-count">${section.practiceNotes.length} ideas</span>
        </div>
        <p class="section-intro">These are practice ideas, separate from your finalized Part 1 answers.</p>
        <div class="practice-grid">${practiceNotes}</div>
      </section>`;
  }

  function renderStarter(route) {
    const section = content[route];
    const cards = section.starters
      .map(
        (item, index) => `
          <article class="starter-card">
            <span class="starter-index">0${index + 1}</span>
            <h2>${item.title}</h2>
            <p>${item.note}</p>
            <span class="coming-soon">Ready for notes</span>
          </article>`,
      )
      .join("");
    return `${pageHeader("Study section", section.title, section.description)}<div class="starter-grid">${cards}</div>`;
  }

  function renderWriting() {
    const section = content.writing;
    const tasks = section.tasks
      .map(
        (task) => `
          <article class="writing-card">
            <h2>${task.title}</h2>
            <p class="writing-rule">${task.rule}</p>
            <ol>${task.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
            <div class="writing-example"><span class="eyebrow">One useful example</span><p>${task.example}</p></div>
            <div class="writing-chunks">${task.chunks.map((chunk) => `<span>${chunk}</span>`).join("")}</div>
          </article>`,
      )
      .join("");

    return `
      ${pageHeader("Writing essentials", section.title, section.description)}
      <div class="writing-principle">${section.principle}</div>
      <div class="writing-grid">${tasks}</div>
      <p class="writing-routine"><strong>Practice:</strong> ${section.routine}</p>`;
  }

  function renderListening() {
    const section = content.listening;
    const percent = Math.round((section.recentScore.score / section.recentScore.total) * 100);
    return `
      ${pageHeader("Practice review", section.title, section.description)}
      <div class="listening-layout">
        <article class="score-card">
          <span class="eyebrow">Recent score</span>
          <div class="score-value">${section.recentScore.score}<small>/${section.recentScore.total}</small></div>
          <div class="score-bar"><span style="width: ${percent}%"></span></div>
          <p>${percent}% correct · a useful baseline for the next practice set.</p>
        </article>
        <article class="note-card">
          <span class="eyebrow">Weak points</span>
          <h2>Listen more closely for…</h2>
          <div class="tag-list">${section.weakPoints.map((item) => `<span>${item}</span>`).join("")}</div>
        </article>
      </div>
      <section class="confusion-card">
        <div><span class="eyebrow">Error patterns</span><h2>Common confusions</h2></div>
        <div class="confusion-grid">${section.commonConfusions
          .map((item) => {
            const [first, second] = item.split(" / ");
            return `<div><span>${first}</span><small>or</small><span>${second}</span></div>`;
          })
          .join("")}</div>
      </section>`;
  }

  function renderExpressions() {
    const section = content.expressions;
    return `
      ${pageHeader("Phrase bank", section.title, section.description)}
      <div class="expression-list">
        ${section.items
          .map(
            (item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${item}</h2>${section.examples[item] ? `<p class="expression-example">${section.examples[item]}</p>` : ""}</div><small>${section.examples[item] ? "Example" : "Ready to use"}</small></article>`,
          )
          .join("")}
      </div>
      <section class="section-block" aria-labelledby="expression-tips-heading">
        <div class="section-heading">
          <div><span class="eyebrow">Usage notes</span><h2 id="expression-tips-heading">Natural ways to say it</h2></div>
        </div>
        <div class="tip-grid">
          ${section.tips
            .map(
              (item) => `<article class="tip-card"><h3>${item.title}</h3><p class="tip-example">${item.example}</p><p>${item.note}</p></article>`,
            )
            .join("")}
        </div>
      </section>`;
  }

  function renderPronunciation() {
    const section = content.pronunciation;
    return `
      ${pageHeader("Sound practice", section.title, section.description)}
      <div class="pronunciation-grid">
        ${section.items
          .map(
            (item) => `<article class="pronunciation-card"><span class="sound-mark">${icon("pronunciation")}</span><h2>${item.phrase}</h2><p>${item.phonetic}</p><small>Say it slowly, then in a sentence.</small></article>`,
          )
          .join("")}
      </div>`;
  }

  const renderers = {
    home: renderHome,
    speaking: renderSpeaking,
    writing: renderWriting,
    reading: () => renderStarter("reading"),
    listening: renderListening,
    expressions: renderExpressions,
    pronunciation: renderPronunciation,
  };

  function getRoute() {
    const route = window.location.hash.replace(/^#\/?/, "").split("/")[0];
    return validRoutes.has(route) ? route : "home";
  }

  function render() {
    const route = getRoute();
    if (window.location.hash !== `#/${route}`) {
      window.history.replaceState(null, "", `#/${route}`);
    }
    renderNavigation(route);
    app.innerHTML = renderers[route]();
    document.title = `${content[route]?.title || "Home"} · IELTS Study Archive`;
    window.scrollTo({ top: 0, behavior: "auto" });
    app.focus({ preventScroll: true });
  }

  window.addEventListener("hashchange", render);
  render();
})();
