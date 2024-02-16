export const Task = (props) => {
  function handleCompletedButton() {
    props.handleCompleted(props.index);
  }
  return (
    <div className={`bg-slate-200 rounded-lg p-4 flex flex-col min-w-[20rem] `}>
      <div>
        <p className="text-lg font-medium">{props.todo.text}</p>
      </div>
      <div className="mt-2 min-w-content self-end left-0">
        <button
          className="mt-13 text-slate-600 italic"
          onClick={handleCompletedButton}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
