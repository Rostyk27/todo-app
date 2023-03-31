export default function ToDoListFilterItem({
  status,
  isActive,
  onFilterChange,
}) {
  return (
    <li className={`todo_list__filter${isActive ? ' is_active' : ''}`}>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onFilterChange(status);
        }}
      >
        {status}
      </a>
    </li>
  );
}
