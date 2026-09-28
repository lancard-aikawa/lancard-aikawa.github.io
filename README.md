# lancard-aikawa.github.io

個人で作っているツールの紹介と更新履歴のサイト。<https://lancard-aikawa.github.io/>

`src/content/` の中身は [Shipnote](https://github.com/lancard-aikawa/Shipnote) の `shipnote sync` が各リポジトリの Release から書き出す。手で直さない
(直したいときは、そのリポジトリの `shipnote.toml` か Release の本文を直して `sync` し直す)。

- `/` 作ったものの一覧と最近の更新
- `/projects/<slug>/` 各ツールの紹介 (LP)
- `/posts/` リリースの記録、`/rss.xml`

main に push すると Actions (`.github/workflows/deploy.yml`) が Pages を作り直す。
リポジトリの Settings → Pages → Source を「GitHub Actions」にしておく。

## 手元で見る

```sh
pnpm install
pnpm dev      # http://localhost:14321/ (LPortMan に予約済み)
pnpm build && pnpm preview
```
