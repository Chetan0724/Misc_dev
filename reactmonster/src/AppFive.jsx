import { useState } from "react";

const AppFive = () => {
  //   const counter = useState(0);
  //   console.log(counter);

  const [count, setCount] = useState(0);

  //   const increment = () => count + 1;
  //   const increment = () => {
  //     console.log("updated in background but not in ui bcoz of no re-rendering");
  //   };
  //   const decrement = () => count - 1;
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default AppFive;
