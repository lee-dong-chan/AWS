// console.log(window);
// console.log(location); //주소에만 관련
// console.log(history);
// window.open("https://naver.com");
// open();
// window.location;
// window.history;
// window.console.log();------>윈도우 객체 안에존재 우리가 그동안 사용한것

// let
// var----> 안씀
// a = 0;
// console.log(window.a);
// // window.a =1;

// function a() {} // ----> 안씀
// const b = () => {};

// console.log(window.a);
// console.log(window.b);
document.getElementById("test").style.color = "blue";
document.getElementById("test").innerHTML =
  "정배야  <span>넌 찾아서 알고있엇지?<span>";
document.getElementsByTagName("span")[0].style.color = "red"; //------elements 여러개 배열처럼 작동 유사 배열

const temp = document.getElementsByTagName("span");

for (let i = 0; i < temp.length; i++) {
  temp[i].style.fontSize = "32px"; //----->fontSize 카멜형
}

document.getElementById("test").onclick = function (e) {
  // location.href = "https://naver.com";
  //   open("https://naver.com", "_blank");
  console.log(e);
};

// window.onclick = e;
// console.log(e);

//Event
//Handler|Listener|on
//handler << 이벤트 발생시 실행되는 함수
//Listener << 이벤트 발생을 받는 기능
//on click << 이벤트 발생시 실행되는 함수
// onclick = () => {};
// '()' => {} Handeler
//on << 이벤트 발생을 받는 기능
//Listner VS on
//Listener는 통합 관리 시트템| on 하나하나가 갖고있는 실행 함수

//클릭했을 떄 --> onclick(인수);

//테이블에 목록 작성하기

[...document.getElementsByClassName("test")].forEach((item) => {
  item.innerHTML = "이정배";
  item.onclick = (e) => {
    alert("정배야. 총대를 매라");
  };
});

const arr = [
  { name: "이정배", age: 23 },
  { name: "박성민", age: 34 },
  { name: "방지완", age: 29 },
  { name: "정구진", age: 24 },
  { name: "이동찬", age: 29 },
  { name: "이승배", age: 25 },
  { name: "송민복", age: 29 },
  { name: "박성민", age: 27 },
];

const tbody = document.getElementById("student-list");
tbody.innerHTML = "";

arr.forEach((item, i) => {
  item.num = i + 1;
  tbody.innerHTML += `<tr>
  <td>${item.num}\uAc00 </td>
  <td>${item.name}</td>
  <td>${item.age}</td>
  </tr>`;
  //${자바스크립트입력가능}
  //템플릿 리터널(`)--->줄바꿈 등등 적용
});

const drawlist = (sortFunc) => {
  tbody.innerHTML = "";
  arr.sort(sortFunc);
  arr.forEach(({ num, name, age }) => {
    tbody.innerHTML += `<tr>
    <td>${num}</td>
    <td>${name}</td>
    <td>${age}</td>
    </tr>`;
  });
};

document.getElementById("num").onclick = () => {
  drawlist((a, b) => a.num - b.num);
};

document.getElementById("name").onclick = () => {
  drawlist((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};
document.getElementById("age").onclick = () => {
  drawlist((a, b) => a.age - b.age);
};

///과제 계산기 만들기

//0-9까지 숫자를 포함하고

//+ - / * 숫자 기호 숫자 선택하면 값
