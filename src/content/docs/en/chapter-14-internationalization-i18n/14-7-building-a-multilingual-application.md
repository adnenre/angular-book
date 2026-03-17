---
title: Building a Multilingual Application
sidebar:
  order: 7
  label: 14.7 Building a Multilingual Application
---

This guide walks you through adding i18n support to your Angular application. You'll learn how to mark text for translation, extract messages, create translation files for multiple languages, and build your app for all locales. File locations and code examples are clearly marked.

---

## Step 1: Mark Text in Templates with `i18n`

Add the `i18n` attribute to any HTML element whose text content you want to translate. You can also provide a description and a custom ID for stable references.

**File to edit:** `src/app/app.component.html` (or any component template)

```html
<!-- Simple text -->
<h1 i18n>Welcome to My App</h1>

<!-- With description and custom ID -->
<p i18n="A friendly greeting|@@greetingMessage">Hello, user!</p>

<!-- For attributes like title or alt -->
<img [src]="logo" i18n-title title="Company Logo" />

<!-- Pluralization and ICU expressions -->
<div i18n>{count, plural, =0 {No items} =1 {One item} other {{{count}} items}}</div>
```

**Explanation:**

- **The `i18n` attribute marks the element for translation.**
- **The optional `@@customId` gives the translation a stable identifier (useful when the source text changes slightly).**
- **For attributes, use `i18n-attributeName` (e.g., `i18n-title`).**
- **Angular supports pluralization and ICU expressions directly in templates.**

---

## Step 2: Extract Translations to a Source File

Run the Angular extractor to create a **translation source file** containing all marked texts.

**Command (run from project root):**

```bash
ng extract-i18n --output-path src/locale
```

**Where the file is created:**  
This creates a folder `src/locale/` (if it doesn't exist) and places the file `messages.xlf` inside it. You can change the format using `--format` (e.g., `--format=xlf2` or `--format=json`).

**Expected output:**

```shell
src/
  locale/
    messages.xlf          # Source language (usually English)
```

**Explanation:**

- **The `ng extract-i18n` command scans all templates and collects texts marked with `i18n`.**
- **The output path `src/locale` is where you'll store all translation files.**
- **You can also specify the format with `--format=xlf` (default), `--format=xlf2`, or `--format=json`.**

---

## Step 3: Create Locale-Specific Translation Files

For each language you want to support, create a copy of the source file and translate its content.

**File structure example (after adding French and Spanish):**

```shell
src/
  locale/
    messages.xlf          (source)
    messages.fr.xlf       (French translations)
    messages.es.xlf       (Spanish translations)
```

**How to do it:**

1. Copy `messages.xlf` and rename it to include the locale code, e.g., `messages.fr.xlf`.
2. Open the new file and translate each `<target>` element. In XLIFF format, each `<trans-unit>` looks like:

```xml
<trans-unit id="greetingMessage" datatype="html">
  <source>Hello, user!</source>
  <target>Bonjour, utilisateur !</target>
  <note priority="1" from="description">A friendly greeting</note>
</trans-unit>
```

**Explanation:**

- **The `<source>` element contains the original text (usually English).**
- **You fill the `<target>` element with the translated text for that locale.**
- **The `id` attribute must match the `@@customId` you used, or a generated ID.**
- **Repeat for every locale you support.**

---

## Step 4: Configure Angular to Support Multiple Locales

Edit `angular.json` to tell Angular which locales you support and where to find the translation files.

**Locate the `projects -> your-project-name -> architect` section.**  
Add or modify the `build` and `serve` configurations as shown below.

```json
"projects": {
  "your-project-name": {
    "architect": {
      "build": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
          "outputPath": "dist/your-project-name",
          "index": "src/index.html",
          "main": "src/main.ts",
          "polyfills": "src/polyfills.ts",
          "tsConfig": "tsconfig.app.json",
          "assets": ["src/favicon.ico", "src/assets"],
          "styles": ["src/styles.css"],
          "scripts": []
        },
        "configurations": {
          "production": {
            "fileReplacements": [
              {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.prod.ts"
              }
            ],
            "optimization": true,
            "outputHashing": "all"
          },
          "fr": {
            "localize": ["fr"]
          },
          "es": {
            "localize": ["es"]
          }
        }
      },
      "serve": {
        "builder": "@angular-devkit/build-angular:dev-server",
        "configurations": {
          "production": {
            "browserTarget": "your-project-name:build:production"
          },
          "fr": {
            "browserTarget": "your-project-name:build:fr"
          },
          "es": {
            "browserTarget": "your-project-name:build:es"
          }
        }
      }
    }
  }
}
```

**Explanation:**

- **The `localize` option in each configuration tells Angular to build for that specific locale.**
- **You can also set the default locale and supported locales in `angular.json` under `projects -> your-project-name -> i18n`.**

**Add i18n project configuration (optional but recommended):**

```json
"i18n": {
  "sourceLocale": "en",
  "locales": {
    "fr": "src/locale/messages.fr.xlf",
    "es": "src/locale/messages.es.xlf"
  }
}
```

**This tells Angular where to find each translation file.**

---

## Step 5: Build the App for All Locales

Now you can build your application for each configured locale.

**Build all locales at once:**

```bash
ng build --localize
```

This command generates a separate folder for each locale inside the output path.  
For example, if `outputPath` is `dist/my-app`, you'll get:

```shell
dist/
  my-app/
    en/    (if English is the source locale)
    fr/
    es/
```

**Build a specific locale:**

```bash
ng build --configuration=fr
```

**Serve a specific locale during development:**

```bash
ng serve --configuration=fr
```

**Explanation:**

- **`--localize` builds all locales defined in the configuration.**
- **Using `--configuration` with a locale name builds only that locale.**
- **The output folders are named after the locale codes.**

---

## Step 6: (Optional) Runtime Locale Switching

If you prefer to switch languages without rebuilding, you can use **runtime translation** with `@angular/localize`. This approach loads translation files on demand.

1. Ensure `@angular/localize` is installed (it is included by default in Angular projects).
2. Import `$localize` in your `polyfills.ts`:

```ts
import "@angular/localize/init";
```

3. Load translation files at runtime (e.g., using HTTP) and set the locale using `LOCALE_ID` provider.
4. Use Angular's `i18n` pipes and directives as usual.

**Note:** Runtime switching requires additional setup and is not covered in detail here. Refer to the [Angular i18n documentation](https://angular.io/guide/i18n-common) for advanced scenarios.

---

## Summary of Key File Locations

| File / Folder                | Purpose                                                                     |
| ---------------------------- | --------------------------------------------------------------------------- |
| `src/app/**/*.html`          | Templates containing `i18n` markers                                         |
| `src/locale/messages.xlf`    | Extracted source translations                                               |
| `src/locale/messages.fr.xlf` | French translation file (create one per locale)                             |
| `angular.json`               | Project configuration with locale settings and build targets                |
| `dist/your-app/`             | Output folder – contains locale subfolders after building with `--localize` |

---

## Example: HTML with Multiple Languages (Marked for Translation)

Here's a complete example showing different i18n features:

```html
<!-- src/app/example.component.html -->
<h1 i18n="@@pageTitle">Welcome to our store</h1>

<p i18n="Product count|@@productCount">{productCount, plural, =0 {No products available} =1 {One product} other {{{productCount}} products}}</p>

<button i18n="Button label|@@addToCart">Add to cart</button>

<img [src]="imageUrl" i18n-alt alt="Product image" />
```

**Explanation:**

- **Custom IDs (`@@pageTitle`) keep translations stable even if the English text changes slightly.**
- **Plural rules are defined using ICU syntax.**
- **Attributes like `alt` are translated with `i18n-alt`.**

---

Now you have a complete i18n setup for your Angular application. For further details, refer to the official [Angular i18n guide](https://angular.io/guide/i18n-overview).
