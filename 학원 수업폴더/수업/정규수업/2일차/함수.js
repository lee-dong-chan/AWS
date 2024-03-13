function a() {
  console.log("a 함수를 실행했다.");
}

//a();

function add(a, b) {
  console.log(a + b);
  return a + b; // 반환 << 함수의 코드를 멈춰준다.
  //console.log(a); 위에서 return 해서 무의미한 코드가 되었다.
}

let result = add(1, 2);
console.log(result); //undefined -> 3

// 함수의 선언식
//function 이름(매개변수) {실행코드}
//호출할떄 -> 함수이름(인자);
//함수도 결국 무엇이다> 값이다.

const plus = add;
plus(2, 3);

//표현식
const minus = function (a, b) {
  return a - b;
};
console.log(minus(2, 3));

//익명함수
//function (a,b) {
//return a * b ;
//};

//표현식 = 변수선언 + 익명함수 할당

//즉시 실행함수
(function (a, b) {
  console.log(a * b);
  return a * b;
})(4, 5); // 쓸일 별로 없음

const tenpFunc = function (a, b) {
  a(b);
};

tempFunc(console.log, "내용을 확인중");
//함수를 인자로 전달할경우 콜백함수라 부른다 . 자주사용

const arr = [
  {
    name: "이정배",
    age: 23,
    introduce: function (nick) {
      console.log(nick + "" + this.name + "입니다");
    },
  },
  { name: "박성민", age: 34 },
  { name: "박지완", age: 29 },
  { name: "정구진", age: 29 },
  { name: "이동찬", age: 29 },
  { name: "이승배", age: 25 },
  { name: "손민복", age: 29 },
  { name: "김강문", age: 27 },
];

arr[0].introduce("반장");

const temp = arr.find(function (item) {
  if (item.name == " 박성민") return true;
});
console.log(temp);

console.log(
  arr.filter(function (item) {
    return item.age < 29;
  })
);

arr.forEach(function (item) {
  console.log(item.name);
});

let num = 0;
console.log(
  arr.map(function (item) {
    const temp = { ...item };
    num += 1;
    temp.num = num;
    return temp;
  })
);
console.log(arr);

console.log(
  arr.sort(function (a, b) {
    return b.age - a.age;
    //prev,curr
  })
);

//변수명 ,함수명 << 식별자
//변수식별자는 명사로 시작해야한다.
//함수 식별자는 동사로 시작해야한다.

const tempFunc1 = () => {};
// 화살표 함수

const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const getName = (item) => item.name;

console.log(arr.map(getName));
