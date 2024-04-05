const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(decodeURI(req.headers.cookie));
  console.log(req.cookies.name);
  console.log(req.signedCookies.name);
  if (req.cookies.name != undefined) {
    res.cookie("name", req.cookies.name, {
      // maxAge: 10 * 1000 // 기간설정,최대나이 stopwarch
      expires: new Date(Date.now() + 10000), //기준 설정 alarm
      //   path: "/",// 해당 path에 대하여 설정
      //   secure: true,// https 일때만 쿠기적용
      signed: true, //쿠키를 암호화 한다(난독화)
      httpOnly: true, //http socket 통신 등은 적용되지 않는다.
    });
  }
  res.send("쿠키를 확인하세요");
});

router.get("/add", (req, res) => {
  res.cookie("name", "김강문");
  res.redirect("/");
});

router.get("/remove", (req, res) => {
  res.cookie("name", "김강문", { maxAge: 30 * 60 * 1000 });
  res.redirect("/");
});

module.exports = router;
