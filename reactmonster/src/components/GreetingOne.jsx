const GreetingOne = () => {
  const greet = "Hello";
  const date = new Date();
  return (
    <div>
      <h1>{greet}</h1>
      <p>Date: {date.getDate()}</p>

      {/* <p>{date}</p> */}
      {/* Uncaught Error: Objects are not valid as a React child (found: [object Date]). */}
    </div>
  );
};

export default GreetingOne;