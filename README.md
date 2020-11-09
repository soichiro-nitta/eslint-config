# @soichiro_nitta/eslint-config

ESLintの設定をパッケージ化し、npmを介して利用できるよう作成しました。

https://www.npmjs.com/package/@soichiro_nitta/eslint-config

## 使い方

`eslint`と`@soichiro_nitta/eslint-config`をインストール後、`.eslintrc.js`の`extends`にプリセットを指定します。

以下を実行します

```
yarn add -D eslint @soichiro_nitta/eslint-config
```

npmの場合

```
npm install --save-dev eslint @soichiro_nitta/eslint-config
```

`.eslintrc.js`

```
module.exports = {
  extends: '@soichiro_nitta',
}
```

ルールはお好みで上書きが可能です

```
module.exports = {
  extends: '@soichiro_nitta',
  rules: {
    indent: ['warn', 4, { SwitchCase: 0 }],
  },
}
```

## プリセット

プロジェクトの構成に応じて、利用するプリセットを選んでください。

例：React, TypeScript, Prettierを使用するプロジェクトの場合

```
module.exports = {
  extends: '@soichiro_nitta/eslint-config/presets/react-typescript-prettier',
}
```

### ESLintのみ使用する場合

- `@soichiro_nitta`
  - eslintのみ利用します。以下の全てのプリセットに含まれます
- `@soichiro_nitta/eslint-config/presets/react`
  - `eslint-plugin-react`、`eslint-plugin-react-hooks`を利用します
- `@soichiro_nitta/eslint-config/presets/typescript`
  - `@typescript-eslint/eslint-plugin`を利用します
- `@soichiro_nitta/eslint-config/presets/react-typescript`
  - `@soichiro_nitta/eslint-config/presets/typescript`、`@soichiro_nitta/eslint-config/presets/react`を利用します
  
### Prettierを使用する場合

`Prettier`をインストール。

以下を実行します

```
yarn add -D prettier
```

npmの場合

```
npm install --save-dev prettier
```

- `@soichiro_nitta/eslint-config/presets/prettier`
  - `eslint-config-prettier`、`eslint-plugin-prettier`を利用します。以下の全てのプリセットに含まれます
- `@soichiro_nitta/eslint-config/presets/react-prettier`
- `@soichiro_nitta/eslint-config/presets/typescript-prettier`
- `@soichiro_nitta/eslint-config/presets/react-typescript-prettier`
