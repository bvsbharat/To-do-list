import { useState, memo } from "react";
import PropTypes from "prop-types";

import styles from "./TodoItem.module.scss";
import { editTodo } from "../../services";
import { useEditTodoMutation } from "../../hooks";

const TodoItem = ({ id, text, completed }) => {
  const [checkbox, setCheckbox] = useState(completed);
  const { editTodoMutation } = useEditTodoMutation(editTodo);

  const handleToggle = () => {
    setCheckbox((val) => {
      editTodoMutation.mutate({ id, task: text, done: !val });
      return !val;
    });
  };

  return (
    <li id={id} className={styles["todo-item"]}>
      <div className={styles["item-value"]}>
        <input
          className={styles["item-checkbox"]}
          type="checkbox"
          checked={checkbox}
          onChange={handleToggle}
          id={`todo-${id}`}
          autoComplete="off"
          aria-label="Mark task as complete"
        />
        <label
          className={styles.toggleTodoLabel}
          aria-label="Toggle Todo"
          htmlFor={`todo-${id}`}
        >
          {text}
        </label>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};
TodoItem.defaultProps = {
  id: "",
  completed: false,
};

export default memo(TodoItem);
