# 電気基礎 学習アプリ — Claude Code 指示書

## プロジェクト概要
電気基礎（電気理論・直流/交流回路）の学習支援 SPA。
Vanilla JS + HTML + CSS のみ（ビルドツールなし）。
将来 Supabase に移行予定のため、アダプターパターンで設計済み。

## アーキテクチャ原則
- ビルドツールなし・フレームワークなし（Vanilla JS のみ）
- IIFE モジュールパターン（`var Module = (() => { ... })()`）
- localStorage → Supabase へのアダプター移行を見越した設計
- 問題データは `src/data/questions.json` を fetch() で非同期ロード

## コーディング規約
- 既存コードを読んでから変更する
- 必要最小限の変更にとどめる（リファクタリング・機能追加を混入しない）
- コメント・型アノテーションを不用意に追加しない
- `eval()` / `Function()` を絶対に使用しない

---

## セキュリティポリシー

### 外部パッケージ・ライブラリ
- `npm install` / `npx` の実行前に、対象パッケージの GitHub リポジトリを必ず確認する
- GitHub リポジトリが存在しない、または README にソースコードの説明がないパッケージは導入しない
- `npm install` は必ず `--ignore-scripts` オプション付きで実行し、postinstall の自動実行を防ぐ
- インストール後に `npm audit` を実行し、脆弱性がないことを確認してから `npm rebuild` する
- `scripts/` ディレクトリ・postinstall スクリプトの中身は実行前に内容をユーザーに説明する
- 外部から提供されたコマンド（`npx xxx`、`curl | sh` 等）は、ソースコードの所在を確認できない場合は実行せず、リスクをユーザーに説明する
- VS Code 拡張機能は公式マーケットプレイスで DL数1万以上・最終更新6ヶ月以内のもののみ導入する

### 不可視Unicode / GlassWorm 対策
- 外部から取得した Markdown・JS・CSS ファイルをプロジェクトに取り込む前に不可視Unicode を検査する
- 検査対象: U+200B〜U+200F、U+202A〜U+202E、U+2060、U+2063、U+FE00〜U+FE0F（異体字セレクター）、U+E0100〜U+E01EF（異体字セレクター補助）、U+FEFF（BOM）
- ウェブからコピペした CLAUDE.md テンプレートや設定ファイルも取り込み前に同様に検査する
- `eval()` を含む postinstall スクリプトが検出された場合は、ユーザーに警告して実行を中止する

### コード検査コマンド（参考）
```bash
# 不可視Unicode の一括検査
node -e "
const fs = require('fs');
const content = fs.readFileSync(process.argv[1], 'utf-8');
const CHARS = ['\u200B','\u200C','\u200D','\u200E','\u200F',
               '\u202A','\u202B','\u202C','\u202D','\u202E',
               '\u2060','\u2063','\uFEFF','\u00AD'];
// 異体字セレクター U+FE00-FE0F
for (let i = 0xFE00; i <= 0xFE0F; i++) CHARS.push(String.fromCodePoint(i));
const found = CHARS.filter(ch => content.includes(ch));
console.log(found.length ? 'WARN: ' + found.length + ' types found' : 'CLEAN');
" <対象ファイル>
```
