import React, { useEffect, useReducer } from "react";
import DataTodo from "./AppContext";
import { AppReducer } from "./AppReducer";
export const AppState = (props) => {
  const initStateString = localStorage.getItem("todo_DB") || [];
  const init = JSON.parse(initStateString);
  const [state, dispatch] = useReducer(AppReducer, init);
  console.log(state);
  useEffect(() => {
    localStorage.setItem("todo_DB", JSON.stringify(state));
  }, [state]);
  return (
    <DataTodo.Provider value={{ state, dispatch }}>
      {props.children} {/*<MainComponent /> */}
    </DataTodo.Provider>
  );
};
