---
title: Portal (Dynamic Content Rendering)
sidebar:
  order: 4
  label: 20.4 Portal (Dynamic Content Rendering)
---

Portals allow rendering content dynamically in a different part of the DOM.

TypeScript

```ts
import { Component } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";

@Component({
  selector: "app-portal-example",
  standalone: true,
  imports: [PortalModule],
  templateUrl: "./portal.component.html",
})
export class PortalExampleComponent {}
```

HTML

```html
<ng-template #portalContent>
  <p>This content is rendered through a portal.</p>
</ng-template>
```

**Explanation**

> Portals allow flexible UI layouts and dynamic rendering.
