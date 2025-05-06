import { useState } from "react";

const HookTwo = () => {
  const [movie, setMovie] = useState({
    title: "Welcome",
    ratings: 9,
  });

  const handleClick = () => setMovie({ ...movie, ratings: 5 });
  // {
  // const copyMovie = {
  //   ...movie,
  //   ratings: 5,
  // };

  // setMovie(copyMovie);

  // setMovie({ ...movie, ratings: 5 });
  //   };

  return (
    <section>
      <h1>Title: {movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </section>
  );
};

export default HookTwo;