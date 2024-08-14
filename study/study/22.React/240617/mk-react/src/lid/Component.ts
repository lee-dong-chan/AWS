export interface IComponent {
  setState(newStare: State): void;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentDidUnmount(): void;
  render(): string;
}

type State = { [Key: string]: any };

export default class Component {
  protected state: State;
  //부모자식간에만 가능 -->외부접근은 불가 상속받은 자식은 사용가능
  private parent: HTMLElement;
  //React에서 가장 기초되는 단위 << 어떤단위?
  //엘리먼트(영역)
  //React의 중요개념 :VDOM,state
  //필요한 메서드는?
  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.rerender();
    this.componentDidMount();
  }
  setState(newStare: State): void {
    this.state = newStare;
    this.rerender();
    this.componentDidUpdate();
  }
  componentDidMount(): void {}
  componentDidUpdate(): void {}
  componentDidUnmount(): void {}
  render(): string {
    return "";
  }
  private rerender(): void {
    this.parent.innerHTML = this.render();
  }
}
