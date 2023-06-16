import { useSelector } from 'react-redux';
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return <div>TodoList: {todos.length}</div>;
};
export { TodoList };
