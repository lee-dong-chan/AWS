import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./controller/index.js";

dotenv.config;
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express(urlencoded({ extended: false })));
app.use(express.json());

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
