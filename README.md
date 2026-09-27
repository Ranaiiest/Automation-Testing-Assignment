# AI-Assisted Login Automation

This submission completes **Assignment 1: AI-Generated Test Case Builder + Script** using Playwright and TypeScript. It tests the login page of [SauceDemo](https://www.saucedemo.com/).

## What is included

- Five AI-assisted login test cases in [`docs/ai-generated-test-cases.md`](docs/ai-generated-test-cases.md)
- A Playwright page object in [`pages/LoginPage.ts`](pages/LoginPage.ts)
- Automated Playwright tests in [`tests/login.spec.ts`](tests/login.spec.ts)
- HTML reporting, screenshots on failure, and traces on retry

## AI-assisted test design

AI was used to turn the login requirement into a balanced set of test ideas: one successful path, two invalid-credential paths, a locked-account path, and required-field validation. I reviewed and refined the cases against SauceDemo's known test users and messages. The implementation uses stable accessible and data-test locators, with the page object separating page interactions from assertions.

## Prerequisites

- Node.js 18 or newer
- Internet access to SauceDemo

## Install and run

```bash
npm install
npx playwright install chromium
npm test
```

If a managed network prevents the Playwright browser download and Google Chrome is installed locally, run:

```bash
PLAYWRIGHT_CHANNEL=chrome npm test
```

To execute with a visible browser:

```bash
npm run test:headed
```

To open the latest HTML report:

```bash
npm run report
```

## Test coverage

| Test ID | Automated check |
| --- | --- |
| LGN-001 | Valid credentials reach the inventory page. |
| LGN-002 | A locked account shows the expected message. |
| LGN-003 | An unknown username is rejected. |
| LGN-004 | An incorrect password is rejected. |
| LGN-005 | Blank credentials require a username. |

## Project structure

```text
.
├── docs/
│   └── ai-generated-test-cases.md
├── pages/
│   └── LoginPage.ts
├── tests/
│   └── login.spec.ts
├── playwright.config.ts
└── package.json
```

