---
title: "RepoTether 0.8.0"
date: "2026-10-05T05:44:10Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.8.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.8.0"
prerelease: false
generator: shipnote
---

- 直したこと: 設定の「脆弱性」タブの「LockWatch を開く」で、LockWatch の画面と一緒に黒い窓が開いていた。
  uv 0.11 が作る `.venv\Scripts\pythonw.exe` はコンソール用だったため、本体の Python の `pythonw.exe` で開くようにした
- 詳細パネルの「脆弱性」タブで、悪意あるコードとして報告されたパッケージ (OSV の `MAL-` の記録) に「悪意あるコード」の印を付ける
  (LockWatch が結果に `malicious` を書くようになってから。深刻度は「緊急」で届く)
- 詳細パネルの「脆弱性」タブに、LockWatch の「注意」(lock ファイルの健全性) を出す。版を固定していない `requirements.txt` の行 (脆弱性の照合が不正確か、行われていない)、レジストリ以外から取るパッケージ、ハッシュなし、公開直後の版。前回から新しく出たものには「新しく出た」の印を付ける
- LockWatch を動かす Python は 3.11 以上 (LockWatch の側が 3.11 以上を求めるようになった)
- 直したこと: 案内に出す LockWatch の定期実行の登録コマンドが `pwsh` (PowerShell 7) を前提にしていた。Windows に最初から入っている `powershell` で動く書き方にした (LockWatch の README と同じ)
- 「悪意あるコード」と「注意」を出すには、LockWatch 0.3.0 以上が要る (古い LockWatch でも、これまでどおり脆弱性は出る)
