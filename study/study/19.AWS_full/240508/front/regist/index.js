// XMLHttpRequest;
//Ajax 아작스, 에이젝스
// - Asynchronous javascript And XML
// - 비동기 통신(Javascript를 이용한)
// XML : eXtensible Markup Language
// HTML : Hyper Text Markup Language

//const registForm =document.getElementById("regist")
const registForm = document.forms.regist;
console.log(registForm);

// form에서의 요청 보내기 == submit
const emailResultELem = document.getElementById("email-result");
const pwResultELem = document.getElementById("pw-result");
const checkResultELem = document.getElementById("pw-check-result");
const nickResultELem = document.getElementById("nick-result");

let isEmail = false,
  isPw = false,
  isCheck = false,
  isNick = false;

registForm.email.oninput = (e) => {
  //[a-z0-9]+@[a-z]+\.[a-z]{2,3}
  // ^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
  const emailReg = /^[a-z0-9가-힣]+@[a-z]+\.[a-z]{2,3}$/; //REgExp 정규표현식
  console.log(emailReg.test(e.target.value));

  isEmail = false;
  if (!emailReg.test(e.target.value)) {
    emailResultELem.innerHTML = "이메일 형식을 지켜주세요";
  } else {
    isEmail = true;
    emailResultELem.innerHTML = "";
  }
};
//글로벌 변수를 잡음
let inputPw;

registForm.pw.oninput = (e) => {
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/; //REgExp
  console.log(pwReg.test(e.target.value));
  isPw = false;
  inputPw = e.target.value; //윈도우쪽으로 글로벌 변수로 들어감
  console.log(inputPw);
  if (e.target.value.length < 8 || e.target.value.length > 30) {
    pwResultELem.innerHTML = "비밀번호는 8글자 이상, 30글자 이하로 작성하세요";
  } else if (!pwReg.test(e.target.value)) {
    pwResultELem.innerHTML = "비밀번호는 영어, 특수문자, 숫자를 포함하세요";
  } else {
    isPw = true;
    pwResultELem.innerHTML = "";
  }
};

registForm["pw-check"].oninput = (e) => {
  isCheck = false;
  if (e.target.value !== inputPw) {
    checkResultELem.innerHTML = "비밀번호가 일치하지 않습니다.";
  } else {
    isCheck = true;
    checkResultELem.innerHTML = "";
  }
};

registForm.nick.oninput = (e) => {
  const nickReg = /^[A-Z|a-z|0-9|ㄱ-ㅎ|가-힣]{2,16}$/;
  isNick = false;
  console.log(e.target.value);
  if (e.target.value.lenght < 2 || e.target.value.length > 30) {
    nickResultELem.innerHTML = "닉네임 2글자 이상, 16글자 이하로 작성하세요";
  } else if (!nickReg.test(e.target.value)) {
    nickResultELem.innerHTML = "특수문자 제외 알파벳과 한글로 작성하세요";
  } else {
    isNick = true;
    nickResultELem.innerHTML = "";
  }
};
// \s 공백
// i 대소문자 무시
// g 글로벌
// const tempReg = /a/i; //대소문자 상관 x
// console.log(tempReg.test("cbAb"));

// const tempReg = /a/gi; //글로벌 대소문자 상관 x
// console.log(tempReg.test("cbbAb"));
// console.log("babab".replace(tempReg, "+"));
// console.log("babba".match(tempReg));

regist.onsubmit = (e) => {
  e.preventDefault(); // 엘리먼트의 기본기능을 멈춘다
  // console.log(registForm.email.value);
  // console.log(registForm.pw.value);
  // console.log(registForm["pw-check"].value);
  // console.log(registForm.nick.value);
  if (!(isEmail && isPw && isCheck && isNick)) {
    alert("내용 확인 후 다시 시도해주세요");
    return;
  }
  const xhr = new XMLHttpRequest();
  //   xhr.send()
  xhr.open("post", "http://localhost:8000/user/regist");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(
    JSON.stringify({
      email: registForm.email.value,
      pw: registForm.pw.value,
      "pw-check": registForm["pw-check"].value,
      nick: registForm.nick.value,
    })
  );
  xhr.onload = () => {
    if (xhr.status == 200) {
      alert("성공!");
      location.href = "http://127.0.0.1:8000";
    } else if (xhr.status == 400) {
      alert("비밀번호 확인");
      //권한 문제로 거절
    } else if (xhr.status == 409) {
      alert("중복됫어");
      //기존 서버 정보와 충돌
    } else {
      alert("알수 없는 오류 발생");
    }
  };
};
