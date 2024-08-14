import { FC, ChangeEvent } from "react";
import { TodoData as ITodo } from "../../../hooks/TodoList";

interface IProps {
  content: string;
  priority: number;
  limit: string;
  ChangeContent({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  ChangePriority({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  ChangeLimit({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  submit(): void;
}

const Comp: FC<IProps> = ({
  content,
  limit,
  priority,
  submit,
  ChangeContent,
  ChangeLimit,
  ChangePriority,
}) => {
  return (
    <div className="flex items-center gap-2 p-1 border-b-4 border-black  border-duble">
      <label htmlFor="todo-content">Todo:</label>

      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        id="todo-priority"
        value={priority}
        onInput={ChangePriority}
        //   onKeyUp={({ key }: KeyboardEvent<HTMLInputElement>) => {
        //     if (key == "Enter") {
        //       this.add();
        //     }
        //   }}
      ></input>
      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        id="todo-content"
        value={content}
        onInput={ChangeContent}
        //   onKeyUp={({ key }: KeyboardEvent<HTMLInputElement>) => {
        //     if (key == "Enter") {
        //       this.add();
        //     }
        //   }}
      ></input>
      <input
        className="flex-1 border rounded border-gray-500"
        type="date"
        id="todo-limit"
        value={limit}
        onInput={ChangeLimit}
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
        onClick={submit}
      >
        추가
      </button>
    </div>
  );
};

export default Comp;
