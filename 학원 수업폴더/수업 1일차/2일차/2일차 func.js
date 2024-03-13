//함수의 선언식
// 참조변수
//fungtion A (){}---> 값을 넣고 반환받는다.
function a() {
  console.log("a 함수를 시작했다.");
}

// a();
console.log(a);
// 실행결과는 메모리 휩에있는 단순한 텍스트

function add(a, b) {
  console.log(a + b);
  return a + b; // 반환
  //   return;
  //   console.log(a); // 위에서 return을 통하여 무의미한 코드가 되었다.
}
let result = add(1, 2);
console.log(result); //undefined--->3

//함수의 선언식
//function 이름(매개 변수) {실행 코드}
//호출할 떄 --> 함수이름(인자);
//함수도 결국 무엇이다? 값이다.

const plus = add;
plus(1, 2);
console.log(plus(1, 2));

//표현식(변수선언을 햐두고 그곳에 함수를 할당하는 방식)
const minus = function (a, b) {
  return a - b;
};

console.log(minus(2, 3));

//익명함수
// function (a, b) {
//   ekdreturn a * b;
// };

//표현식= 변수선언 + 익명함수 할당

//즉시실행함수
//( function   (a, b) {
//     console.log(a * b)
//       return a * b;
//     })(4 , 5);// 잘안씀 {}함수스코프

const tempFunc = function (a, b) {
  a(b);
};

tempFunc(console.log, "내용을 확인중");
//함수를 인자로 전달할꺠 콜백함수 라고 부른다.

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
arr[0].introduce("반장");

const temp = arr.find(function (item) {
  if (item.name == "박성민") return true;
});
console;
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
    temp.num = num; // item.num 아래서 출력 원본 사용
    return temp;
  })
);
// 깊은 복사
console.log(arr);
console.log(
  arr.sort(function (a, b) {
    return a.age - b.age; // 빼서  판단
    // prev curr
  })
);

// 변수명, 함수명 << 식별자
//변수 식별자는 명사로 시작해야한다.
//함수 식별자는 동사로 시작해야한다.

const tempFunc1 = () => {};
// 화살표 함수

const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;
const getname = (item) => item.name;
console.log(arr.map(getname));
//함수에 대해서 바로 반환

//객체 내에다 만들면 매서드 밖에 만들면 함수

//콜백함수 자주사용-->
