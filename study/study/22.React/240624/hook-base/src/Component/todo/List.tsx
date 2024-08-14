import { FC } from "react";
import { Todo as TodoItem } from "../../lid/todo";
import Item from "./item";
import { IProps as Tofoprops } from "./todo";
export interface IProps {
  list: TodoItem[];
  complete(idx: number): void;
  removeItem(idx: number): void;
}

const List: FC<IProps> = ({ list, complete, removeItem }) => {
  return (
    <div>
      {list
        //   .filter((item=>!item.getIsComplete()))
        .map((item: TodoItem, idx: number) => (
          <Item
            key={idx}
            item={item}
            idx={idx}
            complete={() => complete(idx)}
            removeItem={() => removeItem(idx)}
          />
        ))}
    </div>
  );
};

export default List;
