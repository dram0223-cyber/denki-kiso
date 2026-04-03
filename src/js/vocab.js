function initVocab() {
  const list = document.getElementById('vocab-list');
  list.innerHTML = vocabData.map((v, i) => `
    <div class="vocab-card" onclick="toggleVocab(${i})">
      <div class="vocab-term">${v.term}</div>
      <div class="vocab-def" id="vdef-${i}">${v.def}</div>
    </div>
  `).join('');
}

function toggleVocab(i) {
  document.getElementById('vdef-' + i).classList.toggle('show');
}
