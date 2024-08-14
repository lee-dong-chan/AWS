import { ChangeEvent, Component, ReactNode, KeyboardEvent } from "react";

interface IProps {
  add(content: string): void;
}

interface IState {
  content: string;
}

export default class Add extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { content: "" };
  }
  add = (): void => {
    this.props.add(this.state.content);
    this.setState({ content: "" });
  };
  render(): ReactNode {
    return (
      <form
        className="flex items-center gap-2 p-1 border-b-4 border-black  border-duble"
        onSubmit={(e) => {
          e.preventDefault();
          if (this.state.content != "") {
            this.add();
          }
        }}
      >
        <label htmlFor="todo-content">Todo:</label>
        <input
          className="flex-1 border rounded border-gray-500"
          type="text"
          id="todo-content"
          value={this.state.content}
          onInput={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
            // console.log(e.target.value);
            this.setState({ content: value });
          }}
          //   onKeyUp={({ key }: KeyboardEvent<HTMLInputElement>) => {
          //     if (key == "Enter") {
          //       this.add();
          //     }
          //   }}
        ></input>
        <button
          className={[
            "border",
            "border-gray-400",
            "rounded",
            "p-1",
            "px-5",
            "has-[:checked]:bg-yellow-300",
            "has-[:checked]:text-red-700",
            "select-none",
          ].join(" ")}
          //   onClick={this.add}
        >
          추가
        </button>
      </form>
    );
  }
}
