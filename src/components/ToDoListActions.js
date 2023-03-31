export default function ToDoListActions({ activeCount, onClearCompleted }) {
  let activeMessage;

  if (activeCount === 0) {
    activeMessage = `All done!`;
  } else {
    activeMessage = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
  }

  return (
    <div className="todo_list__actions flex">
      <span className="todo_list__actions__count">{activeMessage}</span>

      <button className="todo_list__actions__clear" onClick={onClearCompleted}>
        Clear completed
      </button>
    </div>
  );
}