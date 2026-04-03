const App = (() => {
  const TAB_IDS = ['home', 'quiz', 'formula', 'vocab', 'wiring', 'stats'];
  const CATEGORY_COLORS = ['theory', 'design', 'tools', 'law'];

  function getTopCategories(limit = 4) {
    const counts = new Map();
    questions.forEach(q => counts.set(q.category, (counts.get(q.category) || 0) + 1));
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name, count], idx) => ({ name, count, color: CATEGORY_COLORS[idx % CATEGORY_COLORS.length] }));
  }

  function configureHomeCategoryCards() {
    const cats = getTopCategories();
    const cards = document.querySelectorAll('#sec-home .cat-card');
    cards.forEach((card, i) => {
      const cat = cats[i];
      if (!cat) {
        card.style.display = 'none';
        return;
      }
      card.style.display = '';
      card.setAttribute('onclick', `App.startCategory(${JSON.stringify(cat.name)})`);

      const nameEl = card.querySelector('.cat-name');
      if (nameEl) nameEl.textContent = cat.name;

      const countEl = card.querySelector('.cat-count');
      if (countEl) countEl.textContent = `問題数: ${cat.count}問`;

      const fill = card.querySelector('.cat-fill');
      if (fill) {
        fill.classList.remove('theory', 'design', 'tools', 'law');
        fill.classList.add(cat.color);
      }

      const thumb = card.querySelector('.cat-thumb');
      if (thumb) {
        thumb.classList.remove('theory', 'design', 'tools', 'law');
        thumb.classList.add(cat.color);
      }
    });
  }

  function switchTab(tab) {
    TAB_IDS.forEach(id => {
      document.getElementById(`sec-${id}`)?.classList.remove('active');
      document.querySelector(`[data-tab="${id}"]`)?.classList.remove('active');
    });

    document.getElementById(`sec-${tab}`)?.classList.add('active');
    document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');

    if (tab === 'vocab') Flashcard.init();
    if (tab === 'wiring') initWiring();
    if (tab === 'stats') initStats();
    if (tab === 'formula') initFormula();
  }

  function startCategory(cat) {
    Quiz.init(cat, 'category');
    switchTab('quiz');
  }

  function startRandom() {
    Quiz.init(null, 'random');
    switchTab('quiz');
  }

  function startBookmarks() {
    Quiz.init(null, 'bookmark');
    switchTab('quiz');
  }

  function startWeak() {
    Quiz.init(null, 'weak');
    switchTab('quiz');
  }

  function updateHomeStats() {
    const s = Storage.get();
    const acc = Storage.getAccuracy();

    _setText('stat-today', s.totalAnswered);
    _setText('stat-acc', acc !== null ? `${acc}%` : '—');
    _setText('stat-streak', s.streak);
    _setText('header-streak', `${s.streak}日連続`);

    getTopCategories().forEach((cat, i) => {
      const a = Storage.getCategoryAccuracy(cat.name);
      const bar = document.getElementById(`cat-fill-${i}`);
      const pct = document.getElementById(`cat-pct-${i}`);
      if (bar) bar.style.width = `${a ?? 0}%`;
      if (pct) pct.textContent = a !== null ? `${a}%` : '—';
    });

    Achievements.renderBadges('home-badges');
  }

  function _setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function initFormula() {
    const calcIds = ['calc-v', 'calc-i', 'calc-r'];
    calcIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.removeEventListener('input', calcOhm);
      el.addEventListener('input', calcOhm);
    });

    const p = document.getElementById('calc-p');
    const t = document.getElementById('calc-lp');
    if (p) {
      p.removeEventListener('input', calcPower);
      p.addEventListener('input', calcPower);
    }
    if (t) {
      t.removeEventListener('input', calcPower);
      t.addEventListener('input', calcPower);
    }
  }

  function calcOhm() {
    const getVal = id => {
      const v = document.getElementById(id)?.value;
      return v === '' || v === undefined ? null : parseFloat(v);
    };

    const V = getVal('calc-v');
    const I = getVal('calc-i');
    const R = getVal('calc-r');
    const out = document.getElementById('calc-ohm-result');
    if (!out) return;

    const hasV = V !== null;
    const hasI = I !== null;
    const hasR = R !== null;

    if (hasV && hasI && !hasR) {
      if (I === 0) {
        out.textContent = 'I=0 は計算できません';
        return;
      }
      out.textContent = `R = V / I = ${(V / I).toFixed(3)} Ω`;
      return;
    }

    if (hasV && hasR && !hasI) {
      if (R === 0) {
        out.textContent = 'R=0 は計算できません';
        return;
      }
      out.textContent = `I = V / R = ${(V / R).toFixed(3)} A`;
      return;
    }

    if (hasI && hasR && !hasV) {
      out.textContent = `V = I × R = ${(I * R).toFixed(3)} V`;
      return;
    }

    if (hasV && hasI && hasR) {
      out.textContent = `P = V × I = ${(V * I).toFixed(2)} W`;
      return;
    }

    out.textContent = '2つの値を入力してください';
  }

  function calcPower() {
    const getVal = id => {
      const v = document.getElementById(id)?.value;
      return v === '' || v === undefined ? null : parseFloat(v);
    };

    const P = getVal('calc-p');
    const t = getVal('calc-lp');
    const out = document.getElementById('calc-power-result');
    if (!out) return;

    if (P !== null && t !== null) {
      const wh = P * t;
      out.textContent = `${P}W × ${t}h = ${wh.toLocaleString()}Wh (${(wh / 1000).toFixed(3)}kWh)`;
      return;
    }

    out.textContent = '電力と時間を入力してください';
  }

  function showToast(msg, type = '') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut .3s var(--ease-in) forwards';
      setTimeout(() => toast.remove(), 350);
    }, 2800);
  }

  return {
    switchTab,
    startCategory,
    startRandom,
    startBookmarks,
    startWeak,
    configureHomeCategoryCards,
    updateHomeStats,
    showToast,
    initFormula,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  App.configureHomeCategoryCards();
  App.updateHomeStats();
  Quiz.init(null, 'random');
});
