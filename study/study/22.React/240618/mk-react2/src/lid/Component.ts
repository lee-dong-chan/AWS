export interface IComponent {
  setState(newState: State): void;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentDidUnmount(): void;
  render(): string;
}

type State = { [Key: string]: any };

export default class Component {
  protected state: State = {};
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
  setState(newState: State): void {
    let isNewState = false;
    Object.keys(newState).forEach((key: keyof State) => {
      if (this.state[key] != newState[key]) {
        isNewState = true;
      }
    });

    if (isNewState) {
      this.state = { ...this.state, ...newState };
      this.rerender();
      this.componentDidUpdate();
    }
  }
  // ({}=={}) false 메모리 힙의 주소가 다르기때문에 다르다 판단
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
