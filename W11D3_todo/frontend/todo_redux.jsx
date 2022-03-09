import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions"
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions"
import Root from "./components/root";
import { allTodos } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const test = <h1>Todos App</h1>;

  const store = configureStore();

  //store props gets passed down
  ReactDOM.render(<Root store={store}/>, content);

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;

  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;

  window.allTodos = allTodos;
});