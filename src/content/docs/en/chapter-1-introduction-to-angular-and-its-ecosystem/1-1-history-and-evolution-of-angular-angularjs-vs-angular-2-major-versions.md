---
title: History and Evolution of Angular (AngularJS vs Angular 2+, Major Versions)
sidebar:
  order: 1
  label: 1.1 History and Evolution of Angular (AngularJS vs Angular 2+, Major Versions)
---

Angular is a modern web framework used to build **Single Page Applications (SPA)** using **HTML, CSS, and TypeScript**.

Angular has evolved significantly since its first version released in 2010.

The evolution can be divided into three main phases:

1. AngularJS (2010–2016)
2. Angular Modern (2016–2022)
3. Reactive Angular with Signals (2023+)

# AngularJS (1.x) — 2010

AngularJS was the first generation of Angular.

### Main Features

- MVC architecture
- Two-way data binding
- Dependency Injection
- Custom HTML directives
- Controllers and scopes
- Written in JavaScript

Example AngularJS controller:

```js
var app = angular.module("app", []);

app.controller("MainController", function ($scope) {
  $scope.message = "Hello AngularJS";
});
```

# Angular 2 — 2016

Angular 2 was a **complete rewrite** of AngularJS.

### Key Features

- Component-based architecture
- TypeScript adoption
- Dependency Injection system
- RxJS Observables
- Modular design
- Lazy loading

Example component:

```ts
@Component({
  selector: "app-root",
  template: `<h1>Hello Angular</h1>`,
})
export class AppComponent {}
```

# Angular 4 — 2017

### Major Features

- Smaller bundle sizes
- Animation package
- `*ngIf` with `else`
- Improved compiler

# Angular 5 — 2017

### Major Features

- Build Optimizer
- Progressive Web Apps support
- HttpClientModule
- Router improvements

# Angular 6 — 2018

### Major Features

- Angular CLI v6
- Angular Elements (Web Components)
- RxJS 6
- ng update command

# Angular 7 — 2018

### Major Features

- Virtual Scrolling
- Drag & Drop CDK
- Performance improvements

# Angular 8 — 2019

### Major Features

- Differential Loading
- Dynamic Imports for lazy loading
- Web Worker improvements

# Angular 9 — 2020

### Ivy Renderer (Major milestone)

- Faster compilation
- Smaller bundles
- Improved debugging

# Angular 10 — 2020

### Improvements

- Better TypeScript integration
- Improved build configuration
- Stricter warnings

# Angular 11 — 2020

### Features

- Hot Module Replacement
- Faster builds

# Angular 12 — 2021

### Improvements

- TypeScript 4 support
- Improved build system

# Angular 13 — 2021

### Features

- Ivy only (View Engine removed)
- Faster builds

# Angular 14 — 2022

### Major Feature

Standalone Components

```ts
@Component({
  selector: "app-user",
  standalone: true,
  template: `<p>User component</p>`,
})
export class UserComponent {}
```

Additional features:

- Typed Forms
- Router improvements

# Angular 15 — 2022

### Features

- Stable standalone APIs
- Directive Composition API
- Functional router guards

# Angular 16 — 2023

### Major Feature — Signals

Signals introduce a new reactive primitive.

```ts
import { signal } from "@angular/core";

const counter = signal(0);

counter.set(1);
console.log(counter());
```

Other features:

- Server-side rendering improvements
- Hydration support

# Angular 17 — 2023

### Major Features

New template control flow:

- `@if`
- `@for`
- `@switch`

Deferrable views

Better performance and faster builds.

# Angular 18 — 2024

### Improvements

- Better SSR performance
- Improved hydration
- TypeScript updates

# Angular 19 — 2024

### Improvements

- Signal-based improvements
- Runtime optimizations
- Better server rendering

# Angular 20 — 2025

### Major Features

- Zoneless Angular stable
- Signal-based forms
- Linked Signals
- Improved SSR performance

# Angular 21 — 2025

### Key Features

- Vitest default testing support
- AI development integrations
- Angular without Zone.js by default
- Performance improvements

## Angular 21 Minor Versions

| Version | Date               |
| ------- | ------------------ |
| v21.1   | Week of 2026-01-12 |
| v21.2   | Week of 2026-02-23 |

# Angular 22 — 2026

Planned release:

| Version | Date               |
| ------- | ------------------ |
| v22.0   | Week of 2026-05-18 |

### Focus Areas

- Signal ecosystem expansion
- Improved hydration and SSR
- Performance optimization
- Simplified application architecture
- Enhanced standalone-first development

# Summary

Angular evolution highlights:

| Phase            | Description                  |
| ---------------- | ---------------------------- |
| AngularJS        | MVC + two-way binding        |
| Angular Modern   | Component architecture       |
| Reactive Angular | Signals and zoneless runtime |

Angular today is designed for **large scale enterprise applications** with:

- strong tooling
- scalable architecture
- high performance
