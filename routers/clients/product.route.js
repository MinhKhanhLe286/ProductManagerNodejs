const express = require("express");
const routeProduct = express.Router();

const productController = require('../../controller/client/product.controller')

routeProduct.get("/",productController);

module.exports = routeProduct // xuất hàm