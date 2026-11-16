---
title: "RepoTether 0.18.0"
date: "2026-11-13T01:19:24Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.18.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.18.0"
prerelease: false
generator: shipnote
---

- Offstage (apps/offstage) とつないだ。Offstage があれば (RepoTether と同じフォルダか、インストーラーの入れ先)、起動時に裏で取り込ませ (窓は出ない)、
  git の外の手元のファイルが消えた・動いた・機密の疑いの中身が Claude の会話に出たリポジトリの行に「消失 n」「移動 n」「送信 n」の札を出す。
  行と詳細の「Offstage」で、そのリポジトリに絞って Offstage を開く。Offstage が無ければ何も変わらない
- Offstage を RepoTether のインストーラーと zip に入れた (`offstage.exe` が `RepoTether.exe` の隣に入る)。別に入れなくてよい。
  RepoTether と同じ版のソースから作るので、版の食い違いで取り込みが止まることもない。手元の `run-repotether.bat` も Offstage を一緒に作る
- LockWatch・ToolKeeper を RepoTether から入れられるようにした (脆弱性タブの LockWatch の欄・道具タブの ToolKeeper の欄の「入れる」)。
  Python も clone も要らない exe の形を、GitHub の Release から取り、SHA-256 を確かめて `%LOCALAPPDATA%\RepoTether\tools` に入れ、そのまま使い始める。
  LockWatch は osv-scanner も (PATH に無ければ) 一緒に入れる。新しい版があれば「更新」(設定とデータは残す)。LockWatch 0.8.0・ToolKeeper 0.4.0 から
- 「LockWatch の場所」「ToolKeeper の場所」に、exe の形のフォルダも指定できる (自分で clone したリポジトリもこれまでどおり使える)
