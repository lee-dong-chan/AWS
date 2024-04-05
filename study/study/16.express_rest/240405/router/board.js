const router = require("express").Router();

router.get("/", (req, res) => {
  res.templateData.title = "게시판";
  if (req.cookies.user) {
    res.templateData.userTemplate = "info";
    res.templateData.name = req.cookies.user;
    res.templateData.style.push(`/user/${res.templateData.userTemplate}.css`);
  } else {
    res.templateData.userTemplate = "login";
    res.templateData.style.push(`/user/${res.templateData.userTemplate}.css`);
  }
  res.render("index", res.templateData);
});

router.get("/regist", (req, res) => {
  res.templateData.title = "게시판";
  res.templateData.userTemplate = "regist";
  res.templateData.style.push(`/user/${res.templateData.userTemplate}.css`);

  res.render("index", res.templateData);
});

module.exports = router;
