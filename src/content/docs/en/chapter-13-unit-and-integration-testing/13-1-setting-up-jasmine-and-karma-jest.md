---
title: Setting Up Jasmine and Karma / Jest
sidebar:
  order: 1
  label: 13.1 Setting Up Jasmine and Karma / Jest
---

Angular applications include a testing environment by default.

Two popular setups:

| Tool    | Purpose                     |
| ------- | --------------------------- |
| Jasmine | Testing framework           |
| Karma   | Test runner                 |
| Jest    | Faster alternative to Karma |

Angular CLI usually installs **Jasmine + Karma** automatically.

## Running Tests

### 13.1 Setting Up Jasmine and Karma / Jest

Angular applications include a testing environment by default.

Two popular setups:

| Tool    | Purpose                     |
| ------- | --------------------------- |
| Jasmine | Testing framework           |
| Karma   | Test runner                 |
| Jest    | Faster alternative to Karma |

Angular CLI usually installs **Jasmine + Karma** automatically.

## Running Tests

```shell
ng test
```

This command:

- builds the test environment
- launches Karma
- runs all `*.spec.ts` files

## Installing Jest (Optional)

```shell
npm install jest jest-preset-angular @types/jest
```

## Example Test File

```ts
describe("Simple Test", () => {
  it("should add numbers correctly", () => {
    const result = 2 + 3;

    expect(result).toBe(5);
  });
});
```

## Explanation

Key concepts:

- `describe()` defines a test suite
- `it()` defines a test case
- `expect()` verifies results

`ng test` This command:

- builds the test environment
- launches Karma
- runs all `*.spec.ts` files

## Installing Jest (Optional)

```shell
npm install jest jest-preset-angular @types/jest
```

## Example Test File

```ts
describe("Simple Test", () => {
  it("should add numbers correctly", () => {
    const result = 2 + 3;

    expect(result).toBe(5);
  });
});
```

## Explanation

Key concepts:

- `describe()` defines a test suite
- `it()` defines a test case
- `expect()` verifies results
