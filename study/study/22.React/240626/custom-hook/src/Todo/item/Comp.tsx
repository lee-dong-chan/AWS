import { FC } from "react";
import { Todo } from "../../hooks/TodoList";

export interface IProps {
  todo: Todo;
  idx: number;
  removeTodo: () => void;
  completeTodo: () => void;
}
const Comp: FC<IProps> = ({ todo, removeTodo, completeTodo, idx }) => {
  return (
    <div
      className="flex justify-between items-center
  gap-2
  p-1
  border-b
  border-dashed
  border-black"
    >
      <div>{todo.priority}</div>
      <div className="flex-1">{todo.content}</div>

      <label
        htmlFor={`item-${idx}`}
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
        {todo.isComplete ? "완료" : "진행중"}
        <input
          id={`item-${idx}`}
          className="hidden"
          type="checkbox"
          checked={todo.isComplete}
          onChange={completeTodo}
        />
      </label>
      <div>{todo.createdAt}</div>
      <div>{todo.limit}</div>

      <button
        className="border border-gray-400 rounded bg-gray-200 p-1 px-2"
        onClick={removeTodo}
      >
        삭제
      </button>
    </div>
  );
};

export default Comp;
