console.log("test2.js파일을 읽기시작했어");
console.log(global.b);
let text = "이건 es6문법이야";

module.exports = {
  consoleTest() {
    console.log(text);
  },
  consoleStr(str) {
    console.log(str);
  },
  setText(_text) {
    text = _text;
  },
};
