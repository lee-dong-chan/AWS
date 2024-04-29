const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const router = require("./router");
const mysql = require("./lib/mysql");

// mysql.init();

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser(process.env.COOKIES_SECRET));

app.use("/api", router);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
