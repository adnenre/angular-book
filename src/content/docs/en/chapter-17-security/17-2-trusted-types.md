---
title: Trusted Types
sidebar:
  order: 2
  label: 17.2 Trusted Types
---

Trusted Types help prevent DOM-based XSS attacks.

Angular supports Trusted Types for secure DOM operations.

TypeScript Example

```ts
import { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {}

safeHtml = this.sanitizer.bypassSecurityTrustHtml('<b>Safe HTML</b>');
```

**Explanation**

> Trusted Types allow developers to explicitly mark trusted content.
