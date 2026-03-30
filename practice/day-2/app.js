const math = require("./math");

console.log("Divide", math.divide(10, 2));
console.log("Divide", math.divide(10, 0));

{
  /* 🎯 Goal:
👉  Understand:

Backend sends objects
You pick what you need */
}

const user = require("./user");
const data = user.getUser();

console.log("User Name:", data.name);
console.log("User Email:", data.email);

{
  /* 🧠 Real-world meaning

👉 This is exactly how backend works:
User sends data → (API)
Backend creates object → (like this)
Stores in DB / returns response


🎯 In one line

👉 This code:
“Creates a structured order object and exports it so other files can use it” */
}

const order = require("./order");
const newOrder = order.createOrder("Vivek", "Laptop", 50000);

console.log(newOrder);
