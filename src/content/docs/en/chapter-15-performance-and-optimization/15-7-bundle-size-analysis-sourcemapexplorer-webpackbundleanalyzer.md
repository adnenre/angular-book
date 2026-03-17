---
title: Bundle Size Analysis (source‑map‑explorer, webpack‑bundle‑analyzer)
sidebar:
  order: 7
  label: 15.7 Bundle Size Analysis (source‑map‑explorer, webpack‑bundle‑analyzer)
---

Install source-map-explorer:

```shell
npm install source-map-explorer --save-dev
```

Analyze:

```shell
npx source-map-explorer dist/my-app/main.\*.js
```

Explanation:

- Helps detect unused libraries
- Guides optimization efforts
