import { ChangeEvent, FC, useCallback, useState } from "react";
import { TodoData as ITodo } from "../../../hooks/TodoList";
import Comp from "./Comp";

interface IProps {
  addTodo: (todo: ITodo) => void;
}

const Add: FC<IProps> = ({ addTodo }) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");
  const todo: ITodo = { content: content, priority: priority, limit: limit };

  const ChangeContent = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
    },
    []
  );
  const ChangePriority = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      const temp = +value;
      if (!isNaN(temp)) setPriority(temp);
    },
    []
  );
  const ChangeLimit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setLimit(value);
    },
    []
  );

  const submit = useCallback(() => {
    addTodo({ content, priority, limit });
    setContent("");
    setLimit("");
    setPriority(0);
  }, [content, priority, limit]);

  return (
    <div>
      <Comp
        content={content}
        limit={limit}
        priority={priority}
        ChangeContent={ChangeContent}
        ChangePriority={ChangePriority}
        ChangeLimit={ChangeLimit}
        submit={submit}
      />
    </div>
  );
};

export default Add;
