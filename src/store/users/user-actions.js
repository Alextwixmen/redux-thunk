import { client } from '../../api';
export const SET_LOADING = '@@users/SET_LOADING';
export const ADD_USERS = 'ADD_USERS';
export const SET_ERROR = '@@users/SET_ERROR';
const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

// thunk функция
export const loadUsers = () => (dispatch) => {
  dispatch(setLoading());
  client
    .get('https://jsonplaceholder.typicode.com/users')
    .then((data) => dispatch(addUsers(data)))
    .catch((err) => dispatch(setError(err)));
};
