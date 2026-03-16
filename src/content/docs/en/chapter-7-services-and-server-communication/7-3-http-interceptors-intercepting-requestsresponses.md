---
title: HTTP Interceptors (Intercepting Requests/Responses)
sidebar:
  order: 3
  label: 7.3 HTTP Interceptors (Intercepting Requests/Responses)
---

### 7.3 HTTP Interceptors (Intercepting Requests/Responses)

Interceptors allow request/response manipulation.

```typescript
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      setHeaders: { Authorization: "Bearer TOKEN" },
    });
    return next.handle(cloned);
  }
}
```

> **Note:** Angular 21 interceptors work identically in standalone and modular setups.
