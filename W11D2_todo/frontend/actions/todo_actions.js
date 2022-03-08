export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo,
    };
};

const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos: todos,
    };
};