const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.subscribe(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use("/imgs", express.static("uploads"));

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      console.log(1, file);
      callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
      console.log(2, file);
      const tempName = Date.now() + "-" + file.originalname;
      imgs.push(tempName);
      callback(null, tempName);
    },
  }),
}); //dest-> destination 목적지
const imgs = [];
app.use("/write", (req, res, next) => {
  if (req.headers.cookie) {
    req.user = req.headers.cookies;
  }
  console.log(imgs);
  next();
});

app.post("/write", upload.array("img"), (req, res) => {
  if (req.user) {
    console.log(req.headers);
    console.log(req.body);
    console.log(req.files);
    console.log(req.file);
    //   res.cookie("file", req.file.filesname);
  }
  res.redirect("/");

  //   req.on('data',(data)=>{

  //   })
  //   req.on('end',(date)=>{

  //   })
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "open server");
});
