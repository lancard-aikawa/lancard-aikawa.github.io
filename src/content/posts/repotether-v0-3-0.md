---
title: "RepoTether 0.3.0"
date: "2026-09-29T01:34:15Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.3.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.3.0"
prerelease: false
generator: shipnote
---

- 設定「表示・その他」に「Claude Code のログの保存期間」を足す。Claude Code の `cleanupPeriodDays`
  (既定 30 日。これより古いセッションのログは Claude Code が起動時に消す) を変えられる。
  書き換えるのはこの項目だけで、ほかの設定は中身も並び順も変えない
- 状態タブの「表示」を、分類 (なし / フォルダ / タグ) と見せ方 (一覧 / エクスプローラ) に分ける。
  0.2.0 までの表示形式 (時系列 / フォルダ / タグ) は、それぞれ「一覧」の分類に読み替える
- 見せ方「エクスプローラ」を足す。左に分類の木 (階層ごとに取り残しの数と件数)、右に選んだ階層の中身を表で出す。
  列の見出しで並べ替え、「下の階層もまとめて出す」で配下をすべて並べられる。分類なしなら全件を 1 枚の表で出す
- マニュアルの「データの置き場所」に、bat で使っていた PC にインストール版を入れても設定が引き継がれることを書く
