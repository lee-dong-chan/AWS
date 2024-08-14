//비동기 통신: fetch, axios
//fetch : XHLHttp

const form = document.forms.login;
const emailCheckElem = document.getElementById("email");
const pwCheckElem = document.getElementById("pw");

let isEmail = false,
  isPw = false;

form.email.oninput = (e) => {
  //[a-z0-9]+@[a-z]+\.[a-z]{2,3}
  // ^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
  const emailReg = /^[a-z0-9가-힣]+@[a-z]+\.[a-z]{2,3}$/; //REgExp 정규표현식
  console.log(emailReg.test(e.target.value));

  isEmail = false;
  if (!emailReg.test(e.target.value)) {
    emailCheckElem.innerHTML = "이메일 형식을 지켜주세요";
  } else {
    isEmail = true;
    emailCheckElem.innerHTML = "";
  }
};

form.pw.oninput = (e) => {
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/; //REgExp
  console.log(pwReg.test(e.target.value));
  isPw = false;
  inputPw = e.target.value; //윈도우쪽으로 글로벌 변수로 들어감
  console.log(inputPw);
  if (e.target.value.length < 8 || e.target.value.length > 30) {
    pwCheckElem.innerHTML = "비밀번호는 8글자 이상, 30글자 이하로 작성하세요";
  } else if (!pwReg.test(e.target.value)) {
    pwCheckElem.innerHTML = "비밀번호는 영어, 특수문자, 숫자를 포함하세요";
  } else {
    isPw = true;
    pwCheckElem.innerHTML = "";
  }
};

form.onsubmit = async (e) => {
  e.preventDefault();
  if (!isEmail || !isPw) return;

  try {
    const response = await fetch("http://localhost:8000/user/login", {
      method: "post",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: form.email.value, pw: form.pw.value }),
      credentials: "include",
    });

    console.log(response.status);
  } catch (err) {
    console.error(err);
  }
};
