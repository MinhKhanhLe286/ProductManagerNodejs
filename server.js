const express = require("express");
require("dotenv").config();
const app = express();

const database = require("./config/database.js");

database.connect();

const port = process.env.PORT;

const routerAdmin = require("./routers/admin/index.js");
const routeClinet = require("./routers/clients/index.route.js");

const system = require("./config/system.js");
// setup local Variable;
app.locals.prefixAdmin = system.prefix;

routerAdmin(app);
routeClinet(app);

app.set("views", "views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.listen(port, () => {
  console.log("app listenning on port: ", port);
});
