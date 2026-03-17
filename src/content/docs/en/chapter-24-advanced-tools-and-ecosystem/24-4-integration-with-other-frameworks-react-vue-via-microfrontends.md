---
title: Integration with Other Frameworks (React, Vue) via Micro‑Frontends
sidebar:
  order: 4
  label: 24.4 Integration with Other Frameworks (React, Vue) via Micro‑Frontends
---

## 24.4 Integration with Other Frameworks (React, Vue) via Micro‑Frontends

Integrating Angular with React or Vue can be done via **micro-frontends**. A common approach is to use **Angular Elements** to turn an Angular component into a **custom element** (standard web component).

### Creating a reusable Angular component

1. **Add Angular Elements:**

```bash
   ng add @angular/elements

```

2. **Create a simple component (e.g., `MyWidgetComponent`):**

```ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-my-widget",
  template: `<div>{{ message }}</div>`,
})
export class MyWidgetComponent {
  @Input() message = "Hello";
}
```

3. **Define the custom element in the module:**

```ts
import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";
import { MyWidgetComponent } from "./my-widget.component";

@NgModule({
  declarations: [MyWidgetComponent],
  imports: [BrowserModule],
  entryComponents: [MyWidgetComponent], // needed before Ivy
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(MyWidgetComponent, { injector });
    customElements.define("my-widget", customElement);
  }
}
```

4. **Build the project into a single JS file (optional):**

```bash
   ng build --prod --output-hashing=none

```

Then concatenate the generated files (e.g., with `cat` or a tool like `concat`).

### Using the custom element in React

In a React project, simply add the tag in JSX:

```jsx
import React from "react";

function App() {
  return (
    <div>
      <h1>React + Angular</h1>
      <my-widget message="Created in React"></my-widget>
    </div>
  );
}

export default App;
```

**Note:** Ensure the script containing the Angular bundle is loaded before using the component.

### Using in Vue

```html
<template>
  <div>
    <h1>Vue + Angular</h1>
    <my-widget :message="msg"></my-widget>
  </div>
</template>

<script>
  export default {
    data() {
      return { msg: "Created in Vue" };
    },
  };
</script>
```

**Explanation:**

> - **Angular Elements wraps an Angular component in a custom element (Web Component).**

- **The custom element can be used in any framework or even plain HTML.**
- **This approach allows deploying independent micro-frontends.**
- **For deeper integration (shared routing, communication), consider solutions like Module Federation or iframes.**

---
