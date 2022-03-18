//keeps track of all users
import { RECEIEVE_CURRENT_USER } from "../actions/session_actions";

const initialState = {
  user: {}
}

const UsersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })  
    default:
      return state;
  }
}

export default UsersReducer;