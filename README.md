# Front

## resources

- [standardjs](https://standardjs.com)
- [Material-UI](https://material-ui.com)
- [lint-staged](https://www.npmjs.com/package/lint-staged)

## front

- create React boilerplate
  - [ ] `npx create-react-app your-project-name`
- initialize eslint
  - [ ] `cd your-project-name && npx eslint --init`
    - **To check syntax, find problems, and enforce code style**
    - **JavaScript modules (import/export)**
    - **React**
    - Does your project use TypeScript? **No**
    - **Browser**
    - Use a popular style guide: **Standard**
    - **Javascript**
    - Would you like to install them now with npm? **No**
- [ ] install eslint dependencies
  - with yarn: `yarn add -D eslint-plugin-react eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard`
  - with npm: `npm i --save-dev eslint-plugin-react@latest eslint-config-standard@latest eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0`
- [ ] install prettier
  - with yarn: `yarn add -D prettier eslint-config-prettier`
  - with npm: `npm i --save-dev prettier eslint-config-prettier`
- configure prettier
  - [ ] create **.prettierignore** file:
    ```
    node_modules/
    .git/
    build/
    dist/
    public/
    ```
  - [ ] create **.prettierrc.json** file:
    ```json
    {
      "semi": false,
      "singleQuote": true,
      "trailingComma": "none"
    }
    ```
- configure eslint
  - [ ] create **.eslintignore** file:
    ```
    node_modules/
    .git/
    build/
    dist/
    public/
    ```
  - [ ] create **.eslintrc.js** file:
    ```js
    const RULES = {
      OFF: 'off',
      ERROR: 'error',
      WARN: 'warn'
    }
    module.exports = {
      env: {
        browser: true,
        es6: true
      },
      extends: ['plugin:react/recommended', 'standard', 'prettier'],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      plugins: ['react'],
      rules: {
        'react/prop-types': RULES.OFF
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    }
    ```
- [ ] install **lint-staged**: `npx mrm lint-staged`
- [ ] create **jsconfig.json**
  ```json
  {
    "compilerOptions": {
      "baseUrl": "src"
    }
  }
  ```
  ## features
  - **General**
    - [ ] Add dark mode switch
  - **Home**
    - [ ] Display all blogs using an infinite scroll and a Masonry effect to provide a trendy layout to display each post as a card.
    - [ ] Provide a button in the upper right or upper left corner to open a sidebar to display the most recent blogs and a section to apply a filter based on a tag
    - [ ] Provide a button at the bottom right to return to the top of the page, this button should only be shown when the scroll is 100px from the top of the page
  - **Blog**
    - [ ] Display each blog using the an slug rather than the id
    - [ ] Use Lazy and Suspense to display the blog content
  - **Footer**
    - [ ] Add a simple footer at the bottom, always it will displayed at the bottom no cares the page content
  - **About**
    - [ ] Add about page
  - **404**
    - [ ] Add a 404 page# Front

## resources

- [standardjs](https://standardjs.com)
- [Material-UI](https://material-ui.com)
- [lint-staged](https://www.npmjs.com/package/lint-staged)

## front

- create React boilerplate
  - [ ] `npx create-react-app your-project-name`
- initialize eslint
  - [ ] `cd your-project-name && npx eslint --init`
    - **To check syntax, find problems, and enforce code style**
    - **JavaScript modules (import/export)**
    - **React**
    - Does your project use TypeScript? **No**
    - **Browser**
    - Use a popular style guide: **Standard**
    - **Javascript**
    - Would you like to install them now with npm? **No**
- [ ] install eslint dependencies
  - with yarn: `yarn add -D eslint-plugin-react eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard`
  - with npm: `npm i --save-dev eslint-plugin-react@latest eslint-config-standard@latest eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0`
- [ ] install prettier
  - with yarn: `yarn add -D prettier eslint-config-prettier`
  - with npm: `npm i --save-dev prettier eslint-config-prettier`
- configure prettier
  - [ ] create **.prettierignore** file:
    ```
    node_modules/
    .git/
    build/
    dist/
    public/
    ```
  - [ ] create **.prettierrc.json** file:
    ```json
    {
      "semi": false,
      "singleQuote": true,
      "trailingComma": "none"
    }
    ```
- configure eslint
  - [ ] create **.eslintignore** file:
    ```
    node_modules/
    .git/
    build/
    dist/
    public/
    ```
  - [ ] create **.eslintrc.js** file:
    ```js
    const RULES = {
      OFF: 'off',
      ERROR: 'error',
      WARN: 'warn'
    }
    module.exports = {
      env: {
        browser: true,
        es6: true
      },
      extends: ['plugin:react/recommended', 'standard', 'prettier'],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      plugins: ['react'],
      rules: {
        'react/prop-types': RULES.OFF
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    }
    ```
- [ ] install **lint-staged**: `npx mrm lint-staged`
- [ ] create **jsconfig.json**
  ```json
  {
    "compilerOptions": {
      "baseUrl": "src"
    }
  }
  ```
  ## features
  - **General**
    - [ ] Add dark mode switch
  - **Home**
    - [ ] Display all blogs using an infinite scroll and a Masonry effect to provide a trendy layout to display each post as a card.
    - [ ] Provide a button in the upper right or upper left corner to open a sidebar to display the most recent blogs and a section to apply a filter based on a tag
    - [ ] Provide a button at the bottom right to return to the top of the page, this button should only be shown when the scroll is 100px from the top of the page
  - **Blog**
    - [ ] Display each blog using the an slug rather than the id
    - [ ] Use Lazy and Suspense to display the blog content
  - **Footer**
    - [ ] Add a simple footer at the bottom, always it will displayed at the bottom no cares the page content
  - **About**
    - [ ] Add about page
  - **404**
    - [ ] Add a 404 page
