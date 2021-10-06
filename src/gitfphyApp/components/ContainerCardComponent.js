import React, { useContext } from "react";
import DataState from "../context/AppsContext";
import { CardComponent } from "./CardComponent";

export const ContainerCardComponent = () => {
  const { state } = useContext(DataState);
  console.log(state);
  return (
    <div className="row align-items-start">
      {state &&
        state.data &&
        state.data.map((item) => {
          return <CardComponent key={item.id} {...item} />;
        })}
    </div>
  );
};
