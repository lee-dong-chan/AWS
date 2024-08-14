import express, { Express } from "express";
import path from "path";
import { Request, Response } from "express";

const app: Express = express();

app.set("port", 3000);

app.use(express.static(path.join(__dirname, "public")));

app.post("/hello", (req: Request, res: Response) => {
  res.send("ok");
});

const hello = app.get("/hello", (req: Request, res: Response) => {
  res.json({ error: "hi" });
});

app.listen(app.get("port"), (): void => {
  console.log(app.get("port"), "server open");
});
