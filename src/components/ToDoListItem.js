export default function ToDoListItem({
  useId,
  value,
  completed,
  onValueChange,
  onStatusChange,
  onItemDelete,
}) {
  return (
    <li className="todo_list__item" data-completed={completed}>
      <label className="todo_list__item__checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => {
            onStatusChange(useId, e.target.checked);
          }}
        />
      </label>

      <label className="todo_list__item__text">
        <input
          type="text"
          value={value}
          onChange={e => {
            onValueChange(useId, e.target.value);
          }}
        />
        <span></span>
      </label>

      <button
        type="button"
        className="todo_list__item__delete material-icons"
        onClick={() => onItemDelete(useId)}
      >
        close
      </button>
    </li>
  );
}
