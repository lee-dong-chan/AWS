import Item from "./item";

export interface ITitle<S> {
  key: keyof S;
  name: string;
  isStrech?: boolean;
}

interface IProps<T> {
  list: T[];
  titleList: ITitle<T>[];
}

const List = <T extends {}>({ list, titleList }: IProps<T>): JSX.Element => {
  return (
    <ul>
      <li>
        <ul className="flex justify-between">
          {titleList.map(
            ({ name, isStrech = false }: ITitle<T>, idx: number) => (
              <li
                key={`title-${idx}`}
                className={`w-16 ${isStrech ? "flex-1" : "text-center"}`}
              >
                {name}
              </li>
            )
          )}
        </ul>
      </li>
      <li>
        {list.map((item: T, idx: number) => (
          <Item<T> key={`item-${idx}`} item={item} titles={titleList} />
        ))}
      </li>
    </ul>
  );
};

export default List;
