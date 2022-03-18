import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"

//import for testing
import { signup, login, logout } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Need Components To Render</h1>, root);


  //just for testing, delete before hand
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  const store = configureStore();
  window.store = store;
});