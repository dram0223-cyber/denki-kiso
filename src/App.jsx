import { useEffect, useMemo, useState } from 'react';
import questions from './data/questions.json';

const QUIZ_SIZE = 10;
const TIMER_SEC = 30;

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalizeImagePath(path) {
  if (!path) return '';
  if (path.startsWith('/')) return path;
  if (path.startsWith('src/')) return `/${path.slice(4)}`;
  return path;
}

function parseNumericInput(value) {
  const n = Number.parseFloat(String(value).replace(/,/g, '').trim());
  return Number.isFinite(n) ? n : null;
}

function checkNumericAnswer(question, userValue) {
  const expected = Number(question.numeric_answer);
  const absTol = Number(question.numeric_tolerance_abs ?? 0);
  const relTol = Number(question.numeric_tolerance_rel ?? 0);
  const tol = Math.max(absTol, Math.abs(expected) * relTol);
  return Math.abs(userValue - expected) <= tol;
}

export default function App() {
  const [mode, setMode] = useState('home');
  const [category, setCategory] = useState(null);
  const [quizSet, setQuizSet] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState(null);
  const [numericInput, setNumericInput] = useState('');
  const [timer, setTimer] = useState(TIMER_SEC);
  const [wrongCount, setWrongCount] = useState(0);

  const categoryStats = useMemo(() => {
    const map = new Map();
    questions.forEach((q) => {
      map.set(q.category, (map.get(q.category) || 0) + 1);
    });
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const current = quizSet[index] || null;

  useEffect(() => {
    if (mode !== 'quiz' || done || !current) return undefined;
    setTimer(TIMER_SEC);
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [mode, index, done]);

  function startQuiz(cat = null) {
    const pool = cat ? questions.filter((q) => q.category === cat) : questions;
    const picked = shuffle(pool).slice(0, Math.min(QUIZ_SIZE, pool.length));
    setCategory(cat);
    setQuizSet(picked);
    setIndex(0);
    setScore(0);
    setDone(false);
    setSelected(null);
    setNumericInput('');
    setWrongCount(0);
    setMode('quiz');
  }

  function handleTimeout() {
    if (!current || selected !== null || done) return;
    setSelected('timeout');
    setWrongCount((v) => v + 1);
  }

  function submitChoice(choiceIndex) {
    if (!current || selected !== null || done) return;
    const ok = choiceIndex === current.answer;
    setSelected(choiceIndex);
    if (ok) setScore((v) => v + 1);
    else setWrongCount((v) => v + 1);
  }

  function submitNumeric() {
    if (!current || selected !== null || done) return;
    const parsed = parseNumericInput(numericInput);
    if (parsed === null) return;
    const ok = checkNumericAnswer(current, parsed);
    setSelected('numeric');
    if (ok) setScore((v) => v + 1);
    else setWrongCount((v) => v + 1);
  }

  function nextQuestion() {
    if (index + 1 >= quizSet.length) {
      setDone(true);
      return;
    }
    setIndex((v) => v + 1);
    setSelected(null);
    setNumericInput('');
  }

  if (mode === 'home') {
    return (
      <main className="app">
        <header className="app-header">
          <h1>電気基礎 学習アプリ</h1>
          <p>Excelから生成した問題で演習できます</p>
        </header>

        <section className="panel">
          <button className="primary-btn" onClick={() => startQuiz(null)}>
            ランダムで開始
          </button>
        </section>

        <section className="grid">
          {categoryStats.map(([name, count]) => (
            <button key={name} className="cat-card" onClick={() => startQuiz(name)}>
              <div className="cat-title">{name}</div>
              <div className="cat-sub">問題数: {count}問</div>
            </button>
          ))}
        </section>
      </main>
    );
  }

  if (!current) {
    return (
      <main className="app">
        <section className="panel">問題が見つかりませんでした。</section>
        <button className="primary-btn" onClick={() => setMode('home')}>
          ホームへ戻る
        </button>
      </main>
    );
  }

  const isNumeric = current.question_type === 'numeric';
  const answered = selected !== null;
  const percent = Math.round((index / quizSet.length) * 100);
  const correctAnswerText = isNumeric
    ? `${current.numeric_answer}${current.numeric_unit ? ` ${current.numeric_unit}` : ''}`
    : current.choices[current.answer];

  return (
    <main className="app">
      <header className="quiz-header">
        <button className="ghost-btn" onClick={() => setMode('home')}>
          ホームへ
        </button>
        <div>
          {index + 1} / {quizSet.length}
        </div>
        <div className={timer <= 10 ? 'timer urgent' : 'timer'}>{timer}s</div>
      </header>

      <div className="progress">
        <div className="bar" style={{ width: `${percent}%` }} />
      </div>

      <section className="panel">
        <div className="meta">
          <span>{current.category}</span>
          <span>難易度: {current.difficulty}</span>
        </div>
        <h2 className="question">{current.text}</h2>
        {current.image ? (
          <img className="question-image" src={normalizeImagePath(current.image)} alt="問題図" />
        ) : null}

        {isNumeric ? (
          <div className="numeric-box">
            <input
              value={numericInput}
              disabled={answered}
              onChange={(e) => setNumericInput(e.target.value)}
              placeholder="数値を入力"
            />
            <button className="primary-btn" disabled={answered} onClick={submitNumeric}>
              回答
            </button>
          </div>
        ) : (
          <div className="choices">
            {current.choices.map((c, i) => {
              const isCorrect = answered && i === current.answer;
              const isWrong = answered && selected === i && i !== current.answer;
              const cls = isCorrect ? 'choice correct' : isWrong ? 'choice wrong' : 'choice';
              return (
                <button key={`${current.id}-${i}`} className={cls} disabled={answered} onClick={() => submitChoice(i)}>
                  <span>{String.fromCharCode(65 + i)}.</span> {c}
                </button>
              );
            })}
          </div>
        )}

        {answered ? (
          <div className="answer-box">
            <div>正解: {correctAnswerText}</div>
            <div>{current.explanation}</div>
            <button className="primary-btn" onClick={nextQuestion}>
              {index + 1 >= quizSet.length ? '結果を見る' : '次へ'}
            </button>
          </div>
        ) : null}
      </section>

      {done ? (
        <section className="panel result">
          <h3>結果</h3>
          <p>
            正解 {score} / {quizSet.length} 問
          </p>
          <p>不正解 {wrongCount} 問</p>
          <button className="primary-btn" onClick={() => startQuiz(category)}>
            同じ条件でもう一度
          </button>
          <button className="ghost-btn" onClick={() => setMode('home')}>
            ホームへ戻る
          </button>
        </section>
      ) : null}
    </main>
  );
}
