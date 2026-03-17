---
title: Handling URLs and Secure Routing
sidebar:
  order: 3
  label: 17.3 Handling URLs and Secure Routing
---

Routes should be protected from unauthorized access.

Use route guards.

TypeScript Example

```ts
import { CanActivateFn } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const loggedIn = true;
  return loggedIn;
};
```

**Explanation**

> Route guards prevent access to protected pages.
