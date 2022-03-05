import api from "./api";

const addNewTodo = (todo) => {
  return api.post("todo/tasks/create", todo);
};

const getTodos = async () => {
  const { data: todos } = await api.get(`todo/tasks`);
  return todos;
};

const editTodo = (task) => {
  return api.post(`todo/tasks/${task.id}/edit`, task);
};

export { addNewTodo, getTodos, editTodo };
