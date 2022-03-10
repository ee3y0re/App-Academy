import React from "react";
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

const TodoList = (props) => {
  return (
    <div>
      <h2>To Dos :D</h2>
      <TodoForm receiveTodo={props.receiveTodo}/>
      <ul>
        {/* todos is props being passed down from todo_list to todolistitem */}
        <TodoListItem todos={props.todos}/>
      </ul>
    </div>
  )
}

export default TodoList;