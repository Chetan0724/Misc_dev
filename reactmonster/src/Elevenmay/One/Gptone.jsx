import { useReducer, useState } from "react";

const Gptone = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [taskText, setTaskText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Manager</h2>
      <input
        value={taskText}
        type="text"
        placeholder="Enter task"
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button>Add Task</button>

      <div style={{ marginTop: "10px" }}>
        <button>All</button>
        <button>completed</button>
        <button>Pending</button>
      </div>

      <ul>{}</ul>
    </div>
  );
};

export default Gptone;
