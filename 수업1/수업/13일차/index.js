let a = 2;

function func1() {
  let a = 1; //record
  console.log(a);
}

func1(); // 실행 컨텍스트 생성(func1)

{
  let a = 3;
  console.log(a);
}

{
  console.log(a);
}
//실행컨텍스트를 확인할수 있는거 스코프!
