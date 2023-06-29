import { instance } from './instance';

export const getTodos = async () => {
  return instance.get('/todos').catch(console.error);
};

export const createTodo = async (body) => {
  return instance.post('/todos', { ...body }).catch(console.error);
};

export const updateTodo = async (id, body) => {
  return instance.put(`/todos/${id}`, body).catch(console.error);
};

export const deleteTodo = async (id) => {
  return instance.delete(`/todos/${id}`).catch(console.error);
};
