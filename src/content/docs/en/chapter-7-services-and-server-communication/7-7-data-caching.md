---
title: Data Caching
sidebar:
  order: 7
  label: 7.7 Data Caching
---

Cache HTTP responses in services for performance.

```typescript
import { map, shareReplay } from "rxjs/operators";

private cache$ = this.http.get('/api/data').pipe(
  shareReplay(1) // cache latest value
);

getData() {
  return this.cache$;
}
```

> **Note:** Angular 21’s signal-based detection works efficiently with cached observables in templates.
