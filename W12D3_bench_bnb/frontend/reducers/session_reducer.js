//keeps track of current user
import {
  RECEIEVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions"

const initialState = {
  id: null
}

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      newState[id] = action.user.id; //because we need the result of the action
      return newState;
    case LOGOUT_CURRENT_USER:
      newState[id] = null;
      return newState;
    default:
      return state;
  }
}

export default SessionReducer