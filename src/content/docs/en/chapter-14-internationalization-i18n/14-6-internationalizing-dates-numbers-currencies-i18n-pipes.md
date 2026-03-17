---
title: Internationalizing Dates, Numbers, Currencies (i18n Pipes)
sidebar:
  order: 6
  label: 14.6 Internationalizing Dates, Numbers, Currencies (i18n Pipes)
---

### 14.6 Internationalizing Dates, Numbers, Currencies (i18n Pipes)

Angular provides built-in pipes for locale-sensitive formatting.

TypeScript (component):

```ts
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-format-example",
  standalone: true,
  templateUrl: "./format-example.component.html",
})
export class FormatExampleComponent {
  amount = signal(1234.56);
  date = signal(new Date());
}
```

HTML template:

```html
<p>Currency: {{ amount() | currency:'EUR':'symbol':'1.2-2':'fr' }}</p>
<p>Date: {{ date() | date:'fullDate':'':'fr' }}</p>
```

Explanation:

- `currency` pipe formats numbers as currency
- `date` pipe formats dates per locale
- `fr` sets French formatting
