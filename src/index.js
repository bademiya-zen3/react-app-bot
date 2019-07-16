import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import RootReducer from "./reducers/index";
import ReduxPromise from "redux-promise";

const store = createStore(RootReducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
