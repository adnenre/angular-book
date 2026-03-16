---
title: Principles of Dependency Injection
sidebar:
  order: 1
  label: 6.1 Principles of Dependency Injection
---

### 6.1 Principles of Dependency Injection

Angular uses **dependency injection (DI)** to provide components and services with their dependencies automatically.

- DI reduces **tight coupling** between classes.
- Dependencies are declared in **constructors**.

```typescript
import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }
}

@Component({
  selector: "app-demo",
  standalone: true,
  template: `<p>Check console</p>`,
})
export class DemoComponent {
  constructor(private logger: LoggerService) {
    this.logger.log("Dependency injected!");
  }
}
```

> **Note:** In Angular 21, DI works seamlessly with standalone components and signal-based reactivity.
