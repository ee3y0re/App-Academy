import { createStore, applyMiddleware } from "redux";
import { myThunk } from "../middleware/thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState,
    applyMiddleware(myThunk)
    );
}

export default configureStore;