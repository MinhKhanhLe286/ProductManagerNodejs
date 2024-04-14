const productRouter = require("./product.router");
const homeRouter = require("./home.router.js"); // Sửa đổi tên file này

module.exports = (app) => {
    app.use("/", homeRouter);
    app.use("/products", productRouter);
};
