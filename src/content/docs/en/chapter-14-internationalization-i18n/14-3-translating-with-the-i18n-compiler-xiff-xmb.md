---
title: Translating with the i18n Compiler (XIFF, XMB)
sidebar:
  order: 3
  label: 14.3 Translating with the i18n Compiler (XIFF, XMB)
---

Angular extracts translation messages into formats like **XLIFF**, **XMB**, or **XLF**.

Extract translations:

```shell
ng extract-i18n --output-path src/locale
``
```

This generates a file like `messages.xlf`. Translators edit it and then you compile the app with the translations.

Compile with a locale:

```shell
ng build --localize
```

Explanation:

- XIFF/XLF formats store translatable strings and context
- XMB is an alternative XML-based format
- Angular replaces template text with localized versions at build time
