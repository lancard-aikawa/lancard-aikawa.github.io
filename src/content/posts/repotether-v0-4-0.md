---
title: "RepoTether 0.4.0"
date: "2026-09-30T07:37:45Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.4.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.4.0"
prerelease: false
generator: shipnote
---

- プロジェクトにアイコンを付ける。フォルダの中にアプリのアイコン (Tauri / Flutter / Android / Electron / Next.js の
  決まった置き場所、`public/`・`static/` の favicon、icon・logo という名前の画像、`icons` フォルダの画像など) があればそれを、
  無ければ名前の頭文字と名前から決まる色で出す。一覧・エクスプローラ・詳細パネルに出る
- 自動更新と起動時は、最近作業したもの (既定 90 日。設定「読み直す範囲」で変えられる) と、git の操作があったもの
  (.git の中の HEAD・index・refs の下のフォルダなどの更新時刻で見分ける。push・stash・worktree も拾う) だけを
  git から読み直し、ほかは前回の結果を使う (コミットは履歴の期間の分だけ引き継ぐ)。手動の「更新」は今までどおりすべてを読む。
  リモートの更新で git fetch する設定のときは、読み直さないものも fetch する。98 件の環境で約 6 秒 → 約 1.5 秒
- 状態タブの「フォルダ × エクスプローラ」で階層を選んでいるときは、上部に「◯◯ 以下を更新」(その下だけを読み直す) と
  「すべて更新」を出す。「フォルダ × 一覧」ではフォルダの見出しの「この下を更新」で同じことができる
- git の状態を並列で読む数の上限を 8 → 16 にする (fetch は 8 のまま)
