---
title: Handling Breaking Changes
sidebar:
  order: 5
  label: 22.5 Handling Breaking Changes
---

Every major Angular version may introduce breaking changes.  
This section outlines strategies to identify, understand, and mitigate breaking changes when upgrading to Angular 21.

## Where to Find Breaking Changes

1. **Official Changelog** – [CHANGELOG.md](https://github.com/angular/angular/blob/main/CHANGELOG.md) lists all changes per version, clearly marked as **BREAKING CHANGE**.
2. **Angular Update Guide** – highlights breaking changes relevant to your update path.
3. **Deprecation Warnings** – during development, Angular logs warnings for APIs that are deprecated and will be removed in a future version. Address these warnings before upgrading.

## Typical Breaking Change Categories

- **API removals** – e.g., `@angular/http` was removed long ago; now `@angular/common/http` is the only HTTP client.
- **Behavior changes** – e.g., stricter type checking in templates (Angular 14+), changes in router behaviour.
- **Build system changes** – e.g., Webpack version bumps, new `angular.json` schema.
- **Minimum dependency versions** – e.g., TypeScript 5.5+ required for Angular 21.

## Mitigation Strategies

### 1. Run `ng update` First

Always start with `ng update`. It automatically:

- Updates configuration files.
- Applies migration schematics that fix many breaking changes.
- Installs compatible dependency versions.

### 2. Review and Address Deprecation Warnings

Before upgrading, fix all deprecation warnings shown in your IDE or during `ng build`.  
For example, if you see:
`Renderer2` is deprecated: Use Renderer instead.

Refactor your code to use the recommended alternative. This reduces the number of breaking changes you’ll face during the upgrade.

### 3. Read the Migration Guide for Each Major Version

For each major version you skip (e.g., v18 → v19 → v20 → v21), read the corresponding migration guides.  
The Angular Update Guide provides direct links.

### 4. Use Feature Flags to Isolate Changes

If a breaking change affects a large part of your app, consider using a feature flag to enable the new behaviour gradually.  
For example, when Angular 17 introduced the new control flow syntax, you could enable it per template using a schematic.

### 5. Update Third‑Party Libraries

Ensure all libraries you depend on are compatible with the new Angular version.  
Check their `peerDependencies` and changelogs. Use `ng update` to update Angular‑specific libraries like `@angular/material`.

## Example: Handling a Breaking Change in Angular 21

Suppose Angular 21 removes the deprecated `@angular/common/http/testing` `HttpTestingController` methods that were marked as deprecated in v18.  
Your code might have:

```ts
// Deprecated usage
httpMock.expectNone("/api/data");
```

The migration guide would advise using the newer approach:

```ts
// New usage
httpMock.expectOne("/api/data", "Unexpected request");
```

## Conclusion

Breaking changes are manageable with proper preparation.  
Stay up‑to‑date with deprecation warnings, run `ng update` religiously, and test thoroughly after each upgrade.  
The Angular team strives to make breaking changes as smooth as possible with automated migrations and clear documentation.
