const express = require("express");
const routeHome = express.Router();

const controllerHome = require("../../controller/client/home.controller")

routeHome.get("/",controllerHome);
module.exports = routeHome // xuất hàm