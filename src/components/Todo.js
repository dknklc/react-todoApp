import React from "react";

import del from "../assets/delete.svg";

const Todo = (props) => {
  const formatDate = (date, locale) => {
    const calcDaysPassed = (date1, date2) =>
      Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return "Today";
    else if (daysPassed === -1) return "Yesterday";
    else if (daysPassed === 1) return "Tomorrow";
    else if (daysPassed >= -7 && daysPassed < 2)
      return `${Math.abs(daysPassed)} days ago`;
    else {
      return new Intl.DateTimeFormat(locale).format(date);
    }
  };

  const deleteItemHandler = (id) => {
    const filteredItems = props.todos.filter((todo) => todo.id !== id);
    props.setTodos(filteredItems);
  };

  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          <div className="date-info">
            <h4>{formatDate(todo.date, "en-US")}</h4>
            <h2>{23}</h2>
          </div>
          <div className="content">
            <h1>{todo.title}</h1>
            <p>{todo.subTitle}</p>
          </div>
          <div className="action" onClick={() => deleteItemHandler(todo.id)}>
            <a href="#">
              <img src={del} alt="" />
              <span>Delete</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
