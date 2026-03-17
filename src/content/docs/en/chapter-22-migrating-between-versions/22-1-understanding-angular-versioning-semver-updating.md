---
title: Understanding Angular Versioning (SemVer, Updating)
sidebar:
  order: 1
  label: 22.1 Understanding Angular Versioning (SemVer, Updating)
---

Angular follows **Semantic Versioning (SemVer)** with a three‑part version number: `major.minor.patch`.  
This section explains the versioning scheme, how to interpret version numbers, and the recommended update workflow using Angular 21+.

## Semantic Versioning in Angular

- **Major** (e.g., 21 → 22):
  - May contain **breaking changes** that require manual intervention.
  - Usually introduces new architectural features (e.g., standalone components, signals).
  - Published once every six months.

- **Minor** (e.g., 21.0 → 21.1):
  - Adds new functionality **without breaking existing APIs**.
  - May deprecate old APIs (with warnings) but does not remove them.
  - Published monthly.

- **Patch** (e.g., 21.0.0 → 21.0.1):
  - Contains bug fixes and performance improvements.
  - No new features and no breaking changes.
  - Published as needed, often weekly.

## Angular Update Process

The official and recommended way to update Angular applications is via the Angular CLI command `ng update`.  
It analyses your current version, checks compatibility, and runs migration schematics to automatically adjust your code.

**Basic update flow:**

1. Check the [Angular Update Guide](https://update.angular.io) for step‑by‑step instructions.
2. Commit or stash any local changes.
3. Run `ng update @angular/core@<next> @angular/cli@<next>` to update to the next major version.
4. Follow any manual steps listed in the guide.
5. Repeat until you reach the desired version.

> **Angular 21+ Note:**  
> Starting with v17, Angular creates new projects with standalone components by default and fully embraces signals.  
> When updating from older versions, you may need to run additional migrations for standalone components and signals (see sections 22.3 and 22.4).

## Example: Updating from v20 to v21

```bash
# Step 1: Update to the latest v20 (if not already there)
ng update @angular/core@20 @angular/cli@20

# Step 2: Update to v21
ng update @angular/core@21 @angular/cli@21
```

After running the commands, the CLI will execute migration schematics that:

- Update configuration files (angular.json, package.json).

- Replace deprecated APIs with their new counterparts.
- Optionally, prompt you to run further migrations (e.g., for control flow syntax).
