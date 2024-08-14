// mjs : module Javascript => import&export
// cjs : common Javascript => require&module.export

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

// 비동기 통신을 할떄는 IP/Domain/Port를 확인하여 보안정책이 들어가게 된다.
// Cross Origin Resource Sharing,일명 CORS
// 인증되지 않은 웹 페이지에서 보내는 비동기 요청의 내용을 싹 무시한다.
// 인증을 해주면 가능. 서버 쪽에서 프론트 엔드 주소 또는 도메인 ,포트 등을 등록래주면 된다.
// 해당 내용은 헤더에 포함된다.

import router from "./controllers/index.js";
import "./models/index.js";
import { Category, sequelize } from "./models/index.js";
//MVC패턴
//model view controller

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors({ origin: "http://localhost", credentials: true }));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET || "aws"));

app.use(router);

const force = false;

try {
  await sequelize.sync({ force });
  // ECMAScript2022 버전부터 가능
  // ES6==ECMAScript 2016
  if (force) {
    await Category.create({ name: "전체", href: "./" });
    const info = await Category.create({ name: "정보", href: "./" });
    info.addChildren(await Category.create({ name: "OP.GG 기획", href: "./" }));
    info.addChildren(await Category.create({ name: "유저뉴스", href: "./" }));
    info.addChildren(
      await Category.create({ name: "팁과 노하우", href: "./" })
    );
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
    esport.addChildren(
      await Category.create({ name: "기타 리그", href: "./" })
    );
  }
} catch (err) {
  console.error(err);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
