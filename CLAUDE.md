# CLAUDE.md

このファイルは、リポジトリ内で作業する Claude Code (claude.ai/code) へのガイダンスです。

## コマンド

```bash
npm run dev          # Vite 開発サーバー起動（HMR あり）
npm run build        # 型チェック（vue-tsc）→ dist/ へビルド
npm run serve        # ビルド済み成果物をローカルでプレビュー
npm run type-check   # 型チェックのみ実行
```

テストスイート・リンターは未設定。

## アーキテクチャ

Vue 3 のペライチポータルサイト。ルーターもストアもなく、`App.vue` がデータをインポートして3つのプレゼンテーショナルコンポーネントに props で渡すだけのシンプルな構成。

**データフロー:**
`src/data.ts`（静的配列）→ `App.vue`（インポートして props 渡し）→ `AppList.vue` / `AppTable.vue`（カード描画）

**重要ファイル:**
- `src/data.ts` — コンテンツの全データがここに集約。`myApps`（自作アプリ）と `serviceAccounts`（SNS・サービスアカウント）の2配列。`CategoryVariation` は const オブジェクトで、カテゴリ文字列の型を絞るために使用
- `src/icons.ts` — サービスアイコンを HTML 文字列（SVG / PNG `<img>`）で定義。`AppTable.vue` で `v-html` を使ってレンダリング
- `src/types.ts` — `valueOf<T>` ユーティリティ型1つのみ。const オブジェクトの値からユニオン型を導出するために使用

**スタイリング:** Tailwind CSS v4（PostCSS プラグイン経由）。`<html class="dark">` でダークモード固定。背景画像 + 半透明黒オーバーレイは `App.vue` で適用。

## デプロイ

`main` へ push → GitHub Actions が `npm ci && npm run build` を実行 → Firebase Hosting（プロジェクト: `u83-portal`）へ自動デプロイ。PR 作成時はプレビューチャンネルへの自動デプロイも動作する。
