import React, { useEffect, useId, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodo = [
  {
    id: Number(new Date(2022, 8, 21, 23, 17, 0, 0)),
    title: "Bergen International Film Festival",
    subTitle:
      "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
    date: new Date(2022, 8, 21, 23, 17, 0, 0),
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodo);

  const setNewTodo = (title, subTitle, date) => {
    const prepareNewTodo = {
      id: Number(new Date()),
      title,
      subTitle,
      date: new Date(date),
    };

    console.log(prepareNewTodo.todoDate);
    setTodos((prevTodo) => [prepareNewTodo, ...prevTodo]);
  };

  console.log(todos);

  return (
    <>
      <TodoForm onSave={setNewTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
