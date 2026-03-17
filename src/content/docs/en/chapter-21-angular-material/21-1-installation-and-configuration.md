---
title: Installation and Configuration
sidebar:
  order: 1
  label: 21.1 Installation and Configuration
---

### 21.1 Installation and Configuration

Angular Material is a UI component library implementing Google's Material Design system.

It provides ready-to-use components such as:

Buttons  
Forms  
Dialogs  
Tables  
Navigation components

Step 1 — Install Angular Material

```bash
ng add @angular/material
```

During installation Angular CLI will ask:

Choose a theme  
Enable typography  
Enable browser animations

Step 2 — Configure animations

TypeScript (main.ts)

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()],
});
```

Step 3 — Import a Material component

TypeScript

```ts
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-material-demo",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./material-demo.component.html",
})
export class MaterialDemoComponent {}
```

HTML

```html
<button mat-raised-button color="primary">Material Button</button>
```

Explanation

Material components are imported directly into standalone components.
