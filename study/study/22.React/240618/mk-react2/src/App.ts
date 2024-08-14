import Component from "./lid/Component";
import Counter from "./Componunts/Counter";
export default class App extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ test: 1 });
    new Counter(document.getElementById("counter"));
  }
  override componentDidMount(): void {
    console.log("now test");
  }
  // override 부모의 매서드를 재정의 했다는것을 알려주기위해 사용
  componentDidUpdate(): void {
    console.log("testing update");
    setTimeout(() => {
      this.setState({ test: this.state.test });
    }, 1000);
  }

  //overloading
  //   componentDidMount(str: string): void {
  //     console.log("now test");
  //     return str;
  //   }
  override render() {
    console.log(this.state);
    return `<div>${this.state?.test}
    <div id="counter"></div>
    <div>`;
  }
}
