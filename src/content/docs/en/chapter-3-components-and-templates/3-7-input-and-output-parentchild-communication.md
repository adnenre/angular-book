---
title: /@Input and @Output (Parent‑Child Communication)
sidebar:
  order: 7
  label: 3.7 @Input and @Output (Parent‑Child Communication)
---

Angular applications are built with **components**.  
Often, components need to communicate with each other.

The most common communication pattern is:

Parent Component → Child Component → Parent Component

Angular provides two decorators for this:

- `@Input()` → send data from **parent to child**
- `@Output()` → send events from **child to parent**

# @Input Example (Parent → Child)

## Child Component

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<p>Message from parent: {{ message }}</p>`,
})
export class ChildComponent {
  @Input() message!: string;
}
```

## Parent Template

```html
<app-child [message]="parentMessage"></app-child>
```

## Parent Component

```typescript
export class ParentComponent {
  parentMessage = "Hello from Parent!";
}
```

# @Output Example (Child → Parent)

`@Output()` is used with **EventEmitter** to send events.

## Child Component

```typescript
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<button (click)="sendMessage()">Send Event</button>`,
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();

  sendMessage() {
    this.notify.emit("Hello Parent!");
  }
}
```

## Parent Template

```html
<app-child (notify)="receiveMessage($event)"></app-child>
```

## Parent Component

```js
export class ParentComponent {

  receiveMessage(message: string) {
    console.log(message);
  }

}
```

# Summary

| Concept                     | Purpose                                          |
| --------------------------- | ------------------------------------------------ |
| Two-Way Binding (`ngModel`) | Synchronizes data between template and component |
| Template Variables (`#var`) | Reference HTML elements directly in the template |
| `@Input()`                  | Pass data from parent component to child         |
| `@Output()`                 | Emit events from child component to parent       |

These mechanisms help build **interactive and well-structured Angular applications.**
