import { Actions } from "../constants/Actions";
export const AppReducer = (state, action) => {
  //console.log("reducer", action);
  switch (action.type) {
    case Actions.ADD_TASK: {
      return [...state, action.payload];
    }
    case Actions.REMOVE_TASK: {
      return state.filter((item) => item.id !== action.payload);
    }
    case Actions.IS_DONE: {
      const newState = state.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      return newState;
    }
    /*
    case Actions.CHANGE_NAME: {
      return { ...state, name: action.payload };
    }
    case Actions.CHANGE_LASTNAME: {
      return { ...state, lastname: action.payload };
    }
    */
    default: {
      return state;
    }
  }
};
