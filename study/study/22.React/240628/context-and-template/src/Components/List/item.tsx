import { ITitle } from ".";

const Item = <T extends {}>({
  item,
  titles,
}: {
  item: T;
  titles: ITitle<T>[];
}): JSX.Element => {
  return (
    <li>
      <ul className="flex justify-between">
        {titles.map(({ key, isStrech }: ITitle<T>, idx: number) => (
          <li
            key={`item-${idx}`}
            className={`w-16 truncate ${isStrech ? "flex-1" : "text-center"}`}
          >{`${item[key]}`}</li>
        ))}
      </ul>
    </li>
  );
};

export default Item;
