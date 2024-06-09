import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./style/styles.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./router/MyRouter";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);