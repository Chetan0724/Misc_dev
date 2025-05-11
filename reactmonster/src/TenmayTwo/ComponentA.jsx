import ComponentB from "./ComponentB";

// const ComponentA = ({ name }) => {
const ComponentA = () => {
  return (
    <div>
      {/* <ComponentB name={name} /> */}
      <ComponentB />
    </div>
  );
};

export default ComponentA;
