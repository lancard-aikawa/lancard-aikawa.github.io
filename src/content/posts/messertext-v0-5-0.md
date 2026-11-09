---
title: "MesserText 0.5.0"
date: "2026-11-02T07:47:51Z"
project: "messertext"
projectName: "MesserText"
tag: "v0.5.0"
releaseUrl: "https://github.com/lancard-aikawa/MesserText/releases/tag/v0.5.0"
prerelease: false
generator: shipnote
---

MesserText の最初の公開版です。メモとシークレットを、パスワードで暗号化した 1 つのファイルに置く Windows のアプリです。

## 使い方

1. `MesserText-0.5.0-win64.zip` を展開する
2. `MesserText\MesserText.exe` を起動する（フォルダごと置いておく。exe だけを取り出さない）
3. 初回に保管庫のパスワードを決める（忘れると中身は取り出せません）

署名していないので、初回は SmartScreen が「Windows によって PC が保護されました」と出します。「詳細情報」→「実行」で起動できます。
メモと設定は `%APPDATA%\MesserText` に置かれます。

## できること

- タブ（カテゴリ）・日付・案件で分け、絞り込みを重ねて探す。検索は AND / OR / 除外 / 語句
- 検索・置換（正規表現）、行番号、目盛りと縦線、空白の印などのエディタの機能
- シークレットは開いても伏せておき、「表示」したときだけ見せる
- 縦書きの表示（メモごと）
- 暗号は AES-256-GCM＋scrypt。自動保存、5 世代の予備、メモごとの履歴、ロックと自動ロック
- OneDrive などで 2 台から使っても、メモ単位で合流して変更を失わない

## 動く環境

Windows 10 / 11（64 ビット）

## ライセンス

MesserText は MIT。同梱の Qt / PySide6 は LGPL-3.0 で、条文と差し替えの手順は zip の `licenses\THIRD-PARTY-NOTICES.md` にあります。
