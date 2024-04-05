const router = require("express").Router();

const user = require("./user");
const board = require("./board");
// const cookieTest = require("./cookie_test");
router.use((req, res, next) => {
  res.templateData = {
    title: "",
    style: ["/index.css"],
  };
  next();
});
router.use("/user", user);
router.use("/", board);

module.exports = router;
