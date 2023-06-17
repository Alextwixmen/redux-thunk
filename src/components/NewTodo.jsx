import { useDispatch } from 'react-redux';
import { createTodo } from '../store/todos/todos-actions';
export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch(createTodo(event.target.title.value));
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='new todo' />
      <input type='submit' value={'Add Todo'} />
    </form>
  );
};
