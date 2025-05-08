import { useState } from "react";
import One from "./componentsThree/One";
import Two from "./componentsThree/Two";
import Three from "./componentsThree/Three";
import Four from "./componentsThree/Four";
import Five from "./componentsThree/Five";
import Exercise from "./componentsThree/Exercise";
import TodoList from "./componentsThree/TodoList";

const AppSeven = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <One count={count} onClickHandler={() => setCount(count + 1)} />
      <Two count={count} onClickHandler={() => setCount(count + 1)} />
      <Three />
      <Four />
      <Five />
      <Exercise />
      <TodoList />
    </section>
  );
};

export default AppSeven;
