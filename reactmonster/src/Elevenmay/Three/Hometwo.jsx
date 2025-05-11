// Importing our custom hook 👇
import useFetch from "./useFetch";

const Hometwo = () => {
  // using our custom hook 👇
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          );
        })}
    </>
  );
};

export default Hometwo;
