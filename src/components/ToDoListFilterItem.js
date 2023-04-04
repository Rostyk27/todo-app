export default function ToDoListFilterItem({
  name,
  isActive,
  onFilterChange,
  activeCount,
  completedCount,
}) {
  let countNumber = 0;

  if (name === 'active') {
    countNumber = activeCount;
  } else if (name === 'completed') {
    countNumber = completedCount;
  } else if (name === 'all') {
    countNumber = activeCount + completedCount;
  }

  return (
    <button
      className={`todo_list__filter button${isActive ? ' is_active' : ''}`}
      onClick={() => onFilterChange(name)}
    >
      {name} <span>({countNumber})</span>
    </button>
  );
}
