import ToDoListForm from './ToDoListForm';
import ToDoListFilter from './ToDoListFilter';
import ToDoListItem from './ToDoListItem';
import ToDoListActions from './ToDoListActions';
import { useState, useEffect } from 'react';

export default function ToDoList() {
  const savedItems = JSON.parse(localStorage.getItem('todo-items'));
  const isSaved = savedItems.length > 0;
  const [items, setItems] = useState(() => (isSaved ? savedItems : []));
  const [currentId, setCurrentId] = useState(() =>
    isSaved ? savedItems[savedItems.length - 1].id + 1 : 0
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCount, setActiveCount] = useState(0);

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
  }, [items]);

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

  return (
    <div className="todo_list__wrapper">
      <div className="container is_smaller">
        <div className="todo_list__body">
          <ToDoListForm onSubmitForm={handleSubmitForm} />

          {items.length > 0 && (
            <ToDoListFilter
              currentFilter={currentFilter}
              onFilterItems={handleFilterItems}
            />
          )}

          {(isSubmitted || isSaved) && items.length > 0 && (
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

          {items.length > 0 && (
            <ToDoListActions
              activeCount={activeCount}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  );
}
