---
title: Handling Browser‑Specific Dependencies
sidebar:
  order: 4
  label: 16.4 Handling Browser‑Specific Dependencies
---

Some APIs exist only in browsers:

- window
- document
- localStorage

These APIs are not available on the server.

Use Angular's `isPlatformBrowser` to detect environment.

TypeScript Example

```ts
import { inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

const platformId = inject(PLATFORM_ID);

if (isPlatformBrowser(platformId)) {
  console.log(window.location.href);
}
```

**Explanation**

> This ensures browser-only code runs only in the browser environment.
