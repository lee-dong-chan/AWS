import { Suspense } from "react";
import Todo from "./Component/todo";

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Now Loading</h1>}>
      <Todo />;
    </Suspense>
  );
};

export default App;
