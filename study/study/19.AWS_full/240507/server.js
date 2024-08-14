// mjs : module Javascript => import&export
// cjs : common Javascript => require&module.export

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";

import router from "./controllers/index.js";
import "./models/index.js";
import { Category, sequelize } from "./models/index.js";
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

const force = true;

try {
  await sequelize.sync({ force });
  // ECMAScript2022 버전부터 가능
  // ES6==ECMAScript 2016

  await Category.create({ name: "전체", href: "./" });
  const info = await Category.create({ name: "정보", href: "./" });
  info.addChildren(await Category.create({ name: "OP.GG 기획", href: "./" }));
  info.addChildren(await Category.create({ name: "유저뉴스", href: "./" }));
  info.addChildren(await Category.create({ name: "팁과 노하우", href: "./" }));
  info.addChildren(await Category.create({ name: "패치노트", href: "./" }));

  const comm = await Category.create({ name: "커뮤니티", href: "./" });
  comm.addChildren(await Category.create({ name: "자유", href: "./" }));
  comm.addChildren(await Category.create({ name: "유머", href: "./" }));
  comm.addChildren(await Category.create({ name: "질문", href: "./" }));
  comm.addChildren(await Category.create({ name: "영상", href: "./" }));
  comm.addChildren(await Category.create({ name: "사건 사고", href: "./" }));
  comm.addChildren(await Category.create({ name: "전적 인증", href: "./" }));
  comm.addChildren(await Category.create({ name: "팬 아트", href: "./" }));

  const esport = await Category.create({ name: "e스포츠", href: "./" });
  esport.addChildren(await Category.create({ name: "LCK", href: "./" }));
  esport.addChildren(await Category.create({ name: "기타 리그", href: "./" }));
} catch (err) {
  console.error(err);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
