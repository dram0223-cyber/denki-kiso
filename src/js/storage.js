// ============================================================
//  storage.js — localStorage による学習データ永続化
// ============================================================

const STORAGE_KEY = 'denki2_v2';

const defaultState = () => ({
  // 統計
  totalAnswered: 0,
  totalCorrect:  0,
  streak:        1,
  lastStudyDate: null,
  sessionHistory: [],      // [{date, answered, correct, category}]

  // カテゴリ別
  categoryStats: {
    '電気理論': { answered: 0, correct: 0 },
    '配線設計': { answered: 0, correct: 0 },
    '材料・工具': { answered: 0, correct: 0 },
    '法令':     { answered: 0, correct: 0 }
  },

  // 問題ごとの履歴 { id: { correct, wrong, lastSeen } }
  questionHistory: {},

  // ブックマーク
  bookmarks: [],

  // フラッシュカードSRS { term: { interval, easeFactor, due, reps } }
  srsData: {},

  // バッジ取得済み
  earnedBadges: []
});

const Storage = (() => {
  // ── 読み書き ──
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch {
      return defaultState();
    }
  }

  function save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  // ── 状態取得 ──
  let _state = load();
  function get() { return _state; }

  // ── 解答記録 ──
  function recordAnswer(questionId, category, isCorrect) {
    _state.totalAnswered++;
    if (isCorrect) _state.totalCorrect++;

    // カテゴリ別
    if (_state.categoryStats[category]) {
      _state.categoryStats[category].answered++;
      if (isCorrect) _state.categoryStats[category].correct++;
    }

    // 問題別
    if (!_state.questionHistory[questionId]) {
      _state.questionHistory[questionId] = { correct: 0, wrong: 0, lastSeen: null };
    }
    _state.questionHistory[questionId].lastSeen = Date.now();
    if (isCorrect) _state.questionHistory[questionId].correct++;
    else           _state.questionHistory[questionId].wrong++;

    // 連続日数
    _updateStreak();
    save(_state);
  }

  // ── セッション記録 ──
  function recordSession(answered, correct, category) {
    const today = _todayStr();
    _state.sessionHistory.push({ date: today, answered, correct, category: category || 'all' });
    // 直近60日分だけ保持
    if (_state.sessionHistory.length > 200) {
      _state.sessionHistory = _state.sessionHistory.slice(-200);
    }
    save(_state);
  }

  // ── 連続日数 ──
  function _todayStr() {
    return new Date().toISOString().slice(0, 10);
  }
  function _updateStreak() {
    const today = _todayStr();
    if (_state.lastStudyDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (_state.lastStudyDate === yesterday) {
      _state.streak++;
    } else if (_state.lastStudyDate !== today) {
      _state.streak = 1;
    }
    _state.lastStudyDate = today;
  }

  // ── ブックマーク ──
  function toggleBookmark(questionId) {
    const idx = _state.bookmarks.indexOf(questionId);
    if (idx === -1) _state.bookmarks.push(questionId);
    else            _state.bookmarks.splice(idx, 1);
    save(_state);
    return idx === -1; // true = 追加した
  }
  function isBookmarked(questionId) {
    return _state.bookmarks.includes(questionId);
  }
  function getBookmarkedQuestions() {
    return questions.filter(q => _state.bookmarks.includes(q.id));
  }

  // ── 統計 ──
  function getAccuracy() {
    if (_state.totalAnswered === 0) return null;
    return Math.round((_state.totalCorrect / _state.totalAnswered) * 100);
  }
  function getCategoryAccuracy(cat) {
    const s = _state.categoryStats[cat];
    if (!s || s.answered === 0) return null;
    return Math.round((s.correct / s.answered) * 100);
  }
  function getWeakQuestions(limit = 10) {
    return questions
      .filter(q => {
        const h = _state.questionHistory[q.id];
        return h && h.wrong > 0;
      })
      .sort((a, b) => {
        const ha = _state.questionHistory[a.id];
        const hb = _state.questionHistory[b.id];
        return (hb.wrong / (hb.correct + hb.wrong)) - (ha.wrong / (ha.correct + ha.wrong));
      })
      .slice(0, limit);
  }

  // ── 過去7日の学習データ ──
  function getLast7Days() {
    const result = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const key = d.toISOString().slice(0, 10);
      const dayLabel = ['日','月','火','水','木','金','土'][d.getDay()];
      const sessions = _state.sessionHistory.filter(s => s.date === key);
      const answered = sessions.reduce((sum, s) => sum + s.answered, 0);
      const correct  = sessions.reduce((sum, s) => sum + s.correct,  0);
      result.push({ key, dayLabel, answered, correct, rate: answered ? Math.round(correct/answered*100) : 0 });
    }
    return result;
  }

  // ── SRSデータ ──
  function getSRS(term) {
    return _state.srsData[term] || { interval: 1, easeFactor: 2.5, due: 0, reps: 0 };
  }
  function updateSRS(term, quality) {
    // SM-2アルゴリズム簡略版
    let d = getSRS(term);
    const q = quality; // 0=again,1=hard,2=good,3=easy
    if (q < 1) {
      d.interval = 1;
      d.reps = 0;
    } else {
      if (d.reps === 0) d.interval = 1;
      else if (d.reps === 1) d.interval = 6;
      else d.interval = Math.round(d.interval * d.easeFactor);
      d.reps++;
      d.easeFactor = Math.max(1.3, d.easeFactor + 0.1 - (3 - q) * (0.08 + (3 - q) * 0.02));
    }
    if (q === 3) d.interval = Math.round(d.interval * 1.3);
    d.due = Date.now() + d.interval * 86400000;
    _state.srsData[term] = d;
    save(_state);
    return d;
  }
  function getDueSRSTerms() {
    const now = Date.now();
    return vocabData.filter(v => {
      const d = _state.srsData[v.term];
      return !d || d.due <= now;
    });
  }
  function getNextSRSLabel(term, quality) {
    const d = getSRS(term);
    const intervals = [1, Math.max(1, Math.round(d.interval * 0.5)), d.interval, Math.round(d.interval * 1.3)];
    const i = intervals[quality];
    if (i <= 1) return '1日';
    if (i < 7)  return `${i}日`;
    if (i < 30) return `${Math.round(i/7)}週`;
    return `${Math.round(i/30)}ヶ月`;
  }

  // ── バッジ ──
  function checkAndAwardBadges() {
    const newBadges = [];
    Achievements.definitions.forEach(def => {
      if (!_state.earnedBadges.includes(def.id) && def.check(_state)) {
        _state.earnedBadges.push(def.id);
        newBadges.push(def);
      }
    });
    if (newBadges.length) save(_state);
    return newBadges;
  }

  // ── リセット ──
  function reset() {
    _state = defaultState();
    save(_state);
  }

  return {
    get, load, save,
    recordAnswer, recordSession,
    toggleBookmark, isBookmarked, getBookmarkedQuestions,
    getAccuracy, getCategoryAccuracy, getWeakQuestions,
    getLast7Days,
    getSRS, updateSRS, getDueSRSTerms, getNextSRSLabel,
    checkAndAwardBadges,
    reset
  };
})();
