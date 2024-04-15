const express = require("express");

require("dotenv").config();

const database = require("./config/database")
const app = express();
const port = process.env.PORT;

app.use(express.static("public"));
database.connect();

const route = require("./routers/clients/index.router");
const { connect } = require("mongoose");

// Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");

// Router
route(app);

app.listen(port, () => {
    console.log("App listening on port " + port);
});
