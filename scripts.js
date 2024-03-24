function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function power(base, num) {
    return Math.pow(base, num);
}

function squareRoot(num) {
    return Math.sqrt(num);
}

module.exports = {sum, sub, multiply, divide, isEven, isOdd, power, squareRoot };


