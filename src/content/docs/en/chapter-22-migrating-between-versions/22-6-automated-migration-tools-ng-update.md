---
title: Automated Migration Tools (ng update)
sidebar:
  order: 6
  label: 22.6 Automated Migration Tools (ng update)
---

`ng update` is the Angular CLI’s built‑in command for updating projects and dependencies.  
It not only updates `package.json` but also runs **migration schematics** that automatically transform your code to match the new version’s API.

## How `ng update` Works

1. **Dependency analysis** – reads `package.json` and checks which packages have updates available.
2. **Version compatibility** – ensures that the requested update is possible (e.g., no conflicting peer dependencies).
3. **Applying migrations** – each package can provide a collection of schematics that are executed in order. These schematics modify source files, configuration, and dependencies.
4. **Lock file update** – after successful migrations, `ng update` updates `package-lock.json` or `yarn.lock`.

## Running `ng update`

Update a single package (and its peer dependencies):

```bash
ng update @angular/core
Update multiple core packages together (recommended for Angular updates):
```

```bash
ng update @angular/core @angular/cli
See what updates are available:
```

```bash
ng update
```

### Migration Schematics in Action

When you update from Angular 20 to 21, the @angular/core package may include schematics for:

New control flow migration – converts `*ngIf/*ngFor` to `@if/@for.`

Signal input migration – converts `@Input()` to `input()` where possible.

Remove `@Injectable()` provider migrations – simplifies provider declarations.

You can also run specific schematics independently, even without an update:

```bash
ng generate @angular/core:control-flow
```

### Best Practices with ng update

Always commit your changes before running ng update, so you can revert if something goes wrong.

Run ng update one major version at a time. Skipping versions can cause migration scripts to fail.

Check the output – ng update often prints instructions for manual steps that cannot be automated.

After update, test thoroughly – run your unit tests, e2e tests, and manually verify critical paths.

### Example Output of ng update

```shell
$ ng update @angular/core@21

Using package manager: npm
Collecting installed dependencies...
Found 42 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/core @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency @angular/common @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency @angular/compiler @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency @angular/platform-browser @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency @angular/platform-browser-dynamic @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency @angular/router @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency @angular/forms @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency @angular/animations @ "21.0.0" (was "20.2.0")
    Updating package.json with dependency typescript @ "5.5.0" (was "5.4.0")
MIGRATION: Replace deprecated `@Injectable()` provider declarations.
  Successfully migrated 3 files.
MIGRATION: Convert `@Input()` to signal inputs.
  Successfully migrated 12 files.
```

> ng update is the most powerful tool for keeping your Angular project up‑to‑date.
> Leverage it not only for Angular core packages but also for any library that provides migration schematics.
> Always read the migration logs and follow any manual instructions to ensure a smooth upgrade.
