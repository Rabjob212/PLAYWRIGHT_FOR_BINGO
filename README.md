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

## Running Tests

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

## Test Files

- `tests/bingo-flow.spec.js` - Main test file that navigates between admin and web sites

## Configuration

The Playwright configuration is in `playwright.config.js`. It includes:
- Test directory: `./tests`
- Reporter: HTML report
- Screenshot on failure
- Video recording on failure
- Trace on retry
