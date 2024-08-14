//custom hook

import { useCallback, useState } from "react";

export interface TodoData {
  content: string;
  priority: number;
  limit: string;
}

export interface Todo extends TodoData {
  isComplete: boolean;
  createdAt: string;
}

// class TodoList implements Todo {
//   content: string;
//   priority: number;
//   constructor(content,pri) {
//     this.content = content;
//   }
// }

const useTodoList = () => {
  const [list, setList] = useState<Array<Todo>>([
    {
      content: "test",
      isComplete: false,
      priority: 1,
      createdAt: "2024-06-26",
      limit: "2024-06-27",
    },
  ]);

  const addTodo = useCallback((todo: TodoData) => {
    setList((list: Array<Todo>) => [
      ...list,
      {
        ...todo,
        isComplete: false,
        createdAt: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`,
      },
    ]);
  }, []);

  const removeTodo = useCallback((todo: Todo) => {
    setList((list) => list.filter((item) => item !== todo));
  }, []);

  const completeTodo = useCallback((todo: Todo) => {
    setList((list: Array<Todo>) =>
      list.map((item: Todo) =>
        item === todo ? { ...todo, isComplete: true } : item
      )
    );
  }, []);

  return { list, addTodo, removeTodo, completeTodo };
};

export default useTodoList;
