import { FC, useState, useCallback } from "react";
import { Todo as TodoItem } from "../../lid/todo";
import TodoComp from "../../Component/todo/todo";
export interface IProps {}

const Todo: FC<IProps> = ({}) => {
  const [list, setlist] = useState<TodoItem[]>([]);

  //   const complete = useCallback((idx: number) => {
  //     list[idx].setComplate();
  //     setlist([...list]);
  //     //complete 메서드가 초기화되는 시기 언제> => DidMount
  //   }, [list]);
  //   const complete = ((idx: number) => {
  //     list[idx].setComplate();
  //     setlist([...list])}
  // 이 두 메서드는 다를 바가없다
  //매 render마다 새롭게 최기화ß

  const complete = useCallback((idx: number) => {
    setlist((list: TodoItem[]) => {
      list[idx].setComplate();
      return [...list];
    });
  }, []);

  const removeItem = useCallback((idx: number) => {
    setlist((list: TodoItem[]) => {
      return list.filter((_, i: number) => i != idx);
    });
  }, []);

  const addItem = useCallback(
    (content: string, priority: number, limit: string) => {
      setlist((list: TodoItem[]) => [
        ...list,
        new TodoItem(content, priority, limit),
      ]);
    },
    []
  );

  return (
    <TodoComp
      list={list}
      complete={complete}
      removeItem={removeItem}
      addItem={addItem}
    />
  );
};

export default Todo;

//continer 매서드
