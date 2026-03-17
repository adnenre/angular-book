---
title: Pre‑rendering (Static Rendering)
sidebar:
  order: 5
  label: 16.5 Pre‑rendering (Static Rendering)
---

Pre-rendering generates static HTML pages at build time.

Instead of rendering on every request, Angular generates pages once during the build.

Command

```shell
ng build --prerender
```

TypeScript Example

```ts
@Component({
  selector: "app-about",
  standalone: true,
  templateUrl: "./about.component.html",
})
export class AboutComponent {}
```

HTML

```ts
<h1>About Our Application</h1>
<p>This page can be statically pre-rendered.</p>
```

**Explanation**

Pre-rendered pages are extremely fast and ideal for:

- landing pages
- marketing pages
- documentation sites
