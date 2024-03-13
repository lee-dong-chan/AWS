let arr = [1, 2, 3];
// js 에서 배열은 []로 만든다

console.log(arr[1]);
//순서에 대한 숫자를 index

for (let i = 0; i < 3; i++) {
  console.log(arr[i]);
}

const obj = {
  name: "이동찬",
  age: 29,
};

console.log(obj.name);
console.log(obj.age);

Math.random();
// math 또한 object (객채) 형식

const students = [];
const ljb = {
  name: "이정배",
  age: 23,
  hobby: "운동",
};

const bjw = {
  name: "방지완",
  age: 29,
  hobby: "게임",
};

const jgj = {
  name: "정구진",
  age: 24,
  hobby: "운동",
};

const bsm = {
  name: "박성민",
  age: 34,
  hobby: "운동",
};

const lsb = {
  name: "이승배",
  age: 27,
  hobby: "게임",
};

const smb = {
  name: "손민복",
  age: 29,
  hobby: "뒹굴",
};

const ngm = {
  name: "노가민",
  age: 31,
  hobby: "게임",
};

const kgm = {
  name: "김강민",
  age: 28,
  hobby: "게임",
};
console.log(students.length);
students.push(ljb);
// push 배열에 추가 , push에 경우에는 .을 붙여서 객체처럼 사용 가능
console.log(students.length);
console.log(students[0].hobby);
console.log(ljb.hobby);
students[0].hobby = "음악";
console.log(ljb.hobby);

students.push({
  name: "이동찬",
  age: 29,
  hobby: "게임",
});

console.log(students);

students.push(bjw, jgj, bsm, lsb, smb, ngm, kgm);
// 추후에 추가하는것 적용됨
// const arr1 = [1, '2' , [1, 2, 3], {}, true , undefined , null, symbol()];
//인뎃스

// // scorp =>{}
// for() {스코프}
// if() {스코프}
// while() {스코프}
// {}
// 블록 스코프

{
  let arr = [3, 2, 1];
}
// 스코프 안에서는 위에서 선언, 할당, 초기화한 놈과는 다른놈으로 인식.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 10; //전역변수

for (let i = 1; i < 10; i++) {
  console.log(i);
  // 지역변수
  //  다른것으로 인식하여 작동
}

// 객체에서의 {}객체 리터럴 객체와 스코프는 다르다

//저는 29살 이동찬 입니다 취미는 게임입니다.
//23, 2000년생 --> 저는 00년생 이정배입니다.
for (let i = 0; i < students.length; i++) {
  if (i == 1) {
    console.log(
      "저는" +
        students[i].age +
        "살 " +
        students[i].name +
        "입니다." +
        "취미는" +
        students[i].hobby +
        "입니다"
    );
  }
}

for (let i = 0; i < students.length; i++) {
  if (i == 1) {
    let age = (2024 - students[i].age).toString();
    console.log(
      students[i].age +
        "," +
        age +
        "년생" +
        "-->" +
        "저는" +
        age[2] +
        age[3] +
        "년생 " +
        students[i].name +
        "입니다."
    );
  }

  // 형변환 tostring()--->문자로 변경
}

{
  //매서드
  const arr = [1, 2, 3, 4, 5, 6];
  arr.push(7);
  console.log(arr.toString());
  //   추가
  arr.pop();
  console.log(arr.toString());
  //   빼기
  arr.shift();
  console.log(arr.toString());
  //  맨 앞에것을 뺌
  arr.unshift(0);
  console.log(arr.toString());
  //  맨앞에 더해줌
  arr.reverse();
  console.log(arr.toString());
  // 뒤집음
  arr.sort();
  console.log(arr.toString());
  // 정렬 ===> 객체를 가지고 있는것에는 적용안됨

  const arr1 = arr.slice(0, 3);
  console.log(arr1.toString());
  //   원본을 보존함--> 0-3까지 콤마부분을 숫자매겨서 자름.
  console.log(arr.toString());
  //원본이 보존되여 그대로 나옴
  console.log(arr.join("-"));
  //   배열 사이에 입력문자 를 추가하여 합침
  console.log(arr.indexOf(3));
  //배열에서 해당 값을 가지고 있는 위치를 찾아줌
}
//   console.log(arr.find(3));
{
  const obj = {};
  obj.a = 1;
  console.log(obj);
  obj.students = students;
  console.log(obj);
}

//심화
{
  const obj = { a: 2 };

  console.log(obj.a);
  console.log(obj["a"]);

  obj[0] = 1;
  obj[1] = 2;
  obj[2] = 3;
  console.log(obj[1]);
  const arr = [1, 2, 3];
  //arr == obj
}

{
  const arr = [1, 2];
  const obj = { arr };

  console.log(obj);
  // 객체에 배열을 바로 넣을수 있다.

  const obj2 = { arr1: [1, 2, 3] };
  const { arr1, arr2 } = obj2; //구조분해 할당---->const이용 이름을 그대로 가져와야하기 때문에
  console.log(arr1);
  console.log(arr2);
  const [a, b] = arr;
  console.log(a);
  console.log(b);
  const [c, ...d] = arr1; // ...스프레드 연산자 붙여서 가져옴
  console.log(c);
  console.log(d);
  //[1,2,3]=>[c,...d] => c = 1 ,d = [2,3]
}
