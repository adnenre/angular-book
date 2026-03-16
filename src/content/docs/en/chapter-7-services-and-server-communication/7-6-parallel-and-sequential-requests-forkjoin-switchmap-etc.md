---
title: Parallel and Sequential Requests (forkJoin, switchMap, etc.)
sidebar:
  order: 6
  label: 7.6 Parallel and Sequential Requests (forkJoin, switchMap, etc.)
---

Use RxJS operators to combine requests.

```typescript
import { forkJoin, switchMap } from "rxjs";

forkJoin({
  users: this.http.get("/api/users"),
  posts: this.http.get("/api/posts"),
}).subscribe((results) => console.log(results));

this.http
  .get("/api/users")
  .pipe(switchMap((users) => this.http.get(`/api/posts?userId=${users[0].id}`)))
  .subscribe((posts) => console.log(posts));
```

> **Note:** Angular 21 fully supports RxJS operators in standalone components and signal-based change detection.
