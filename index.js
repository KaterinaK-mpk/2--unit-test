// index.js
const { add, isEven, subtract, multiply, divide } = require("./src/mylib");

function safeRun(label, fn) {
  try {
    const result = fn();
    console.log(`${label}:, result`);
  } catch (err) {
    console.error(`${label} ERROR:`, err.message);
  }
}

console.log("=== mylib demo ===");

safeRun("add(2, 3)", () => add(2, 3));
safeRun("isEven(10)", () => isEven(10));
safeRun("subtract(10, 4)", () => subtract(10, 4));
safeRun("multiply(6, 7)", () => multiply(6, 7));
safeRun("divide(10, 2)", () => divide(10, 2));

// examples of errors
safeRun("divide(10, 0)", () => divide(10, 0));
safeRun("add('2', 3)", () => add("2", 3));
safeRun("isEven('10')", () => isEven("10"));