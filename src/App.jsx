import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((res) => setTodos(res.data));
  }, []);

  return (
    <div className="app-container">
      <div className="todos">
        <h2>Todos & React Query</h2>
        {todos.map((todo) => (
          <div
            className={`todo ${todo.completed && "todo-completed"}`}
            key={todo.id}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
