---
title: CSRF Protection with Angular
sidebar:
  order: 5
  label: 17.5 CSRF Protection with Angular
---

CSRF attacks trick users into executing unwanted actions.

Angular automatically supports CSRF protection when using cookies.

Example configuration

```ts
import { provideHttpClient, withXsrfConfiguration } from "@angular/common/http";

provideHttpClient(
  withXsrfConfiguration({
    cookieName: "XSRF-TOKEN",
    headerName: "X-XSRF-TOKEN",
  }),
);
```

**Explanation**

> Angular sends the CSRF token in request headers.
