---
title: Testing a Component (TestBed, ComponentFixture, debugElement)
sidebar:
  order: 3
  label: 13.3 Testing a Component (TestBed, ComponentFixture, debugElement)
---

Angular components are tested using:

- `TestBed`
- `ComponentFixture`
- `DebugElement`

## Component

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
```

## HTML

```ts
<p>{{ count }}</p>

<button (click)="increment()">
  Increment
</button>
```

## Test File

```ts
import { TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";

describe("CounterComponent", () => {
  let fixture: any;
  let component: CounterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });
});
```
