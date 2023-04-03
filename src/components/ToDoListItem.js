export default function ToDoListItem({
  id,
  value,
  completed,
  onValueChange,
  onStatusChange,
  onItemDelete,
}) {
  return (
    <li className={`todo_list__item${completed ? ' is_completed' : ''}`}>
      <label className="todo_list__item__check check_element">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => {
            onStatusChange(id, e.target.checked);
          }}
        />

        <span className="material-icons">check</span>
      </label>

      <label className="todo_list__item__text">
        <input
          type="text"
          value={value}
          disabled={completed}
          onChange={e => {
            onValueChange(id, e.target.value);
          }}
        />
      </label>

      <button
        type="button"
        className="todo_list__item__delete"
        onClick={() => onItemDelete(id)}
      >
        <span className="material-icons">close</span>
      </button>
    </li>
  );
}
