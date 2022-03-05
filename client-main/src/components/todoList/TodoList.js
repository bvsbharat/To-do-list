import { useCallback, memo } from "react";
import { useQuery } from "react-query";

import { getTodos } from "../../services";
import styles from "./TodoList.module.scss";
import ToDoItem from "../todoItem";

const TodoList = () => {
  const { data: todoItems } = useQuery("todos", getTodos, {
    cacheTime: 100000,
  });

  const todoItemsList = useCallback(() => {
    if (!todoItems) return;

    if (todoItems.length > 0) {
      return todoItems.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            id={`${item.id}`}
            text={item.task}
            completed={item.done}
          />
        );
      });
    }
  }, [todoItems]);

  return (
    <section aria-label="Overdue Items" className={styles.todoList}>
      <ul>{todoItemsList()}</ul>
    </section>
  );
};

export default memo(TodoList);
