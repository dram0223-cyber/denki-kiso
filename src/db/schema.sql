-- ============================================================
--  schema.sql — Supabase (PostgreSQL) スキーマ定義
--  電気基礎 学習アプリ
--
--  使い方:
--    Supabase ダッシュボード > SQL Editor にペーストして実行
--    または: supabase db push
-- ============================================================

-- ────────────────────────────────────────────────────────────
--  ユーザープロファイル
--  Supabase Auth の auth.users を参照し、学習統計を保持
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id            UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name  TEXT,
  streak        INT         NOT NULL DEFAULT 1,
  last_study_date DATE,
  total_answered INT        NOT NULL DEFAULT 0,
  total_correct  INT        NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ────────────────────────────────────────────────────────────
--  セッション履歴
--  1セッション（クイズ1回）= 1行
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.study_sessions (
  id            BIGSERIAL   PRIMARY KEY,
  user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  studied_at    DATE        NOT NULL DEFAULT CURRENT_DATE,
  answered      INT         NOT NULL DEFAULT 0,
  correct       INT         NOT NULL DEFAULT 0,
  category      TEXT,                          -- NULL = all / 'random'
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ────────────────────────────────────────────────────────────
--  問題別履歴
--  問題ID × ユーザーで UPSERT
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.question_history (
  user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  question_id   TEXT        NOT NULL,          -- questions.json の id フィールド
  correct_count INT         NOT NULL DEFAULT 0,
  wrong_count   INT         NOT NULL DEFAULT 0,
  last_seen_at  TIMESTAMPTZ,
  PRIMARY KEY (user_id, question_id)
);

-- ────────────────────────────────────────────────────────────
--  カテゴリ別統計
--  カテゴリ名 × ユーザーで UPSERT
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.category_stats (
  user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  category      TEXT        NOT NULL,
  answered      INT         NOT NULL DEFAULT 0,
  correct       INT         NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, category)
);

-- ────────────────────────────────────────────────────────────
--  ブックマーク
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.bookmarks (
  user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  question_id   TEXT        NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, question_id)
);

-- ────────────────────────────────────────────────────────────
--  SRSデータ（スペースド・リピティション）
--  SM-2アルゴリズムのパラメータを保存
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.srs_data (
  user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  term          TEXT        NOT NULL,          -- 用語テキスト（主キーとして利用）
  interval_days INT         NOT NULL DEFAULT 1,
  ease_factor   FLOAT       NOT NULL DEFAULT 2.5,
  due_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reps          INT         NOT NULL DEFAULT 0,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, term)
);

-- ────────────────────────────────────────────────────────────
--  取得済みバッジ
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.earned_badges (
  user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  badge_id      TEXT        NOT NULL,
  earned_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, badge_id)
);

-- ────────────────────────────────────────────────────────────
--  用語データ（ユーザーカスタム）
--  vocab.js の静的データを初回マイグレーション、以降はこのテーブルで管理
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.vocab_terms (
  id            BIGSERIAL   PRIMARY KEY,
  user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  term          TEXT        NOT NULL,
  reading       TEXT,                          -- ふりがな
  definition    TEXT        NOT NULL,
  category      TEXT,
  example       TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
--  インデックス
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_date
  ON public.study_sessions (user_id, studied_at DESC);

CREATE INDEX IF NOT EXISTS idx_question_history_user
  ON public.question_history (user_id);

CREATE INDEX IF NOT EXISTS idx_srs_data_due
  ON public.srs_data (user_id, due_at);

CREATE INDEX IF NOT EXISTS idx_vocab_terms_user
  ON public.vocab_terms (user_id);

-- ============================================================
--  Row Level Security (RLS)
--  各ユーザーが自分のデータのみ読み書きできる
-- ============================================================
ALTER TABLE public.profiles        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.category_stats  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.srs_data        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.earned_badges   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocab_terms     ENABLE ROW LEVEL SECURITY;

-- profiles
CREATE POLICY "profiles: own read"   ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles: own insert" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles: own update" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- study_sessions
CREATE POLICY "sessions: own all"   ON public.study_sessions
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- question_history
CREATE POLICY "qhist: own all"      ON public.question_history
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- category_stats
CREATE POLICY "catstats: own all"   ON public.category_stats
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- bookmarks
CREATE POLICY "bookmarks: own all"  ON public.bookmarks
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- srs_data
CREATE POLICY "srs: own all"        ON public.srs_data
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- earned_badges
CREATE POLICY "badges: own all"     ON public.earned_badges
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- vocab_terms
CREATE POLICY "vocab: own all"      ON public.vocab_terms
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ============================================================
--  トリガー: profiles.updated_at を自動更新
-- ============================================================
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER trg_srs_updated_at
  BEFORE UPDATE ON public.srs_data
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER trg_vocab_updated_at
  BEFORE UPDATE ON public.vocab_terms
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- ============================================================
--  新規ユーザー自動プロファイル作成（Auth Hook）
--  Supabase ダッシュボード > Authentication > Hooks で登録
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
