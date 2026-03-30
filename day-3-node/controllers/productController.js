function getProducts(req, res, sendRespones) {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ];
  sendRespones(res, 200, products)
}

module.exports = getProducts;
