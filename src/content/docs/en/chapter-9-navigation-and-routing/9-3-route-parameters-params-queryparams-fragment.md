---
title: Route Parameters (params, queryParams, fragment)
sidebar:
  order: 3
  label: 9.3 Route Parameters (params, queryParams, fragment)
---

Angular allows passing data through URLs using parameters.

Types of parameters:

- Route parameters
- Query parameters
- URL fragments

````ts
// route configuration
{ path: 'user/:id', component: UserComponent }
``

```ts
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
const id = this.route.snapshot.params['id'];
}
``

```html
<a [routerLink]="['/products']"
[queryParams]="{page:2}"
fragment="top">
Products
</a>
``
````
