const dashloardConttroler = require('../../controller/admin/dashloard')

const express = require('express')
const routerDashboard = express.Router();

routerDashboard.get("/",dashloardConttroler);

module.exports = routerDashboard;