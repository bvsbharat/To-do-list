import { memo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import styles from "./Todos.module.scss";
import { TodoForm, TodoList } from "../../components";

const Todos = () => {
  const queryClient = new QueryClient();

  return (
    <section className={styles.todo} aria-label="todo app">
      <QueryClientProvider client={queryClient}>
        <div className={styles["todo-wrapper"]}>
          <TodoForm />
          <TodoList />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </section>
  );
};

export default memo(Todos);
