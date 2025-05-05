const Expressions = () => {
  const myName = "Chetan Yadav";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <section>
      <p>2 + 2</p>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friends List: {["Alex", "John", "Washed", "Jordan"]}</p>
      <p>2 * 2 = {multiply(2, 2)}</p>
      <p className={specialClass}>This is special class</p>
    </section>
  );
};

export default Expressions;
