import { createContext, useReducer } from "react";
import { initialState } from "@/reducer_shopping_cart/initialState";
import { reducer } from "@/reducer_shopping_cart/reducer";
import { TYPES } from "@/reducer_shopping_cart/actions";

export const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // El payload es una propiedad del objeto action donde se guardar un valor con el objeto de despacharlo
  // para ser utilizado en el caso correspondiente.
  // Es la unica forma de pasar un valor a un caso desde afuera del reductor.

  const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_ITEM, payload: id})
    }
  }

  const value = {
    state,
    addToCart,
    deleteFromCart
  };
  return (
    <ShoppingCartContext.Provider value={value}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
export default ShoppingCartContextProvider;



