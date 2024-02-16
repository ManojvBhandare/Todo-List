import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/InputBox";
import { TaskList } from "./components/TaskList";
function App() {
  const [Todos, setTodos] = useState([]);

  function todoAdder(taskText) {
    setTodos([...Todos, { text: taskText, completed: false }]);
  }

  function handleCompleted(index) {
    const updatedTodos = Todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: true }; // Mark the completed task
      }
      return todo;
    }).filter((todo) => !todo.completed); // Filter out completed tasks
    setTodos(updatedTodos);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <InputBox todoAdder={todoAdder} />
      <div className="mt-4">
        <TaskList Todos={Todos} handleCompleted={handleCompleted} />
      </div>
    </div>
  );
}

export default App;
