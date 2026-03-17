---
title: Principles of Internationalization in Angular
sidebar:
  order: 1
  label: 14.1 Principles of Internationalization in Angular
---

To make text translatable, Angular uses the `i18n` attribute in templates.

TypeScript (component):

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-greeting",
  standalone: true,
  templateUrl: "./greeting.component.html",
})
export class GreetingComponent {
  name = "Angular";
}
```

HTML template:

```html
<h1 i18n="@@greetingMessage">Hello, {{ name }}!</h1>
```

Explanation:

- `i18n` marks the element for translation.
- `@@greetingMessage` is a custom translation ID for reference.
