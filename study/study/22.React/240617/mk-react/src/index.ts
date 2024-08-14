import App from "./App";

new App(document.getElementById("root"));

console.log("Hello World!");
let num: number;
num = 1;
// num = "1";
console.log(num);

//num = "1"; << 1을 할당함으로써 number Type를 강제한다.

let numStr: string = "1";
// console.log(num === numStr); 타입이달라 비교할수 없음
//Type에 대해서 정확하도 && 명확하게?

let obj: { a: number; b: string } = {
  a: 1,
  b: "1",
  //c: "testing", <<위에서 얘기하는 Type에 포함되지 않는다.
};

let obj2: any = {
  a: 1,
  b: "1",
  c: "testing",
};

function add(a: number, b: number): number {
  return a + b;
}
//Math.random
let obj3: unknown = add(1, 2); // any 이외의 다른 타입을 할당할 수 없다,  //any: 모든타입을 할당할 수 있다.
console.log(obj3);
obj3 = "3";

//let num1: number = obj3; 불가능
let num0: any = obj3;
let num1: any = 3;
let num2: number = num1;

type Test = {
  a: number;
  b: string;
};

type Test2 = Test & {
  c: Function;
};

type Test3 = Test2 & {
  d: string;
};
let test: Test = { a: 1, b: "1" };
let test1: Test2 = { a: 1, b: "1", c: (): void => {} };
let test2: Test3 = { a: 1, b: "1", c: (): void => {}, d: "1234" };
let test3: Test;

interface ITestClass {
  getA(): number;
  getB(): string;
}

class TestClass implements ITestClass {
  private a: number;
  private b: string;
  constructor() {
    this.a = 123;
    this.b = "123";
  }
  getA = (): number => {
    return this.a;
  };
  getB = (): string => {
    return this.b;
  };
}

// const testClass = new TestClass();
// testClass.a = 321;
// console.log(testClass.a);
// console.log(testClass.b); 외부에서 수정이 가능

const testClass: ITestClass = new TestClass();
// console.log(testClass.a);//private로 숨겨짐
console.log(testClass.getA());
console.log(testClass.getB());
// 외부에서 수정이 불가능
// 결합도 응집도 --> 객체지향

interface IPerson {
  getName(): string;
  getClassName(): string;
  getJob?: Function;
}

class Person implements IPerson {
  private name: string;
  private className: string; // 원래는 따로 빼는 것이 응집도에 맞다.

  constructor(name: string, className: string) {
    this.name = name;
    this.className = className;
  }
  getName(): string {
    return this.name;
  }
  getClassName(): string {
    return this.className;
  }
}

interface IStudent extends IPerson {}

class Student extends Person implements IStudent {
  //   private name: string;
  // company: string;//학생이 회사이 들어가 있는게 맞는가? 응집도 X
  //   private className: string;
  constructor(name: string, className: string) {
    // this.name = name;
    // this.className = className;
    // this.company = company;
    super(name, className);
  }
}

interface ITeacher extends IPerson {
  getJob(): string;
}
class Teacher extends Person implements ITeacher {
  job: string;
  constructor(name: string, className: string, job: string) {
    super(name, className);
    this.job = job;
  }
  getJob(): string {
    return this.job;
  }
}
const ljb: IStudent = new Student("이정배", "AWS");
const jkh: ITeacher = new Teacher("정경훈", "AWS", "교수");

console.log(ljb);

const arr: Array<IPerson> = [ljb, jkh];
arr.push(ljb);
arr.push(jkh);

console.log(arr);
jkh.getJob();
(arr[1] as ITeacher).getJob();
arr[1].getJob();
