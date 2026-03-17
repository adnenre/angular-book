---
title: Dependency Management
sidebar:
  order: 4
  label: 23.4 Dependency Management
---

Proper dependency management ensures that your Angular 21 project remains stable, secure, and easy to update.  
This section covers best practices for managing npm dependencies, using lock files, and handling peer dependencies.

## package.json and Lock Files

- **package.json** – declares the dependencies your project needs, with version ranges (e.g., `^21.0.0`).
- **package‑lock.json** (npm) or **yarn.lock** – locks the exact versions installed, ensuring reproducible builds across environments.

Always commit lock files to version control.

## Version Ranges and Semantic Versioning

When adding dependencies, you can specify:

- Exact version: `"21.0.0"` – no updates allowed.
- Caret (^): `"^21.0.0"` – allows updates that do not change the left‑most non‑zero digit (i.e., minor and patch).
- Tilde (~): `"~21.0.0"` – allows only patch updates.

For Angular itself, using caret is safe because Angular follows SemVer. For third‑party libraries, check their versioning policy.

## Updating Dependencies

Use `ng update` for Angular‑specific packages. For other dependencies, you can use:

- `npm update` – updates within the version ranges.
- `npm outdated` – lists outdated packages.
- Tools like `ncu` (npm‑check‑updates) to upgrade `package.json` to the latest versions.

**Recommended approach:**

1. Run `ng update` first to handle Angular packages and their migrations.
2. Update other dependencies manually, testing after each significant change.

## Peer Dependencies

Libraries (especially shared libraries) should declare peer dependencies to avoid duplicate instances of Angular.  
When you install a library, npm/yarn will warn if peer dependencies are missing or incompatible.

**Example from a library’s package.json:**

```json
{
  "peerDependencies": {
    "@angular/core": ">=21.0.0 <22",
    "@angular/common": ">=21.0.0 <22",
    "rxjs": "^7.8.0"
  }
}
```

In your application, ensure you have compatible versions installed.

### Dependency Management in CI/CD

In CI, always run a clean install using the lock file:

```bash
npm ci   # instead of npm install
```

This ensures exactly the versions in the lock file are installed, avoiding unexpected changes.
