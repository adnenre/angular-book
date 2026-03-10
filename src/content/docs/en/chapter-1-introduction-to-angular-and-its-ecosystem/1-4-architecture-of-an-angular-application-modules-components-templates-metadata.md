---
title: Architecture of an Angular Application (Modules, Components, Templates, Metadata)
sidebar:
  order: 4
  label: 1.4 Architecture of an Angular Application (Modules, Components, Templates, Metadata)
---

# 1.4 Architecture of an Angular Application (Modules, Components, Templates, Metadata)

Angular applications are built with **components**, **templates**, **metadata**, and optionally **NgModules**. Modern Angular (v17+) encourages **standalone components**, reducing the need for NgModules.

- **Components** – control a patch of screen (a view). They consist of:
  - A **template** (HTML) that defines the UI.
  - A **class** (TypeScript) that handles data and logic.
  - **Metadata** (decorator `@Component`) that tells Angular how to process the class.

- **Templates** – HTML with Angular template syntax (data binding, directives, etc.).

- **Metadata** – provided via decorators (`@Component`, `@Directive`, `@Injectable`, etc.). They configure how the class is used.

- **Modules** – traditionally, Angular apps were organised into NgModules (`@NgModule`) that declare components, imports, providers, and bootstrap. Since v14, you can create applications without NgModules using standalone components.

**Example of a standalone component**:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-user-profile",
  standalone: true, // <-- standalone flag
  template: `
    <h2>{{ name }}</h2>
    <p>{{ bio }}</p>
  `,
})
export class UserProfileComponent {
  name = "John Doe";
  bio = "Software developer from Angular.";
}
```

This component can be used directly in another standalone component without an NgModule.
