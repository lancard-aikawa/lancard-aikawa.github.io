---
title: "RepoTether 0.15.0"
date: "2026-10-23T00:56:20Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.15.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.15.0"
prerelease: false
generator: shipnote
---

- 脆弱性タブ: 行を押すと、ほかのタブへ移らずに、その行の下に中身 (脆弱性 1 件ずつ・言語の版・照合できなかった理由) を広げるようにした。
  詳細パネルへ移るのは「詳細を開く」を押したときだけ。数百件あるものは、最初の 20 件と「残りも出す」
- ビルド・リリースへの影響: 詳細パネルの「脆弱性」タブと、脆弱性タブで広げた行に「Claude に影響を調べさせる」を足した。
  LockWatch から Claude Code にリポジトリの中を読むことだけさせ、脆弱性のあるパッケージがリリースに入るか、ビルド・開発のときだけかを、
  根拠のファイルつきで HTML にしてブラウザで開く (`lockwatch assess`)。「前回の結果を開く」で調べ直さずに開ける。調べたあとに照合し直して脆弱性の中身が変わったら「前回のあとに脆弱性が変わった」と出す
  (照合の時刻が変わっただけでは出さない)。LockWatch 0.5.0 以上と Claude Code (claude.exe) が要る (古い LockWatch では押せず、理由を出す)
