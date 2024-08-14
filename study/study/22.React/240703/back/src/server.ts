import express, { Express, Request, Response } from "express";

import morgan from "morgan";

import router from "./router/index";

import { sequelize } from "./models/index";
import cors from "cors";

const app: Express = express();

app.set("port", 8000);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

sequelize.sync({ force: true });
app.use("/api", router);

app.listen(app.get("port"), (): void => {
  console.log(app.get("port"), "server open");
});
