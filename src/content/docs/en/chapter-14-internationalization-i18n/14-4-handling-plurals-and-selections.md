---
title: Handling Plurals and Selections
sidebar:
  order: 4
  label: 14.4 Handling Plurals and Selections
---

Angular supports pluralization and selection in templates with the `i18n` ICU syntax.

HTML example:

```html
<p i18n="@@notifications">{count, plural, =0 {No notifications} =1 {One notification} other {# notifications} }</p>
```

Explanation: - `plural` handles numeric variations - `other` handles all other numbers - `select` can handle gender or type selections
