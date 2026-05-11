# ゆうやみポータル

自作アプリやSNSアカウントへのリンクをまとめた個人ポータルサイトです。  
Vue.js 3 の学習を兼ねて制作しました。

**URL:** https://u83-portal.web.app/

---

## 技術スタック

| 分類 | 技術 |
|------|------|
| フレームワーク | Vue 3 (Composition API / `<script setup>`) |
| ビルドツール | Vite |
| スタイリング | Tailwind CSS v4 |
| 言語 | TypeScript |
| ホスティング | Firebase Hosting |
| CI/CD | GitHub Actions |

## 開発

```bash
npm install
npm run dev       # 開発サーバー起動
npm run build     # プロダクションビルド
npm run serve     # ビルド済みをローカルで確認
```

## コンテンツの追加・編集

表示内容はすべて [src/data.ts](src/data.ts) で管理しています。

- **マイアプリを追加する** → `myApps` 配列にオブジェクトを追記
- **サービスアカウントを追加する** → `serviceAccounts` 配列にオブジェクトを追記
- **カテゴリを追加する** → `CategoryVariation` に定義を追加した上で、各配列で使用

アイコン画像は `public/icons/` に配置し、`src/icons.ts` に HTML 文字列として登録します。

## デプロイ

`main` ブランチへの push で GitHub Actions が自動的に Firebase Hosting へデプロイします。  
Pull Request を作成するとプレビュー URL が発行されます。
