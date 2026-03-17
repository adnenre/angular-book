---
title: Stepper (Step‑by‑Step Guide)
sidebar:
  order: 10
  label: 20.10 Stepper (Step‑by‑Step Guide)
---

Stepper components guide users through multi-step workflows.

TypeScript

```ts
import { Component } from "@angular/core";
import { CdkStepperModule } from "@angular/cdk/stepper";

@Component({
  selector: "app-stepper",
  standalone: true,
  imports: [CdkStepperModule],
  templateUrl: "./stepper.component.html",
})
export class StepperComponent {
  step = 1;

  next() {
    this.step++;
  }
}
```

HTML

```html
<div *ngIf="step === 1">
  Step 1
  <button (click)="next()">Next</button>
</div>

<div *ngIf="step === 2">Step 2</div>
```
