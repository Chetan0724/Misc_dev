import { useState } from "react";

const Three = () => {
  // CallBack Function
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    // setCount(count + 1);
    // console.log(count);
    // setCount(count + 1);
    // console.log(count);

    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Three;
