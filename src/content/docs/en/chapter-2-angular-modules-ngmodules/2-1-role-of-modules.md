---
title: Role of Modules
sidebar:
  order: 1
  label: 2.1 Role of Modules
---

In Angular, an NgModule is a mechanism to organize code into cohesive blocks. It serves as a container for a set of components, directives, pipes, and services that are related. The module also defines the dependencies needed for these elements to work properly.

- **Entry point**: An Angular application has at least one root module (usually `AppModule`) that is bootstrapped.
- **Compilation**: The Angular compiler needs to know which components and directives are used in templates; modules provide this information via declarations.
- **Encapsulation**: Modules limit the visibility of components, directives, and pipes. Those not exported remain private to the module.
- **Organization**: They facilitate the separation of features (feature modules) and the sharing of reusable blocks (shared modules).
- **Configuration**: Services can be provided at the module level, which determines their scope and lifecycle.

With the introduction of **standalone components** (Angular 14+), it is now possible to create applications without NgModules, but modules remain a powerful option for structuring large projects.

> **Note**: Even though standalone components reduce the need for modules, understanding NgModules is essential for maintaining and evolving existing Angular applications.
