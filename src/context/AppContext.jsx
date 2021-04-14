import React, { createContext, useContext, useReducer } from "react";
import getBoot from "@boot";
import reducer from "./reducer";

const AppContext = createContext(null);

export function AppContextProvider({ children }) {

  const initialState = {
    boot: localStorage.getItem("brandlang") ? getBoot()[localStorage.getItem("brandlang")] : getBoot()["es"],
    lang: localStorage.getItem("brandlang") ? localStorage.getItem("brandlang") : "es"
  };

  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
