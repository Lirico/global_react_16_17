
export const TYPES = {
    // Agregar un producto al carrito, si ya existe, incrementar cantidad en 1
    ADD_TO_CART: "ADD_TO_CART",
    // Eliminar un item, si tiene cantidad > 1, restamos cantidad.
    REMOVE_ONE_ITEM: "REMOVE_ONE_ITEM",
    // Eliminar un item independientemente de la cantidad
    REMOVE_ALL_ITEMS: "REMOVE_ALL_ITEMS"
}