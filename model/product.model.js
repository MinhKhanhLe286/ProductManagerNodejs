const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        title : String,
        description : String,
        price : Number,
        discountPercentage : Number,
        stock : Number,
        thumbnail : String,
        status : String,
        position : Number ,
        deleted : Boolean
    },
    {
        collection: 'products'
    }
);
const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;