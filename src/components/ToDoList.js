import ToDoListForm from './ToDoListForm';
import ToDoListFilter from './ToDoListFilter';
import ToDoListItem from './ToDoListItem';
import ToDoListActions from './ToDoListActions';
import { useState, useEffect } from 'react';

export default function ToDoList() {
  const savedItems = JSON.parse(localStorage.getItem('todo-items'));
  const isSavedItems = savedItems.length > 0;
  const [items, setItems] = useState(() => (isSavedItems ? savedItems : []));
  const [currentId, setCurrentId] = useState(() =>
    isSavedItems ? savedItems[savedItems.length - 1].id + 1 : 0
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCount, setActiveCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('todo-items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (currentFilter === 'active') {
      setFilteredItems(items.filter(item => !item.completed));
    } else if (currentFilter === 'completed') {
      setFilteredItems(items.filter(item => item.completed));
    } else {
      setFilteredItems(items);
    }
  }, [items, currentFilter]);

  useEffect(() => {
    setActiveCount(items.filter(item => !item.completed).length);
    setCompletedCount(items.length - activeCount);
  }, [items, activeCount]);

  function handleSubmitForm(e) {
    e.preventDefault();
    const current = e.target.create_list_item.value;

    if (current) {
      setIsSubmitted(true);
      setCurrentId(currentId + 1);
      setItems([...items, { id: currentId, value: current, completed: false }]);
      e.target.create_list_item.value = '';
    }
  }

  function handleToggleAll(isChecked) {
    if (isChecked) {
      setItems(items.map(item => ({ ...item, completed: true })));
    } else {
      setItems(items.map(item => ({ ...item, completed: false })));
    }
  }

  function handleFilterItems(filter) {
    if (filter !== currentFilter) {
      setCurrentFilter(filter);
    }
  }

  function updateItemProp(id, propName, propValue) {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return { ...item, [propName]: propValue };
        } else {
          return item;
        }
      })
    );
  }

  function handleValueChange(id, newValue) {
    updateItemProp(id, 'value', newValue);
  }

  function handleStatusChange(id, isCompleted) {
    updateItemProp(id, 'completed', isCompleted);
  }

  function handleItemDelete(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function handleClearCompleted() {
    setItems(items.filter(item => !item.completed));
  }

  const isAnyItems = items.length > 0;

  return (
    <div className="todo_list__wrapper">
      <div className="container is_smaller">
        <div className="todo_list">
          <ToDoListForm
            onSubmitForm={handleSubmitForm}
            onToggleAll={handleToggleAll}
            activeCount={activeCount}
            isAnyItems={isAnyItems}
          />

          {isAnyItems && (
            <ToDoListFilter
              currentFilter={currentFilter}
              onFilterItems={handleFilterItems}
            />
          )}

          {(isSubmitted || isSavedItems) && isAnyItems && (
            <ul className="todo_list__items">
              {filteredItems.map(item => (
                <ToDoListItem
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  completed={item.completed}
                  onValueChange={handleValueChange}
                  onStatusChange={handleStatusChange}
                  onItemDelete={handleItemDelete}
                />
              ))}
            </ul>
          )}

          {isAnyItems && (
            <ToDoListActions
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  );
}
