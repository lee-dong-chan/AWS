import { FC, useState, useCallback, ChangeEvent } from "react";
import {} from "../../lid/todo";
import AddList from "../../Component/Add/AddList";

export interface IProps {
  addItem(content: string, priority: number, limit: string): void;
}

const Add: FC<IProps> = ({ addItem }) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");

  const changeContent = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
    },
    []
  );
  const changePriority = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      const temp = +value;
      if (!isNaN(temp)) setPriority(temp);
    },
    []
  );
  const changeLimit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setLimit(value);
    },
    []
  );

  const submit = useCallback(() => {
    addItem(content, priority, limit);
    setContent("");
    setPriority(0);
    setLimit("");
  }, [content, priority, limit]);

  return (
    <AddList
      content={content}
      priority={priority}
      limit={limit}
      changeContent={changeContent}
      changeLimit={changeLimit}
      changePriority={changePriority}
      submit={submit}
    />
  );
};

export default Add;
