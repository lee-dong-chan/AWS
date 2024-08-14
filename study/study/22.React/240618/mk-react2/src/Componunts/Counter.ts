import Component from "../lid/Component";

export default class Counter extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ count: 0 });
    // document.getElementById("count-btn").onclick = () => this.handlerCount
    // document.getElementById("count-btn").onclick = function () {
    //   //function => thisbindng => this에대해 상위객체를 가르킨다.
    //   console.log(this);
    //   // this.handlerCount(); // handelerCount함수로 호출
    // };

    document.getElementById("count-btn").onclick = () => {
      // arrow function => 왜 카운트가 나왔을까? => thisbinding 작업을 안함 렉시컬 스코프이 this
      console.log(this);
      this.handlerCount(); // handelerCount함수로 호출
    };
  }
  componentDidUpdate(): void {
    document.getElementById("count-btn").onclick = () => {
      console.log(this);
      this.handlerCount();
    };
  }
  handlerCount() {
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return `<button id="count-btn">count:${this.state.count}</button>`;
  }
}
