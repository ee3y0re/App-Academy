import {
  postUser,
  postSession,
  deleteSession
} from '../utils/session';

//messages to reducer

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

//action creators to return object with type and some sort of payload

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  }
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
};

//thunk actions creators
//form user curries and receives dispatch from thunk middleware
//once receive dispatch, call postUser from util and call with form user
export const createNewUser = (formUser) => (dispatch) => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = (formUser) => (dispatch) => postSession(formUser)
  .then(user => (receiveCurrentUser(user)));

export const logout = () => (dispatch) => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));