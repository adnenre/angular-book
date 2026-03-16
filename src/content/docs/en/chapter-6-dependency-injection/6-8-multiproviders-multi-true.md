---
title: Multi‑providers
sidebar:
  order: 8
  label: 6.8 Multi‑providers
---

### 6.8 Multi-providers (multi: true)

`multi: true` allows **multiple providers for the same token**.

```typescript
export const LOGGERS = new InjectionToken<LoggerService[]>("LOGGERS");

providers: [
  { provide: LOGGERS, useClass: LoggerService, multi: true },
  { provide: LOGGERS, useClass: AnotherLoggerService, multi: true },
];
```

> **Note:** Multi-providers remain unchanged in Angular 21; they work with standalone services and components.
