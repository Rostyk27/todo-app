import ToDoListFilterItem from './ToDoListFilterItem';
import { useState, useEffect } from 'react';

export default function ToDoListFilter({ onFilterItems }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'active', 'completed'];

  function handleFilterChange(filter) {
    setActiveFilter(filter);
    window.location.hash = filter;
    onFilterItems(filter);
  }

  useEffect(() => {
    const hashFilter = window.location.hash.replace('#', '');
    if (filters.includes(hashFilter)) {
      setActiveFilter(hashFilter);
      onFilterItems(hashFilter);
    }
  }, []);

  return (
    <ul className="todo_list__filters">
      {filters.map(filter => (
        <ToDoListFilterItem
          key={filter}
          status={filter}
          isActive={activeFilter === filter}
          onFilterChange={handleFilterChange}
        />
      ))}
    </ul>
  );
}
