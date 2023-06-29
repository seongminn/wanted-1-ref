import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';

export const TodoContext = createContext({
  todos: '',
  dispatch: '',
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET':
      return [...action.init];
    case 'CREATE':
      return [...state, action.todo];
    case 'UPDATE':
      return state.map((data) => (data.id === action.todo.id ? { ...action.todo } : data));
    case 'DELETE':
      return state.filter((data) => data.id !== action.id);
    default:
      throw new Error('다시 시도해주세요.');
  }
};

const initTodo = [];

const TodoContextProvider = (props) => {
  const { children } = props;

  const [todos, dispatch] = useReducer(reducer, initTodo);

  return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
