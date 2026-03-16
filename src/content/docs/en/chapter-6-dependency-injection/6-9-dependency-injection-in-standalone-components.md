---
title: Dependency Injection in Standalone Components
sidebar:
  order: 9
  label: 6.9 Dependency Injection in Standalone Components
---

### 6.9 Dependency Injection in Standalone Components

Standalone components can **provide their own services** without NgModules.

```typescript
@Component({
  selector: "app-standalone",
  standalone: true,
  providers: [LoggerService],
  template: `<p>Standalone component DI</p>`,
})
export class StandaloneComponent {
  constructor(private logger: LoggerService) {}
}
```

> **Note:** Angular 21 favors standalone components. DI works natively without modules, fully compatible with signals.
