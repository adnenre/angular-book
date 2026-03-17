---
title: Clipboard (Clipboard Management)
sidebar:
  order: 9
  label: 20.9 Clipboard (Clipboard Management)
---

Angular CDK provides utilities for copying content to the clipboard.

TypeScript

```ts
import { Component } from "@angular/core";
import { ClipboardModule } from "@angular/cdk/clipboard";

@Component({
  selector: "app-clipboard",
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: "./clipboard.component.html",
})
export class ClipboardComponent {
  text = "Angular CDK Clipboard Example";
}
```

HTML

```html
<input [value]="text" />

<button [cdkCopyToClipboard]="text">Copy</button>
```
