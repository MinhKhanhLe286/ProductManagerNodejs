const Product = require("../../model/product.model")

module.exports.index=async(rep,res)=>{

    const products = await Product.find({
        status: "active",
        deleted: false
    });
    console.log(products)
    res.render("client/pages/products/index.pug",{
        titlePage : "Product Home",
        products : products
    })
}