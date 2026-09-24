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
        (item, index) => `
          <article class="answer-card">
            <div class="answer-number">${String(section.answers.length + index + 1).padStart(2, "0")}</div>
            <div>
              <span class="part-label">Part 1 · Additional practice</span>
              <h2>${item.question}</h2>
              <p>“${item.answer}”</p>
            </div>
          </article>`,
      )
      .join("");
    const topicPacks = section.topicPacks
      .map(
        (pack, index) => `<details class="speaking-pack" ${index === 0 ? "open" : ""}>
          <summary><span class="speaking-pack-number">${String(index + 1).padStart(2, "0")}</span><span><strong>${escapeText(pack.title)}</strong><small>${escapeText(pack.description)}</small></span><span class="writing-model-toggle" aria-hidden="true">+</span></summary>
          <div class="speaking-pack-body">
            <section><span class="part-label">Part 1 · Short answers</span><ol>${pack.part1.map((question) => `<li lang="en">${escapeText(question)}</li>`).join("")}</ol></section>
            <section class="cue-card"><span class="part-label">Part 2 · Cue card</span><h3 lang="en">${escapeText(pack.part2.prompt)}</h3><ul>${pack.part2.points.map((point) => `<li lang="en">${escapeText(point)}</li>`).join("")}</ul></section>
            <section><span class="part-label">Part 3 · Discussion</span><ol>${pack.part3.map((question) => `<li lang="en">${escapeText(question)}</li>`).join("")}</ol></section>
            <div class="speaking-pack-phrases"><span>Useful language</span>${pack.expressions.map((phrase) => `<strong lang="en">${escapeText(phrase)}</strong>`).join("")}</div>
          </div>
        </details>`,
      )
      .join("");
    const partTwoBank = section.partTwoBank
      .map((item, index) => `<article class="prompt-card"><span>${String(index + 1).padStart(2, "0")} · ${escapeText(item.topic)}</span><p lang="en">${escapeText(item.question)}</p></article>`)
      .join("");
    return `
      ${pageHeader("Speaking notes", section.title, section.description)}
      <div class="answer-list">${cards}</div>
      <section class="section-block" aria-labelledby="practice-heading">
        <div class="section-heading">
          <div><span class="eyebrow">More to practise</span><h2 id="practice-heading">Additional Part 1 answers</h2></div>
          <span class="section-count">${section.practiceNotes.length} answers</span>
        </div>
        <p class="section-intro">Practice answers, separate from your finalized set above.</p>
        <div class="answer-list">${practiceNotes}</div>
      </section>
      <section class="section-block" aria-labelledby="part-two-guide-heading">
        <div class="section-heading"><div><span class="eyebrow">Part 2 strategy</span><h2 id="part-two-guide-heading">${escapeText(section.partTwoGuide.title)}</h2></div></div>
        <div class="part-two-guide">
          <ol>${section.partTwoGuide.rules.map((rule) => `<li>${escapeText(rule)}</li>`).join("")}</ol>
          <div class="answer-flow" aria-label="Part 2 answer structure">${section.partTwoGuide.framework.map((step, index) => `<span><small>${index + 1}</small>${escapeText(step)}</span>`).join("")}</div>
        </div>
      </section>
      <section class="section-block" aria-labelledby="topic-packs-heading">
        <div class="section-heading"><div><span class="eyebrow">Part 1 → Part 2 → Part 3</span><h2 id="topic-packs-heading">Topic practice packs</h2></div><span class="section-count">${section.topicPacks.length} topics</span></div>
        <p class="section-intro">같은 주제를 난이도가 다른 질문으로 확장해보세요. 답은 외우지 말고, 표시된 표현을 여러 질문에서 다시 사용합니다.</p>
        <div class="speaking-pack-list">${topicPacks}</div>
      </section>
      <section class="section-block" aria-labelledby="part-two-bank-heading">
        <div class="section-heading"><div><span class="eyebrow">Question rotation</span><h2 id="part-two-bank-heading">Part 2 variety bank</h2></div><span class="section-count">${section.partTwoBank.length} prompts</span></div>
        <p class="section-intro">매번 다른 질문을 골라 1분 메모 후 1–2분 동안 말해보세요.</p>
        <div class="prompt-grid">${partTwoBank}</div>
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

  function escapeText(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[character]);
  }

  function renderMarkedDraft(paragraphs, id) {
    const notes = [];
    const marked = paragraphs.map((segments) => `<p>${segments.map((segment) => {
      if (typeof segment === "string") return escapeText(segment);
      const number = notes.push(segment);
      return `<span class="pen-edit"><span class="sr-only">원문: </span><del>${escapeText(segment.original)}</del> <span class="sr-only">수정: </span><ins>${escapeText(segment.replacement)}</ins><a class="pen-reference" id="${id}-mark-${number}" href="#${id}-note-${number}" data-review-anchor="${id}-note-${number}" aria-label="첨삭 이유 ${number} 보기">${number}</a></span>`;
    }).join("")}</p>`).join("");
    return `<div class="pen-layout"><div class="pen-paper" lang="en">${marked}</div><ol class="pen-notes">${notes.map((note, index) => `<li id="${id}-note-${index + 1}" tabindex="-1"><span class="pen-category">${escapeText(note.category || "수정 제안")}</span><p>${escapeText(note.reason)}</p><a href="#${id}-mark-${index + 1}" data-review-anchor="${id}-mark-${index + 1}">원문 위치로 ↩</a></li>`).join("")}</ol></div>`;
  }

  function renderSentenceComparisons(groups) {
    return groups.map((group) => `<section class="comparison-group" aria-label="${escapeText(group.section)}">
      <h4>${escapeText(group.section)}</h4>
      <div class="comparison-list">${group.rows.map(([original, revised, reason], index) => `<article class="comparison-row">
        <span class="comparison-number">${String(index + 1).padStart(2, "0")}</span>
        <div class="comparison-cell comparison-original"><span class="comparison-label">내 문장</span><p lang="en">${escapeText(original)}</p></div>
        <div class="comparison-cell comparison-revised"><span class="comparison-label">수정 문장</span><p lang="en">${escapeText(revised)}</p></div>
        <p class="comparison-reason"><strong>왜 바꿨나요?</strong> ${escapeText(reason)}</p>
      </article>`).join("")}</div>
    </section>`).join("");
  }

  function renderWritingPhraseBank(phraseBank) {
    return `<section class="section-block" aria-labelledby="writing-phrase-bank-heading">
      <div class="section-heading"><div><span class="eyebrow">Reusable language · from saved answers</span><h2 id="writing-phrase-bank-heading">Task별 글의 구조와 표현</h2></div></div>
      <p class="section-intro">아래 예문은 위 첨삭 답안과 저장된 Task 1·Task 2 답안에서 가져왔습니다. 표현 틀의 주제와 수치는 새 문제에 맞게 바꿔 쓰세요.</p>
      <div class="phrase-task-list">${phraseBank.map((task) => `<article class="phrase-task"><h3>${escapeText(task.task)}</h3>
        ${task.sections.map((section) => `<div class="phrase-stage"><h4>${escapeText(section.name)}</h4><div class="phrase-stage-items">
          ${section.items.map((item) => `<div class="phrase-stage-item"><strong lang="en">${escapeText(item.pattern)}</strong><p class="phrase-example" lang="en">${escapeText(item.example)}</p><p class="phrase-note">${escapeText(item.note)}</p></div>`).join("")}
        </div></div>`).join("")}
      </article>`).join("")}</div>
    </section>`;
  }

  function renderTaskOneToolkit(toolkit) {
    const movementRows = toolkit.movement.map((item) => `<tr><th scope="row">${escapeText(item.meaning)}</th><td lang="en">${escapeText(item.verb)}</td><td lang="en">${escapeText(item.noun)}</td><td lang="en">${escapeText(item.example)}</td></tr>`).join("");
    const degreeCards = toolkit.degrees.map((item) => `<article class="toolkit-mini-card"><span>${escapeText(item.level)}</span><strong lang="en">${escapeText(item.words)}</strong><p lang="en">${escapeText(item.example)}</p>${item.warning ? `<small>${escapeText(item.warning)}</small>` : ""}</article>`).join("");
    const numberCards = toolkit.numbers.map((item) => `<article class="toolkit-rule-card"><strong lang="en">${escapeText(item.form)}</strong><span>${escapeText(item.meaning)}</span><p lang="en">${escapeText(item.example)}</p></article>`).join("");
    const overviewCards = toolkit.overviews.map((item) => `<article class="overview-builder-card"><span class="part-label">${escapeText(item.type)}</span><h4>${escapeText(item.lookFor)}</h4><p lang="en">${escapeText(item.template)}</p><small>${escapeText(item.reminder)}</small></article>`).join("");
    const comparisonCards = toolkit.comparisons.map((item) => `<article class="comparison-expression"><span>${escapeText(item.purpose)}</span><strong lang="en">${escapeText(item.pattern)}</strong><p lang="en">${escapeText(item.example)}</p></article>`).join("");
    const mistakeRows = toolkit.mistakes.map((item, index) => `<article class="toolkit-correction"><span class="comparison-number">${String(index + 1).padStart(2, "0")}</span><div class="toolkit-correction-text"><p class="toolkit-wrong" lang="en">${escapeText(item.original)}</p><p class="toolkit-right" lang="en">${escapeText(item.corrected)}</p><small>${escapeText(item.reason)}</small></div></article>`).join("");
    const practiceCards = toolkit.practice.map((item, index) => `<details class="toolkit-practice-card"><summary><span>${String(index + 1).padStart(2, "0")} · ${escapeText(item.label)}</span><strong>${escapeText(item.prompt)}</strong><i aria-hidden="true">+</i></summary><div><p lang="en">${escapeText(item.answer)}</p><small>${escapeText(item.note)}</small></div></details>`).join("");

    return `<section class="section-block task-one-toolkit" aria-labelledby="task-one-toolkit-heading">
      <div class="section-heading"><div><span class="eyebrow">Task 1 · Quick reference</span><h2 id="task-one-toolkit-heading">Task 1 Toolkit</h2></div><span class="section-count">5 tools</span></div>
      <p class="section-intro">${escapeText(toolkit.note)}</p>
      <details class="toolkit-section" open>
        <summary><span><small>01</small><strong>변화를 정확하게 쓰기</strong></span><i aria-hidden="true">+</i></summary>
        <div class="toolkit-section-body">
          <div class="toolkit-table-wrap"><table class="toolkit-table"><thead><tr><th>의미</th><th>동사</th><th>명사</th><th>예문</th></tr></thead><tbody>${movementRows}</tbody></table></div>
          <h4 class="toolkit-subheading">변화의 크기</h4><div class="toolkit-mini-grid">${degreeCards}</div>
        </div>
      </details>
      <details class="toolkit-section">
        <summary><span><small>02</small><strong>수치 문법 · from / to / by / at</strong></span><i aria-hidden="true">+</i></summary>
        <div class="toolkit-section-body"><div class="toolkit-rule-grid">${numberCards}</div></div>
      </details>
      <details class="toolkit-section">
        <summary><span><small>03</small><strong>Overview Builder</strong></span><i aria-hidden="true">+</i></summary>
        <div class="toolkit-section-body"><p class="toolkit-lead">Overview에는 모든 숫자가 아니라, 채점자가 한눈에 알아야 할 큰 특징 2가지를 씁니다.</p><div class="overview-builder-grid">${overviewCards}</div></div>
      </details>
      <details class="toolkit-section">
        <summary><span><small>04</small><strong>Comparison Expressions</strong></span><i aria-hidden="true">+</i></summary>
        <div class="toolkit-section-body"><div class="comparison-expression-grid">${comparisonCards}</div></div>
      </details>
      <details class="toolkit-section">
        <summary><span><small>05</small><strong>Common Mistakes</strong></span><i aria-hidden="true">+</i></summary>
        <div class="toolkit-section-body"><div class="toolkit-correction-list">${mistakeRows}</div></div>
      </details>
      <section class="toolkit-practice" aria-labelledby="task-one-practice-heading"><span class="eyebrow">Check yourself</span><h3 id="task-one-practice-heading">Mini Practice</h3><p>먼저 직접 한 문장을 만든 뒤 카드를 열어 답을 확인하세요.</p><div>${practiceCards}</div></section>
    </section>`;
  }

  function renderWritingReviews(section) {
    const reviews = section.reviews.map((review, index) => {
      const id = `review-${index}`;
      const original = review.paragraphs.map((segments) => `<p>${segments.map((segment) => escapeText(typeof segment === "string" ? segment : segment.original)).join("")}</p>`).join("");
      return `<details class="writing-model writing-review" ${index === 0 ? "open" : ""}>
        <summary><span class="writing-model-number">${String(index + 1).padStart(2, "0")}</span><span class="writing-model-title"><small>${escapeText(review.task)}</small><strong>${escapeText(review.title)}</strong></span><span class="writing-model-toggle" aria-hidden="true">+</span></summary>
        <div class="review-content">
          ${review.prompt ? `<div class="review-prompt"><span class="eyebrow">Essay question</span><p lang="en">${escapeText(review.prompt)}</p></div>` : ""}
          ${review.focus ? `<div class="review-focus"><strong>가장 중요한 피드백</strong><p>${escapeText(review.focus)}</p></div>` : ""}
          <h3>01 · 문장별 비교 첨삭</h3>
          <p class="review-caption">왼쪽 원문과 오른쪽 수정안을 한 문장씩 비교하세요. 각 문장 아래에 수정 이유를 적었습니다. 아래 완성 답안은 논리와 문단 구성까지 다시 다듬었으므로 수정 문장을 그대로 이어 붙인 글은 아닙니다.</p>
          ${review.comparisons ? renderSentenceComparisons(review.comparisons) : renderMarkedDraft(review.paragraphs, id)}
          ${review.comparisons ? `<details class="review-original"><summary>기존 빨간펜 표시로도 보기</summary>${renderMarkedDraft(review.paragraphs, id)}</details>` : ""}
          <details class="review-original"><summary>원문만 보기</summary><div lang="en">${original}</div></details>
          <h3>02 · Band 7.0 목표 답안</h3>
          <div class="review-model" lang="en">${review.model.map((paragraph) => `<p>${escapeText(paragraph)}</p>`).join("")}</div>
          <h3>03 · 이번 글에서 가져갈 표현</h3>
          <div class="review-phrases">${review.expressions.map((expression) => `<article><strong lang="en">${escapeText(expression.phrase)}</strong><p>${escapeText(expression.meaning)}</p><p lang="en">${escapeText(expression.example)}</p></article>`).join("")}</div>
        </div>
      </details>`;
    }).join("");
    return `<section class="section-block" aria-labelledby="writing-reviews-heading">
      <div class="section-heading"><div><span class="eyebrow">My writing · feedback</span><h2 id="writing-reviews-heading">내 답안 첨삭</h2></div><span class="section-count">${section.reviews.length} reviews</span></div>
      ${reviews || `<div class="review-empty"><p>직접 쓴 답안을 이 대화에 보내주세요. 빨간펜 첨삭 → Band 7.0 목표 답안 → 핵심 표현 순서로 이곳에 정리합니다.</p><span class="pen-category">표시 예시 · 실제 제출 답안 아님</span>${renderMarkedDraft([section.reviewPreview], "review-preview")}</div>`}
    </section>`;
  }

  // Annotation links stay within the current hash route instead of triggering navigation.
  app.addEventListener("click", (event) => {
    const link = event.target.closest("[data-review-anchor]");
    if (!link) return;
    event.preventDefault();
    const target = document.getElementById(link.dataset.reviewAnchor);
    if (target) {
      target.scrollIntoView({ block: "center" });
      target.focus({ preventScroll: true });
    }
  });

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
    const models = section.models
      .map(
        (model, index) => `
          <details class="writing-model">
            <summary>
              <span class="writing-model-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="writing-model-title"><small>${model.task}</small><strong>${model.title}</strong></span>
              <span class="writing-model-toggle" aria-hidden="true">+</span>
            </summary>
            <div class="writing-model-body">${model.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
          </details>`,
      )
      .join("");

    return `
      ${pageHeader("Writing essentials", section.title, section.description)}
      ${renderWritingReviews(section)}
      ${renderTaskOneToolkit(section.taskOneToolkit)}
      ${renderWritingPhraseBank(section.phraseBank)}
      <div class="writing-principle">${section.principle}</div>
      <div class="writing-grid">${tasks}</div>
      <p class="writing-routine"><strong>Practice:</strong> ${section.routine}</p>
      <section class="section-block" aria-labelledby="writing-models-heading">
        <div class="section-heading">
          <div><span class="eyebrow">Saved answers</span><h2 id="writing-models-heading">Model answers</h2></div>
          <span class="section-count">${section.models.length} answers</span>
        </div>
        <div class="writing-model-list">${models}</div>
      </section>`;
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
    const topicPacks = section.topicPacks.map((pack) => `<article class="expression-pack">
      <h2>${escapeText(pack.title)}</h2>
      <div>${pack.items.map((item) => `<section><h3 lang="en">${escapeText(item.phrase)}</h3><span>${escapeText(item.meaning)}</span><p lang="en">${escapeText(item.example)}</p></section>`).join("")}</div>
    </article>`).join("");
    return `
      ${pageHeader("Phrase bank", section.title, section.description)}
      <section class="section-block" aria-labelledby="topic-expression-packs-heading">
        <div class="section-heading"><div><span class="eyebrow">From recent speaking materials</span><h2 id="topic-expression-packs-heading">Topic expression packs</h2></div><span class="section-count">${section.topicPacks.length} topics</span></div>
        <p class="section-intro">실제 답변에 자연스럽게 넣기 좋은 표현만 선별했습니다. 한 주제에서 2–3개만 골라 반복하세요.</p>
        <div class="expression-pack-grid">${topicPacks}</div>
      </section>
      <section class="section-block" aria-labelledby="personal-expression-bank-heading">
        <div class="section-heading"><div><span class="eyebrow">Personal archive</span><h2 id="personal-expression-bank-heading">My reusable expressions</h2></div></div>
      <div class="expression-list">
        ${section.items
          .map(
            (item, index) => `
              <article>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${item}</h2>
                  <ul class="expression-examples">${section.examples[item].map((example) => `<li>${example}</li>`).join("")}</ul>
                </div>
              </article>`,
          )
          .join("")}
      </div>
      </section>
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
