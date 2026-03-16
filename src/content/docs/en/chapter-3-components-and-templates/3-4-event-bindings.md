---
title: Event Bindings
sidebar:
  order: 4
  label: 3.4 Event Bindings
---

Parentheses `( )` are used to listen to DOM events and execute a component method or expression.

### Basic syntax

```html
<button (click)="onClick()">Click</button>
<input (input)="onInput($event)" />
<div (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()"></div>
```

### Complete example

```js
import { Component } from '@angular/core';

@Component({
selector: 'app-event-binding',
standalone: true,
template: `
<button (click)="increment()">Increment</button>

<p>Value: {{ count }}</p> <input (keyup.enter)="onEnter($event)" placeholder="Press Enter"> ` }) export class EventBindingComponent { count = 0;
increment() {
this.count++;
}

onEnter(event: Event) {
const input = event.target as HTMLInputElement;
alert(You entered: ${input.value});
}
}
```

### Events with parameters

You can pass variables like $event (the raw DOM event), or template values.

```typescript
@Component({
  selector: 'app-event-params',
  standalone: true,
  template: <input #myInput (blur)="onBlur(myInput.value)"> <button (click)="onClick(5, $event)">Click</button> </input>
})
export class EventParamsComponent {
  onBlur(value: string) {
    console.log('value on blur:', value);
}

onClick(n: number, event: MouseEvent) {
console.log('number:', n, 'event:', event);
}
}
```

> Note: Angular supports pseudo‑events like keyup.enter to simplify key handling. See the documentation for a full list.
