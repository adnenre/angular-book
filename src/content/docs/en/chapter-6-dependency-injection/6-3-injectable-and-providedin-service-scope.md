---
title: /@Injectable and providedIn (Service Scope)
sidebar:
  order: 3
  label: 6.3 @Injectable and providedIn (Service Scope)
---

### 6.3 @Injectable and providedIn (service scope)

`@Injectable({ providedIn: 'root' })` makes services **available app-wide**.

```typescript
@Injectable({
  providedIn: "root", // singleton for the whole app
})
export class LoggerService {}
```

Other scopes:

- `'any'` → each lazy-loaded module gets its own instance
- `'platform'` → shared across applications in the same platform

> **Note:** In Angular 21, `providedIn` works with standalone services without NgModules.

```

```
