import { createContext, useContext, useReducer, useMemo } from "react";
import reducer from "./reducer";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const storageSession = localStorage.getItem("sessionId");
  const storageUser = localStorage.getItem("user");

  const initialState = {
    sessionId: storageSession || null,
    user: storageUser ? JSON.parse(storageUser) : {},
    onboarding: null
  };

  const [global, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({
    global, dispatch
  }), [global]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
