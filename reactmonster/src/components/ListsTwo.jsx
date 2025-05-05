const ListsTwo = () => {
  const usersInfo = [
    {
      username: "Chetan",
      email: "ydvchetan01@gmail.com",
      location: "Indore",
    },
    {
      username: "Virat",
      email: "viratbanglore18@gmail.com",
      location: "Delhi",
    },
    {
      username: "Rohit",
      email: "rohitsharmamumbai@gmail.com",
      location: "Mumbai",
    },
  ];
  return (
    <main>
      {/* {usersInfo.map((user) => ( */}
      {/* Destructuring */}
      {usersInfo.map(({ username, email, location }) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{location}</li>
          <li>{email}</li>
        </ul>
      ))}
    </main>
  );
};

export default ListsTwo;