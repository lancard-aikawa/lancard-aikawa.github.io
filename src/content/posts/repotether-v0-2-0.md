---
title: "RepoTether 0.2.0"
date: "2026-09-28T08:44:28Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.2.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.2.0"
prerelease: false
generator: shipnote
---

- Claude のセッションを開けるようにする
  - 会話の全文を見る (自分の発言と Claude の返答・使ったツール。検索できる)。詳細パネルの Claude タブと履歴タブから
  - 「再開」で、設定の端末で `claude -r <セッション ID>` を動かして続きから。「分岐して再開」(`--fork-session`) も
  - 行の操作に「Claude」(そのフォルダで `claude` を起動)
  - Claude Code の中から RepoTether を起動しても、起動する claude に動いているセッションの環境変数を渡さない
- 操作マニュアル (`docs/manual.md`) を足す。画面の画像は架空のプロジェクトを並べたデモ環境で撮ったもの
- マニュアルの画像を撮り直す `pnpm manual-shots` (`tools/manual-shots.mjs`) を足す
- README を入口として短くし、詳しい使い方はマニュアルへ移す
