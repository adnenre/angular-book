---
title: Overview of the CDK
sidebar:
  order: 1
  label: 20.1 Overview of the CDK
---

The Angular Component Development Kit (CDK) is a set of tools that helps developers build UI components without providing ready-made styles like Angular Material.

The CDK provides reusable utilities for common UI patterns such as:

- Accessibility (a11y)
- Overlay and popups
- Drag and drop
- Virtual scrolling
- Tables
- Trees
- Clipboard utilities
- Focus management

## Step 1 — Install Angular CDK

```bash
npm install @angular/cdk
```

## Step 2 — Import CDK module in a standalone component

TypeScript

```ts
import { Component } from "@angular/core";
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: "app-cdk-example",
  standalone: true,
  imports: [A11yModule],
  templateUrl: "./cdk-example.component.html",
})
export class CdkExampleComponent {}
```

HTML

```html
<p>Angular CDK is installed and ready to use.</p>
```

**Explanation**

> The CDK provides low-level primitives that developers use to build their own UI components.
