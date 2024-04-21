import { createContext } from "react";
import PropTypes from "prop-types";

const cartContext = createContext();

const Context = ({ children }) => {
  return <cartContext.Provider>{children}</cartContext.Provider>;
};

Context.propTypes = {
  children: PropTypes.object,
};
export default Context;
