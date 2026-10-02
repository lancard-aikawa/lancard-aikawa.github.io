---
title: "RepoTether 0.6.0"
date: "2026-10-02T03:55:23Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.6.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.6.0"
prerelease: false
generator: shipnote
---

- [LockWatch](https://github.com/lancard-aikawa/LockWatch) (lock ファイルを osv-scanner にかけて脆弱性を調べる CLI。別に入れる) とつなぐ。
  設定の「脆弱性」タブで LockWatch のフォルダを指定すると、更新のたびに手元のリポジトリの一覧 (公開・非公開・不明の別つき) を LockWatch に渡し、
  結果を詳細パネルの「脆弱性」タブと一覧の行の「脆弱性 N」(緊急・高の数) に出す。タブの「今すぐ調べる」でそのリポジトリだけ照合し直せる
  (前回から lock ファイルも脆弱性 DB も変わっていなければ、照合せずにそう知らせ、「もう一度照合する」で照合し直す)。
  深刻度や「保守終了」などの知らせの種類ごとに隠せる
- 設定の「脆弱性」タブの「確かめる」で、LockWatch が使えるか (LockWatch と osv-scanner の版、受け渡しのファイル、最後の照合、
  手元の脆弱性 DB、定期実行の登録) を見られる。osv-scanner が無い・定期実行が未登録なら、入れる・登録するコマンドを出す
  (詳細パネルの「脆弱性」タブにも案内を出す)。LockWatch 0.1.0 以上が要る
- 公開とみなすのは github.com で公開のリポジトリだけ。Gogs・Gitea などの自前のサーバーのものは、そこで公開でも非公開として渡す
  (LockWatch はパッケージ名を外に出さず、手元の脆弱性 DB で照合する)
