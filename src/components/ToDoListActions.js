export default function ToDoListActions({
  activeCount,
  completedCount,
  onClearCompleted,
}) {
  let activeMessage;

  if (activeCount === 0) {
    activeMessage = `All done!`;
  } else {
    activeMessage = `${activeCount} task${activeCount !== 1 ? 's' : ''} left`;
  }

  return (
    <div className="todo_list__actions flex">
      <span className="todo_list__actions__count">{activeMessage}</span>

      <button
        className={`todo_list__actions__clear button${
          completedCount === 0 ? ' is_hidden' : ''
        }`}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}
