import { render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import { AppContextProvider } from "@context";
import i18n from "./i18n";

import App from "./App";

import "./styles/General.scss";

render(
  <AppContextProvider>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </AppContextProvider>,
  document.getElementById("root")
);
