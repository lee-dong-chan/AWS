const COLORS = ["gold", "blue", "red", "gray", "green"];
//상수컬러를 변수로 선언했다.

class Ball {
  //공에 대한 정보를 가지고 있는 클래스
  #num;
  #color;
  #isDraw;
  #elem;

  constructor(num) {
    //생성자 매서드
    this.#num = num;

    this.#elem = document.createElement(`span`);
    this.#elem.innerText = this.#num;
    this.#elem.classList.add("ball");

    // 1~10=>0
    this.#color = COLORS[parseInt((this.#num - 1) / 10)];
    // 1~45 =>1~10 =gold=0
    this.#elem.classList.add(this.#color);
  }

  //     this.#elem.classList.add(
  //       `unit${Math.floor((this.#num - 1) / 10) * 10 + 1}`
  //     );
  //   }

  draw(parentElem) {
    //그리기 매서드
    this.#isDraw = true; //그렷으니 그렷는 지에 대한 변수를true 참으로
    parentElem.append(this.#elem); // 부모 엘리먼트 에게 내가 갖고있는 엘리멘트를 추가해달라
  }

  remove(parentElem) {
    if (this.#isDraw) {
      //document
      parentElem.removeChild(this.#elem);
      this.#isDraw = false;
    }
  }
}
// nums = [];
// for (i = 1; i <= 45; i++) {
//   nums.push(new Ball(i));
//   nums[i - 1].draw(document.getElementById("lotto"));
// }

// for (i = 0; i <= 45; i++) {
//   nums.push(new Ball(i + 1));
//   nums[i].draw(document.getElementById("lotto"));
// }

// const ball = new Ball("1");
// ball.draw(document.getElementById("lotto"));
// const ball2 = new Ball("2");
// ball2.draw(document.getElementById("lotto"));
// const ball23 = new Ball("3");
// ball23.draw(document.getElementById("lotto"));

// ball.remove(document.getElementById("lotto"));
//----------------------------------------------------------->공에대한

class Lotto {
  #arr;
  #parentElem;
  #isLoading;

  constructor(rootname, Class) {
    this.#isLoading = false;
    this.#arr = [];
    for (let i = 0; i < 45; ++i) {
      this.#arr.push(new Class(i + 1));
    }

    this.#parentElem = document.createElement("ul");
    this.#parentElem.classList.add("lotto-list");
    document.getElementById(rootname).append(this.#parentElem);

    const tempBtnElem = document.createElement("button");
    tempBtnElem.innerText = "로또뽑기";
    tempBtnElem.classList.add("lotto-btn");
    tempBtnElem.onclick = () => {
      if (this.#isLoading) return;
      this.#isLoading = true;

      this.#arr.forEach((item) => {
        item.remove(this.#parentElem);
      });
      setTimeout(() => {
        this.#createLotto();
      }, 1000); //---- 1000분의 1초
      //   this.#createLotto();----->setTimeout 중요
    };
    document.getElementById(rootname).append(tempBtnElem);
  }

  // this.#arr.forEach((item) => item.draw(this.#parentElem));
  // this.#createLotto();

  #createLotto() {
    const tempArr = [];
    while (tempArr.length < 7) {
      const tempIdx = Math.floor(Math.random() * this.#arr.length);
      if (tempArr.indexOf(this.#arr[tempIdx]) == -1) {
        tempArr.push(this.#arr[tempIdx]);
      }
      //   tempArr.push(this.#arr[tempIdx]);
    }
    // tempArr.forEach((item) => item.draw(this.#parentElem));
    const tempInterval = setInterval(() => {
      tempArr[this.#parentElem.children.length].draw(this.#parentElem);
      if (this.#parentElem.children.length == tempArr.length) {
        clearInterval(tempInterval); //setInterval clearInterval 중요
        this.#isLoading = false;
      }
    }, 1000);
  }
}

const lotto = new Lotto("lotto", Ball, 30);
