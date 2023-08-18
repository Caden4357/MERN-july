const Product = require("../models/product.model");

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.status(400).json(err));
    }
}