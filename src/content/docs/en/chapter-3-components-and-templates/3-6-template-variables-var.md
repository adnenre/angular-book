---
title: Template Variables (#var)
sidebar:
  order: 6
  label: 3.6 Template Variables (#var)
---

Template variables allow you to **reference an HTML element directly inside the template**.

They are declared using the `#` symbol.

This is useful for:

- Accessing input values
- Passing DOM elements to functions
- Simplifying form handling

## Example

### Template

```html
<input #nameInput type="text" placeholder="Enter your name" />

<button (click)="showName(nameInput.value)">Show Name</button>
```

### Component

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {

  showName(name: string) {
    alert('Your name is ' + name);
  }

}
```

## How it works

`#nameInput` creates a reference to the input element.  
We then access its value using `nameInput.value`.
