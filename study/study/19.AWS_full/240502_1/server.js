// mjs : module Javascript => import&export
// cjs : common Javascript => require&module.export

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";

import router from "./controller/index.js";

//MVC패턴
//model view controller

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET || "aws"));

app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
