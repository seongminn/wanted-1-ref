import PropTypes from 'prop-types';
import { useState } from 'react';

import useInput from '@/hooks/useInput';

const TodoItem = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <li>
      {isEdit ? (
        <EditMode {...props} setIsEdit={setIsEdit} />
      ) : (
        <NormalMode {...props} setIsEdit={setIsEdit} />
      )}
    </li>
  );
};

export default TodoItem;

const NormalMode = ({ id, todo, isCompleted, handleUpdateTodo, handleDeleteTodo, setIsEdit }) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleUpdateTodo(id, { todo, isCompleted: !isCompleted })}
        />
        <span>{todo}</span>
      </label>
      <button onClick={() => setIsEdit(true)}>수정</button>
      <button onClick={() => handleDeleteTodo(id)}>삭제</button>
    </>
  );
};

const EditMode = ({ id, todo, isCompleted, handleUpdateTodo, setIsEdit }) => {
  const { value, onChange } = useInput({ todo });

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleUpdateTodo(id, { todo, isCompleted: !isCompleted })}
        />
        <input name="todo" defaultValue={todo} onChange={onChange} />
      </label>
      <button onClick={() => handleUpdateTodo(id, { todo: value.todo, isCompleted })}>제출</button>
      <button onClick={() => setIsEdit(false)}>취소</button>
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

NormalMode.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};

EditMode.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};
