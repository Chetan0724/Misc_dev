import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleTask = () => {
    setTasks(tasks.push());
  };
  return (
    <div>
      <input type="text" name="" id="" placeholder="Enter Task" />
      <button onClick={handleTask}>Add task</button>
    </div>
  );
};

export default TodoList;