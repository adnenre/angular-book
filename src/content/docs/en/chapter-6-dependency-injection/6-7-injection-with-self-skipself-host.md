---
title: Injection with @Self, @SkipSelf, @Host
sidebar:
  order: 7
  label: 6.7 Injection with @Self, @SkipSelf, @Host
---

### 6.7 Injection with @Self, @SkipSelf, @Host

- `@Self()` → only check the current injector
- `@SkipSelf()` → check parent injectors, skip current
- `@Host()` → check until the host element

```typescript
constructor(@Self() private logger: LoggerService) {}
```

> **Note:** These decorators are fully compatible with Angular 21 and its signal-based detection.
