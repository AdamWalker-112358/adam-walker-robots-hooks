import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyles from "./styles/global.styles";
import GlobalContextProvider from "./context/globalContext.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <GlobalStyles />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </>,
  rootElement
);
