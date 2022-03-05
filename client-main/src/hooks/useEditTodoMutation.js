import { useQueryClient, useMutation } from "react-query";

const useEditTodoMutation = (editTodo) => {
  const queryClient = useQueryClient();

  const editTodoMutation = useMutation(editTodo, {
    // The mutation's input field
    onMutate: (updated) => {
      queryClient.cancelQueries("todos");

      const previousTask = queryClient.getQueryData("todos");

      queryClient.setQueryData("todos", (oldTasks) =>
        oldTasks.map((item) =>
          item._id === updated.id ? { ...item, ...updated } : item
        )
      );

      return () => queryClient.setQueryData("todos", previousTask);
    },
    // onError is called when the mutation fails
    onError: (previousValue) => {
      console.log("Error: ", previousValue);
      return queryClient.setQueryData("todos", previousValue);
    },
    // on edit success, we want to update the query data with the new todo
    // so that the new todo is displayed
    onSuccess: ({ data: updatedTodo }) => {
      const previousTask = queryClient.getQueryData("todos");

      queryClient.setQueryData("todos", (oldTasks) =>
        oldTasks.map((item) =>
          item._id === updatedTodo._id ? { ...item, ...updatedTodo } : item
        )
      );

      queryClient.setQueryData("todos", previousTask);
    },
  });

  return {
    editTodoMutation,
  };
};

export { useEditTodoMutation };
