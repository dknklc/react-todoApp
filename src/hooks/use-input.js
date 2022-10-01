import React, { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case "SET_BLUR":
      return {
        value: state.value,
        isTouched: true,
      };
    case "RESET":
      return {
        ...initialState,
      };
  }
};

const useInput = () => {
  const [state, dispatchFn] = useReducer(inputReducer, initialState);

  const hasError = state.value.length <= 0 && state.isTouched;

  const changeHandler = (e) => {
    dispatchFn({ type: "SET_VALUE", value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatchFn({ type: "SET_BLUR" });
  };

  const reset = () => {
    dispatchFn({ type: "RESET" });
  };

  return {
    ...state,
    hasError,
    changeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
