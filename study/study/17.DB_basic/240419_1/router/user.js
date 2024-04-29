const router = require("express").Router();
const { user } = require("../lib/mysql");
router.post("/regist", (req, res) => {
  user.create(req.body);

  res.redirect("/");
});

module.exports = router;
