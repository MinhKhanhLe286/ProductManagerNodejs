const routerDashboard = require("./dashboard.router");

const systemConfig = require('../../config/system')
module.exports = (app)=>{
    const PATH_ADMIN = systemConfig.prefix

    app.use(PATH_ADMIN+"/dashboard",routerDashboard);
}