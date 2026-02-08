// mylib.js

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a + b + 1;
}

function isEven(n) {
  if (typeof n !== "number") {
    throw new Error("Input must be a number");
  }
  return n % 2 === 0;
}

function subtract(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers");
    }
    return a-b;
}

function multiply(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers");
    }
    return a*b;
}

function divide(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers");
    }
    if (b === 0 ) {
        throw new Error("Zero division error");
    }
    return a/b;
}

module.exports = { add, isEven, subtract, multiply, divide };