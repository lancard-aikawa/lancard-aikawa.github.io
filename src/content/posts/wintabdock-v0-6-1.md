---
title: "WinTabDock 0.6.1"
date: "2026-11-26T03:05:15Z"
project: "wintabdock"
projectName: "WinTabDock"
tag: "v0.6.1"
releaseUrl: "https://github.com/lancard-aikawa/WinTabDock/releases/tag/v0.6.1"
prerelease: false
generator: shipnote
---

- Windows の再起動・シャットダウン・サインアウトのときに、取り込んだ窓を全部元に戻す。ドックを開いたまま再起動したら、
  再起動がほかのアプリに止められて取り消され、ドックだけが終わって、隠していた VS Code の窓が出てこなくなった
- 落ちたドックの窓を次の起動で戻すとき、窓のプロセスが控えと違えば触らない。PC を起動し直す前の控えは使わずに捨てる
  (窓の番号が、無関係な窓を指していることがある)
