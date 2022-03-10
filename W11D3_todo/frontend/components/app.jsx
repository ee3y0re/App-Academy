import React from "react";
import TodoListContainer from "./todos/todo_list_container";

const App = () => {
  console.log('app!');
  //debugger;
  return (
    <div>
      <TodoListContainer />
    </div>
  );
}

export default App;