import { FC } from "react";
import { Routes, Route, useParams } from "react-router-dom";

interface Iprops {}

const Test: FC = ({}) => {
  const params = useParams();

  return (
    <div>
      Testing
      <Routes>
        <Route path="/" element={<div>root test</div>}></Route>
        <Route path="/tt" element={<div>런</div>}></Route>
      </Routes>
    </div>
  );
};
export default Test;
