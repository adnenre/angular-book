---
title: Authentication and Token Management (JWT, HttpInterceptor)
sidebar:
  order: 4
  label: 17.4 Authentication and Token Management (JWT, HttpInterceptor)
---

JWT tokens are often used for authentication.

Angular interceptors attach tokens to HTTP requests.

TypeScript Example

```ts
import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token");

  const cloned = req.clone({
    headers: req.headers.set("Authorization", `Bearer ${token}`),
  });

  return next(cloned);
};
```

**Explanation**

> The interceptor automatically adds authentication tokens to every request.
