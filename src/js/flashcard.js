// ============================================================
//  flashcard.js — フラッシュカード（SRS + フリップアニメーション）
// ============================================================

const Flashcard = (() => {
  let state = {
    queue: [],
    currentIdx: 0,
    flipped: false,
    filter: 'all',   // 'all' | 'due' | '電気理論' | '材料' | ...
    mode: 'srs',     // 'srs' | 'list'
  };

  let _searchTerm = '';

  // ── 初期化 ──────────────────────────────────────
  function init(filter) {
    if (filter) state.filter = filter;
    if (state.mode === 'srs') {
      initSRS();
    } else {
      renderList();
    }
  }

  // ── フラッシュカードモード ───────────────────────
  function initSRS() {
    state.mode = 'srs';
    let pool;
    if (state.filter === 'due') {
      pool = Storage.getDueSRSTerms();
    } else if (state.filter === 'all') {
      pool = [...vocabData];
    } else {
      pool = vocabData.filter(v => v.category === state.filter);
    }
    pool = pool.sort(() => Math.random() - 0.5);
    state.queue = pool;
    state.currentIdx = 0;
    state.flipped = false;
    renderSRS();
  }

  function renderSRS() {
    const container = document.getElementById('vocab-content');
    if (!container) return;

    const dueCount = Storage.getDueSRSTerms().length;
    const catCounts = {};
    vocabData.forEach(v => { catCounts[v.category] = (catCounts[v.category] || 0) + 1; });

    const filters = [
      { key: 'all', label: `すべて (${vocabData.length})` },
      { key: 'due', label: `今日の復習 (${dueCount})` },
      ...Object.entries(catCounts).map(([k, n]) => ({ key: k, label: `${k} (${n})` }))
    ];

    if (!state.queue.length) {
      container.innerHTML = `
        <div class="filter-bar">
          ${filters.map(f => `<button class="filter-chip ${state.filter === f.key ? 'active' : ''}"
            onclick="Flashcard.init('${f.key}')">${f.label}</button>`).join('')}
        </div>
        <div class="text-center mt-2" style="padding:2rem;color:var(--clr-muted)">
          <div style="font-size:48px">🎉</div>
          <div style="margin-top:.5rem;font-weight:700">今日の復習カードはありません！</div>
          <div style="font-size:13px;margin-top:4px">また明日来てください</div>
          <button class="btn mt-2" onclick="Flashcard.setFilter('all');Flashcard.initSRS()">全カード表示</button>
        </div>`;
      return;
    }

    const v = state.queue[state.currentIdx];
    const progress = Math.round((state.currentIdx / state.queue.length) * 100);

    container.innerHTML = `
      <div class="filter-bar">
        ${filters.map(f => `<button class="filter-chip ${state.filter === f.key ? 'active' : ''}"
          onclick="Flashcard.init('${f.key}')">${f.label}</button>`).join('')}
      </div>

      <div class="quiz-progress" style="margin-bottom:1rem">
        <div class="progress-track">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
        <div class="progress-labels">
          <span>${state.currentIdx + 1} / ${state.queue.length}</span>
          <span>復習 ${dueCount}件</span>
        </div>
      </div>

      <div class="flashcard-area" style="min-height:220px">
        <div class="flashcard ${state.flipped ? 'flipped' : ''}" id="flashcard" onclick="Flashcard.flipCard()">
          <div class="flashcard-front">
            <div class="fc-hint">カードをタップして答えを確認</div>
            <span class="fc-category-tag" style="background:rgba(255,255,255,.2);color:#fff">${v.category}</span>
            <div class="fc-term">${v.term}</div>
            ${v.reading ? `<div class="fc-reading">（${v.reading}）</div>` : ''}
          </div>
          <div class="flashcard-back">
            <div class="fc-category-tag" style="background:var(--clr-primary-l);color:var(--clr-primary)">${v.category}</div>
            <div class="fc-def">${v.def}</div>
            ${v.example ? `<div class="fc-example">${v.example}</div>` : ''}
          </div>
        </div>
      </div>

      <div id="srs-section" style="${state.flipped ? '' : 'display:none'}">
        <div style="font-size:12px;color:var(--clr-muted);text-align:center;margin-bottom:8px">
          どのくらい覚えていましたか？
        </div>
        <div class="srs-buttons">
          <button class="srs-btn srs-btn-again" onclick="Flashcard.rateSRS(0)">
            もう一度<br>
            <div class="srs-next-label">${Storage.getNextSRSLabel(v.term, 0)}</div>
          </button>
          <button class="srs-btn srs-btn-hard" onclick="Flashcard.rateSRS(1)">
            難しい<br>
            <div class="srs-next-label">${Storage.getNextSRSLabel(v.term, 1)}</div>
          </button>
          <button class="srs-btn srs-btn-good" onclick="Flashcard.rateSRS(2)">
            覚えた<br>
            <div class="srs-next-label">${Storage.getNextSRSLabel(v.term, 2)}</div>
          </button>
          <button class="srs-btn srs-btn-easy" onclick="Flashcard.rateSRS(3)">
            簡単<br>
            <div class="srs-next-label">${Storage.getNextSRSLabel(v.term, 3)}</div>
          </button>
        </div>
      </div>

      <div style="display:flex;gap:8px;margin-top:1rem;justify-content:center">
        <button class="btn" onclick="Flashcard.prevCard()" ${state.currentIdx === 0 ? 'disabled' : ''}>← 前へ</button>
        <button class="btn" onclick="Flashcard.skipCard()">スキップ →</button>
        <button class="btn" onclick="Flashcard.toggleMode()">リスト表示</button>
      </div>
    `;
  }

  function flipCard() {
    state.flipped = !state.flipped;
    const card = document.getElementById('flashcard');
    const srs  = document.getElementById('srs-section');
    if (card) card.classList.toggle('flipped', state.flipped);
    if (srs)  srs.style.display = state.flipped ? '' : 'none';
  }

  function rateSRS(quality) {
    const v = state.queue[state.currentIdx];
    Storage.updateSRS(v.term, quality);
    const newBadges = Storage.checkAndAwardBadges();
    if (newBadges.length) Achievements.showNewBadges(newBadges);
    nextCard();
  }

  function nextCard() {
    state.currentIdx++;
    state.flipped = false;
    if (state.currentIdx >= state.queue.length) {
      App.showToast('🎉 セット完了！', 'success');
      state.currentIdx = 0;
    }
    renderSRS();
  }

  function prevCard() {
    if (state.currentIdx > 0) {
      state.currentIdx--;
      state.flipped = false;
      renderSRS();
    }
  }

  function skipCard() { nextCard(); }

  // ── リストモード ─────────────────────────────────
  function toggleMode() {
    state.mode = state.mode === 'srs' ? 'list' : 'srs';
    if (state.mode === 'list') renderList();
    else initSRS();
  }

  function renderList() {
    const container = document.getElementById('vocab-content');
    if (!container) return;

    const dueCount = Storage.getDueSRSTerms().length;
    const catCounts = {};
    vocabData.forEach(v => { catCounts[v.category] = (catCounts[v.category] || 0) + 1; });
    const filters = [
      { key: 'all', label: `すべて (${vocabData.length})` },
      { key: 'due', label: `今日の復習 (${dueCount})` },
      ...Object.entries(catCounts).map(([k, n]) => ({ key: k, label: `${k} (${n})` }))
    ];

    let pool = state.filter === 'all' ? [...vocabData]
      : state.filter === 'due' ? Storage.getDueSRSTerms()
      : vocabData.filter(v => v.category === state.filter);

    if (_searchTerm) {
      const low = _searchTerm.toLowerCase();
      pool = pool.filter(v =>
        v.term.includes(low) ||
        (v.reading && v.reading.includes(low)) ||
        v.def.includes(low)
      );
    }

    container.innerHTML = `
      <div class="filter-bar">
        ${filters.map(f => `<button class="filter-chip ${state.filter === f.key ? 'active' : ''}"
          onclick="Flashcard.init('${f.key}')">${f.label}</button>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <input class="vocab-search" type="search" placeholder="用語を検索..." id="vocab-search-input" value="${_searchTerm}" />
        <button class="btn" onclick="Flashcard.toggleMode()">カード表示</button>
      </div>
      <div class="vocab-list" id="vocab-list">
        ${pool.map((v, i) => {
          const srs = Storage.getSRS(v.term);
          const due = srs.due <= Date.now();
          return `
          <div class="vocab-card" id="vocab-${i}">
            <div class="vocab-front" onclick="Flashcard.toggleCard(${i})">
              <div class="vocab-term-row">
                <div class="vocab-term">${v.term} ${due ? '<span style="color:var(--clr-warn);font-size:11px">復習</span>' : ''}</div>
                ${v.reading ? `<div class="vocab-reading">${v.reading}</div>` : ''}
              </div>
              <div class="vocab-expand">⌄</div>
            </div>
            <div class="vocab-body">
              <div class="vocab-def-text">${v.def}</div>
              ${v.example ? `<div class="vocab-example-text">${v.example}</div>` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
    `;

    // 検索入力のイベントリスナーを設定
    const searchInput = document.getElementById('vocab-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        _searchTerm = e.target.value;
        renderList();
      });
      // 入力後にフォーカスを戻す（再描画されるため）
      searchInput.focus();
      searchInput.setSelectionRange(_searchTerm.length, _searchTerm.length);
    }
  }

  function toggleCard(i) {
    const card = document.getElementById(`vocab-${i}`);
    if (card) card.classList.toggle('open');
  }

  return {
    init,
    initSRS,
    renderSRS,
    flipCard,
    rateSRS,
    nextCard,
    prevCard,
    skipCard,
    toggleMode,
    renderList,
    toggleCard,
    setFilter: (f) => { state.filter = f; }
  };
})();
