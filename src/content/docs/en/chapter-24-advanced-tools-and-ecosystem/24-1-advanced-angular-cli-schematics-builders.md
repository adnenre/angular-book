---
title: Advanced Angular CLI (Schematics, Builders)
sidebar:
  order: 1
  label: 24.1 Advanced Angular CLI (Schematics, Builders)
---

The Angular CLI is built on two powerful concepts: **schematics** (code generators) and **builders** (build task executors). Understanding how they work allows you to extend and automate your workflow.

### Schematics

A schematic is a code generator that can create or modify files in a project. For example, `ng generate component` uses a schematic.

**Creating a simple schematic:**

1. **Install tools:**

```bash
   npm install -g @angular-devkit/schematics-cli

```

2. **Create a schematic collection:**

```bash
   schematics blank --name=my-collection
   cd my-collection

```

3. **Modify the default schematic** (`src/my-collection/index.ts`):

```ts
import { Rule, Tree, SchematicContext } from "@angular-devkit/schematics";

export function myCollection(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create("hello.txt", "Hello from my schematic!");
    return tree;
  };
}
```

4. **Build and run locally:**

```bash
   npm run build
   schematics .:my-collection

```

**Explanation:**

- **A schematic must export a function returning a `Rule`.**
- **The `Rule` receives a `Tree` (virtual file system) and can create/modify files.**
- **The `schematics` command allows testing without integrating into an Angular project.**

### Builders

A builder is a function that executes a task (build, test, etc.) and can be configured in `angular.json`.

**Creating a simple builder:**

1. **Generate a builder project:**

```bash
   ng new my-builder --create-application=false
   cd my-builder

```

2. **Create a builder file** (`src/my-builder/index.ts`):

```ts
import { BuilderContext, BuilderOutput, createBuilder } from "@angular-devkit/architect";
import { JsonObject } from "@angular-devkit/core";

interface Options extends JsonObject {
  message: string;
}

export default createBuilder((options: Options, context: BuilderContext): Promise<BuilderOutput> => {
  context.logger.info(`Message: ${options.message}`);
  return Promise.resolve({ success: true });
});
```

3. **Declare the builder in `builders.json`:**

```json
{
  "builders": {
    "my-builder": {
      "implementation": "./src/my-builder/index.js",
      "schema": "./src/my-builder/schema.json",
      "description": "An example builder"
    }
  }
}
```

4. **Configure the builder in an app's `angular.json`:**

```json
   "projects": {
     "my-app": {
       "architect": {
         "my-builder": {
           "builder": "./my-builder:my-builder",
           "options": {
             "message": "Hello"
           }
         }
       }
     }
   }

```

5. **Run the builder:**

```bash
   ng run my-app:my-builder

```

**Explanation:**

> - **A builder receives typed options and a context for logging.**

- **It must be declared in a `builders.json` and referenced via a local or published package.**
- **Builders are used by the Angular CLI to customize the build process.**

---
