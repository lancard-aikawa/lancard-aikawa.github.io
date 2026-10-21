---
title: "RepoTether 0.13.0"
date: "2026-10-21T04:26:04Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.13.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.13.0"
prerelease: false
generator: shipnote
---

- 状態の画面で、言語 (PHP・Rust・Python など) で絞り込めるようにした。言語は、置いてあるファイル (`composer.json`・`Cargo.toml` などと、
  根とその 1 つ下のフォルダのファイルの拡張子) から見当を付け、未クローンのものはリモート (GitHub・Gitea) が判定した言語を使う。
  検索欄に言語の名前を入れても当たる。前の版から使っている場合、リモートの言語は「リモートも更新」で入る
- 一覧の行と詳細に、プロジェクトの言語を出す (セルではカーソルを乗せたときの説明に出す)
