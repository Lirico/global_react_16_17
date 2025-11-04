import { TYPES } from "./actions";


export function reducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            // id -> action.payload
            // db -> state.products
            const newItem = state.products.find(product => product.id === action.payload);

            const itemInCart = state.cart.find(item => item.id === newItem.id);
        
            return itemInCart 
                ? { // Existe
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === newItem.id
                            ? {
                                ...item, 
                                quantity: item.quantity + 1
                            }
                            : item
                    )
                } 
                : { // No existe
                    // conserva lo que ya tenia la ultima copia del estado
                    ...state, 
                    // conserva lo que ya tenia la ultima copia del carrito
                    cart: [...state.cart, {...newItem, quantity: 1}] // conserva las propiedades que ya tenia el item 
                } 
        }

        
        case TYPES.REMOVE_ONE_ITEM: {}
        case TYPES.REMOVE_ALL_ITEMS: {}
    
        default:
            return state;
    }
}



