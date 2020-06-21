/*
import { createStore } from "redux";
import rootReducer from "./reducers"; //index.js renamed as it is default

return createStore(rootReducer, initialState);
*/
//store done above, below are add-on features

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers"; //index.js renamed as it is default
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //adds support for dev __REDUX_DEVTOOLS_EXTENSION_COMPOSE__

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
