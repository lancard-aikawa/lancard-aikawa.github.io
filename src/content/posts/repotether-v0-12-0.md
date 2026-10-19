---
title: "RepoTether 0.12.0"
date: "2026-10-19T02:44:47Z"
project: "repotether"
projectName: "RepoTether"
tag: "v0.12.0"
releaseUrl: "https://github.com/lancard-aikawa/RepoTether/releases/tag/v0.12.0"
prerelease: false
generator: shipnote
---

- 安全のために直したこと: `.git` ごと人から受け取ったフォルダ (展開した zip など) を読むと、その中の git の設定 (`core.fsmonitor`、
  `filter.<名前>.clean` など) に書かれたコマンドが、更新のたびに動くことがあった。取り込みでは、これらの設定を使わない。
  filter は、自分の全体の設定 (`~/.gitconfig`) と同じコマンドのもの (`git lfs install` で入る Git LFS など) だけ今までどおり使う。
  リポジトリだけに入れた filter (git-crypt など) があると、未コミットの数がずれることがある
- 安全のために直したこと: Claude を開く・セッションを再開するとき、フォルダの直下に `claude.cmd` (`.bat`・`.exe`) があると、本物ではなくそちらが動くことがあった
  (コマンドプロンプトは PATH より先に今のフォルダを探す)。claude を動かすあいだは今のフォルダを探さない
- 名前に `;` のあるフォルダは、Windows Terminal ではなくふつうのコンソール窓で開く (Windows Terminal は `;` の後ろを別のコマンドとして読む)
- README と会話の全文にある外の画像は、「画像を表示」を押すまで読み込まない。開いただけで相手のサーバーに伝わることや、
  URL に載せた文字が外へ出ることを防ぐ。押すと、その文書の画像をまとめて出す。そのリポジトリ自身の画像 (相対パス。GitHub のもの) は今までどおり出す
- 画面で動かせるスクリプトと通信先を絞った (Content Security Policy)。README などに紛れたスクリプトが動いても、アプリの外へ届かないようにする二重の備え
- 設定のアカウントで、サーバーの URL が `http://` のときに、トークンが暗号化されずに送られることを知らせる
