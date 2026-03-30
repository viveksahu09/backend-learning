function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function userData() {
  return {
    name: "Vivek",
    password: 1254,
    email: "vivek@123",
  };
}

module.exports = { add, subtract, multiply, divide, userData };