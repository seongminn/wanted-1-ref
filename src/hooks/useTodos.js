import { useContext } from 'react';

import { TodoContext } from '@/context/TodoContext';

const useTodos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return { todos, dispatch };
};

export default useTodos;
