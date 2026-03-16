---
title: Dynamic Forms with FormArray
sidebar:
  order: 9
  label: 10.9 Dynamic Forms with FormArray
---

`FormArray` allows creating forms with dynamic numbers of controls.

```ts
import { FormArray, FormControl } from '@angular/forms';

skills = new FormArray([
  new FormControl('Angular')
]);

addSkill() {
  this.skills.push(new FormControl(''));
}
```
