---
title: Creating a Simple Service
sidebar:
  order: 1
  label: 7.1 Creating a Simple Service
---

### 7.1 Creating a Simple Service

Services encapsulate reusable logic in Angular.

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // singleton across app
})
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }
}
```

Usage in a standalone component:

```typescript
import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({
  selector: "app-demo",
  standalone: true,
  template: `<p>Check console</p>`,
})
export class DemoComponent {
  constructor(private logger: LoggerService) {
    this.logger.log("Service injected!");
  }
}
```

> **Note:** In Angular 21, services work natively with standalone components and signal-based change detection.

```

```
