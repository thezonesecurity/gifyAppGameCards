import React, { useContext } from "react";
import { ItemTaskComponent } from "./ItemTaskComponent";
import DataTodo from "../context/AppContext";

export const TasksComponent = () => {
  const { state, dispatch } = useContext(DataTodo);
  //console.log(state);
  return (
    //para system of task name
    <div className="todo__list">
      <span>Sistem of task name</span>
      <ul>
        {state.map((item) => {
          return <ItemTaskComponent key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};
