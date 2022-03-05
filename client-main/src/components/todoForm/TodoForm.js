import { useCallback, useEffect } from "react";
import styles from "./TodoForm.module.scss";
import { addNewTodo } from "../../services";
import { useAddTodoMutation, useInputState } from "../../hooks";

const TodoForm = () => {
  const [value, onChangeHandler, reset] = useInputState("");
  const { addTodoMutation } = useAddTodoMutation(addNewTodo);

  useEffect(() => {
    if (addTodoMutation.isSuccess) {
      reset();
      addTodoMutation.reset();
    }
  }, [addTodoMutation, reset]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addTodoMutation.mutate({
        task: value,
      });
    },
    [addTodoMutation, value]
  );

  return (
    <form
      className={styles.todoForm}
      onSubmit={handleSubmit}
      id="todo-form"
      aria-label="Addd new task"
    >
      <label htmlFor="add-to" className={styles["form-label"]}>
        Enter a task:
      </label>
      <input
        id="add-to"
        className={styles["form-input"]}
        type="text"
        name="text"
        placeholder="What do you have to do?"
        value={value}
        onChange={onChangeHandler}
        autoComplete="off"
      />
      <button
        className={styles.todoButton}
        type="submit"
        disabled={!value}
        aria-disabled={!value}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
