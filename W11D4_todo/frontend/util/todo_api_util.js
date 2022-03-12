export const getAllTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
}

export const postTodo = (todoParams) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {
      todo: todoParams
    }
  });
}