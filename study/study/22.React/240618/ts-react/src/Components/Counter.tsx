import { Component, ReactNode } from "react";

export default class Counter extends Component<{}, { count: number }> {
  //제네릭
  constructor(props: {}) {
    super(props);
    this.state = { count: 1 };
  }
  handlerCount = () => {
    this.setState((state: { count: number }) => ({ count: state.count + 1 }));
  };

  render(): ReactNode {
    return (
      <button
        onClick={() => {
          this.setState((state: { count: number }) => ({
            count: state.count + 1,
          }));
        }}
      >
        {this.state.count}
      </button>
    );
    // <button onClick={this.handlerCount}>{this.state.count}</button>;
  }
}
