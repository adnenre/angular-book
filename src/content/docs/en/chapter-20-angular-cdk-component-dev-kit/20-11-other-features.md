---
title: Other Features
sidebar:
  order: 11
  label: 20.11 Other Features
---

Angular CDK also provides additional useful modules:

- PlatformModule  
  Detects browser environment.

- ObserversModule  
  Monitors DOM changes.

- BidiModule  
  Supports right-to-left (RTL) layouts.

Example

TypeScript

```ts
import { Component } from "@angular/core";
import { BidiModule } from "@angular/cdk/bidi";

@Component({
  selector: "app-bidi",
  standalone: true,
  imports: [BidiModule],
  templateUrl: "./bidi.component.html",
})
export class BidiComponent {
  direction = "rtl";
}
```

HTML

```html
<div [dir]="direction">This layout supports RTL languages.</div>
```

**Explanation**

> These utilities help developers build complex UI components efficiently.
