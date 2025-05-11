import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Value of Count is ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default CounterEffect;
