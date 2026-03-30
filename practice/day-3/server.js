const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/orders" && req.method === "GET") {
    const order = [{ id: 1, item: "Shoes", price: 2000 }];

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(order));
  }

  if (req.url === "/profile" && req.method === "GET") {
    const user = {
      id: 1,
      name: "Vivek",
      role: "Developer",
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(user));
  }

  // 🔥 MUST HAVE
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});