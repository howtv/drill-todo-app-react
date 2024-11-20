# drill-todo-app-react
[ToDoアプリの作成 - Software Engineer 就活 by 外資就活ドットコム](https://gaishishukatsu.com/engineer/drill/1/1)

このプロジェクトでは、シンプルなToDoアプリの作成を通して、Reactを用いたフロントエンド開発の基礎を学習します。最小限の機能を実装したサンプルコードを用意しているので、自分でプロジェクトを作成したことがない人でも簡単に開発に取り組むことができます。

ステップ2, 3では、タスクの期限順にソートしたり、特定のカテゴリのタスクのみを表示したりする追加機能を作成します。

ステップ4では、ブラウザの機能であるLocalStorageや、ノーコードでバックエンドの処理を実装できるFirebaseを用いて、バックエンドとの連携の考え方を学習します。

## このリポジトリの使い方

開発ドリルを見ながら開発に取り組んでみてください。

下記リンクから、各ステップのサンプルコードを確認できます。

|開発ドリル ステップ|サンプル|
|---|---|
|[開発環境を構築する](https://gaishishukatsu.com/engineer/drill/1/1)|[https://github.com/howtv/drill-todo-app-react/](https://github.com/howtv/drill-todo-app-react)|
|[タスクの期限を設定する](https://gaishishukatsu.com/engineer/drill/1/2)|[https://github.com/howtv/drill-todo-app-react/tree/step2](https://github.com/howtv/drill-todo-app-react/tree/step2)|
|[タスクのカテゴリを設定する](https://gaishishukatsu.com/engineer/drill/1/3)|[https://github.com/howtv/drill-todo-app-react/tree/step3](https://github.com/howtv/drill-todo-app-react/tree/step3)|
|[タスクの内容を保持できるようにする [LocalStorage]](https://gaishishukatsu.com/engineer/drill/1/4)|[https://github.com/howtv/drill-todo-app-react/tree/step4-1](https://github.com/howtv/drill-todo-app-react/tree/step4-1)|
|[タスクの内容を保持できるようにする [Firebase]](https://gaishishukatsu.com/engineer/drill/1/4)|[https://github.com/howtv/drill-todo-app-react/tree/step4-2](https://github.com/howtv/drill-todo-app-react/tree/step4-2)|
---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
