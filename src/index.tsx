import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FontStyles } from "./assets/fonts/fonts";
import GlobalStyle from "./assets/styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <FontStyles />
    <App />
  </React.StrictMode>
);
