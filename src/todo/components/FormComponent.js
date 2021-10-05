import React, { useContext } from "react";
import DataTodo from "../context/AppContext";
import { Actions } from "../constants/Actions";
import { useForm } from "../hooks/useForm";

export const FormComponent = () => {
  const user = useContext(DataTodo);
  const { state, dispatch } = useContext(DataTodo);
  const [form, handlerChangeForm, resetForm] = useForm({
    taskname: "",
    description: "",
    isDone: false,
  });
  const { taskname, description } = form;
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: Actions.ADD_TASK,
      payload: { ...form, id: new Date().getTime() },
    });
    resetForm();
  };
  return (
    //corresponde al dormulario
    <div className="todo__form">
      <h4>form task</h4>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="taskname">Task Name</label>
          <input
            className="todo__form-text"
            type="type"
            value={taskname}
            name="taskname"
            onChange={handlerChangeForm}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="todo__form-text"
            name="description"
            value={description}
            onChange={handlerChangeForm}
          ></textarea>
        </div>
        <button type="submit">Create new task </button>
      </form>
    </div>
  );
};
//
//<button type="submit" className="button">
