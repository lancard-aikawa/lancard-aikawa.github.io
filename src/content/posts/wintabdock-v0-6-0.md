---
title: "WinTabDock 0.6.0"
date: "2026-11-25T08:56:47Z"
project: "wintabdock"
projectName: "WinTabDock"
tag: "v0.6.0"
releaseUrl: "https://github.com/lancard-aikawa/WinTabDock/releases/tag/v0.6.0"
prerelease: false
generator: shipnote
---

- Claude の欄: CPU を使っているセッションに「⚙ CPU 18%  node.exe ×3」を出す (そのセッションと、そこから起動したテスト・
  ビルド・サーバなどの合計。乗せると重いものをコマンドライン付きで出す)。見出しの右に PC 全体の CPU を出し、乗せると
  Claude の外 (Defender・WSL・ブラウザなど) も含めた重いものを並べる。一時的に重くなったとき、どれが原因かを見分けるため
- Claude の欄: 変わった所 (窓の見出しか、セッションの行) だけ描き直す。どれか 1 つの窓の未コミットの数や、会話に出た URL が
  変わるだけで、欄が丸ごと消えて描き直されていた
- Claude の欄: 起動直後に一覧が出るまでを短くした。会話の記録 (1 つで数百 MB になる) を全部 JSON として読んでいて、
  3 日分で 40 秒ほど「読み込み中…」のままだった。欄に要らない行 (道具の結果の中身など) を読み飛ばし、一時に使うメモリも減らした
