import React from "react";
import Todo from "./Components/Todo.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    this.setState((state) => ({
      ...state,
      list: [...state.list, { content: "이것은 js 인가?", isComplete: false }],
    }));
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, idx) => (
          <Todo key={idx} item={item}></Todo>
        ))}
      </div>
    );
  }
}

export default App;
