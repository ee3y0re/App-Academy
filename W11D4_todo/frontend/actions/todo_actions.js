export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

import * as TodoAPIUtil from "../util/todo_api_util";

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo,
    };
};

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos: todos,
    };
};

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo: todo,
    };
};

export const fetchAllTodos = () => (dispatch, getState) => {
  return TodoAPIUtil.getAllTodos()
    .then(todosResponse => {
      console.log(todosResponse);
      dispatch(receiveAllTodos(todosResponse));
    });
}