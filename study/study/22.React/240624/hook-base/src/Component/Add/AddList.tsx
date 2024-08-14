import { FC, ChangeEvent } from "react";
import Additem from "./Additem";

export interface IProps {
  content: string;
  priority: number;
  limit: string;
  changeContent({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changeLimit({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changePriority({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  submit(): void;
}

const AddList: FC<IProps> = ({
  content,
  priority,
  limit,
  changeContent,
  changeLimit,
  changePriority,
  submit,
}) => {
  return (
    <div>
      <Additem
        content={content}
        priority={priority}
        limit={limit}
        changeContent={changeContent}
        changeLimit={changeLimit}
        changePriority={changePriority}
        submit={submit}
      />
    </div>
  );
};

export default AddList;
