---
title: Using the Angular Update Guide
sidebar:
  order: 2
  label: 22.2 Using the Angular Update Guide
---

The [Angular Update Guide](https://update.angular.io) is an interactive web tool that provides tailored instructions for updating your Angular application.  
This section explains how to use it effectively with Angular 21.

## How to Navigate the Guide

1. **Select your current version** and the target version you want to reach (e.g., from 19.0 to 21.0).
2. **Choose the complexity** of your application:
   - `Basic` – simple apps with few dependencies.
   - `Medium` – typical business applications.
   - `Advanced` – large enterprise apps with custom configurations.
3. **Review the generated checklist**. It includes:
   - Required `ng update` commands.
   - Manual steps (e.g., updating third‑party libraries, modifying configuration).
   - Links to detailed migration guides for specific features.

## Example Checklist for v19 → v21

| Step | Action                                                                                    |
| ---- | ----------------------------------------------------------------------------------------- |
| 1    | Update Angular CLI to the latest v20: `ng update @angular/cli@20`                         |
| 2    | Update Angular core to v20: `ng update @angular/core@20`                                  |
| 3    | Migrate to standalone components (if not already): `ng generate @angular/core:standalone` |
| 4    | Update Angular CLI to v21: `ng update @angular/cli@21`                                    |
| 5    | Update Angular core to v21: `ng update @angular/core@21`                                  |
| 6    | Manually update other dependencies (e.g., RxJS, TypeScript) as suggested.                 |

## Important Tips

- Always run `ng update` **one major version at a time** – skipping versions increases the risk of conflicts.
- After each `ng update`, run your tests (`ng test`) and build the application (`ng build`) to verify everything works.
- The guide also provides **recommended next steps** like adopting new features (signals, control flow) after the update.

## Integrating with Angular 21 Features

Once you have updated to v21, the guide may suggest further optional migrations:

- **New control flow syntax**: `ng generate @angular/core:control-flow`
- **Signal inputs**: `ng generate @angular/core:signals`
- **Remove deprecated `@Injectable()` providers**: `ng generate @angular/core:injectable`

These help you leverage the latest performance and developer experience improvements.
