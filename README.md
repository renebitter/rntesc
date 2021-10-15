## React, Next, Typescript, ESlint & Styled Components

After yarn create next-app:

```bash
yarn add typescript @types/react @types/node -D
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
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

VSCode `editorconfig` extension divergent config:

```bash
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
```

```bash
yarn add styled-components
yarn add @types/styled-components -D
```

`.babelrc` or `babel.config.js`

Test SSR from Styled Components by disabling JS in the browser.
