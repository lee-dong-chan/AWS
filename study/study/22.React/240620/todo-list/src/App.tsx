import React from "react";
import Todo, { ITodo } from "./Components/todo";
import Add from "./Components/add";
interface IProps {}

interface IState<T> {
  list: T[];
}

//<> << GENERIC:T
class App extends React.Component<IProps, IState<ITodo>> {
  constructor(props: IProps) {
    super(props);
    this.state = { list: [] };
  }
  // componentDidMount(): void {
  //   this.setState((state: IState<ITodo>) => ({
  //     ...state,
  //     list: [
  //       ...state.list,
  //       { content: "그제 점심은?", isComplete: false },
  //       { content: "어제 점심은?", isComplete: false },
  //       { content: "오늘 점심은?", isComplete: false },
  //       { content: "내일 점심은?", isComplete: false },
  //       { content: "미래 점심은?", isComplete: false },
  //     ],
  //   }));
  // }

  complete(idx: number) {
    this.setState((state: IState<ITodo>) => {
      this.state.list[idx].isComplete = !state.list[idx].isComplete;
      return state;
    });
  }

  add = (content: string): void => {
    this.setState((state: IState<ITodo>) => ({
      ...state,
      list: [...state.list, { content, isComplete: false }],
    }));
  };

  remove(idx: number) {
    this.setState((state: IState<ITodo>) => ({
      ...state,
      list: state.list.filter((_: ITodo, i: number) => i != idx),
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        <Add add={this.add}></Add>
        <div>
          {this.state.list.map((item: ITodo, idx: number) => (
            <Todo
              key={idx}
              item={item}
              id={`todo-complate-${idx}`}
              complete={() => this.complete(idx)}
              remove={() => this.remove(idx)}
            ></Todo>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
