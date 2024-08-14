const express = require("express");
const MyRouter = require("./Myrouter");

const app = express();

const User = new MyRouter("/user");
User.init(app);
User.setCallbacks({
  login: (req, res) => {
    res.send("login");
  },
  logout: (req, res) => {
    res.send("logout");
  },
  regist: (req, res) => {
    res.send("regist");
  },
});

const Board = new MyRouter("/Board");
User.init(app);
User.setCallbacks({
  create: (req, res) => {
    res.send("create");
  },
  list: (req, res) => {
    res.send("list");
  },
  item: (req, res) => {
    res.send("item");
  },
});

app.listen(3000, () => {
  console.log(3000, "server open");
});
