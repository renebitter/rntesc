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
