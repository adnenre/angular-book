---
title: Router Events
sidebar:
  order: 9
  label: 9.9 Router Events
---

Angular Router emits events during navigation that can be used for logging, loading indicators, or analytics.

Common router events:

- NavigationStart
- NavigationEnd
- NavigationCancel
- NavigationError

Example:

```typescript
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

constructor(private router: Router) {

  this.router.events.subscribe(event => {

    if (event instanceof NavigationStart) {
      console.log('Navigation started');
    }

    if (event instanceof NavigationEnd) {
      console.log('Navigation finished');
    }

  });

}
```
