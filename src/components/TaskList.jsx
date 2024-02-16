import { Task } from "./Task";

export const TaskList = (props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {props.Todos.map((todo, index) => (
        <Task
          key={index} // Ensure each Task has a unique key prop
          index={index} // Pass the index of the task to the Task component
          todo={todo}
          handleCompleted={props.handleCompleted}
        />
      ))}
    </div>
  );
};
