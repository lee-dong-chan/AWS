import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { todoListState } from "../../context/todo";
import { useSetRecoilState, useRecoilValue } from "recoil";

interface IProps {}

const Add: FC<IProps> = () => {
  const [content, setContent] = useState("");

  const lists = useRecoilValue(todoListState); //getter
  const set = useSetRecoilState(todoListState);

  const saveContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const Add = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/api/todo", {
        content: content,
      });

      console.log(data.todo);
      set([...lists, data.todo]);
    } catch (err) {}
  };

  return (
    <div>
      <div className="p-2 flex">
        할일:
        <input
          className="mx-3 border w-[17rem]"
          type="text"
          value={content}
          onInput={saveContent}
        ></input>
        <Link to={"/"}>
          <button
            className="border mx-3 px-2 bg-yellow-300 rounded"
            onClick={() => {
              Add();
            }}
          >
            입력
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Add;
