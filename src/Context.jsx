import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import products from "./Data";
import { cartReducer } from "./Reducer";

const cartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.object,
};
export default Context;

export const CartState = () => {
  return useContext(cartContext);
};
