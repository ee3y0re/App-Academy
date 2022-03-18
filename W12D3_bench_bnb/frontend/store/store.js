import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk"

//export and create configureStore
//to test, put on window and invoke configureStore

const configureStore = (preloadedState = {}) => createStore(
  RootReducer,
  preloadedState,
  applyMiddleware(thunk, logger)
);

export default configureStore;