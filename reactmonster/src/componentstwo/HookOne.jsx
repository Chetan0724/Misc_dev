import { useState } from "react";

const HookOne = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);
  const addOneFriend = () => setFriends([...friends, "chetan"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "John"));
  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f == "Alex" ? "Alex Smith" : f)));
  };

  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove One Friend</button>
      <button onClick={updateOneFriend}>Update one Friend</button>
    </section>
  );
};

export default HookOne;