const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// get all products
router.route('/products').get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// get single product by id
router.route('/products/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;
