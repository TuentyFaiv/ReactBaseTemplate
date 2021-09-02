import { createContext, useContext, useReducer } from "react";
import getBoot from "@boot";
import reducer from "./reducer";

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const storageLang = localStorage.getItem("brandlang");
  const storageSession = localStorage.getItem("sessionId");
  const storageUser = localStorage.getItem("user");

  const initialState = {
    boot: storageLang ? getBoot()[storageLang] : getBoot()["es"],
    lang: storageLang || "es",
    sessionId: storageSession || null,
    user: storageUser ? JSON.parse(storageUser) : {},
    onboarding: null
  };

  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
