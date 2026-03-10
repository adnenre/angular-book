---
title: Angular CLI In Depth
sidebar:
  order: 5
  label: 1.5 Angular CLI In Depth
---

# 1.5 Angular CLI In Depth

The Angular CLI is a powerful tool to initialize, develop, scaffold, and maintain Angular applications. Common commands:

- **Generate a new component**

  ```shell
  ng generate component user-profile
  # or shorthand: ng g c user-profile
  ```

  This creates the component files and (if using modules) updates the module.

- **Generate a service**

  ```shell
  ng generate service data
  ```

- **Build the project**

  ```shell
  ng build
  ```

  Outputs the compiled files to the `dist/` folder.

- **Serve with development server**

  ```shell
  ng serve --open
  ```

  Opens the app automatically.

- **Run unit tests**

  ```shell
  ng test
  ```

- **Run end‑to‑end tests**

  ```shell
  ng e2e
  ```

- **Update Angular and dependencies**

  ```shell
  ng update
  ```

> For a full list, run `ng help`.
