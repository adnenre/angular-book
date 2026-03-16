---
title: Dynamic Components (ComponentFactoryResolver, ViewContainerRef)
sidebar:
  order: 11
  label: 3.11 Dynamic Components (ComponentFactoryResolver, ViewContainerRef)
---

Sometimes you need to create components dynamically at runtime, for example in a modal service or a tab system. The traditional approach uses `ComponentFactoryResolver` and `ViewContainerRef`. With Ivy, a simpler API is available (`ViewContainerRef.createComponent`), but understanding the classic method is still useful.

### Key concepts

- **`ViewContainerRef`**: represents a container where one or more views can be attached.
- **`ComponentFactoryResolver`**: resolves a `ComponentFactory` for a given component, which can then be used to create an instance of that component.
- **`ComponentRef`**: reference to the dynamically created component instance.

### Example: dynamic component insertion

Assume we have a simple component to insert dynamically:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-dynamic",
  standalone: true,
  template: `<p>Dynamic component says: {{ message }}</p>`,
})
export class DynamicComponent {
  message = "Hello from dynamic!";
}
```

Now, in a host component, we create a placeholder with `ng-container` and a template variable to get the `ViewContainerRef`.

```js
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-host',
  standalone: true,
  template: `
    <button (click)="loadComponent()">Load Dynamic Component</button>
    <ng-container #dynamicContainer></ng-container>
  `
})
export class HostComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent() {
    // Clear any existing view
    this.container.clear();

    // Create a factory for DynamicComponent
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);

    // Create the component and attach it to the container
    const componentRef = this.container.createComponent(factory);

    // Optionally interact with the instance
    componentRef.instance.message = 'Updated dynamically!';
  }
}
```

> **Note**: In Angular 13+, `ComponentFactoryResolver` is not needed when using standalone components; you can directly use `ViewContainerRef.createComponent(componentClass)`. The example above is for reference.

### Modern approach (Angular 13+ with Ivy)

```js
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-host',
  standalone: true,
  template: `
    <button (click)="loadComponent()">Load Dynamic Component</button>
    <ng-container #dynamicContainer></ng-container>
  `
})
export class HostComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  loadComponent() {
    this.container.clear();
    const componentRef = this.container.createComponent(DynamicComponent);
    componentRef.instance.message = 'Updated dynamically!';
  }
}
```

> **Note**: When using standalone components, ensure the dynamically loaded component is either standalone or declared in a module that is imported.
