// const Person = (props) => {

// Destructuring

const Person = ({ name, age }) => {
  return (
    <div>
      {/* <h2>Person name: {props.name}</h2> */}

      <h2>Person name: {name}</h2>

      {/* <p>Person age: {props.age}</p> */}

      <p>Person age: {age}</p>
    </div>
  );
};

export default Person;
