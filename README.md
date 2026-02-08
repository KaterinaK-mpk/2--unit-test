# mylib JavaScript Module with Unit Tests

This repository contains a simple JavaScript module `mylib` implementing basic arithmetic operations (add, subtract, multiply, divide), along with a main demo program and Mocha + Chai unit tests.

## Setup

1. Clone the repository:
git clone https://github.com/KaterinaK-mpk/2--unit-test.git

2. Navigate to the directory:
cd 2--unit-test

3. Install dependencies:
npm install


## Usage

### Running the Main Demo
The main program (`index.js`) demonstrates the library functions and error handling. Run it with `npm start` or directly node `index.js`.

Expected output includes results for operations and caught errors (e.g., zero division, invalid types).

### Running Unit Tests
Tests are in the `tests/` directory using Mocha and Chai (should style). Run them with `npm test`.

This will execute all tests without running the main program. All tests should pass, covering eg. type errors, and zero-division error.

## Module API (mylib.js)

Located in `src/mylib.js`. Imported and used by this:
```javascript
const { add, subtract, multiply, divide } = require("./src/mylib");
```

Repository Structure
- index.js: Main demo program.
- src/mylib.js: Library module.
- tests/mylib.should.test.js: Unit tests.
- package.json: Dependencies and scripts.
- .gitignore: Ignores node_modules, etc.