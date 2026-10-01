---
title: "ClaudeHistoryViewer 1.0.1"
date: "2026-10-01T06:53:32Z"
project: "claudehistoryviewer"
projectName: "ClaudeHistoryViewer"
tag: "v1.0.1"
releaseUrl: "https://github.com/lancard-aikawa/ClaudeHistoryViewer/releases/tag/v1.0.1"
prerelease: false
generator: shipnote
---

- 人が打っていないものを「あなた」の発言として出さない（これまで約 15% が混ざっていた）。
  Skill の展開文・画像の大きさの注記・別セッションからの連絡などは出さず、裏の作業の完了通知と中断は中央の小さな「⚙」の行に、
  文脈が長くなったときの要約は折りたたんだ「ここまでの会話の要約」にする。system-reminder やコマンドの出力のタグは消し、
  /mcp などのコマンドは名前だけ残す。検索と HTML / Markdown の保存も同じ見せ方
