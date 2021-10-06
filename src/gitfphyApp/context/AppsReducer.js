import { Actionss } from "../actions/Actionss";

export const AppsReducer = (state, action) => {
  switch (action.type) {
    case Actionss.SEARCH_FORM: {
      const { payload } = action;
      return { ...state, ...payload };
    }
    default: {
      return state;
    }
  }
};
