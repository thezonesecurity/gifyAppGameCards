import React, { useContext } from "react";
import {
  MdDelete,
  MdBookmarkBorder,
  MdBookmark,
  MdModeEdit,
} from "react-icons/md";
import { Actions } from "../constants/Actions";
import DataTodo from "../context/AppContext";

export const ItemTaskComponent = ({ taskname, description, isDone, id }) => {
  /*
  const { state, dispatch } = useContext(DataTodo);
  //console.log(state);
  const handlerClickEvent = () => {
    console.log("co");
    dispatch({ type: Actions.CHANGE_NAME, payload: "damariz" });
  };
  */
  const { state, dispatch } = useContext(DataTodo);
  const handlerClick = (id) => {
    dispatch({ type: Actions.REMOVE_TASK, payload: id });
  };
  const handlerClickIsDone = () => {
    dispatch({ type: Actions.IS_DONE, payload: id });
  };
  return (
    <li
      onClick={() => {
        handlerClickIsDone(id);
      }}
    >
      {/*onClick={handlerClickEvent}>*/}
      {isDone ? <MdBookmark /> : <MdBookmarkBorder />}
      {isDone ? (
        <span className="isDone">{taskname}</span>
      ) : (
        <span>{taskname}</span>
      )}
      <div className="deleteIcon">
        <MdModeEdit
          onClick={() => {
            {
              /*Boton Editar -> LAB PENDIENTE */
            }
          }}
        />

        <MdDelete //Boton borrar
          onClick={() => {
            handlerClick(id);
          }}
        />
      </div>
    </li>
  );
};
//1:26:40 MdBookmarkBorder -> spa => Task1 {JSON.stringify(state, null, 2)}
