---
title: "RepoTether 0.5.0"
date: "2026-10-01T05:58:09Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.5.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.5.0"
prerelease: false
generator: shipnote
---

- 詳細パネルの Claude タブに「ログの検査」。SessionVault (Claude Code のログを残し・検査する CLI) の
  `verify` で、そのプロジェクトのセッションのログに読めない行・途中で切れた行・切れた会話のつながりが無いか、
  SessionVault の保管庫の版と食い違っていないかを調べる。押したときだけ動き、ログは書き換えない
- 設定「表示・その他」に「SessionVault の場所」。Claude History Viewer のフォルダを指定すると、Viewer に同梱の
  SessionVault を Python で動かし、Viewer と同じ保管庫を見る。sessionvault.exe も指定できる。空なら PATH の sessionvault.exe
