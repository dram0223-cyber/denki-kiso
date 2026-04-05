// ============================================================
//  supabase-adapter.js — Supabase バックエンド実装スケルトン
//
//  使い方:
//    1. Supabase プロジェクトを作成して URL / anon key を取得
//    2. index.html に Supabase JS SDK を追加:
//       <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//    3. TODO箇所を実装する
//    4. app.js の DOMContentLoaded 内で:
//         const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
//         Storage.setAdapter(new SupabaseAdapter(sb, userId));
//
//  注意:
//    - 全メソッドは LocalAdapter と同一シグネチャ（同期/非同期は除く）
//    - 現在 Storage は同期 API なので、Supabase 移行時は
//      非同期対応（Promise / async-await）への移行も必要
// ============================================================

class SupabaseAdapter {
  /**
   * @param {import('@supabase/supabase-js').SupabaseClient} client
   * @param {string} userId  - Supabase Auth の user.id (UUID)
   */
  constructor(client, userId) {
    this._sb = client;
    this._uid = userId;
  }

  // ──────────────────────────────────────────────
  //  プロファイル / 統計サマリー
  // ──────────────────────────────────────────────

  /** プロファイル（streak, totalAnswered 等）を取得 */
  async getProfile() {
    // TODO:
    // const { data, error } = await this._sb
    //   .from('profiles')
    //   .select('*')
    //   .eq('id', this._uid)
    //   .single();
    // if (error) throw error;
    // return data;
    throw new Error('SupabaseAdapter.getProfile() is not implemented');
  }

  /** プロファイルを更新（streak, totalAnswered, totalCorrect, lastStudyDate） */
  async updateProfile(fields) {
    // TODO:
    // const { error } = await this._sb
    //   .from('profiles')
    //   .update({ ...fields, updated_at: new Date().toISOString() })
    //   .eq('id', this._uid);
    // if (error) throw error;
    throw new Error('SupabaseAdapter.updateProfile() is not implemented');
  }

  // ──────────────────────────────────────────────
  //  解答記録
  // ──────────────────────────────────────────────

  /**
   * 問題に解答したときに呼ぶ
   * @param {string} questionId
   * @param {string} category
   * @param {boolean} isCorrect
   */
  async recordAnswer(questionId, category, isCorrect) {
    // TODO: 以下を並行実行
    // 1. question_history を UPSERT (correct_count / wrong_count をインクリメント)
    // 2. category_stats を UPSERT
    // 3. profiles の totalAnswered / totalCorrect / streak / last_study_date を更新
    //
    // 例:
    // await this._sb.rpc('record_answer', {
    //   p_user_id: this._uid,
    //   p_question_id: questionId,
    //   p_category: category,
    //   p_is_correct: isCorrect,
    // });
    throw new Error('SupabaseAdapter.recordAnswer() is not implemented');
  }

  /**
   * セッション（クイズ1回）を記録
   * @param {number} answered
   * @param {number} correct
   * @param {string|null} category
   */
  async recordSession(answered, correct, category) {
    // TODO:
    // const { error } = await this._sb
    //   .from('study_sessions')
    //   .insert({
    //     user_id:    this._uid,
    //     studied_at: new Date().toISOString().slice(0, 10),
    //     answered,
    //     correct,
    //     category: category || 'all',
    //   });
    // if (error) throw error;
    throw new Error('SupabaseAdapter.recordSession() is not implemented');
  }

  // ──────────────────────────────────────────────
  //  統計取得
  // ──────────────────────────────────────────────

  /** 全体の正答率（0〜100 or null） */
  async getAccuracy() {
    // TODO:
    // const profile = await this.getProfile();
    // if (!profile || profile.total_answered === 0) return null;
    // return Math.round((profile.total_correct / profile.total_answered) * 100);
    throw new Error('SupabaseAdapter.getAccuracy() is not implemented');
  }

  /** カテゴリ別正答率 */
  async getCategoryAccuracy(category) {
    // TODO:
    // const { data, error } = await this._sb
    //   .from('category_stats')
    //   .select('answered, correct')
    //   .eq('user_id', this._uid)
    //   .eq('category', category)
    //   .single();
    // if (error || !data || data.answered === 0) return null;
    // return Math.round((data.correct / data.answered) * 100);
    throw new Error('SupabaseAdapter.getCategoryAccuracy() is not implemented');
  }

  /**
   * 苦手問題を返す（wrong率が高い順）
   * @param {number} limit
   */
  async getWeakQuestions(limit = 10) {
    // TODO:
    // const { data, error } = await this._sb
    //   .from('question_history')
    //   .select('question_id, correct_count, wrong_count')
    //   .eq('user_id', this._uid)
    //   .gt('wrong_count', 0)
    //   .order('wrong_count', { ascending: false });
    // if (error) throw error;
    // const ids = data
    //   .sort((a, b) =>
    //     (b.wrong_count / (b.correct_count + b.wrong_count)) -
    //     (a.wrong_count / (a.correct_count + a.wrong_count)))
    //   .slice(0, limit)
    //   .map(r => r.question_id);
    // return window.questions.filter(q => ids.includes(String(q.id)));
    throw new Error('SupabaseAdapter.getWeakQuestions() is not implemented');
  }

  /** 過去7日間のセッション履歴 */
  async getLast7Days() {
    // TODO:
    // const since = new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10);
    // const { data, error } = await this._sb
    //   .from('study_sessions')
    //   .select('studied_at, answered, correct')
    //   .eq('user_id', this._uid)
    //   .gte('studied_at', since)
    //   .order('studied_at');
    // if (error) throw error;
    // ... LocalAdapter.getLast7Days() と同じ集計ロジック ...
    throw new Error('SupabaseAdapter.getLast7Days() is not implemented');
  }

  // ──────────────────────────────────────────────
  //  ブックマーク
  // ──────────────────────────────────────────────

  /** ブックマーク追加/削除トグル。戻り値: true=追加, false=削除 */
  async toggleBookmark(questionId) {
    // TODO:
    // const qid = String(questionId);
    // const { data } = await this._sb
    //   .from('bookmarks')
    //   .select('question_id')
    //   .eq('user_id', this._uid)
    //   .eq('question_id', qid)
    //   .single();
    // if (data) {
    //   await this._sb.from('bookmarks').delete()
    //     .eq('user_id', this._uid).eq('question_id', qid);
    //   return false;
    // } else {
    //   await this._sb.from('bookmarks').insert({ user_id: this._uid, question_id: qid });
    //   return true;
    // }
    throw new Error('SupabaseAdapter.toggleBookmark() is not implemented');
  }

  /** ブックマーク判定 */
  async isBookmarked(questionId) {
    // TODO:
    // const { data } = await this._sb
    //   .from('bookmarks')
    //   .select('question_id')
    //   .eq('user_id', this._uid)
    //   .eq('question_id', String(questionId))
    //   .single();
    // return !!data;
    throw new Error('SupabaseAdapter.isBookmarked() is not implemented');
  }

  /** ブックマーク済み問題オブジェクト配列を返す */
  async getBookmarkedQuestions() {
    // TODO:
    // const { data, error } = await this._sb
    //   .from('bookmarks')
    //   .select('question_id')
    //   .eq('user_id', this._uid);
    // if (error) throw error;
    // const ids = data.map(r => r.question_id);
    // return window.questions.filter(q => ids.includes(String(q.id)));
    throw new Error('SupabaseAdapter.getBookmarkedQuestions() is not implemented');
  }

  // ──────────────────────────────────────────────
  //  SRS（スペースド・リピティション）
  // ──────────────────────────────────────────────

  /** term の SRS パラメータを取得（なければデフォルト） */
  async getSRS(term) {
    // TODO:
    // const { data } = await this._sb
    //   .from('srs_data')
    //   .select('interval_days, ease_factor, due_at, reps')
    //   .eq('user_id', this._uid)
    //   .eq('term', term)
    //   .single();
    // if (!data) return { interval: 1, easeFactor: 2.5, due: 0, reps: 0 };
    // return {
    //   interval:   data.interval_days,
    //   easeFactor: data.ease_factor,
    //   due:        new Date(data.due_at).getTime(),
    //   reps:       data.reps,
    // };
    throw new Error('SupabaseAdapter.getSRS() is not implemented');
  }

  /**
   * SM-2 アルゴリズムで SRS を更新
   * @param {string} term
   * @param {number} quality  0=again, 1=hard, 2=good, 3=easy
   */
  async updateSRS(term, quality) {
    // TODO: SM-2 計算は LocalAdapter と同じロジック、保存先が Supabase になる
    // const d = await this.getSRS(term);
    // ... SM-2 計算 ...
    // await this._sb.from('srs_data').upsert({
    //   user_id:      this._uid,
    //   term,
    //   interval_days: d.interval,
    //   ease_factor:  d.easeFactor,
    //   due_at:       new Date(d.due).toISOString(),
    //   reps:         d.reps,
    //   updated_at:   new Date().toISOString(),
    // }, { onConflict: 'user_id,term' });
    // return d;
    throw new Error('SupabaseAdapter.updateSRS() is not implemented');
  }

  /** 復習期限が来ている用語リストを返す */
  async getDueSRSTerms() {
    // TODO:
    // const now = new Date().toISOString();
    // const { data, error } = await this._sb
    //   .from('srs_data')
    //   .select('term')
    //   .eq('user_id', this._uid)
    //   .lte('due_at', now);
    // if (error) throw error;
    // const dueTerms = new Set(data.map(r => r.term));
    // const allTerms = window.vocabData;
    // return allTerms.filter(v => !dueTerms.has(v.term) || dueTerms.has(v.term));
    // // 未登録の用語も「期限切れ」として扱う（LocalAdapter と同じ挙動）
    throw new Error('SupabaseAdapter.getDueSRSTerms() is not implemented');
  }

  // ──────────────────────────────────────────────
  //  バッジ
  // ──────────────────────────────────────────────

  /**
   * 新しく獲得したバッジを確認して保存
   * @returns {Array} 新規取得バッジの定義オブジェクト配列
   */
  async checkAndAwardBadges() {
    // TODO:
    // const { data } = await this._sb
    //   .from('earned_badges')
    //   .select('badge_id')
    //   .eq('user_id', this._uid);
    // const earned = new Set((data || []).map(r => r.badge_id));
    // const profile = await this.getProfile();
    // const newBadges = [];
    // for (const def of Achievements.definitions) {
    //   if (!earned.has(def.id) && def.check(profile)) {
    //     await this._sb.from('earned_badges').insert({
    //       user_id: this._uid, badge_id: def.id
    //     });
    //     newBadges.push(def);
    //   }
    // }
    // return newBadges;
    throw new Error('SupabaseAdapter.checkAndAwardBadges() is not implemented');
  }

  // ──────────────────────────────────────────────
  //  用語管理（CRUD）
  // ──────────────────────────────────────────────

  /**
   * 用語リストを初期化（初回のみ vocab.js からシード）
   * @returns {Promise<Array>}
   */
  async initVocab() {
    // TODO:
    // const list = await this.getVocabList();
    // if (list.length > 0) return list;
    // // 初回: 静的データを一括 INSERT
    // const rows = window.vocabData.map(v => ({
    //   user_id:    this._uid,
    //   term:       v.term,
    //   reading:    v.reading || null,
    //   definition: v.definition,
    //   category:   v.category || null,
    //   example:    v.example || null,
    // }));
    // await this._sb.from('vocab_terms').insert(rows);
    // return this.getVocabList();
    throw new Error('SupabaseAdapter.initVocab() is not implemented');
  }

  /** 全用語リストを取得 */
  async getVocabList() {
    // TODO:
    // const { data, error } = await this._sb
    //   .from('vocab_terms')
    //   .select('*')
    //   .eq('user_id', this._uid)
    //   .order('id');
    // if (error) throw error;
    // return (data || []).map(r => ({
    //   _id:        r.id,
    //   term:       r.term,
    //   reading:    r.reading,
    //   definition: r.definition,
    //   category:   r.category,
    //   example:    r.example,
    // }));
    throw new Error('SupabaseAdapter.getVocabList() is not implemented');
  }

  /** 用語を追加 */
  async addVocabItem(item) {
    // TODO:
    // const { error } = await this._sb.from('vocab_terms').insert({
    //   user_id:    this._uid,
    //   term:       item.term,
    //   reading:    item.reading || null,
    //   definition: item.definition,
    //   category:   item.category || null,
    //   example:    item.example || null,
    // });
    // if (error) throw error;
    // return this.getVocabList();
    throw new Error('SupabaseAdapter.addVocabItem() is not implemented');
  }

  /** 用語を更新 */
  async updateVocabItem(id, item) {
    // TODO:
    // const { error } = await this._sb
    //   .from('vocab_terms')
    //   .update({
    //     term:       item.term,
    //     reading:    item.reading || null,
    //     definition: item.definition,
    //     category:   item.category || null,
    //     example:    item.example || null,
    //     updated_at: new Date().toISOString(),
    //   })
    //   .eq('id', id)
    //   .eq('user_id', this._uid);
    // if (error) throw error;
    // return this.getVocabList();
    throw new Error('SupabaseAdapter.updateVocabItem() is not implemented');
  }

  /** 用語を削除 */
  async deleteVocabItem(id) {
    // TODO:
    // const { error } = await this._sb
    //   .from('vocab_terms')
    //   .delete()
    //   .eq('id', id)
    //   .eq('user_id', this._uid);
    // if (error) throw error;
    // return this.getVocabList();
    throw new Error('SupabaseAdapter.deleteVocabItem() is not implemented');
  }

  // ──────────────────────────────────────────────
  //  全データリセット（開発用）
  // ──────────────────────────────────────────────
  async reset() {
    // TODO: 各テーブルから user_id = this._uid のデータを全削除
    // await Promise.all([
    //   this._sb.from('study_sessions').delete().eq('user_id', this._uid),
    //   this._sb.from('question_history').delete().eq('user_id', this._uid),
    //   this._sb.from('category_stats').delete().eq('user_id', this._uid),
    //   this._sb.from('bookmarks').delete().eq('user_id', this._uid),
    //   this._sb.from('srs_data').delete().eq('user_id', this._uid),
    //   this._sb.from('earned_badges').delete().eq('user_id', this._uid),
    //   this._sb.from('vocab_terms').delete().eq('user_id', this._uid),
    //   this._sb.from('profiles').update({
    //     streak: 1, last_study_date: null,
    //     total_answered: 0, total_correct: 0
    //   }).eq('id', this._uid),
    // ]);
    throw new Error('SupabaseAdapter.reset() is not implemented');
  }
}
