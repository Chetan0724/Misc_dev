import { createContext } from "react";
import ComponentA from "./ComponentA";

export const Data = createContext();

export const Data1 = createContext();
// Create Instance

const Appten = () => {
  const name = "Chetan";
  const age = 23;
  return (
    <div>
      {/* Use Provider Property */}
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          {/* Prop drilling */}
          {/* <ComponentA name={name} /> */}
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default Appten;