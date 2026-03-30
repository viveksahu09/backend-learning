const math = require('./math');

console.log("Add", math.add(5, 3));
console.log("Subtract", math.subtract(10, 4));
console.log("Multiply", math.multiply(4, 5));

console.log(math.userData().name);
console.log(math.userData().password);
console.log(math.userData().email);

