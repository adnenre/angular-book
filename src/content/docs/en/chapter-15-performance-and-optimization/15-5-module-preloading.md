---
title: Module Preloading
sidebar:
  order: 5
  label: 15.5 Module Preloading
---

Preload modules after initial load to improve navigation speed.

Router example:

```ts
import { PreloadAllModules, RouterModule } from '@angular/router';

RouterModule.forRoot(routes, {
preloadingStrategy: PreloadAllModules
});
``

Explanation:

- Preloads lazy-loaded modules in background
- Improves UX without slowing initial load
```
