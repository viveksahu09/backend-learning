function createOrder(userName, product, price) {
  return {
    id: Date.now(),
    userName,
    product,
    price,
    status: price >= 30000 ? "Premium Order" : "Standard Order",
    createdAt: new Date()
  };
}

module.exports = { createOrder };