import { useRef } from "react";
import FocusInput from "./FocusInput";
import Timer from "./Timer";

const AppTwo = () => {
  const inputElement = useRef(null);
  //   console.log(inputElement);
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Chetan";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write Chetan</button>
      <FocusInput />
      <Timer />
    </div>
  );
};

export default AppTwo;
