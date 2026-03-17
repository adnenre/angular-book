---
title: Table (Data Table Management)
sidebar:
  order: 7
  label: 20.7 Table (Data Table Management)
---

Angular CDK provides a flexible table system.

TypeScript

```ts
import { Component } from "@angular/core";
import { CdkTableModule } from "@angular/cdk/table";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: "./table.component.html",
})
export class TableComponent {
  data = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
  ];
}
```

HTML

```html
<table cdk-table [dataSource]="data">
  <ng-container cdkColumnDef="name">
    <th cdk-header-cell *cdkHeaderCellDef>Name</th>
    <td cdk-cell *cdkCellDef="let element">{{element.name}}</td>
  </ng-container>

  <ng-container cdkColumnDef="age">
    <th cdk-header-cell *cdkHeaderCellDef>Age</th>
    <td cdk-cell *cdkCellDef="let element">{{element.age}}</td>
  </ng-container>

  <tr cdk-header-row *cdkHeaderRowDef="['name','age']"></tr>
  <tr cdk-row *cdkRowDef="let row; columns: ['name','age'];"></tr>
</table>
```
