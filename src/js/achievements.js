// ============================================================
//  achievements.js — バッジ・実績システム
// ============================================================

const Achievements = (() => {
  const definitions = [
    {
      id: 'first_answer',
      icon: '⚡',
      name: '最初の一歩',
      desc: '初めて問題に解答した',
      check: s => s.totalAnswered >= 1
    },
    {
      id: 'ten_questions',
      icon: '📝',
      name: '勉強家',
      desc: '10問に解答した',
      check: s => s.totalAnswered >= 10
    },
    {
      id: 'fifty_questions',
      icon: '🎯',
      name: '試験対策中',
      desc: '50問に解答した',
      check: s => s.totalAnswered >= 50
    },
    {
      id: 'hundred_questions',
      icon: '💯',
      name: '100問突破',
      desc: '100問に解答した',
      check: s => s.totalAnswered >= 100
    },
    {
      id: 'perfect_session',
      icon: '🌟',
      name: 'パーフェクト',
      desc: '5問連続正解した',
      check: s => {
        const h = s.sessionHistory;
        if (!h.length) return false;
        const last = h[h.length - 1];
        return last && last.answered >= 5 && last.correct === last.answered;
      }
    },
    {
      id: 'accuracy_80',
      icon: '🏆',
      name: '正答率80%',
      desc: '正答率が80%を超えた',
      check: s => s.totalAnswered >= 20 && s.totalCorrect / s.totalAnswered >= 0.8
    },
    {
      id: 'streak_3',
      icon: '🔥',
      name: '3日連続',
      desc: '3日連続で学習した',
      check: s => s.streak >= 3
    },
    {
      id: 'streak_7',
      icon: '🔥🔥',
      name: '1週間継続',
      desc: '7日連続で学習した',
      check: s => s.streak >= 7
    },
    {
      id: 'all_categories',
      icon: '📚',
      name: '全分野制覇',
      desc: '全カテゴリで1問以上解答した',
      check: s => Object.values(s.categoryStats).every(c => c.answered > 0)
    },
    {
      id: 'bookmarker',
      icon: '🔖',
      name: 'ブックマーカー',
      desc: '5問ブックマークした',
      check: s => s.bookmarks.length >= 5
    },
    {
      id: 'flashcard_master',
      icon: '🃏',
      name: 'フラッシュカード名人',
      desc: 'フラッシュカードを20回評価した',
      check: s => Object.keys(s.srsData).length >= 20
    },
    {
      id: 'law_master',
      icon: '⚖️',
      name: '法令マスター',
      desc: '法令カテゴリで10問正解した',
      check: s => (s.categoryStats['法令'] || {}).correct >= 10
    }
  ];

  function renderBadges(containerId) {
    const state = Storage.get();
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = definitions.map(def => {
      const earned = state.earnedBadges.includes(def.id);
      return `<div class="badge ${earned ? 'earned' : 'locked'}" title="${def.desc}">
        <span class="badge-icon">${def.icon}</span>
        <span>${def.name}</span>
      </div>`;
    }).join('');
  }

  function showNewBadges(newBadges) {
    newBadges.forEach((badge, i) => {
      setTimeout(() => {
        showToast(`🏅 バッジ獲得！「${badge.name}」`, 'success');
      }, i * 1500);
    });
  }

  return { definitions, renderBadges, showNewBadges };
})();
