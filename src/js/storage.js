// ============================================================
//  storage.js — 学習データ永続化
//
//  アーキテクチャ: アダプターパターン
//  ┌──────────────────────────────────────────┐
//  │  Storage (ファサード)                     │
//  │  - setAdapter(adapter) で切替可能         │
//  │  - 現在: LocalAdapter (localStorage)     │
//  │  - 将来: SupabaseAdapter (src/db/)       │
//  └──────────────────────────────────────────┘
// ============================================================

const STORAGE_KEY = 'denki2_v2';

// ============================================================
//  LocalAdapter — localStorage による実装
// ============================================================
class LocalAdapter {
  constructor() {
    this._state = this._load();
  }

  // ── 内部: 読み書き ──
  _defaultState() {
    return {
      totalAnswered:   0,
      totalCorrect:    0,
      streak:          1,
      lastStudyDate:   null,
      sessionHistory:  [],    // [{date, answered, correct, category}]
      categoryStats:   {},    // 動的に追加
      questionHistory: {},    // { id: { correct, wrong, lastSeen } }
      bookmarks:       [],
      srsData:         {},    // { term: { interval, easeFactor, due, reps } }
      earnedBadges:    [],
      customVocab:     null,  // null = 未初期化
    };
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this._defaultState();
      return Object.assign(this._defaultState(), JSON.parse(raw));
    } catch {
      return this._defaultState();
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  // ── 状態取得 ──
  get() { return this._state; }

  // ── 解答記録 ──
  recordAnswer(questionId, category, isCorrect) {
    this._state.totalAnswered++;
    if (isCorrect) this._state.totalCorrect++;

    if (!this._state.categoryStats[category]) {
      this._state.categoryStats[category] = { answered: 0, correct: 0 };
    }
    this._state.categoryStats[category].answered++;
    if (isCorrect) this._state.categoryStats[category].correct++;

    if (!this._state.questionHistory[questionId]) {
      this._state.questionHistory[questionId] = { correct: 0, wrong: 0, lastSeen: null };
    }
    this._state.questionHistory[questionId].lastSeen = Date.now();
    if (isCorrect) this._state.questionHistory[questionId].correct++;
    else           this._state.questionHistory[questionId].wrong++;

    this._updateStreak();
    this._save();
  }

  // ── セッション記録 ──
  recordSession(answered, correct, category) {
    const today = this._todayStr();
    this._state.sessionHistory.push({ date: today, answered, correct, category: category || 'all' });
    if (this._state.sessionHistory.length > 200) {
      this._state.sessionHistory = this._state.sessionHistory.slice(-200);
    }
    this._save();
  }

  // ── 連続日数 ──
  _todayStr() {
    return new Date().toISOString().slice(0, 10);
  }
  _updateStreak() {
    const today = this._todayStr();
    if (this._state.lastStudyDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (this._state.lastStudyDate === yesterday) {
      this._state.streak++;
    } else if (this._state.lastStudyDate !== today) {
      this._state.streak = 1;
    }
    this._state.lastStudyDate = today;
  }

  // ── ブックマーク ──
  toggleBookmark(questionId) {
    const idx = this._state.bookmarks.indexOf(questionId);
    if (idx === -1) this._state.bookmarks.push(questionId);
    else            this._state.bookmarks.splice(idx, 1);
    this._save();
    return idx === -1;
  }
  isBookmarked(questionId) {
    return this._state.bookmarks.includes(questionId);
  }
  getBookmarkedQuestions() {
    return questions.filter(q => this._state.bookmarks.includes(q.id));
  }

  // ── 統計 ──
  getAccuracy() {
    if (this._state.totalAnswered === 0) return null;
    return Math.round((this._state.totalCorrect / this._state.totalAnswered) * 100);
  }
  getCategoryAccuracy(cat) {
    const s = this._state.categoryStats[cat];
    if (!s || s.answered === 0) return null;
    return Math.round((s.correct / s.answered) * 100);
  }
  getWeakQuestions(limit = 10) {
    return questions
      .filter(q => {
        const h = this._state.questionHistory[q.id];
        return h && h.wrong > 0;
      })
      .sort((a, b) => {
        const ha = this._state.questionHistory[a.id];
        const hb = this._state.questionHistory[b.id];
        return (hb.wrong / (hb.correct + hb.wrong)) - (ha.wrong / (ha.correct + ha.wrong));
      })
      .slice(0, limit);
  }

  // ── 過去7日の学習データ ──
  getLast7Days() {
    const result = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const key = d.toISOString().slice(0, 10);
      const dayLabel = ['日','月','火','水','木','金','土'][d.getDay()];
      const sessions = this._state.sessionHistory.filter(s => s.date === key);
      const answered = sessions.reduce((sum, s) => sum + s.answered, 0);
      const correct  = sessions.reduce((sum, s) => sum + s.correct,  0);
      result.push({ key, dayLabel, answered, correct, rate: answered ? Math.round(correct/answered*100) : 0 });
    }
    return result;
  }

  // ── SRSデータ ──
  getSRS(term) {
    return this._state.srsData[term] || { interval: 1, easeFactor: 2.5, due: 0, reps: 0 };
  }
  updateSRS(term, quality) {
    let d = this.getSRS(term);
    const q = quality;
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
    this._state.srsData[term] = d;
    this._save();
    return d;
  }
  getDueSRSTerms() {
    const now = Date.now();
    return vocabData.filter(v => {
      const d = this._state.srsData[v.term];
      return !d || d.due <= now;
    });
  }
  getNextSRSLabel(term, quality) {
    const d = this.getSRS(term);
    const intervals = [1, Math.max(1, Math.round(d.interval * 0.5)), d.interval, Math.round(d.interval * 1.3)];
    const i = intervals[quality];
    if (i <= 1) return '1日';
    if (i < 7)  return `${i}日`;
    if (i < 30) return `${Math.round(i/7)}週`;
    return `${Math.round(i/30)}ヶ月`;
  }

  // ── バッジ ──
  checkAndAwardBadges() {
    const newBadges = [];
    Achievements.definitions.forEach(def => {
      if (!this._state.earnedBadges.includes(def.id) && def.check(this._state)) {
        this._state.earnedBadges.push(def.id);
        newBadges.push(def);
      }
    });
    if (newBadges.length) this._save();
    return newBadges;
  }

  // ── 用語管理 ──
  initVocab() {
    if (!this._state.customVocab) {
      this._state.customVocab = vocabData.map((v, i) => ({ ...v, _id: i + 1 }));
      this._save();
    }
    return this._state.customVocab;
  }
  getVocabList() {
    return this._state.customVocab || this.initVocab();
  }
  addVocabItem(item) {
    const list = this.getVocabList();
    const maxId = list.reduce((m, v) => Math.max(m, v._id || 0), 0);
    list.push({ ...item, _id: maxId + 1 });
    this._state.customVocab = list;
    this._save();
    return list;
  }
  updateVocabItem(id, item) {
    const list = this.getVocabList();
    const idx = list.findIndex(v => v._id === id);
    if (idx >= 0) list[idx] = { ...item, _id: id };
    this._state.customVocab = list;
    this._save();
    return list;
  }
  deleteVocabItem(id) {
    this._state.customVocab = this.getVocabList().filter(v => v._id !== id);
    this._save();
    return this._state.customVocab;
  }

  // ── リセット ──
  reset() {
    this._state = this._defaultState();
    this._save();
  }
}

// ============================================================
//  Storage ファサード
//  - アダプターを差し替えるだけでバックエンドを変更できる
//  - 現在は LocalAdapter を使用
//  - Supabase に移行するときは:
//      Storage.setAdapter(new SupabaseAdapter(supabaseClient, userId));
// ============================================================
var Storage = (() => {
  let _adapter = new LocalAdapter();

  /**
   * アダプターを切り替える
   * @param {LocalAdapter|SupabaseAdapter} adapter
   */
  function setAdapter(adapter) {
    _adapter = adapter;
  }

  // ── 現アダプターへの委譲 ──
  // 注意: Supabase 移行時は以下の全メソッドが非同期 (Promise) を返す。
  //       その際は呼び出し元も async/await に変更する必要がある。

  function get()                            { return _adapter.get(); }
  function recordAnswer(qId, cat, ok)       { return _adapter.recordAnswer(qId, cat, ok); }
  function recordSession(ans, cor, cat)     { return _adapter.recordSession(ans, cor, cat); }
  function toggleBookmark(qId)              { return _adapter.toggleBookmark(qId); }
  function isBookmarked(qId)                { return _adapter.isBookmarked(qId); }
  function getBookmarkedQuestions()         { return _adapter.getBookmarkedQuestions(); }
  function getAccuracy()                    { return _adapter.getAccuracy(); }
  function getCategoryAccuracy(cat)         { return _adapter.getCategoryAccuracy(cat); }
  function getWeakQuestions(limit)          { return _adapter.getWeakQuestions(limit); }
  function getLast7Days()                   { return _adapter.getLast7Days(); }
  function getSRS(term)                     { return _adapter.getSRS(term); }
  function updateSRS(term, quality)         { return _adapter.updateSRS(term, quality); }
  function getDueSRSTerms()                 { return _adapter.getDueSRSTerms(); }
  function getNextSRSLabel(term, quality)   { return _adapter.getNextSRSLabel(term, quality); }
  function checkAndAwardBadges()            { return _adapter.checkAndAwardBadges(); }
  function initVocab()                      { return _adapter.initVocab(); }
  function getVocabList()                   { return _adapter.getVocabList(); }
  function addVocabItem(item)               { return _adapter.addVocabItem(item); }
  function updateVocabItem(id, item)        { return _adapter.updateVocabItem(id, item); }
  function deleteVocabItem(id)              { return _adapter.deleteVocabItem(id); }
  function reset()                          { return _adapter.reset(); }

  return {
    setAdapter,
    get, recordAnswer, recordSession,
    toggleBookmark, isBookmarked, getBookmarkedQuestions,
    getAccuracy, getCategoryAccuracy, getWeakQuestions,
    getLast7Days,
    getSRS, updateSRS, getDueSRSTerms, getNextSRSLabel,
    checkAndAwardBadges,
    initVocab, getVocabList, addVocabItem, updateVocabItem, deleteVocabItem,
    reset,
  };
})();
