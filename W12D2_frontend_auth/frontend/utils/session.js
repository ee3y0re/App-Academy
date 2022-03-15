//signing up
export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
  })
}

//logging in
export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
}

//signing out
export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
}