---
title: Optional Dependencies (@Optional)
sidebar:
  order: 6
  label: 6.6 Optional Dependencies (@Optional)
---

### 6.6 Optional Dependencies (@Optional)

`@Optional()` marks a dependency as optional; if not provided, Angular injects `null`.

```typescript
constructor(@Optional() private logger?: LoggerService) {}
```

> **Note:** Optional dependencies work in Angular 21 with standalone components and signals.
