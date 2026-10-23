---
title: "RepoTether 0.14.0"
date: "2026-10-22T13:49:19Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.14.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.14.0"
prerelease: false
generator: shipnote
---

- 社員向けの脆弱性の一覧: 脆弱性タブで「載せる場所」(社内のサーバーや会社の GitHub の組織) を決め、「社員向けの一覧を作って開く」で、
  そこに当てはまるリポジトリだけを場所ごとに並べた HTML を LockWatch に作らせる (`lockwatch report --share`)。個人のもの・外のサンプル・リモートの無いものは載せない。
  Cloudflare Access などで社員だけに見せる場所に置く前提。LockWatch 0.4.0 以上が要る
- 詳細パネルの「脆弱性」タブに「廃止にする」を足した。更新しないと決めたプロジェクトは LockWatch で照合せず、社員向けの一覧では「廃止」の欄に名前だけ出す
- 詳細パネルの「脆弱性」タブに、脆弱性の発行日を出す (LockWatch 0.4.0 以上の結果から)
- 言語そのもの (PHP・Node.js) の版: 詳細パネルの「脆弱性」タブに「言語」を足した。LockWatch が見当を付けた版 (か、ここで確定した版) について、
  系列のサポート終了と、新しいセキュリティリリースがあるかを出す。「版を更新」で動かしている版を入れ、版を上げたらここを更新する。
  脆弱性タブの行にも「PHP 8.1 終了」のような印を出す。LockWatch 0.4.0 以上が要る
