---
title: "RepoTether 0.17.0"
date: "2026-11-09T01:43:57Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.17.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.17.0"
prerelease: false
generator: shipnote
---

- 脆弱性タブに絞り込みを足した。文字 (プロジェクトの名前・パス・タグ・リモート、脆弱性のパッケージ名・ID・別名) とタグ (上の階層を選ぶと下の階層も含む。「タグなし」も選べる) で、
  「問題の無いものも出す」と重ねて効く。絞り込んでいるあいだは、見出しの深刻度ごとの件数も表に出ている分になる。状態タブへ移って戻っても残る
- 脆弱性タブに「診断書」を足した。LockWatch の画面の「診断書を出す」と同じく `lockwatch report --html` で診断書 (HTML) を書き、ブラウザで開く。
  見出しのボタンは全部と一覧 (index.html)、各行のボタンはそのリポジトリの 1 つだけ。「隠す」で選んだものは除いて書く。LockWatch 0.3.0 以上が要る
- 自動の判断を出す。LockWatch の `assess --new` (一度「Claude に影響を調べさせる」をした github.com の公開のリポジトリについて、その後に増えた脆弱性だけを定期実行で
  Claude Code に調べさせたもの) の結果 (LockWatch のデータの `assess/new.json`) を読み、脆弱性タブの行に「急ぎ N」か「急ぎなし」、
  1 件ずつ (脆弱性タブで広げた行と、詳細パネルの「脆弱性」タブ) に「後回し・ビルド」のような札を出す。札に乗せると理由が出る。前回の判断を使ったものは点線の札。
  LockWatch 0.7.0 以上が要る (古い LockWatch では札と下の「自動の判断」が出ないだけで、ほかは今までどおり動く)
- 「ビルド・リリースへの影響」に「📄 増分」(自動で判断した分の HTML を開く)。調べ直しを勧める札は、まだ判断していない脆弱性が増えたときだけ「未判断 N」と出す
  (上げて直って消えただけでは出さない。古い LockWatch では今までどおり)
- 脆弱性タブの「確かめる」の表に「自動の判断」(入・切。切り替えは LockWatch の設定で、RepoTether は変えない)
