// khai báo hàm
const productsRoute = require("./product.route")
const homeRoute = require("./hone.router")

module.exports = (app)=>{
    app.use("/",homeRoute)
    app.use("/products",productsRoute)
}