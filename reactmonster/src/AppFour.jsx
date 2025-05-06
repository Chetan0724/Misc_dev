const Move = () => {
  function moveHandler() {
    alert("Mouse move event fired");
    console.log("Mouse move event fired");
  }
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
      cupiditate voluptates, veniam maxime eligendi explicabo. Sapiente aliquam
      atque amet rem.
    </p>
  );
};

const Copy = () => {
  const copyHandler = () => {
    console.log("Stop stealing my content");
  };

  return (
    <p onCopy={copyHandler}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus
      quas, nihil libero dolore placeat. Eos nisi nihil voluptatem minus?
    </p>
  );
};

const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  //   return <button onClick={() => console.log("you clicked me")}>Click</button>;
  return <button onClick={handleClick}>Click</button>;
};

const AppFour = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  );
};

export default AppFour;
