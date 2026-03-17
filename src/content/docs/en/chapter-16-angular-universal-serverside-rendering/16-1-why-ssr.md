---
title: Why SSR?
sidebar:
  order: 1
  label: 16.1 Why SSR?
---

Server-Side Rendering (SSR) means rendering Angular pages on the server before sending them to the browser.

Instead of sending an empty HTML page and letting JavaScript build the UI, the server sends a fully rendered page.

Benefits of SSR:

- Faster first page load
- Better SEO (search engines can read content)
- Improved performance on slow devices
- Better social media previews (meta tags rendered)

TypeScript Example (Angular component)

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  title = "Angular SSR Example";
}
```

HTML Template

```html
<h1>{{ title }}</h1>
<p>This content can be rendered on the server.</p>
```

**Explanation**

> With SSR enabled, this HTML will be generated on the server and delivered directly to the client browser before Angular bootstraps
> on the client.
