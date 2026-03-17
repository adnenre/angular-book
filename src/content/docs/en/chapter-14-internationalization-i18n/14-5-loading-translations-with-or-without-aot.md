---
title: Loading Translations (with or without AOT)
sidebar:
  order: 5
  label: 14.5 Loading Translations (with or without AOT)
---

Angular can load translations at build time (AOT) or runtime (JIT).

Build-time example:

```shell
ng build --localize
```

Runtime example using `loadTranslations()` in Angular 17+:

```ts
import { loadTranslations } from "@angular/localize";

loadTranslations({
  "Hello, {{ name }}!": "Bonjour, {{ name }}!",
});
```

Explanation:

- AOT embeds translations in compiled code
- Runtime allows switching locales without rebuilding
