import { useState } from "react";
import "./styles.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {
    if (task.trim() === "") return;

    const item = {
      id: todoList.length + 1,
      text: task.trim(),
      completed: false,
    };
    setTodoList((prev) => [...prev, item]);
    setTask("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => addTodoItem()}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <span className={todo.completed ? "strikeThrough" : ""}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;