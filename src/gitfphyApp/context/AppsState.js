import React, { useReducer } from "react";
import DataState from "./AppsContext";
import { AppsReducer } from "./AppsReducer";
export const AppsState = (props) => {
  const [state, dispatch] = useReducer(AppsReducer, null);
  return (
    <DataState.Provider value={{ state, dispatch }}>
      {props.children}
    </DataState.Provider>
  );
};
