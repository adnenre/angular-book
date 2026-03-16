---
title: Understanding the Syntactic Sugar of Structural Directives
sidebar:
  order: 2
  label: 4.2 Understanding the Syntactic Sugar of Structural Directives
---

The asterisk `*` syntax is **shorthand** that tells Angular to wrap the element inside an `<ng-template>` and attach the structural directive to it.

Understanding this mechanism helps when you need to:

- use **multiple structural directives** (which is not allowed with the `*` syntax on the same element),
- or be **explicit** about how Angular transforms the template.

> ⚠️ Since **Angular 17**, a new **control flow syntax** (`@if`, `@for`, `@switch`) has been introduced as a modern alternative to `*ngIf`, `*ngFor`, and `*ngSwitch`.  
> The examples below show the classic syntax still widely used in many projects.

---

### Desugaring `*ngIf`

```html
<div *ngIf="condition">Hello</div>
```

is equivalent to:

```html
<ng-template [ngIf]="condition">
  <div>Hello</div>
</ng-template>
```

Angular automatically converts the `*ngIf` syntax into an `<ng-template>` with the `ngIf` directive.

---

### Desugaring `*ngFor`

```html
<div *ngFor="let item of items; index as i">{{ i }} {{ item }}</div>
```

becomes:

```html
<ng-template ngFor let-item [ngForOf]="items" let-i="index">
  <div>{{ i }} {{ item }}</div>
</ng-template>
```

Explanation:

- `let-item` creates a **template variable** called `item`
- `[ngForOf]="items"` binds the **iterable collection**
- `let-i="index"` binds the **index value** to variable `i`

---

### Desugaring `*ngSwitch`

```html
<div [ngSwitch]="value">
  <div *ngSwitchCase="'A'">A</div>
  <div *ngSwitchDefault>Default</div>
</div>
```

becomes:

```html
<div [ngSwitch]="value">
  <ng-template [ngSwitchCase]="'A'">
    <div>A</div>
  </ng-template>

  <ng-template ngSwitchDefault>
    <div>Default</div>
  </ng-template>
</div>
```

---

### Combining structural directives

An element can only have **one structural directive using `*`**.

For example, this is **not valid**:

```html
<div *ngIf="condition" *ngFor="let item of items"></div>
```

To solve this, you can use:

- `<ng-container>`
- explicit `<ng-template>` wrappers

Example:

```html
<ng-container *ngIf="condition">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

---

### New Angular Control Flow Syntax (Angular 17+)

Angular introduced a syntax closer to JavaScript control flow.

Example with `@if`:

```js
@if (condition) {
   <div>Hello</div>
}
```

Example with `@for`:

```js
@for (item of items; track item) {
   <div>{{ item }}</div>
}
```

Example with `@switch`:

```js
@switch (value) {
  @case ('A') {
    <div>A</div>
  }
  @default {
    <div>Default</div>
  }
}
```

This modern syntax:

- improves **readability**
- reduces the need for `<ng-template>`
- feels closer to **standard programming control flow**

---

> 💡 Even though the `*` syntax is convenient, understanding the **desugared (`ng-template`) form** is essential for advanced scenarios such as **creating custom structural directives** or working with **multiple template bindings**.
