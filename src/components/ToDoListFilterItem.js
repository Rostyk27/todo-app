export default function ToDoListFilterItem({ name, isActive, onFilterChange }) {
  return (
    <button
      className={`todo_list__filter button${isActive ? ' is_active' : ''}`}
      onClick={() => onFilterChange(name)}
    >
      {name}
    </button>
  );
}
