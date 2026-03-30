const getProducts = require("../controllers/productController")

function productRoutes(req, res, sendRespones){
    if (req.url === "/products" && req.method === "GET") {
        return getProducts(req, res, sendRespones)
    }
}

module.exports = productRoutes;