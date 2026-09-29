---
title: "LocalLauncher 1.0.1"
date: "2026-09-29T04:46:44Z"
project: "locallauncher"
projectName: "LocalLauncher"
tag: "v1.0.1"
releaseUrl: "https://github.com/lancard-aikawa/LocalLauncher/releases/tag/v1.0.1"
prerelease: false
generator: shipnote
---

- 修正: 複数のサーバーを同時に起動すると (自動起動など)、後から起動したサーバーが
  「ポートが使用中」(EADDRINUSE) で落ちることがあった。ポートの空き確認に使った一時的なソケットを、
  先に起動したサーバーのプロセスが引き継いで持ち続けていた (Windows)
- exe と Web UI (ブラウザのタブ) にアイコンを付けた。exe のプロパティに製品名と版を入れた
- README に画面を載せた
