// ============================================================
//  wiring.js — 配線図（複数シナリオ + 問題）
// ============================================================

const wiringScenarios = [
  {
    id: 'sw-lamp',
    title: 'スイッチ1個＋ランプ1個（単線図→複線図）',
    description: 'もっとも基本的な配線。スイッチで1つのランプをON/OFFする回路。',
    svgContent: _svgSwLamp(),
    question: 'スイッチ（SW）は、電源のどちらの電線に接続するか？',
    choices: ['非接地側（黒線・電圧側）に接続する', '接地側（白線・接地側）に接続する', 'どちらに接続してもよい'],
    answer: 0,
    explanation: 'スイッチは必ず非接地側（黒線）の経路に接続します。接地側（白線）にスイッチを入れると、スイッチをOFFにしても器具に電圧がかかり続け、感電の危険があります。'
  },
  {
    id: 'three-way',
    title: '3路スイッチ回路',
    description: '2か所からON/OFF制御できる回路。階段・廊下に使用。',
    svgContent: _svg3Way(),
    question: '3路スイッチの0番端子（共通端子）に接続する電線として正しいのはどれか？',
    choices: ['SW1の0端子→非接地側（黒線）、SW2の0端子→ランプへ', '両方の0端子→接地側（白線）に接続', 'SW1の0端子→接地側（白線）'],
    answer: 0,
    explanation: '3路スイッチはSW1の0端子（共通端子）に非接地側（黒線）を、SW2の0端子からランプへと接続します。スイッチ間は1番・3番の渡り線2本で接続します。'
  },
  {
    id: 'outlet',
    title: 'コンセント配線（極性確認）',
    description: 'コンセントの正しい極性（W刻印・大スロット = 接地側）の確認。',
    svgContent: _svgOutlet(),
    question: 'コンセントのW（接地側）端子に接続する電線の色として正しいものはどれか？',
    choices: ['白線（接地側）', '黒線（非接地側）', '緑線（アース）'],
    answer: 0,
    explanation: 'コンセントのW刻印がある端子（大きいスロット）には白線（接地側）を接続します。黒線（非接地側）は小さいスロット側です。接地端子（E端子）がある場合はアース線（緑）を接続します。'
  },
  {
    id: 'single-3wire',
    title: '単相3線式（100V/200V）',
    description: '3本の電線で100Vと200Vを同時に供給する現代住宅の標準方式。',
    svgContent: _svgSingle3Wire(),
    question: '単相3線式で200Vを取り出す場合の正しい接続はどれか？',
    choices: ['非接地側2本（L1・L2）間から取り出す', '非接地側1本と中性線の間から取り出す', '中性線2本から取り出す'],
    answer: 0,
    explanation: '単相3線式では非接地側2本（L1・L2）間の電圧が200V、各非接地側と中性線（N）間の電圧が100Vとなります。200V機器はL1-L2間に接続します。'
  },
  {
    id: 'pilot-lamp',
    title: 'パイロットランプ（常時点灯）',
    description: 'スイッチのON/OFFに関係なく常時点灯するパイロットランプの配線。',
    svgContent: _svgPilotLamp(),
    question: 'パイロットランプを常時点灯させる配線として正しいのはどれか？',
    choices: ['電源の非接地側と接地側の間に直接接続する', 'スイッチと並列に接続する', 'ランプと直列に接続する'],
    answer: 0,
    explanation: 'パイロットランプを常時点灯させるには、電源（非接地側-接地側間）に直接接続します。スイッチと並列接続は「異時点灯」、ランプと並列接続は「同時点灯」になります。'
  }
];

let currentWiring = 0;
let wiringAnswered = false;

function initWiring() {
  const container = document.getElementById('wiring-content');
  if (!container) return;

  const chips = wiringScenarios.map((sc, i) =>
    `<button class="wiring-chip ${i === currentWiring ? 'active' : ''}"
      onclick="selectWiringScenario(${i})">${i + 1}. ${sc.id === 'sw-lamp' ? 'SW+ランプ' : sc.id === 'three-way' ? '3路SW' : sc.id === 'outlet' ? 'コンセント' : sc.id === 'single-3wire' ? '単相3線式' : 'パイロット灯'}</button>`
  ).join('');

  const sc = wiringScenarios[currentWiring];
  wiringAnswered = false;

  container.innerHTML = `
    <div class="wiring-nav">${chips}</div>
    <div class="wiring-card">
      <div class="wiring-title">${sc.title}</div>
      <div class="wiring-svg-area">${sc.svgContent}</div>
      <div class="wiring-legend">
        <div class="legend-item">
          <div class="legend-line" style="background:#333"></div>
          非接地側（黒）
        </div>
        <div class="legend-item">
          <div class="legend-line legend-dashed" style="border-color:#888"></div>
          接地側（白）
        </div>
        <div class="legend-item">
          <div class="legend-line" style="background:#2F9E44"></div>
          アース（緑）
        </div>
      </div>
      <div class="wiring-q-text">${sc.description}</div>
    </div>

    <div style="background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm)">
      <div style="padding:12px 16px;font-size:14px;font-weight:700;color:var(--clr-text)">
        ❓ ${sc.question}
      </div>
      <div class="choices" id="wiring-choices" style="padding:0 16px 16px">
        ${sc.choices.map((c, i) => `
          <div class="choice" id="wchoice-${i}" onclick="selectWiringAnswer(${i})">
            <div class="choice-label">${['ア','イ','ウ'][i]}</div>
            <div class="choice-text">${c}</div>
            <div class="choice-check"></div>
          </div>
        `).join('')}
      </div>
      <div class="explanation" id="wiring-exp">
        <div class="exp-header"><span class="exp-icon">💡</span><span class="exp-label">解説</span></div>
        <div class="exp-text">${sc.explanation}</div>
      </div>
    </div>
  `;
}

function selectWiringScenario(idx) {
  currentWiring = idx;
  initWiring();
}

function selectWiringAnswer(idx) {
  if (wiringAnswered) return;
  wiringAnswered = true;
  const sc = wiringScenarios[currentWiring];
  const isCorrect = idx === sc.answer;

  document.querySelectorAll('#wiring-choices .choice').forEach(c => c.classList.add('disabled'));
  const chosen = document.getElementById(`wchoice-${idx}`);
  chosen.classList.add(isCorrect ? 'correct' : 'wrong');
  chosen.querySelector('.choice-check').textContent = isCorrect ? '✓' : '✗';
  if (!isCorrect) {
    const correct = document.getElementById(`wchoice-${sc.answer}`);
    correct.classList.add('correct');
    correct.querySelector('.choice-check').textContent = '✓';
  }
  document.getElementById('wiring-exp').classList.add('show');
}

// ── SVG定義 ─────────────────────────────────────

function _svgSwLamp() {
  return `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" style="max-height:200px">
    <!-- 電源 -->
    <rect x="20" y="75" width="70" height="50" rx="6" fill="none" stroke="#9BA3BE" stroke-width="1.5"/>
    <text x="55" y="97" font-size="12" text-anchor="middle" fill="#6B7090" font-weight="600">電源</text>
    <text x="55" y="113" font-size="10" text-anchor="middle" fill="#9BA3BE">100V</text>
    <!-- 非接地側（黒）-->
    <line x1="90" y1="88" x2="170" y2="88" stroke="#1A1D2E" stroke-width="2"/>
    <!-- 接地側（白）-->
    <line x1="90" y1="112" x2="430" y2="112" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <!-- SW -->
    <rect x="170" y="74" width="80" height="28" rx="4" fill="none" stroke="#1C7ED6" stroke-width="1.5"/>
    <text x="210" y="92" font-size="12" text-anchor="middle" fill="#1C7ED6" font-weight="700">スイッチ</text>
    <!-- SW→ランプ -->
    <line x1="250" y1="88" x2="370" y2="88" stroke="#1A1D2E" stroke-width="2"/>
    <!-- ランプ -->
    <circle cx="400" cy="100" r="30" fill="none" stroke="#E67700" stroke-width="1.5"/>
    <text x="400" y="105" font-size="16" text-anchor="middle" fill="#E67700" font-weight="700">L</text>
    <!-- 上辺 -->
    <line x1="370" y1="88" x2="370" y2="72" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="370" y1="72" x2="430" y2="72" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="430" y1="72" x2="430" y2="88" stroke="#1A1D2E" stroke-width="2"/>
    <!-- 下辺 -->
    <line x1="430" y1="112" x2="430" y2="128" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <line x1="430" y1="128" x2="370" y2="128" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <line x1="370" y1="128" x2="370" y2="112" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <!-- 電線色ラベル -->
    <text x="130" y="82" font-size="10" fill="#1A1D2E" text-anchor="middle">黒</text>
    <text x="130" y="130" font-size="10" fill="#888" text-anchor="middle">白</text>
  </svg>`;
}

function _svg3Way() {
  return `<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" style="max-height:210px">
    <!-- 電源 -->
    <rect x="10" y="75" width="65" height="50" rx="5" fill="none" stroke="#9BA3BE" stroke-width="1.5"/>
    <text x="42" y="97" font-size="11" text-anchor="middle" fill="#6B7090" font-weight="600">電源</text>
    <text x="42" y="112" font-size="10" text-anchor="middle" fill="#9BA3BE">100V</text>
    <!-- 非接地側 -->
    <line x1="75" y1="88" x2="130" y2="88" stroke="#1A1D2E" stroke-width="2"/>
    <!-- SW1 -->
    <rect x="130" y="60" width="80" height="80" rx="5" fill="none" stroke="#7048E8" stroke-width="1.5"/>
    <text x="170" y="96" font-size="11" text-anchor="middle" fill="#7048E8" font-weight="700">3路SW1</text>
    <text x="150" y="72" font-size="10" fill="#7048E8">0</text>
    <text x="150" y="152" font-size="10" fill="#7048E8">1</text>
    <text x="195" y="72" font-size="10" fill="#7048E8">3</text>
    <!-- 渡り線1 -->
    <line x1="210" y1="75" x2="340" y2="75" stroke="#E67700" stroke-width="1.5" stroke-dasharray="6,3"/>
    <!-- 渡り線3 -->
    <line x1="210" y1="125" x2="340" y2="125" stroke="#1C7ED6" stroke-width="1.5"/>
    <!-- SW2 -->
    <rect x="340" y="60" width="80" height="80" rx="5" fill="none" stroke="#7048E8" stroke-width="1.5"/>
    <text x="380" y="96" font-size="11" text-anchor="middle" fill="#7048E8" font-weight="700">3路SW2</text>
    <!-- SW2→ランプ -->
    <line x1="420" y1="88" x2="470" y2="88" stroke="#1A1D2E" stroke-width="2"/>
    <!-- ランプ -->
    <circle cx="500" cy="100" r="26" fill="none" stroke="#E67700" stroke-width="1.5"/>
    <text x="500" y="105" font-size="14" text-anchor="middle" fill="#E67700" font-weight="700">L</text>
    <!-- 接地側 -->
    <line x1="75" y1="155" x2="526" y2="155" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <line x1="526" y1="155" x2="526" y2="126" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <line x1="526" y1="126" x2="500" y2="126" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <!-- 注釈 -->
    <text x="270" y="68" font-size="10" text-anchor="middle" fill="#E67700">渡り線（1番）</text>
    <text x="270" y="140" font-size="10" text-anchor="middle" fill="#1C7ED6">渡り線（3番）</text>
  </svg>`;
}

function _svgOutlet() {
  return `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" style="max-height:200px">
    <!-- 電源 -->
    <rect x="20" y="70" width="70" height="60" rx="5" fill="none" stroke="#9BA3BE" stroke-width="1.5"/>
    <text x="55" y="96" font-size="11" text-anchor="middle" fill="#6B7090" font-weight="600">電源</text>
    <text x="55" y="112" font-size="10" text-anchor="middle" fill="#9BA3BE">100V</text>
    <!-- コンセント本体 -->
    <rect x="250" y="55" width="100" height="90" rx="8" fill="none" stroke="#1A1D2E" stroke-width="1.5"/>
    <!-- 大スロット（接地側） -->
    <rect x="268" y="72" width="12" height="24" rx="2" fill="#888"/>
    <text x="274" y="110" font-size="9" text-anchor="middle" fill="#6B7090">W</text>
    <!-- 小スロット（非接地側） -->
    <rect x="312" y="76" width="12" height="20" rx="2" fill="#333"/>
    <!-- アース端子 -->
    <circle cx="300" cy="130" r="6" fill="none" stroke="#2F9E44" stroke-width="1.5"/>
    <text x="300" y="133" font-size="8" text-anchor="middle" fill="#2F9E44">E</text>
    <text x="300" y="150" font-size="10" text-anchor="middle" fill="#1A1D2E">コンセント</text>
    <!-- 黒線（非接地側） -->
    <line x1="90" y1="85" x2="250" y2="85" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="210" y1="85" x2="210" y2="86" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="250" y1="85" x2="250" y2="86" stroke="#1A1D2E" stroke-width="2"/>
    <!-- 接続点（非接地側 → 小スロット） -->
    <line x1="324" y1="76" x2="380" y2="76" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="380" y1="76" x2="380" y2="85" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="90" y1="85" x2="380" y2="85" stroke="#1A1D2E" stroke-width="2"/>
    <!-- 白線（接地側） -->
    <line x1="90" y1="115" x2="268" y2="115" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <line x1="268" y1="115" x2="268" y2="96" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <!-- アース線（緑） -->
    <line x1="300" y1="124" x2="300" y2="160" stroke="#2F9E44" stroke-width="2"/>
    <line x1="300" y1="160" x2="450" y2="160" stroke="#2F9E44" stroke-width="2"/>
    <text x="420" y="155" font-size="10" fill="#2F9E44">⏚ 接地</text>
    <!-- ラベル -->
    <text x="160" y="79" font-size="10" fill="#1A1D2E">黒（非接地側）</text>
    <text x="160" y="130" font-size="10" fill="#888">白（接地側）</text>
  </svg>`;
}

function _svgSingle3Wire() {
  return `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" style="max-height:220px">
    <!-- 変圧器 -->
    <rect x="20" y="50" width="80" height="120" rx="6" fill="none" stroke="#9BA3BE" stroke-width="1.5"/>
    <text x="60" y="108" font-size="11" text-anchor="middle" fill="#6B7090" font-weight="600">変圧器</text>
    <!-- L1（上） -->
    <line x1="100" y1="70" x2="480" y2="70" stroke="#E03131" stroke-width="2.5"/>
    <text x="290" y="62" font-size="10" text-anchor="middle" fill="#E03131" font-weight="600">L1（非接地側）</text>
    <!-- N（中性線） -->
    <line x1="100" y1="110" x2="480" y2="110" stroke="#6B7090" stroke-width="2.5" stroke-dasharray="5,3"/>
    <text x="290" y="104" font-size="10" text-anchor="middle" fill="#6B7090">N（中性線・接地）</text>
    <!-- L2（下） -->
    <line x1="100" y1="150" x2="480" y2="150" stroke="#1A1D2E" stroke-width="2.5"/>
    <text x="290" y="168" font-size="10" text-anchor="middle" fill="#1A1D2E" font-weight="600">L2（非接地側）</text>
    <!-- 100V右上 -->
    <line x1="420" y1="70" x2="420" y2="110" stroke="#9B2335" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="450" y="93" font-size="12" fill="#9B2335" font-weight="700">100V</text>
    <!-- 100V右下 -->
    <line x1="450" y1="110" x2="450" y2="150" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="462" y="133" font-size="12" fill="#374151" font-weight="700">100V</text>
    <!-- 200V右端 -->
    <line x1="480" y1="70" x2="480" y2="150" stroke="#7048E8" stroke-width="2"/>
    <text x="500" y="114" font-size="13" fill="#7048E8" font-weight="800">200V</text>
  </svg>`;
}

function _svgPilotLamp() {
  return `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" style="max-height:210px">
    <!-- 電源 -->
    <rect x="10" y="70" width="70" height="60" rx="5" fill="none" stroke="#9BA3BE" stroke-width="1.5"/>
    <text x="45" y="97" font-size="11" text-anchor="middle" fill="#6B7090" font-weight="600">電源</text>
    <text x="45" y="112" font-size="10" text-anchor="middle" fill="#9BA3BE">100V</text>
    <!-- 非接地側 -->
    <line x1="80" y1="85" x2="540" y2="85" stroke="#1A1D2E" stroke-width="2"/>
    <!-- 接地側 -->
    <line x1="80" y1="130" x2="540" y2="130" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <!-- スイッチ -->
    <rect x="160" y="70" width="80" height="28" rx="4" fill="none" stroke="#1C7ED6" stroke-width="1.5"/>
    <text x="200" y="88" font-size="11" text-anchor="middle" fill="#1C7ED6" font-weight="700">スイッチ</text>
    <!-- ランプ（スイッチ制御） -->
    <circle cx="370" cy="107" r="26" fill="none" stroke="#E67700" stroke-width="1.5"/>
    <text x="370" y="112" font-size="13" text-anchor="middle" fill="#E67700" font-weight="700">L</text>
    <text x="370" y="145" font-size="10" text-anchor="middle" fill="#E67700">照明</text>
    <!-- ランプ上下配線 -->
    <line x1="310" y1="85" x2="310" y2="70" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="310" y1="70" x2="396" y2="70" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="396" y1="70" x2="396" y2="85" stroke="#1A1D2E" stroke-width="2"/>
    <line x1="344" y1="130" x2="344" y2="145" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <line x1="344" y1="145" x2="396" y2="145" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <line x1="396" y1="145" x2="396" y2="130" stroke="#6B7090" stroke-width="2" stroke-dasharray="5,3"/>
    <!-- パイロットランプ（常時） -->
    <circle cx="490" cy="107" r="18" fill="#FFF9DB" stroke="#F08C00" stroke-width="2"/>
    <text x="490" y="112" font-size="10" text-anchor="middle" fill="#F08C00" font-weight="700">PL</text>
    <text x="490" y="138" font-size="9" text-anchor="middle" fill="#F08C00">常時点灯</text>
    <!-- PL配線（電源直結） -->
    <line x1="508" y1="100" x2="540" y2="100" stroke="#F08C00" stroke-width="2"/>
    <line x1="540" y1="85" x2="540" y2="130" stroke="#F08C00" stroke-width="2"/>
    <line x1="508" y1="115" x2="530" y2="115" stroke="#F08C00" stroke-width="2" stroke-dasharray="4,3"/>
    <line x1="530" y1="115" x2="530" y2="130" stroke="#F08C00" stroke-width="2" stroke-dasharray="4,3"/>
  </svg>`;
}
