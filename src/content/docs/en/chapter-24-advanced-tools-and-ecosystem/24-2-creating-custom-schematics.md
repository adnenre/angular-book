---
title: Creating Custom Schematics
sidebar:
  order: 2
  label: 24.2 Creating Custom Schematics
---

Beyond the simple example, you can create reusable schematics that modify existing projects, add files, update configurations, etc.

### Structure of a schematic collection

```shell
my-collection/
  package.json
  collection.json
  src/
    my-schematic/
      files/            # Folders/files to copy (optional)
        __name@dasherize__.ts
      index.ts
      schema.json       # Options schema
      schema.d.ts       # TypeScript typings
```

### Creating a schematic that adds a custom component

1. **Define the options schema** (`src/my-schematic/schema.json`):

```json
{
  "$schema": "http://json-schema.org/schema",
  "id": "MySchematicSchema",
  "title": "Options for my schematic",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The component name"
    }
  },
  "required": ["name"]
}
```

2. **Create a template file** (`src/my-schematic/files/__name@dasherize__.component.ts`):

```ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-<%= dasherize(name) %>',
     template: `<h2><%= classify(name) %> Component</h2>`
   })
   export class <%= classify(name) %>Component {}
```

3. **Implement the rule** (`src/my-schematic/index.ts`):

```ts
import { Rule, SchematicContext, Tree, apply, url, template, move, chain } from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";

export function mySchematic(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url("./files"), [template({ ...strings, ...options }), move("src/app/components")]);
    return chain([templateSource])(tree, context);
  };
}
```

4. **Declare the schematic in `collection.json`:**

```json
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "my-schematic": {
      "description": "Adds a custom component",
      "factory": "./src/my-schematic/index#mySchematic",
      "schema": "./src/my-schematic/schema.json"
    }
  }
}
```

5. **Test locally:**

```bash
   npm run build
   schematics .:my-schematic --name=test
```

**Explanation:**

> - **Templates use EJS syntax (`<%= ... %>`) and helpers like `dasherize`, `classify`.**

- **`apply` combines a source (`url`) and rules (`template`, `move`).**
- **The schematic can be run in any Angular project after installation.**
