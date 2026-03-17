---
title: Code Documentation (Compodoc)
sidebar:
  order: 5
  label: 23.5 Code Documentation (Compodoc)
---

[Compodoc](https://compodoc.app/) is a documentation tool for Angular applications. It generates a static website from your code comments and project structure.  
This section explains how to set up and use Compodoc with Angular 21.

## Installation

Install Compodoc as a dev dependency:

```bash
npm install --save-dev @compodoc/compodoc
```

### Add a script to your package.json:

```json
"scripts": {
  "compodoc": "compodoc -p tsconfig.json"
}
```

### Configuration

Create a compodoc.json configuration file (optional) or pass parameters via CLI.

```json
{
  "tsconfig": "tsconfig.json",
  "output": "documentation",
  "theme": "material",
  "exportFormat": "html",
  "disableCoverage": false,
  "includes": "additional-docs",
  "includesName": "Additional documentation"
}
```

Then run:

```bash
npm run compodoc
```

Open `documentation/index.html` to view the generated docs.
Writing Documentation Comments
Compodoc extracts comments written in JSDoc or TypeDoc format.

Documenting a Component

```ts
/**

A reusable button component with primary and secondary styles.

@example

<app-button [variant]="'primary'" (clicked)="onClick()">Click me</app-button>
**/
@Component({
selector: 'app-button',
standalone: true,
template: ...
})
export class ButtonComponent {
/* The visual style of the button: 'primary' or 'secondary'. */
variant = input<'primary' | 'secondary'>('primary');

/** Emits when the button is clicked. */
clicked = output<void>();

/** Handles internal logic; not meant to be used externally. */
private handleClick() {
this.clicked.emit();
    }
}
```

Documenting Interfaces and Types

```ts
/**

Represents a user in the system.
**/
export interface User {
  /* Unique identifier */
  id: number;
  /* Full name */
  name: string;
  /* Email address */
  email: string;
  /* Whether the user account is active */
  isActive: boolean;
}
```

Integrating with CI/CD
You can generate documentation in your CI pipeline and publish it to a static hosting service (e.g., GitHub Pages, Netlify).

Example GitHub Actions step:

```yaml
- name: Generate Compodoc
  run: npx compodoc -p tsconfig.json
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./documentation
```

### Best Practices

Document public APIs (inputs, outputs, methods) thoroughly.

Use @example tags to show real usage.

Keep comments up‑to‑date with code changes.

Run Compodoc locally before committing to catch missing docs.

> Compodoc creates beautiful, searchable documentation for your Angular project.
> Investing time in writing good comments pays off when onboarding new developers or revisiting old code.
