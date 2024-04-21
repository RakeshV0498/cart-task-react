import { createContext } from "react";

const cartContext = createContext();

const context = ({ children }) => {
  return <cartContext.Provider>{children}</cartContext.Provider>;
};

export default context;
