//콜백지옥

// setTimeout(() => {
//   let n = 100;
//   console.log(n);
//   settimeout(() => {});
// });

// const countdown = (n, func, n1) => {
//   setTimeout(() => {
//     console.log(n);
//     if (func) func(n1);
//   }, 1000);
// };

//promis
const count = function (n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n); // 완료시 결과 전달
    }, 1000);
    reject("에러낫어"); //catch로 에러 잡아주기위해서 전다
  });
};
// count(1)
//   .then((data) => {
//     return count(data + 1);
//   })
//   .then((data) => {
//     return count(data + 1);
//   })
//   .then((data) => {
//     return count(data + 1);
//   })
//   .then((data) => {
//     return count(data + 1);
//   })

//   .then((data) => {
//     console.log(data + "완료");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// 중요
const asyncCount = async function () {
  try {
    //promise의 상태 : 
    //pendding : 코드가 실행되고 있는 상태, 결과가 나오지않은 상태
    //Fulfilled : 성공(resolve)
    //rjected : 실패(reject)
    
    let nowCount = 1;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
  } catch (err) {
    console.log(err);
  }
};
asyncCount(); // == promise 인스턴스 객체와 같다.
