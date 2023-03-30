export default function ToDoListFilter({ onFilterItems }) {
  return (
    <ul className="todo_list__filters">
      <li className="todo_list__filter is_active">
        <a
          href="#"
          onClick={e => {
            onFilterItems(null);
            console.dir(e.target);
          }}
        >
          All
        </a>
      </li>
      <li className="todo_list__filter">
        <a
          href="#"
          onClick={e => {
            onFilterItems(false);
            console.dir(e.target);
          }}
        >
          Active
        </a>
      </li>
      <li className="todo_list__filter">
        <a
          href="#"
          onClick={e => {
            onFilterItems(true);
            console.dir(e.target);
          }}
        >
          Completed
        </a>
      </li>
    </ul>
  );
}
