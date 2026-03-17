---
title: Creating Angular Libraries (ng generate library)
sidebar:
  order: 3
  label: 24.3 Creating Angular Libraries (ng generate library)
---

Libraries allow sharing code between multiple applications or publishing to npm.

### Generating a library

1. **Create a new library in an existing workspace:**

```bash
   ng generate library my-library

```

2. **Generated structure:**

```shell
   projects/
     my-library/
       src/
         lib/
           my-library.component.ts
           my-library.service.ts
           my-library.module.ts
         public-api.ts          # Public entry point
         ng-package.json         # Packaging configuration
         package.json            # Library dependencies
       ng-package.json
       package.json

```

### Developing the library

- **Export components/services in `public-api.ts`:**

```ts
export * from "./lib/my-library.module";
export * from "./lib/my-library.service";
export * from "./lib/my-library.component";
```

- **Configure `ng-package.json`** to define the entry point and external dependencies.

### Building and publishing

1. **Build the library:**

```bash
   ng build my-library

```

2. **Navigate to the output folder:**

```bash
   cd dist/my-library

```

3. **Publish to npm (or use a local link):**

```bash
   npm publish

```

Or create a local link for testing:

```bash
   npm link
   cd ../my-app
   npm link my-library

```

### Using the library in an application

```bash
npm install my-library
```

Then import the module:

```ts
import { MyLibraryModule } from "my-library";

@NgModule({
  imports: [MyLibraryModule],
})
export class AppModule {}
```

**Explanation:**

> - **`ng generate library` creates a structure ready for packaging.**

- **The `public-api.ts` file controls what is exposed to consumers.**
- **Building produces a `dist/` folder ready to publish.**
- **Use `npm link` to test locally before publishing.**

---
