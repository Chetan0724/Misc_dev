// Props
// One -> Parent Component
// User -> Child Component

const One = () => {
  return (
    <User
      img="https://picsum.photos/200/300"
      name="chetan"
      age={22}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
};

const User = ({ img, name, age, isMarried, hobbies }) => {
  // console.log(props);
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried}</h3>
      <h4>Hobbies: {hobbies}</h4>
    </section>
  );
};

export default One;

// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>Is married: {props.isMarried}</h3>
//       <h4>Hobbies: {props.hobbies}</h4>
//     </section>
//   );
// };

// export default One;