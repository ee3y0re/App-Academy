import React from "react";
import TodoListContainer from "./todos/todo_list_container";

const App = () => {
  console.log('app!');
  //debugger;
  return (
    <div>
      <h1>TEST</h1>
      <TodoListContainer />
    </div>
  );
}

export default App;