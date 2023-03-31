import ToDoListForm from './ToDoListForm';
import ToDoListFilter from './ToDoListFilter';
import ToDoListItem from './ToDoListItem';
import { useState, useEffect } from 'react';

export default function ToDoList() {
  const [items, setItems] = useState([]);
  const [thisId, setThisId] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  function handleSubmitForm(e) {
    e.preventDefault();
    const current = e.target.create_list_item.value;

    if (current) {
      setIsSubmitted(true);
      setThisId(thisId + 1);
      setItems([...items, { id: thisId, value: current, completed: false }]);
      e.target.create_list_item.value = '';
    }
  }

  function handleFilterItems(filter) {
    setCurrentFilter(filter);
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
    console.log(filteredItems);
  }, [filteredItems]);

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

          {isSubmitted && (
            <ul className="todo_list__items">
              {filteredItems.map(item => (
                <ToDoListItem
                  key={item.id}
                  useId={item.id}
                  value={item.value}
                  completed={item.completed}
                  onValueChange={handleValueChange}
                  onStatusChange={handleStatusChange}
                  onItemDelete={handleItemDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
