---
title: "WinTabDock 0.4.0"
date: "2026-11-02T11:01:14Z"
project: "wintabdock"
projectName: "WinTabDock"
tag: "v0.4.0"
releaseUrl: "https://github.com/lancard-aikawa/WinTabDock/releases/tag/v0.4.0"
prerelease: false
generator: shipnote
---

- スマホから使う: 押した所に白い輪をすぐ出す (PC の画面が変わって届くまでの間、押せたかが分からなかった)
- スマホから使う: 押すたびに 1 行、宛先・どうしたか・画面が変わるまでの時間を `press.log` に書く
  (押したのに反応しない・遅いときに、どこで止まったかを見分ける。読み方は README)
- スマホから使う: Ctrl 付きのキーを続けて打つと、順番が入れ替わることがあったのを直した
  (Ctrl+X・Ctrl+V の直後の Ctrl+S が、切り取り・貼り付けより先に効いた)
- スマホから使う: スマホでツールを押している間、PC の画面でマウスの下にある「スマホから使う」の画面の「止める」・「始める」が
  押されたことになり、勝手に待ち受けが止まって切れることがあったのを直した。押したまま切れると押している扱いが残り、
  後からも起き続けたのも直した。止めたこと・捨てた押し込みは remote.log に、押したまま切れたことは press.log に書く
