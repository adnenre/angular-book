---
title: Introduction to Angular Animations (BrowserAnimationsModule)
sidebar:
  order: 1
  label: 18.1 Introduction to Angular Animations (BrowserAnimationsModule)
---

Angular provides a powerful animation system that integrates directly with the Angular change detection and component lifecycle.

Animations are defined using functions from `@angular/animations` such as:

- trigger
- state
- style
- animate
- transition

In modern Angular (v16+), animations are enabled using `provideAnimations()` instead of importing `BrowserAnimationsModule`.

Step 1: Install animations package (already included in Angular CLI projects)

```bash
npm install @angular/animations
```

Step 2: Enable animations in application configuration

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()],
});
```

Step 3: Create a component with animation

```ts
import { Component, signal } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-box",
  standalone: true,
  templateUrl: "./box.component.html",
  animations: [trigger("fadeAnimation", [transition(":enter", [style({ opacity: 0 }), animate("400ms ease-in", style({ opacity: 1 }))])])],
})
export class BoxComponent {
  visible = signal(true);

  toggle() {
    this.visible.update((v) => !v);
  }
}
```

HTML Template

```html
<button (click)="toggle()">Toggle Box</button>

<div *ngIf="visible()" @fadeAnimation class="box">Animated Content</div>
```

**Explanation**

> Angular animations are tied to component state changes.
> When `visible` changes, Angular triggers the animation automatically.
