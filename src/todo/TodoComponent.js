import React from "react";
import { MainComponent } from "./components/MainComponent";
import DataTodo from "./context/AppContext";
import "./styles.css";
import { AppState } from "./context/AppState";

export const TodoComponent = () => {
  // const [user, setUser] = useState([]);
  /*
  const initStateString = localStorage.getItem("todo_DB") || [];
  const init = JSON.parse(initStateString);
  const [state, dispatch] = useReducer(AppReducer, init);
  console.log(state);
  useEffect(() => {
    localStorage.setItem("todo_DB", JSON.stringify(state));
  }, [state]);
*/
  //const [state, dispatch] = useReducer(AppReducer, user);
  return (
    <AppState>
      {/*value={{ state, dispatch }}>*/}
      <MainComponent />
    </AppState>
  );
};
