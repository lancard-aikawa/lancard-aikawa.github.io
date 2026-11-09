---
title: "RepoTether 0.16.0"
date: "2026-10-29T15:09:40Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.16.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.16.0"
prerelease: false
generator: shipnote
---

- 「道具」タブを足した (脆弱性タブの隣)。ToolKeeper (この PC に入れた PHP・Ghostscript・Cygwin と winget・choco の道具が古くなっていないかを
  週に 1 回調べる別の道具) の結果を、区分・入っている版・最新・サポート終了で並べる。タブの数は、更新できる道具とサポートが終わった道具の合計。
  RepoTether は見るだけで、道具の更新は「ToolKeeper を開く」で ToolKeeper の画面からする。下で ToolKeeper の場所を決め、版・定期実行の登録などを確かめる。
  ToolKeeper 0.1.0 以上 (結果の形 `schema` 1) が要る
- 道具タブ: ToolKeeper 0.2.0 以上なら、最新の版の「公開日」の列と、見出しに「環境の注意」の数 (PATH や環境変数が無い場所を指しているなど) を出す。
  winget の版の書き方が違うだけで最新の物 (Microsoft の OpenJDK) は、注意の欄にそう出す
