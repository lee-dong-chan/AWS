const router = require("express").Router();
const crypto = require("crypto");

const sessions = {};

// const salt = (await crypto.randomBytes(64)).toString("base64");

router.get("/set", (req, res) => {
  const id = Date.now();
  res.cookie("user", id, {
    signed: true,
  });
  //s%3A1.E8d5%2BqHvtoRa81DxWMn1MgOyHoaIIEARCHxdA33Dyqw
  sessions[id] = 1;
  res.send("setting server");
});

router.get("/get", (req, res) => {
  console.log(req.signedCookies.user);
  res.send({ user: sessions[req.signedCookies.user] });
});
module.exports = router;
