// const Card = (props) => {
//   return <div>{props.children}</div>;
// };

// export default Card;

// Destructuring

const Card = ({ children }) => {
  return <div>{children}</div>;
};

export default Card;