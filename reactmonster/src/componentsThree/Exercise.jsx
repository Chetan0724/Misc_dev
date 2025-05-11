import { useState } from "react";

const Exercise = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* <p>Value of Count is: {count}</p> */}
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Add +1</button>
      <button onClick={() => setCount(count - 1)}>Sub -1</button>
    </div>
  );
};

export default Exercise;
