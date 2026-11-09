# lancard-aikawa.github.io

サイトの作りは README.md。中身 (`src/content/`) は Shipnote が書き出すので手で直さない。

## 開いたら最初にやること: 載せ漏れを拾う

各リポジトリで機能を足しても、そこで作業している Claude はサイトへの反映を確かめない。
**載せ漏れはサイト側から拾う** (2026-11-09 に決めた)。このリポジトリでセッションを始めたら、
頼まれた作業の前に次を流す。`shipnote` は `uv run --no-sync --project C:\Repos\mywork\Shipnote shipnote` のこと。

1. `shipnote tags` で台帳 (`shipnote/tags.json`) に新しいタグを取り込み、漏れを一覧する
2. **「未反映」があれば、確認せずに `shipnote sync --commit --push` する。**台帳で出すと決まっている版を、
   Release の本文そのままで出すだけなので、ユーザーの了承は取ってある。push のあと `gh run list --limit 1` でデプロイを見る
3. 判断が要るものは、ユーザーに一覧で見せて 1 つずつ決めてもらう。勝手に決めない
   - **未登録のリポジトリ** → 載せるなら `shipnote init <フォルダ>` (下書きをユーザーが読む)、載せないなら
     `shipnote ignore <リポジトリ> --note <理由>`
   - **Release なし** のタグ → そのリポジトリで Release を作るか、出さなくてよいかを聞く
   - **出さない** になった新しいタグ (`posts = false` の既定) → そのままでよいか。出すなら `shipnote decide <リポジトリ> <タグ> --publish`
4. **LP の特徴欄が古くなっていないか見る。**`sync` が書き換えるのは記事と Release の情報だけで、LP の
   `features` / `description` は各リポジトリの `shipnote.toml` のまま止まる。
   `git -C <リポジトリ> log -1 --format=%ad --date=short -- shipnote.toml` より後の記事 (`src/content/posts/<slug>-*.md`) を読み、
   `features` に無い大きな機能があれば、`shipnote.toml` の直し方を下書きして見せる。了承をもらってから
   そのリポジトリで直してコミットし、`shipnote sync --commit --push` し直す。
   **コミットの前に `git -C <リポジトリ> branch --show-current` を見る。**main でなければ、作業中のブランチに混ぜずにユーザーに聞く
   (`sync` は手元のファイルを読むので、ブランチに入れた変更は main に戻したときにサイトから消える。2026-11-09 WinTabDock の `vnc-remote` で踏んだ)
   (例: WinTabDock は 2026-09-29 から更新が無く、v0.2.0〜v0.4.4 の「スマホから使う」が LP に無かった)

対象のリポジトリは `~/.shipnote/config.toml` の `repos`。F: のリポジトリ (ClaudeChat、MachiBura) は F: が無いと読めない。
`tags` は台帳に新しいタグを書き足すので、`sync` を流さなかった回は `shipnote/tags.json` が変わったまま残る。
そのときは台帳だけ `git commit -m "Ledger: record new tags" -- shipnote/tags.json` でコミットする (サイトの見た目は変わらない)。
漏れが何も無ければ「載せ漏れなし」と一言だけ書いて、頼まれた作業に移る。
