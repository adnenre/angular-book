---
title: End-to-End Testing with Cypress / Playwright
sidebar:
  order: 9
  label: 13.9 End-to-End Testing with Cypress / Playwright
---

E2E tests simulate real user behavior in a browser.

Popular tools:

| Tool       | Description               |
| ---------- | ------------------------- |
| Cypress    | Popular Angular E2E tool  |
| Playwright | Modern fast E2E framework |

---

## Cypress Installation

```shell
npm install cypress --save-dev
```

Run Cypress:

```shell
npx cypress open
```

## Cypress Example

```ts
describe("Home Page", () => {
  it("should display title", () => {
    cy.visit("/");

    cy.contains("Welcome");
  });
});
```
