//keep track of error messages
import { RECEIEVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let someState = Object.assign()
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIEVE_CURRENT_USER:
      someState[action.errors] = null;
      return [];
    default:
      return state;
  }
}

export default SessionErrorsReducer;