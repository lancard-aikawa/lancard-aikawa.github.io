---
title: "WinTabDock 0.4.4"
date: "2026-11-03T01:49:31Z"
project: "wintabdock"
projectName: "WinTabDock"
tag: "v0.4.4"
releaseUrl: "https://github.com/lancard-aikawa/WinTabDock/releases/tag/v0.4.4"
prerelease: false
generator: shipnote
---

- スマホから使う: つないでいる間、帯にタブを並べず、選んでいるタブの名前のボタン (「▾ 名前」) 1 つにした。押すと開いている
  タブの一覧がドックの中に出る。スマホの幅ではタブが並びきらず、倍率のボタンの下に潜って重なっていた
- スマホから使う: 倍率のボタンを「−」「+」だけにした (間に今の倍率が出る)。「− 縮小」「+ 拡大」が帯の幅を取っていた
- スマホから使う: 「+ 開く」「一覧」「▾」で一覧を開いている間は、そのボタンを紫のまま押せなくした。押し続けると開いては
  閉じていた。閉じるのは「戻る」か一覧の項目。ほかのボタンを押すと、その一覧に入れ替わる
- スマホから使う: Firefox をタブにすると、スマホの画面で中身が真っ白だったのを直した。押しても画面が変わらないときは、
  Firefox の設定 (about:config の `widget.windows.window_occlusion_tracking.enabled` を false) が要る (README)
