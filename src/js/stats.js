// ============================================================
//  stats.js — 学習統計・SVGグラフ描画
// ============================================================

function initStats() {
  const container = document.getElementById('stats-content');
  if (!container) return;
  const s = Storage.get();
  const acc = Storage.getAccuracy();
  const days = Storage.getLast7Days();

  container.innerHTML = `
    <!-- サマリー -->
    <div class="stats-summary">
      <div class="summary-card">
        <div class="summary-label">累計解答数</div>
        <div class="summary-val">${s.totalAnswered.toLocaleString()}</div>
        <div class="summary-sub">問</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">正答率</div>
        <div class="summary-val">${acc !== null ? acc + '%' : '—'}</div>
        <div class="summary-sub">${s.totalCorrect} / ${s.totalAnswered} 問</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">連続学習</div>
        <div class="summary-val">${s.streak}</div>
        <div class="summary-sub">日</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">ブックマーク</div>
        <div class="summary-val">${s.bookmarks.length}</div>
        <div class="summary-sub">問</div>
      </div>
    </div>

    <!-- 週別正答率グラフ -->
    <div class="chart-card">
      <div class="chart-title">📈 過去7日の正答率</div>
      ${renderWeeklyChart(days)}
    </div>

    <!-- カテゴリ別正答率 -->
    <div class="chart-card">
      <div class="chart-title">📊 カテゴリ別正答率</div>
      <div class="cat-accuracy">
        ${renderCategoryBars(s)}
      </div>
    </div>

    <!-- 学習カレンダー -->
    <div class="chart-card">
      <div class="chart-title">📅 学習カレンダー（直近28日）</div>
      ${renderCalendar(s)}
    </div>

    <!-- バッジ -->
    <div class="chart-card">
      <div class="chart-title">🏅 獲得バッジ</div>
      <div class="achievement-row" id="stats-badges"></div>
    </div>

    <!-- リセットボタン -->
    <div class="text-center mt-2 mb-2">
      <button class="btn" style="color:var(--clr-error);border-color:var(--clr-error)"
        onclick="confirmReset()">
        学習データをリセット
      </button>
    </div>
  `;

  Achievements.renderBadges('stats-badges');
}

// ── 週別グラフ（SVG棒グラフ） ───────────────────
function renderWeeklyChart(days) {
  const W = 600, H = 160, padL = 30, padB = 30, padT = 10, padR = 10;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const barW = innerW / days.length * 0.55;
  const gap  = innerW / days.length;

  const maxAns = Math.max(...days.map(d => d.answered), 1);
  const yScale = v => padT + innerH - (v / maxAns) * innerH;

  // グリッドライン
  const gridLines = [0, 25, 50, 75, 100].map(pct => {
    const y = padT + innerH - (pct / 100) * innerH;
    return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}"
      stroke="#E2E5F0" stroke-width="1" stroke-dasharray="${pct === 0 ? '' : '4,3'}"/>
    <text x="${padL - 4}" y="${y + 4}" text-anchor="end" font-size="10" fill="#9BA3BE">${pct}%</text>`;
  }).join('');

  // バー＋ラベル
  const bars = days.map((d, i) => {
    const x   = padL + i * gap + gap * 0.225;
    const h   = d.answered > 0 ? (d.correct / d.answered) * innerH : 0;
    const y   = padT + innerH - h;
    const barColor = d.rate >= 80 ? '#2F9E44' : d.rate >= 60 ? '#3B5BDB' : d.rate >= 40 ? '#E67700' : '#E03131';

    return `
      <rect x="${x}" y="${y}" width="${barW}" height="${h}"
        rx="3" fill="${d.answered > 0 ? barColor : '#E2E5F0'}" opacity=".85"/>
      ${d.answered > 0 ? `<text x="${x + barW/2}" y="${y - 4}" text-anchor="middle"
        font-size="10" font-weight="700" fill="${barColor}">${d.rate}%</text>` : ''}
      <text x="${x + barW/2}" y="${H - padB + 14}" text-anchor="middle"
        font-size="11" fill="#9BA3BE">${d.dayLabel}</text>
      <text x="${x + barW/2}" y="${H - padB + 26}" text-anchor="middle"
        font-size="10" fill="#C5CBDB">${d.answered}問</text>
    `;
  }).join('');

  return `<svg class="chart-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${gridLines}
    ${bars}
  </svg>`;
}

// ── カテゴリ別バー ───────────────────────────────
function renderCategoryBars(s) {
  const cats = [
    { key: '電気理論', cls: 'theory', color: 'linear-gradient(90deg,#7048E8,#9775FA)' },
    { key: '配線設計', cls: 'design', color: 'linear-gradient(90deg,#1C7ED6,#4DABF7)' },
    { key: '材料・工具', cls: 'tools', color: 'linear-gradient(90deg,#E67700,#FFA94D)' },
    { key: '法令',     cls: 'law',    color: 'linear-gradient(90deg,#2F9E44,#69DB7C)' },
  ];
  return cats.map(cat => {
    const acc = Storage.getCategoryAccuracy(cat.key);
    const stat = s.categoryStats[cat.key] || { answered: 0, correct: 0 };
    return `
      <div class="cat-acc-row">
        <div class="cat-acc-name">${cat.key}</div>
        <div class="cat-acc-bar">
          <div class="cat-acc-fill" style="width:${acc ?? 0}%;background:${cat.color}"></div>
        </div>
        <div class="cat-acc-pct" style="color:var(--clr-${cat.cls})">
          ${acc !== null ? acc + '%' : '—'}
        </div>
      </div>
      <div style="font-size:11px;color:var(--clr-muted);margin-top:-4px;margin-left:100px;margin-bottom:8px">
        ${stat.answered}問解答 / ${stat.correct}問正解
      </div>
    `;
  }).join('');
}

// ── 学習カレンダー（28日） ───────────────────────
function renderCalendar(s) {
  const cells = [];
  for (let i = 27; i >= 0; i--) {
    const d   = new Date(Date.now() - i * 86400000);
    const key = d.toISOString().slice(0, 10);
    const day = d.getDate();
    const sessions = s.sessionHistory.filter(s => s.date === key);
    const ans = sessions.reduce((sum, s) => sum + s.answered, 0);
    const cls = ans === 0 ? 'empty' : ans >= 10 ? 'active' : 'partial';
    cells.push(`<div class="cal-day ${cls}" title="${key}: ${ans}問">${day}</div>`);
  }
  return `
    <div style="font-size:11px;color:var(--clr-muted);margin-bottom:8px;display:flex;gap:12px">
      <span>■ 10問以上</span>
      <span style="opacity:.5">■ 1〜9問</span>
      <span style="opacity:.25">■ 未学習</span>
    </div>
    <div class="calendar-grid">${cells.join('')}</div>
  `;
}

// ── リセット確認 ────────────────────────────────
function confirmReset() {
  if (confirm('学習データをすべてリセットします。\nこの操作は元に戻せません。')) {
    Storage.reset();
    showToast('学習データをリセットしました');
    initStats();
    updateHomeStats();
  }
}
