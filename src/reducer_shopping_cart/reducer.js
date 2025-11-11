import { TYPES } from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      // id -> action.payload
      // db -> state.products
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            // Existe
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          }
        : {
            // No existe
            // conserva lo que ya tenia la ultima copia del estado
            ...state,
            // conserva lo que ya tenia la ultima copia del carrito
            cart: [...state.cart, { ...newItem, quantity: 1 }], // conserva las propiedades que ya tenia el item
          };
    }

    case TYPES.REMOVE_ONE_ITEM: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
          }
        : {
           ...state,
           cart: state.cart.filter(item => item.id !== itemToDelete.id) 
        };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
        return {
           ...state,
           cart: state.cart.filter(item => item.id !== action.payload) 
        }
    }

    default:
      return state;
  }
}
