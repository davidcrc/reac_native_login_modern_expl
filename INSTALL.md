# Setup

```bash
npx react-native@latest init reac_native_login_modern_expl --template react-native-template-typescript
```

# ESLINT

```bash
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- Add to package.json

```json
{
  "lint": "eslint --ext .tsx,.ts src/",
  "format": "eslint --ext .tsx,.ts src/ --fix"
}
```

- add to eslintrc.js

```js
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  // 0 = off, 1 = warn, 2 = error
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 1
  }
}
```

# Prettier

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

- add to .prettierrc.js

```js
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
};
```

- Update .eslintrc.js with:

```json
"extends": ["prettier", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
```

# Add Exhaustive Deps

```bash
yarn add eslint-plugin-react-hooks --dev
```

- add to eslintrc.js

```js
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // For checking rules of hooks
    "react-hooks/exhaustive-deps": "warn" // For checking hook dependencies
  }
}
```

# Add Husky ( it required updated node version ~ 16.16 > )

```bash
yarn add -D lint-staged husky@4
```

- run

```bash
npx husky install
```

- Add precommit

```bash
npx husky add .husky/pre-commit "npx --no-install lint-staged"

```

- Add lint-staged script to package.json

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "npm run lint",
      "npm run unit-test" // example
    ]
  }
}
```

- Add lint staged library

```bash
yarn add -D lint-staged
```
