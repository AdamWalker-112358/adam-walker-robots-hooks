import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyles from "./styles/global.styles";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootElement
);
