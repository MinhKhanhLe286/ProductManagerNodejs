const productModel = require("../../model/product.model");

module.exports = async function(req, res) {
    const products = await productModel.find({
        status : "active",
        deleted : "false"
    });
    console.log(">>>CHECK DATA: ");
    console.log(products);
    res.render("client/pages/products/index.pug", {
        titlePage: "PRODUCTS",
        products : products,
    });
};
