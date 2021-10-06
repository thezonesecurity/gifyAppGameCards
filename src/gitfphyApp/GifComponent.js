import React from "react";
import { ContainerCardComponent } from "./components/ContainerCardComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { SearchComponent } from "./components/SearchComponent";
import { AppsState } from "./context/AppsState";
export const GifComponent = () => {
  return (
    <div className="container">
      <AppsState>
        <HeaderComponent />
        <SearchComponent />
        <ContainerCardComponent />
      </AppsState>
    </div>
  );
};
