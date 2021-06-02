import React from "react";
import { render } from "react-dom";
import { AppContextProvider } from "@context";
import App from "./App";

import "./styles/General.scss";

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
