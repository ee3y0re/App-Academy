import * as SessionApiUtil from '../util/session_api_util'

export const RECEIEVE_CURRENT_USER = "RECEIEVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

//action creators return actions which are objects with a type and payload
const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIEVE_CURRENT_USER,
    currentUser: currentUser
  }
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
};

const receiveErrors = (errors) => {
  return {
    type:RECEIVE_ERRORS,
    errors: errors
  }
};

/*
login(user)(thunk action creator)
logout()(thunk action creator)
signup(user)(thunk action creator) 
*/

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user))),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
}

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user))),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
}

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));
}