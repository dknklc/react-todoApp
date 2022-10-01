import React from "react";

import useInput from "../hooks/use-input";

const TodoForm = ({ onSave }) => {
  const {
    value: todoTitle,
    isTouched: titleIsTouched,
    hasError: titleHasError,
    changeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: titleReset,
  } = useInput();

  const {
    value: totoSubTitle,
    isTouched: subTitleIsTouched,
    hasError: subTitleHasError,
    changeHandler: subTitleChangeHandler,
    inputBlurHandler: subTitleBlurHandler,
    reset: subTitleReset,
  } = useInput();

  const {
    value: todoDate,
    isTouched: dateIsTocuhed,
    hasEror: dateHasError,
    changeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: dateReset,
  } = useInput();

  let formIsValid = false;
  if (!titleHasError && !subTitleHasError && !dateHasError) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    onSave(todoTitle, totoSubTitle, todoDate);
    titleReset();
    subTitleReset();
    dateReset();
  };

  const placeHolderClass = titleHasError ? "error-placeholder" : "placeholder";
  const placeholderText = titleHasError ? "not a valid input" : "";

  const placeHolderClass2 = subTitleHasError
    ? "error-placeholder"
    : "placeholder";
  const placeholderText2 = subTitleHasError ? "not a valid input" : "";

  const placeHolderClass3 = dateHasError ? "error-placeholder" : "placeholder";
  const placeholderText3 = dateHasError ? "not a valid date" : "";

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Todo Title : </label>
      <input
        type="text"
        id="title"
        value={todoTitle}
        onBlur={titleBlurHandler}
        onChange={titleChangeHandler}
        className={placeHolderClass}
        placeholder={placeholderText}
        maxLength="25"
      />

      <label style={{ marginLeft: "10px" }} htmlFor="subtitle">
        Todo Subtitle :{" "}
      </label>
      <input
        type="text"
        id="subtitle"
        value={totoSubTitle}
        onBlur={subTitleBlurHandler}
        onChange={subTitleChangeHandler}
        className={placeHolderClass2}
        placeholder={placeholderText2}
        maxLength="40"
      />

      <label style={{ marginLeft: "10px" }} htmlFor="date">
        Todo Date :{" "}
      </label>
      <input
        type="datetime-local"
        id="date"
        value={todoDate}
        onChange={dateChangeHandler}
        onBlur={dateBlurHandler}
        className={placeHolderClass3}
        placeholder={placeholderText3}
      ></input>

      <button
        disabled={!formIsValid || !todoTitle || !totoSubTitle || !todoDate}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
