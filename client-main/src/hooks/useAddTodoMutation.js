import { useQueryClient, useMutation } from "react-query";

function useAddTodoMutation(addNewTodo) {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation(addNewTodo, {
    onMutate: async (values) => {
      await queryClient.cancelQueries("todos");

      const previousValue = queryClient.getQueryData("todos");

      return previousValue;
    },
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData("todos", previousValue),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return {
    addTodoMutation,
  };
}

export { useAddTodoMutation };
