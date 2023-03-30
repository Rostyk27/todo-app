import ToDoListItem from './ToDoListItem';
import ToDoListForm from './ToDoListForm';
import { useState } from 'react';

export default function ToDoList() {
  const [isubmitted, setIsSubmitted] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(e.target.create_list_item.value);
  }

  return (
    <div className="todo_list__wrapper">
      <div className="container">
        <div className="todo_list__body">
          <ToDoListForm onSubmitForm={handleFormSubmit} />

          {isubmitted && (
            <ul className="todo_list__items">
              <ToDoListItem />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
