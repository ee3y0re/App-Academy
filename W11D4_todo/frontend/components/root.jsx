import React from "react";
import { Provider } from "react-redux";
import App from "./app";


//this store props comes from todo_redux.js
// const Root = ({store})
const Root = (props) => {
  return (  
    // <Provider store={store}>
    <Provider store={props.store}>
      <App />
    </Provider>
  )
};

export default Root;