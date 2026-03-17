---
title: Theming and Typography
sidebar:
  order: 2
  label: 21.2 Theming and Typography
---

### 21.2 Theming and Typography

Angular Material allows customizing themes using SCSS.

Material themes define:

Primary color  
Accent color  
Warn color  
Typography

Step 1 — Define a custom theme

```scss
@use "@angular/material" as mat;

$primary: mat.define-palette(mat.$indigo-palette);
$accent: mat.define-palette(mat.$pink-palette);

$theme: mat.define-light-theme(
  (
    color: (
      primary: $primary,
      accent: $accent,
    ),
  )
);

@include mat.all-component-themes($theme);
```

Step 2 — Use typography styles

HTML

```html
<h1 class="mat-headline-large">Material Typography</h1>

<p class="mat-body-medium">This text follows Material typography rules.</p>
```

Explanation

Material typography ensures consistent UI design across the application.
