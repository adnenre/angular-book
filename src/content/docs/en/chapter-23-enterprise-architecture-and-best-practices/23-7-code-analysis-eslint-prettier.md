---
title: Code Analysis (ESLint, Prettier)
sidebar:
  order: 7
  label: 23.7 Code Analysis (ESLint, Prettier)
---

Maintaining consistent code quality and style is essential in team environments.  
This section explains how to set up and use ESLint for static analysis and Prettier for code formatting in an Angular 21 project.

## ESLint

Angular now uses ESLint as the default linter (since v11). The `@angular-eslint` packages provide Angular‑specific lint rules.

### Installation

If you created a new project with Angular 21, ESLint is likely already set up.  
If not, you can add it:

```bash
ng add @angular-eslint/schematics

```

This installs required packages and creates an .eslintrc.json file.

### Configuration

`.eslintrc.json` typically extends recommended Angular and TypeScript rules:

```json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "@angular-eslint/directive-selector": ["error", { "type": "attribute", "prefix": "app", "style": "camelCase" }],
        "@angular-eslint/component-selector": ["error", { "type": "element", "prefix": "app", "style": "kebab-case" }]
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
}
```

### Running ESLint

Add a script to package.json:

```json
"scripts": {
  "lint": "ng lint"
}
```

`ng lint` runs ESLint on your project. To automatically fix fixable issues, use ng `lint --fix`.

## Prettier

Prettier is an opinionated code formatter. It can be integrated with ESLint to avoid conflicts.

### Installation

```shell
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

- `eslint-config-prettier` turns off ESLint rules that conflict with Prettier.

- `eslint-plugin-prettier` runs Prettier as an ESLint rule.

### Configuration

Create `.prettierrc.json` in the root:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "printWidth": 100
}
```

Update `.eslintrc.json` to include Prettier:

```json
{
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "plugin:prettier/recommended" // adds both eslint-plugin-prettier and eslint-config-prettier
      ]
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:prettier/recommended"]
    }
  ]
}
```

### Running Prettier

Add formatting scripts:

```json
"scripts": {
  "format": "prettier --write \"src/**/*.{ts,html,scss,json}\"",
  "format:check": "prettier --check \"src/**/*.{ts,html,scss,json}\""
}
```

**Integrating with Pre‑commit Hooks (Husky + lint‑staged)**
To enforce formatting and linting before commits, use husky and lint-staged.

Installation

```shell
npm install --save-dev husky lint-staged
npx husky install
```

Add a `lint-staged` configuration in `package.json`:

```json
"lint-staged": {
  "*.ts": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.html": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,scss}": [
    "prettier --write"
  ]
}
```

Create a pre‑commit hook:

```shell
npx husky add .husky/pre-commit "npx lint-staged"
```

Now every commit will automatically lint and format staged files.

### Using Angular Schematics for Consistent Code Generation

You can also configure the Angular CLI to generate components with a specific style and lint setup.
For example, to generate components with inline template and standalone: true by default, update angular.json:

```json
"schematics": {
  "@schematics/angular:component": {
    "standalone": true,
    "inlineTemplate": true,
    "style": "scss"
  }
}
```

> ESLint and Prettier work together to keep your code clean and consistent.
> Automate them with Husky to catch issues before they reach the repository.
