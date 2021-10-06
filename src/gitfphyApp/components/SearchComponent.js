import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";
import DataState from "../context/AppsContext";
import { Actionss } from "../actions/Actionss";
export const SearchComponent = () => {
  const [form, handlerChangeForm, resetForm] = useForm({ search: "" });
  const [uri, setUri] = useState("");
  const { dispatch } = useContext(DataState);
  // console.log(dispatch);
  const { data, isLoading } = useFetch(uri);
  //console.log(data);
  const { search } = form;
  /*
  useEffect(() => {
    if (!isLoading) {
      dispatch({ type: Actionss.SEARCH_FORM, payload: data });
    }
  }, [isLoading]);*/
  const handlerSubmit = (e) => {
    console.log(search);
    e.preventDefault();
    setUri(
      `https://api.giphy.com/v1/gifs/search?api_key=QXJ4KZ3vs2At3nYRZV4ubN2A8GuKn4qD&q=${search}`
    );
    dispatch({ type: Actionss.SEARCH_FORM, payload: data });
    resetForm();
  };
  return (
    <div className="row">
      <form onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Search All Gifs
          </label>
          <input
            type="text"
            name="search"
            onChange={handlerChangeForm}
            value={search}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search gif"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};
//1:38 => 2:05
