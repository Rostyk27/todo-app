import ToDoListFilterItem from './ToDoListFilterItem';
import { useEffect } from 'react';

export default function ToDoListFilter({ currentFilter, onFilterItems }) {
  const filters = ['all', 'active', 'completed'];

  function handleFilterChange(filter) {
    window.location.hash = filter;
    onFilterItems(filter);
  }

  useEffect(() => {
    const hashFilter = window.location.hash.replace('#', '');
    if (filters.includes(hashFilter)) {
      onFilterItems(hashFilter);
    }
  });

  return (
    <div className="todo_list__filters">
      {filters.map(filter => (
        <ToDoListFilterItem
          key={filter}
          name={filter}
          isActive={currentFilter === filter}
          onFilterChange={handleFilterChange}
        />
      ))}
    </div>
  );
}
