---
title: "WinTabDock 0.5.0"
date: "2026-11-24T09:31:09Z"
project: "wintabdock"
projectName: "WinTabDock"
tag: "v0.5.0"
releaseUrl: "https://github.com/lancard-aikawa/WinTabDock/releases/tag/v0.5.0"
prerelease: false
generator: shipnote
---

- 左に「Claude」の欄を足した (帯の「◧ Claude」で出す・しまう)。開いている VS Code の窓ごとに、中の Claude Code の
  セッション (題名・動作中か返事待ちか・開いたフォルダの外で編集したリポジトリ) と、見る URL (LPortMan の台帳のポートと、
  会話に出た localhost や workers.dev などの URL) を並べる。窓やセッションを押すと、その VS Code の窓をタブにして切り替える。
  スマホとつないでいる間はしまう
- Claude の欄は、Claude Code の拡張を使っている人 (`~/.claude/ide` がある) にだけ最初から出す
- 欄に出ている VS Code の窓を自動でタブにする (最初は切れている。設定で入れる)。いま使っている窓だけ選び、ほかは裏のタブにする。
  ドックを「ツールも閉じる」で閉じても、VS Code の窓は閉じずに元の窓に戻す
- タブにした窓が自分で出てきたり動いたりしたら、0.5 秒以内に隠す・ドックの中に置き直す。VS Code の窓をまとめて自動で取り込んだ
  直後に、選んでいないタブの窓が見えたまま重なり、ドックを触るまで揃わなかった
- Claude の欄: 動いていたセッションが返事待ち・許可待ちかもに変わったら、窓の行・セッションの行・ドックのタブを橙にし、
  ドックを見ていなければタスクバーを光らせる。その窓を見ると消える
- Claude の欄: 窓と編集したリポジトリに、未コミット・未 push の数を出す
- Claude の欄: 許可待ちかも・考え中のセッションに、結果を待っている道具 (「▸ Bash: npm test」) を出す
- Claude の欄の URL を、Claude のセッションから足す・隠すコマンド (`WinTabDock.exe --link`、ソースなら `claude_sessions.py link`) を足した。
  ↗ の右クリックでも隠せる
- スマホから使う: Chrome・Edge も Firefox と同じく、そのままではタブにして押しても画面が変わらない。起動のショートカットに
  書き足すものを README に書いた (アプリの中身は変わらない)
