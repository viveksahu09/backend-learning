const { createOrder } = require("./order");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Home Page");
  } 
  else if (req.url === "/products") {
    const products = [
      { id: 1, name: "Laptop", price: 20000 },
      { id: 2, name: "Phone", price: 50000 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } 
  else if (req.url === "/orders") {
    res.writeHead(200);
    res.end("Orders Page");
  } 
  else if (req.url === "/create-order") {
    const order = createOrder("Vivek", "Laptop", 50000);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(order));
  } 
  else {
    res.writeHead(404);
    res.end("404 Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});