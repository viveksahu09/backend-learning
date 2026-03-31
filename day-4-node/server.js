const express = require("express");

const app = express(); // create server
const PORT = 3000;

// route

// Home page
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// User page
app.get("/user", (req, res) => {
  res.send("User data");
});

// Send/Create data
app.post("/login", (req, res) => {
  res.send("Login successful");
});

// Mini API
const products = [
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 50000 },
];

// get all products
app.get("/products", (req, res) => {
    res.send(products)
})

// get sindle product 
app.get("/products/:id", (req, res) => {
    const id = req.params.id
    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return res.status(404).send("Product not found")
    }

    res.json(product)
})

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
