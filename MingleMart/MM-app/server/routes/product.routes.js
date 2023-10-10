const ProductController = require("../controllers/product.controller");
const { authenticate } = require('../config/jwt.config');
const multer = require("multer");
const { memoryStorage } = require("multer");
const storage = memoryStorage()
const upload = multer({storage});

module.exports = (app) => {
    app.get("/api/products", authenticate, ProductController.getAllProducts);
    app.post("/api/createProduct", upload.single('image'), ProductController.createProduct);
}