---
title: Injection with @Inject and Injection Tokens
sidebar:
  order: 5
  label: 6.5 Injection with @Inject and Injection Tokens
---

### 6.5 Injection with @Inject and Injection Tokens

Use `@Inject` when type information is insufficient, typically with **tokens**.

```typescript
import { InjectionToken, Inject } from "@angular/core";

export const API_URL = new InjectionToken<string>("API_URL");

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(@Inject(API_URL) private url: string) {}
}
```

> **Note:** Angular 21 supports InjectionTokens for standalone components and services.
