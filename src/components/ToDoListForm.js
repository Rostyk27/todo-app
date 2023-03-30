export default function ToDoListForm({ onSubmitForm }) {
  return (
    <form className="todo_list__form" onSubmit={onSubmitForm}>
      <label>
        <input
          type="text"
          name="create_list_item"
          placeholder="I'm going to ..."
        />
      </label>
    </form>
  );
}
