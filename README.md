# React, Next, Typescript, ESlint & Styled Components

Development process:

```bash
yarn create next-app
yarn add typescript @types/react @types/node -D
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
yarn add styled-components
yarn add @types/styled-components -D
yarn add babel-plugin-inline-react-svg -D //for improved svg performance instead of base64
```

Additional ESlint config `.eslintrc.json` :

```bash
 "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/airbnb",
    "prettier/react"
  ],

"rules": {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "space-before-function-paren": "off"
}
```

`prettier.config.js` commented out

vscode extension `.editorconfig` additional config:

```bash
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
```

SSR for styled-components:

`.babelrc` or `babel.config.js` as well as `_document.tsx`
Test by disabling JS in the browser.
