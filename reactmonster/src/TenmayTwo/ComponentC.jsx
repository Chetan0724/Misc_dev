import { useContext } from "react";

import { Data, Data1 } from "./Appten";

// const ComponentC = ({ name }) => {
const ComponentC = () => {
  const userName = useContext(Data);
  const Age = useContext(Data1);

  return (
    <h1>
      My name is: {userName} and I'm {Age} years old.
    </h1>

    // <div>
    //   <h1>{name}</h1>
    // </div>

    // <Data.Consumer>
    //   {/* Callback function */}
    //   {(name) => {
    //     // return <h1>{name}</h1>;
    //     return (
    //       <Data1.Consumer>
    //         {(age) => {
    //           return (
    //             <h1>
    //               My name is: {name} and I'm {age} years old.
    //             </h1>
    //           );
    //         }}
    //       </Data1.Consumer>
    //     );
    //   }}
    // </Data.Consumer>
  );
};

export default ComponentC;
