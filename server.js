const express = require('express');
require("dotenv").config(); 
const app = express();

const port = process.env.PORT;

const routeClinet = require("./routers/clients/index.route.js");
routeClinet(app);

app.set("views","views");
app.set("view engine","pug");

app.use(express.static("public"));

app.listen(port,()=>{
    console.log("app listenning on port: ",port);
})