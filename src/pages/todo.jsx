import { useEffect } from 'react';

import { getTodos } from '@/apis/todo';
import TodoCreator from '@/components/todo/TodoCreator';
import TodoList from '@/components/todo/TodoList';
import useTodos from '@/hooks/useTodos';

const TodoPage = () => {
  const { dispatch } = useTodos();

  useEffect(() => {
    const handleGetTodo = () => {
      getTodos().then((res) => dispatch({ type: 'GET', init: res.data }));
    };

    handleGetTodo();
  }, [dispatch]);

  return (
    <div>
      <TodoCreator />
      <TodoList />
    </div>
  );
};

export default TodoPage;
