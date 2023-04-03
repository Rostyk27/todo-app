export default function ToDoListForm({
  onSubmitForm,
  onToggleAll,
  activeCount,
  isAnyItems,
}) {
  return (
    <form className="todo_list__form" onSubmit={onSubmitForm}>
      <label
        className={`todo_list__form__check${!isAnyItems ? ' is_hidden' : ''}`}
      >
        <input
          type="checkbox"
          disabled={!isAnyItems}
          checked={activeCount === 0 && isAnyItems}
          onChange={e => {
            onToggleAll(e.target.checked);
          }}
        />
      </label>

      <label className="todo_list__form__input">
        <input
          type="text"
          name="create_list_item"
          placeholder="I'm going to..."
        />
      </label>
    </form>
  );
}
