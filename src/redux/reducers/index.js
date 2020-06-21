import { combineReducers } from "redux";
import courses from "./courseReducer"; //renamed courseReducer to courses because it was default export
import authors from "./authorReducer";
import apiCallsInPogress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInPogress
});

export default rootReducer;
