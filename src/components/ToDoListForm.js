export default function ToDoListForm({
  onSubmitForm,
  onToggleAll,
  activeCount,
  isAnyItems,
}) {
  return (
    <form className="todo_list__form" onSubmit={onSubmitForm}>
      <label
        className={`todo_list__form__check check_element${
          !isAnyItems ? ' is_hidden' : ''
        }${activeCount === 0 && isAnyItems ? ' is_checked' : ''}`}
      >
        <input
          type="checkbox"
          disabled={!isAnyItems}
          checked={activeCount === 0 && isAnyItems}
          onChange={e => {
            onToggleAll(e.target.checked);
          }}
        />

        <span className="material-icons">done_all</span>
      </label>

      <label className="todo_list__form__input">
        <input
          type="text"
          name="create_list_item"
          placeholder="Write a new task here"
        />
      </label>

      <button type="submit" className="todo_list__form__submit button_element">
        <span className="material-icons">add</span>
      </button>
    </form>
  );
}
