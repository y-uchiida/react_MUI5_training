# react_training008

React と MUI 5 を利用して、サンプルページを作成しました。

## 開発環境

- Windows 11 (21H2)
- WSL2 Ubuntu20.04
- React 18.2
- MUI 5.10.10
- Node.js 18.12.0
- vite 3.1.0

## ローカルでの動作の手順

node が利用できる環境に当リポジトリをクローンします  
下記コマンドで依存パッケージをインストールします

```bash
$ npm install
```

下記コマンドで vite のローカルサーバを起動します

```bash
$ npm run dev

> react_trainig008@0.0.0 dev
> vite


  VITE v3.1.0  ready in 381 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

ターミナルに表示された localhost の URL にアクセスすると、トップページが表示されます

## 実装内容

1. ツアー予約サイトのサンプル (2022.10.29)  
   MUI の基本コンポーネントの使い方、かんたんなカスタマイズを試しました。
   `/tour/` 以下の URL で表示されます。

## 参考資料

以下の教材をベースにソースコードを作成しました

1. MUI5 (Material UI) Crash Course:  
   https://www.youtube.com/watch?v=o1chMISeTC0
