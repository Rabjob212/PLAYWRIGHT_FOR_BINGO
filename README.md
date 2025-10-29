# PLAYWRIGHT_FOR_BINGO
testing our ADMIN + WEB flow

## Overview
This project uses Playwright framework to execute tests on two websites:
- Admin site: https://admin.dev.gamecoms.net/
- Web site: https://release-layout-2.dev.gamecoms.net/

The test scripts will click through steps between both websites.

## Setup

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install chromium
```

If you encounter issues with the browser installation, you may need to:
```bash
# Install system dependencies first
npx playwright install-deps chromium
# Then install the browser
npx playwright install chromium
```

## Running Tests

### Verify Playwright Setup (offline test):
```bash
npx playwright test verify-setup.spec.js
```
This test runs without network access to verify that Playwright is working correctly.

### Run all tests (headless mode):
```bash
npm test
```

### Run tests in headed mode (see browser):
```bash
npm run test:headed
```

### Run tests in UI mode (interactive):
```bash
npm run test:ui
```

### View test report:
```bash
npm run test:report
```

### Run specific test file:
```bash
npx playwright test tests/bingo-flow.spec.js
```

## Test Files

- `tests/verify-setup.spec.js` - Verification test that proves Playwright is working (runs offline)
- `tests/bingo-flow.spec.js` - Main test file that navigates between admin and web sites

**Note:** The bingo-flow tests require access to the private dev sites. They will fail with DNS errors if run from an environment without access to:
- https://admin.dev.gamecoms.net/
- https://release-layout-2.dev.gamecoms.net/

## Configuration

The Playwright configuration is in `playwright.config.js`. It includes:
- Test directory: `./tests`
- Reporter: HTML report
- Screenshot on failure
- Video recording on failure
- Trace on retry
