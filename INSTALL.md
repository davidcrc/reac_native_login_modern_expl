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

<!-- react-navigation , importts and alias -->

# Add react navigation ( run: pod install )

- https://reactnavigation.org/docs/hello-react-navigation/

```bash
yarn add @react-navigation/native react-native-screens react-native-safe-area-context
```

```bash
yarn add @react-navigation/native-stack
```

# Add Organizing Imports

```bash
yarn add -D eslint-plugin-import
```

- update .eslintrc.js:

```js
module.exports = {
  //... existing
  plugins: [...(existing plugins), 'import'],
  rules: {
    // this is for sorting WITHIN an import
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    // this is for sorting imports
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
```

# Add @alias

```bash
yarn add --dev babel-plugin-module-resolver
```

```json
//tsconfig.json
{
  // ...others
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      //We will have to add the same thing in babel.config.js
      "@/*": ["src/*"]
    }
    //other options
  }
  //other configs
}
```

```js
// babel.config.js
module.exports = {
  // ...others
  plugins: [
    // ...others,
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // This has to be mirrored in tsconfig.json
          '^@/(.+)': './src/\\1',
        },
      },
    ],
  ],
};
```

<!--  -->

# Add NativeWind

- https://www.nativewind.dev/quick-starts/create-react-native-app

```bash
yarn add nativewind
```

```bash
yarn add --dev tailwindcss@3.3.2
```

```bash
yarn add postcss@8.4.23
```

- run:

```bash
npx tailwindcss init
```

- add folders that will use tailwind (tailwind.config.js)

```js
module.exports = {
  // ...
  content: ['./src/App.{js,jsx,ts,tsx}', './src/screens/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  // ...
};
```

- add to babel.config.js

```js
...,
module.exports = {
  // ...
  plugins: ["nativewind/babel", ...(other plugins)],
}
```

- for typescript projects, create: app.d.ts, and add:

```ts
/// <reference types="nativewind/types" />
```

# Add React Native Heroicons

```bash
yarn add react-native-heroicons react-native-svg
```

- To add theme to tailwind , create a file called theme/config.js

- then import in tailwind.config.js ( see this files)

<!--  -->

# Add form validations

```bash
yarn add yup react-hook-form @hookform/resolvers
```

<!--  -->

# React Native Firebase Authentication

- Create a proyect in firebase

- Go to "Web"

- Register app - example: react-native-modern

- Install firebase , then copy script

```bash
yarn add firebase@^9.23.0
```

- then create: src/service/firebase/index.ts

- then create: src/shared/hooks/useAuth.tsx

- Update appNavigation file

- Also, go to Authentication in firebase project, and enable Email/password then save

## Add react-native-dotenv

```
yarn add -D react-native-dotenv
```

- create file in src/env.d.ts

- add to babel.config.js

```js
module.exports = {
  // ...
  plugins: [
    // ...
    'module:react-native-dotenv',
  ],
};
```

## Add Try to Catch

```bash
yarn add try-to-catch
```

```bash
yarn add -D @types/try-to-catch
```
