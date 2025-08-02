import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children, actions, state, dispatch }) => {
  const values = { actions, state, dispatch };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
