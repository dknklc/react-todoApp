import React from "react";

import Todo from "./Todo";
import del from "../assets/delete.svg";

const TodoList = (props) => {
  return (
    <div className="components--event-list">
      <h1>Todos</h1>
      <Todo todos={props.todos} setTodos={props.setTodos} />
    </div>
  );
};

export default TodoList;
