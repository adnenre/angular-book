---
title: Route Links (routerLink, routerLinkActive)
sidebar:
  order: 2
  label: 9.2 Route Links (routerLink, routerLinkActive)
---

Angular provides directives for navigation directly inside templates.

- `routerLink` creates navigation links.
- `routerLinkActive` adds a CSS class when the route is active.

```html
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
</nav>

<router-outlet></router-outlet>
``
```
