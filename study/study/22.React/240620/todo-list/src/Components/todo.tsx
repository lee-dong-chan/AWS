import { Component, ReactNode } from "react";

export interface ITodo {
  content: string;
  isComplete: boolean;
}

interface IProps {
  item: ITodo;
  id: string;
  complete(): void;
  remove(): void;
}
interface IState {}

interface IStyle<T> {
  getCenter(): T;
  getBorder(): T;
}

class Mystlye implements IStyle<string> {
  private center;
  private border;
  constructor() {
    this.center = "flex justify-center items-center";
    this.border = "border border-gray-700";
  }

  getCenter() {
    return this.center;
  }

  getBorder() {
    return this.border;
  }
}

class Todo extends Component<IProps, IState> {
  componentDidMount(): void {
    console.log(this.props);
  }
  render(): ReactNode {
    const {
      id,
      item: { content, isComplete },
      complete,
      remove,
    } = this.props;
    return (
      <div
        className={[
          "flex justify-between items-center",
          "gap-2",
          "p-1",
          "border-b",
          "border-dashed",
          "border-black",
        ].join(" ")}
      >
        ß<div className="flex-1">{content}</div>
        <label
          htmlFor={id}
          className={[
            "flex justify-center items-center",
            "border border-gray-700",
            "rounded",
            "w-[4rem]",
            "p-1",
            "px-2",
            "has-[:checked]:bg-yellow-300",
            "has-[:checked]:text-red-700",
            "select-none",
          ].join(" ")}
        >
          {this.props.item.isComplete ? "완료" : "진행중"}
          <input
            id={id}
            className="hidden"
            type="checkbox"
            checked={isComplete}
            onChange={complete}
          />
        </label>
        <button
          className="border border-gray-400 rounded bg-gray-200 p-1 px-2"
          onClick={remove}
        >
          삭제
        </button>{" "}
      </div>
    );
  }
}

export default Todo;
