import { client } from '../../api';
export const ADD_USERS = 'ADD_USERS';
const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

// thunk функция
export const loadUsers = () => (dispatch) => {
  client
    .get('https://jsonplaceholder.typicode.com/users')
    .then((data) => dispatch(addUsers(data)));
};
