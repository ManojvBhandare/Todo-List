import { useRef } from "react";

export const InputBox = (props) => {
  const inputbox = useRef();

  const handleAddTask = () => {
    const taskText = inputbox.current.value.trim();
    console.log("Task text:", taskText); // Accessing input value correctly
    if (taskText !== "") {
      props.todoAdder(taskText); // Passing task text to the parent component
      inputbox.current.value = ""; // Clearing the input field after adding the task
    }
  };

  return (
    <div>
      <input
        ref={inputbox}
        type="text"
        placeholder="Enter the task"
        className="min-w-[32rem] min-h-[3rem] rounded-lg text-lg border-none bg-slate-200 text-black focus:outline-none placeholder-gray-500 p-4"
      />
      <button
        className="bg-gray-600 min-w-[6rem] min-h-[3rem] ml-4 rounded-lg text-white p-4"
        onClick={handleAddTask} // Passing a callback function to onClick event
      >
        Add Task
      </button>
    </div>
  );
};
