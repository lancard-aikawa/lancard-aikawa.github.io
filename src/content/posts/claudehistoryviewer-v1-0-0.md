---
title: "ClaudeHistoryViewer 1.0.0"
date: "2026-10-01T05:58:08Z"
project: "claudehistoryviewer"
projectName: "ClaudeHistoryViewer"
tag: "v1.0.0"
releaseUrl: "https://github.com/lancard-aikawa/ClaudeHistoryViewer/releases/tag/v1.0.0"
prerelease: false
generator: shipnote
---

最初のリリース。

- Claude Code のセッション履歴を、LINE のようなチャットの形でブラウザに表示する（自分の発言は右、Claude の返答は左。
  長文の折りたたみ、ツール呼び出しのチップ、思考プロセス、Markdown・数式（KaTeX 同梱）・画像）
- Ctrl+K で全プロジェクトを横断する全文検索。メッセージ / セッション / プロジェクトのスター・タグ・メモ
- セッションを HTML / Markdown で保存
- Claude Code が古いセッション（既定 30 日）を消す前にバックアップを取り、消えたものも表示・検索できる。
  SessionVault を同梱し、サブエージェント・memory も残す（元が縮んだり壊れたりしても前の版が残る）
- 「🧠 メモリ」で Claude Code の memory を一覧し、それを書いた会話へ飛べる
- 設定画面（ビューアの設定と、Claude Code の保存期間などの一部）。バックアップの状況も出る
- Windows では `start.cmd` / `stop.cmd` で窓を出さずに動かせる。同じポートでの二重起動はしない
