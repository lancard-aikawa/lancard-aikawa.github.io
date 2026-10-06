---
title: "RepoTether 0.9.0"
date: "2026-10-06T07:13:05Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.9.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.9.0"
prerelease: false
generator: shipnote
---

- 外部ツール: 設定の「表示・その他」で、プロジェクトのフォルダを渡して起動するプログラム (fastmd-explorer など) をいくつでも登録できる。
  VS Code / 端末 / フォルダ / Claude のボタンの横に、登録した名前のボタンが並ぶ。引数の `{path}` がフォルダのパスになり、空ならフォルダのパスだけを渡す
- 関連ページ: 詳細パネルの「概要」タブで、プロジェクトごとにサービスの管理画面やドキュメントの URL を登録できる (Resend・Cloudflare・Firebase・GitHub のページなど)。
  URL を入れるとページのタイトルを取ってきて名前の候補にする。ログイン画面のタイトルしか取れないときと取れないときはホスト名にする。名前を押すとブラウザで開く。
  サイトのアイコン (favicon) を名前の左に出す。「編集」で名前・URL の書き換えと並べ替えができる
- 設定の反映の仕方をそろえた。これまではテーマ・端末・一覧の密度・自動更新などは変えた瞬間に反映され、Claude Code のログの保存期間は専用の「変更」ボタンだった。
  どれも上部の保存ボタンを押すまで反映しないようにした (「元に戻す」も効く)。表示の設定と保存期間だけを変えたときは、リポジトリの読み直しをしない
