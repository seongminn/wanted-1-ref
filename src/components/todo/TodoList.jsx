import { deleteTodo, updateTodo } from '@/apis/todo';
import useTodos from '@/hooks/useTodos';

import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, dispatch } = useTodos();

  const handleUpdateTodo = (id, todo) => {
    updateTodo(id, { ...todo }).then((res) => dispatch({ type: 'CREATE', todo: res.todo }));
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id).then(() => dispatch({ type: 'DELETE', id }));
  };

  return (
    <ul>
      {todos.map((eachTodo) => (
        <TodoItem
          key={eachTodo.id}
          {...eachTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
