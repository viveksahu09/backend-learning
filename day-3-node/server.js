const http = require("http");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const sendRespones = require("./utils/sendResponse");

const server = http.createServer((req, res) => {
  // Handle routes
  userRoutes(req, res, sendRespones);
  productRoutes(req, res, sendRespones);

  // If no routes match
  if (res.writableEnded === false) {
    sendRespones(res, 404, { message: "Routes not found" });
  }
});

server.listen(3000, ()=>{
    console.log("Server running on port 3000");
    
})