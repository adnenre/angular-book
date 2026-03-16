---
title: HTTP Error Handling
sidebar:
  order: 4
  label: 7.4 HTTP Error Handling
---

### 7.4 HTTP Error Handling

Use RxJS `catchError` for HTTP errors.

```typescript
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

getData() {
  return this.http.get('/api/data').pipe(
    catchError(error => {
      console.error('Error occurred', error);
      return throwError(() => error);
    })
  );
}
```

> **Note:** Error handling works the same in Angular 21, with full support for standalone components and signals.
