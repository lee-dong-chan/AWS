interface IMyMath {
  add(a: number, b: number): number;
  add(a: string, b: string): number;
  //    부모가 작성해 둔것을 자식이 재정의 override
  //    매개변수를 다르게 주어 여러방식으로 가져옴 overload --> ex)console.log() ,new Date() ...
}

// 어디까지나 예시
//1 = number, 2 =string , 4 =object ,8 = array 비트연산

class MyMath implements IMyMath {
  add(a: number | string, b: number | string): number {
    // 타입을 연달아 적을때 or연산자 사용
    //1 | 10 = 11 //2진법
    // 넘어온 인자가 number--> 01 , 11에 포함
    // 넘어온 인자 object => 4 , 100 , 011에 포함안됨
    return +a + +b; // 형변환
  }
}

interface IMyMath2 {
  add(a: number | null | undefined, b?: number): number;
  add(a: string | null | undefined, b?: string): number;
}

const myMath1: IMyMath = new MyMath();
MyMath.add();

class MyMath2 implements IMyMath2 {
  add(a: number | string | null | undefined, b?: number | string): number {
    // ? 를 붙어 인자를 비워둘수 있다
    // a는  무엇이라도 하나 들어가야함 b 는 비워둘수 있음
    if (!a) a = 1;
    if (!b) b = 1;
    return +a + +b;
  }
}

const myMath2: IMyMath = new MyMath2();
MyMath2.add();
