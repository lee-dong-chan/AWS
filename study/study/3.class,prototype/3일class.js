//javascript는 어떤 자료구조를 기반으로 두고 있을까?
//prototype을 기반으로 언어가 만들어졋다.
//변수 소문자로시작 명사
//함수 소문자로시작 카멜형 동사
//prototype
const date = new Date("2000.02.24"); //Date 같은녀석을 클래스라고 부른다.
//대문자로 시작하는 파스칼형
console.log(date);

function createPerson(name, age) {
  return { name, age };
}
function createPerson(name, age) {
  let classname = "웹4기";
  return { name, age, classname };
}

function Student() {
  this.class = "웹4기";
  this.into = function () {};
}

const student = new Student();
console.log(student);
console.log({ class: "웹 4기" });

function WebClass(name, age) {
  this.name = name;
  this.age = age; //--------------------------------->프로토타입체인 나에게없다면 부모객체를 찾아가서 확인
}

function GameClass(name, age) {
  this.name = name;
  this.age = age;
  this.class = "게임";
}
WebClass.prototype = student;
const smb = new WebClass("손민복", 29);
console.log(smb);
console.log(smb.class1);
// const arr = [
//   { name: "이정배", age: 23 },
//   { name: "박성민", age: 34 },
//   { name: "방지원", age: 29 },
//   { name: "정구진", age: 24 },
//   { name: "이동찬", age: 29 },
//   { name: "이승배", age: 25 },
//   { name: "송민복", age: 29 },
//   { name: "박성민", age: 27 },
//   { name: "김강문", age: 27 },
// ];
student.class = "웹5기";
//원본에 영향을 미친다.

const arr = [
  new WebClass("이정배,23"),
  new WebClass("박성민,34"),
  new WebClass("김강문,27"),
];

console.log(arr);

//class //class---->클레스 어떤값을 적용하여 나오는것은 객체
class WebClass2 {
  name;
  age; //------->#을 붙이면 밑에서 가져다 쓸수 없게 만든다--이 내부에서만 사용 가능 절대 접근 불가
  constructor(name, age) {
    //매서드 안에다
    this.name = name;
    this.age = age;
  }
}

const ldc = new WebClass2("이동찬", 29);
console.log(ldc);
ldc.age = 28;

class Students2 extends WebClass2 {
  class = "웹4기";
  constructor(name, age, className) {
    super(name, age); //super = Webclass2
    this.class = className;
  }
  //extends상속 예약어를 통하여
}

const ljb = new Students2("이정배", 29);
console.log(ljb);

//원본에 영향을 미치치 못한다 ---->상속받은 후에는 복사가 되여 원본을 바꾸어도 영향을 받지 않음

//new 예약어 --->class 가 이미 정해져있다
let num = 1;

console.log(num.toString());

num = new Number(1);
console.log(num);

num = new String(num);
console.log(num);

num = "1";
console.log(num);

arr1 = new Array();
console.log(arr1);
console.log(arr);

class Array2 {
  //// 배열과 같은 작동
  #count = 0;
  length = this.#count;
  push(value) {
    this[this.#count] = value;
    this.#count += 1;
    this.length = this.#count;
  }
  pop() {
    this.#count -= 1;
    const temp = this[this.#count];
    this[this.#count] = undefined;
    this.length = this.#count;
    return temp;
  }
  forEach(func) {
    for (let i = 0; i < this.#count; i++) {
      func(this[i]);
    }
  }
  map(func) {
    const temp = new Array2();
    for (let i = 0; i < this.#count; i++) {
      temp.push(func(this[i]));
    }
    return temp;
  }
}

const temparr = new Array2();
temparr.push(11);
console.log(temparr[0]);
console.log(temparr.length);
console.log(temparr.pop());
console.log(temparr[0]);
console.log(temparr.length);

temparr.push(1);
temparr.push(2);
temparr.push(3);
temparr.push(4);
temparr.push(5);
temparr.forEach(function (item) {
  console.log(item + 10);
});

const temparr2 = [];
temparr2.push(1);
temparr2.push(2);
temparr2.push(3);
temparr2.push(4);
temparr2.push(5);

temparr2.forEach(function (item) {
  console.log(item + 10);
});

console.log(
  temparr.map(function (item) {
    return item ** 2;
  })
);

const tempFunc = (item) => {
  console.log(item);
};

temparr2.forEach((item) => {
  console.log(item);
});
temparr2.forEach(tempFunc);
temparr.forEach(console.log); //--------------------->세가지가 모드 같음

//클래스 과제
//class 예약어를 사용하여 취미 데이터을 만들어 보자
//취미는 이름과 방법,소요시간(분),소요 비용(천원 단위)로 저장
//toString 호출시
//"이름" 은/는 약 '소요비용'만원을 사용하여 '소요시간' 동안 즐길수 있다 로 출력
