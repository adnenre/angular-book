---
title: Two-Way Binding (ngModel)
sidebar:
  order: 5
  label: 3.5 Two-Way Binding (ngModel)
---

Two-way binding allows synchronization between the **component class (TypeScript)** and the **template (HTML)**.

When the user updates the input field, the component property updates automatically.  
When the component property changes, the view updates automatically.

Angular implements this using:

[(ngModel)]

This combines:

- Property binding `[value]`
- Event binding `(input)`

## Example

### Component (TypeScript)

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
})
export class UserComponent {
  username: string = "Alice";
}
```

### Template (HTML)

```html
<input [(ngModel)]="username" placeholder="Enter your name" />

<p>Hello {{ username }}</p>
```

## Result

If the user types **Bob** in the input field, the paragraph automatically updates to:

Hello Bob
