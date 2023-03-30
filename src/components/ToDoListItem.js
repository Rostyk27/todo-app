export default function ToDoListItem() {
  return (
    <li className="todo_list__item">
      <label className="todo_list__item__checkbox">
        <input type="checkbox" />
      </label>

      <label className="todo_list__item__text">
        <input type="text" />
      </label>

      <button type="button" className="todo_list__item__delete">
        X
      </button>
    </li>
  );
}
