const chai = require("chai");
const should = chai.should();
const { add, isEven, subtract, multiply, divide } = require("../src/mylib");

describe("mylib.js (should skeleton)", () => {
    describe("add()", () => {
        it("should add two numbers correctly", () => {
            add(2, 3).should.equal(5)
        });

        it("should throw an error if inputs are not numbers", () => {
            (() => add(2, "a")).should.throw("Inputs must be numbers")
        });
    })

    describe("isEven()", () => {
        it("should return true for even numbers", () => {
            isEven(2).should.equal(true)
        });

        it("should return false for odd numbers", () => {
            isEven(3).should.equal(false)
        });

        it("should throw an error if input is not a number", () => {
            (() => isEven("a")).should.throw("Input must be a number")
        });
    })

    describe("subtract()", () => {
        it("should subtract two numbers correctly", () => {
            subtract(5, 2).should.equal(3)
        });

        it("should throw an error if inputs are not numbers", () => {
            (() => subtract(5, "a")).should.throw("Inputs must be numbers")
        });
    })

    describe("multiply()", () => {
        it("should multiply two numbers correctly", () => {
            multiply(5, 2).should.equal(10)
        });

        it("should throw an error if inputs are not numbers", () => {
            (() => multiply(5, "a")).should.throw("Inputs must be numbers")
        });
    })

    describe("divide()", () => {
        it("should divide two numbers correctly", () => {
            divide(10, 2).should.equal(5)
        });

        it("should throw an error if inputs are not numbers", () => {
            (() => divide(5, "a")).should.throw("Inputs must be numbers")
        });

        it("should throw an error if division by 0", () => {
            (() => divide(5, 0)).should.throw("Zero division error")
        });
    })
})