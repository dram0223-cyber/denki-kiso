var Quiz = (() => {
  let state = {
    set: [],
    current: 0,
    score: 0,
    answered: false,
    category: null,
    chapter: null,
    mode: 'random',
    timerSec: 30,
    timerInterval: null,
    wrongIds: [],
  };

  function init(cat, mode) {
    clearInterval(state.timerInterval);
    // mode === 'chapter' の場合は `cat` に { category, chapter } を渡す想定
    if (mode === 'chapter' && cat && typeof cat === 'object') {
      state.category = cat.category || null;
      state.chapter = cat.chapter || null;
    } else {
      state.category = cat || null;
      state.chapter = null;
    }
    state.mode = mode || 'random';

    let pool;
    if (state.mode === 'bookmark') {
      pool = Storage.getBookmarkedQuestions();
    } else if (state.mode === 'weak') {
      pool = Storage.getWeakQuestions(20);
      if (!pool.length) pool = [...questions];
    } else if (state.mode === 'daily') {
      // 今日の日付から決定論的に5問選出（1日中同じ問題）
      const dayNum = Math.floor(Date.now() / 86400000);
      pool = [...questions]
        .map(q => ({ q, sort: (q.id * 1000 + dayNum * 7) % 997 }))
        .sort((a, b) => a.sort - b.sort)
        .slice(0, 5)
        .map(x => x.q);
    } else if (state.mode === 'chapter') {
      pool = questions.filter(q =>
        (!state.category || q.category === state.category) &&
        (!state.chapter || q.chapter === state.chapter)
      );
    } else if (state.category) {
      pool = questions.filter(q => q.category === state.category);
    } else {
      pool = [...questions];
    }

    if (!pool.length) {
      const content = document.getElementById('quiz-content');
      if (content) {
        content.innerHTML = `
          <div class="text-center mt-2" style="color:var(--clr-muted)">
            <div style="font-size:40px">問題がありません</div>
            <button class="btn mt-2" onclick="App.switchTab('home')">ホームへ戻る</button>
          </div>`;
      }
      return;
    }

    state.set = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(10, pool.length));
    state.current = 0;
    state.score = 0;
    state.answered = false;
    state.wrongIds = [];

    renderQuestion();
  }

  function renderQuestion() {
    const container = document.getElementById('quiz-content');
    if (!container) return;

    if (state.current >= state.set.length) {
      renderResult();
      return;
    }

    const q = state.set[state.current];
    state.answered = false;

    const pct = Math.round((state.current / state.set.length) * 100);
    const catClass = _catClass(q.category);
    const bookmarked = Storage.isBookmarked(q.id);
    const isNumeric = q.question_type === 'numeric';

    const imageHtml = q.image
      ? `<div class="quiz-image-wrap"><img class="quiz-image" src="${q.image}" alt="問題図" loading="lazy"></div>`
      : '';

    // 数値問題は60秒、選択肢問題は30秒
    state.timerSec = isNumeric ? 60 : 30;

    const numericHint = (() => {
      if (!isNumeric) return '';
      const parts = [];
      if (q.numeric_unit) parts.push(`単位: <strong>${q.numeric_unit}</strong>`);
      if (q.numeric_tolerance_rel) parts.push(`±${Math.round(q.numeric_tolerance_rel * 100)}%の誤差まで正解`);
      return parts.length ? `<div class="numeric-hint">${parts.join('　')}</div>` : '';
    })();

    const answerArea = isNumeric
      ? `
        <div class="numeric-answer" id="numeric-area">
          <input id="numeric-input" class="numeric-input" type="text" inputmode="decimal" placeholder="数値を入力">
          <button class="btn btn-primary" onclick="Quiz.submitNumeric()">回答する</button>
        </div>
        ${numericHint}
        <details class="quiz-calc-details">
          <summary>⚡ 電卓を使う</summary>
          <div class="quiz-calc-inner">
            <div class="quiz-calc-row">
              <label>V</label><input type="number" id="qc-v" class="calc-input" oninput="Quiz.calcQuiz()">
              <label>I</label><input type="number" id="qc-i" class="calc-input" oninput="Quiz.calcQuiz()">
              <label>R</label><input type="number" id="qc-r" class="calc-input" oninput="Quiz.calcQuiz()">
            </div>
            <div id="qc-result" class="quiz-calc-result">2つ入力 → 計算</div>
          </div>
        </details>`
      : `
        <div class="choices" id="choices">
          ${q.choices.map((c, i) => `
            <div class="choice" id="choice-${i}" onclick="Quiz.selectAnswer(${i})">
              <div class="choice-label">${['A', 'B', 'C', 'D'][i]}</div>
              <div class="choice-text">${c}</div>
              <div class="choice-check"></div>
            </div>`).join('')}
        </div>`;

    container.innerHTML = `
      <div class="quiz-header">
        <button class="back-btn" onclick="App.switchTab('home')">カテゴリ選択へ</button>
        <div class="quiz-meta">
          ${state.mode === 'daily' ? '<span class="daily-badge">📅 今日の5問</span>' : ''}
          <span class="quiz-badge">${state.current + 1} / ${state.set.length}</span>
          <div class="timer-badge" id="timer-badge"><span id="timer-val">${state.timerSec}</span></div>
          <button class="btn-bookmark ${bookmarked ? 'bookmarked' : ''}" id="bookmark-btn" onclick="Quiz.toggleBookmark(${q.id})">${bookmarked ? '★' : '☆'}</button>
        </div>
      </div>

      <div class="quiz-progress">
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-labels">
          <span>正解 ${state.score}問</span>
          <span>残り ${state.set.length - state.current}問</span>
        </div>
      </div>

      <div class="flex items-center gap-1 mb-1">
        <span class="q-tag ${catClass}">${q.category}</span>
        <span class="difficulty-stars">${_diffStars(q.difficulty || 1)}</span>
      </div>

      <div class="q-text">${q.text}</div>
      ${imageHtml}
      ${answerArea}

      <div class="explanation" id="explanation">
        <div class="exp-header"><span class="exp-label">解説</span></div>
        <div class="exp-text">${q.explanation || ''}</div>
      </div>

      <div class="q-actions" id="q-actions">
        <button class="btn btn-primary hidden" id="next-btn" onclick="Quiz.nextQuestion()">次の問題へ</button>
      </div>`;

    _startTimer();
  }

  function _startTimer() {
    clearInterval(state.timerInterval);
    let sec = state.timerSec;

    state.timerInterval = setInterval(() => {
      if (state.answered) {
        clearInterval(state.timerInterval);
        return;
      }
      sec -= 1;
      const val = document.getElementById('timer-val');
      if (val) val.textContent = sec;
      const badge = document.getElementById('timer-badge');
      if (sec <= 10 && badge) badge.classList.add('urgent');

      if (sec <= 0) {
        clearInterval(state.timerInterval);
        if (!state.answered) {
          const q = state.set[state.current];
          state.answered = true;
          state.wrongIds.push(q.id);
          Storage.recordAnswer(q.id, q.category, false);
          revealAnswer(false, q, '時間切れです');
        }
      }
    }, 1000);
  }

  function revealAnswer(isCorrect, q, toastText = null) {
    if (!q) return;

    if (q.question_type !== 'numeric') {
      document.querySelectorAll('.choice').forEach(c => c.classList.add('disabled'));
      if (typeof q.answer === 'number') {
        const correct = document.getElementById(`choice-${q.answer}`);
        if (correct) {
          correct.classList.add('correct');
          const mark = correct.querySelector('.choice-check');
          if (mark) mark.textContent = '✔';
        }
      }
    }

    document.getElementById('explanation')?.classList.add('show');
    document.getElementById('next-btn')?.classList.remove('hidden');

    if (toastText) App.showToast(toastText, isCorrect ? '' : 'error');

    const newBadges = Storage.checkAndAwardBadges();
    if (newBadges.length) Achievements.showNewBadges(newBadges);
  }

  function selectAnswer(idx) {
    if (state.answered) return;

    clearInterval(state.timerInterval);
    state.answered = true;

    const q = state.set[state.current];
    const isCorrect = idx === q.answer;

    const chosen = document.getElementById(`choice-${idx}`);
    if (chosen) {
      chosen.classList.add(isCorrect ? 'correct' : 'wrong');
      const mark = chosen.querySelector('.choice-check');
      if (mark) mark.textContent = isCorrect ? '✔' : '✖';
    }

    if (isCorrect) {
      state.score += 1;
    } else {
      state.wrongIds.push(q.id);
    }

    Storage.recordAnswer(q.id, q.category, isCorrect);
    revealAnswer(isCorrect, q);
  }

  function submitNumeric() {
    if (state.answered) return;

    const q = state.set[state.current];
    if (q.question_type !== 'numeric') return;

    const raw = document.getElementById('numeric-input')?.value || '';
    const num = parseFloat(raw.replace(/,/g, '').trim());
    if (!Number.isFinite(num)) {
      App.showToast('数値を入力してください', 'error');
      return;
    }

    clearInterval(state.timerInterval);
    state.answered = true;

    const expected = Number(q.numeric_answer);
    const absTol = Number(q.numeric_tolerance_abs ?? 0);
    const relTol = Number(q.numeric_tolerance_rel ?? 0);
    const tol = Math.max(absTol, Math.abs(expected) * relTol);
    const ok = Math.abs(num - expected) <= tol;

    if (ok) {
      state.score += 1;
    } else {
      state.wrongIds.push(q.id);
    }

    Storage.recordAnswer(q.id, q.category, ok);

    const expl = document.querySelector('#explanation .exp-text');
    if (expl) {
      const unit = q.numeric_unit ? ` ${q.numeric_unit}` : '';
      const base = q.explanation || '';
      expl.textContent = `${base}\n正答: ${expected}${unit} (許容誤差 ±${tol})`;
    }

    revealAnswer(ok, q, ok ? '正解です' : '不正解です');
  }

  function toggleBookmark(id) {
    const added = Storage.toggleBookmark(id);
    const btn = document.getElementById('bookmark-btn');
    if (btn) {
      btn.classList.toggle('bookmarked', added);
      btn.textContent = added ? '★' : '☆';
    }
    App.showToast(added ? 'ブックマークしました' : 'ブックマーク解除');
  }

  function nextQuestion() {
    state.current += 1;
    renderQuestion();
  }

  function renderResult() {
    clearInterval(state.timerInterval);

    const total = state.set.length;
    const pct = Math.round((state.score / total) * 100);

    Storage.recordSession(total, state.score, state.category);

    const content = document.getElementById('quiz-content');
    if (!content) return;

    content.innerHTML = `
      <div class="result-banner">
        <div class="result-score">${pct}%</div>
        <div class="result-label">${state.score} / ${total} 問正解</div>

        <div class="result-breakdown">
          <div class="result-cell"><div class="result-cell-val" style="color:var(--clr-success)">${state.score}</div><div class="result-cell-label">正解</div></div>
          <div class="result-cell"><div class="result-cell-val" style="color:var(--clr-error)">${total - state.score}</div><div class="result-cell-label">不正解</div></div>
          <div class="result-cell"><div class="result-cell-val">${Storage.getAccuracy() ?? '—'}%</div><div class="result-cell-label">総合正答率</div></div>
        </div>

        <div class="result-actions">
          <button class="btn btn-primary" onclick="Quiz.init(Quiz.getCategory(), Quiz.getMode())">もう一度</button>
          ${state.wrongIds.length > 0 ? '<button class="btn" onclick="Quiz.reviewWrong()">間違いだけ復習</button>' : ''}
          <button class="btn" onclick="App.switchTab('home')">ホームへ</button>
        </div>
      </div>`;

    App.updateHomeStats();
  }

  function calcQuiz() {
    const getVal = id => {
      const v = document.getElementById(id)?.value;
      return v === '' || v === undefined ? null : parseFloat(v);
    };
    const V = getVal('qc-v'), I = getVal('qc-i'), R = getVal('qc-r');
    const out = document.getElementById('qc-result');
    if (!out) return;
    const hasV = V !== null, hasI = I !== null, hasR = R !== null;
    if (hasV && hasI && !hasR) { out.textContent = I === 0 ? 'I=0: 計算不可' : `R = ${(V/I).toFixed(3)} Ω`; return; }
    if (hasV && hasR && !hasI) { out.textContent = R === 0 ? 'R=0: 計算不可' : `I = ${(V/R).toFixed(3)} A`; return; }
    if (hasI && hasR && !hasV) { out.textContent = `V = ${(I*R).toFixed(3)} V`; return; }
    if (hasV && hasI && hasR)  { out.textContent = `P = ${(V*I).toFixed(2)} W`; return; }
    out.textContent = '2つの値を入力 → 計算';
  }

  function reviewWrong() {
    const wrongSet = state.set.filter(q => state.wrongIds.includes(q.id));
    if (!wrongSet.length) return;

    state.set = wrongSet;
    state.current = 0;
    state.score = 0;
    state.answered = false;
    state.wrongIds = [];

    renderQuestion();
  }

  function _catClass(cat) {
    const palette = ['theory', 'design', 'tools', 'law'];
    const categories = [...new Set(questions.map(q => q.category))];
    const idx = categories.indexOf(cat);
    return idx >= 0 ? palette[idx % palette.length] : '';
  }

  function _diffStars(diff) {
    return [1, 2, 3].map(i => `<span class="${i <= diff ? 'filled' : ''}"></span>`).join('');
  }

  return {
    init,
    renderQuestion,
    selectAnswer,
    submitNumeric,
    nextQuestion,
    toggleBookmark,
    reviewWrong,
    calcQuiz,
    getCategory: () => {
      if (state.mode === 'chapter') {
        return { category: state.category, chapter: state.chapter };
      }
      return state.category;
    },
    getMode: () => state.mode,
  };
})();
