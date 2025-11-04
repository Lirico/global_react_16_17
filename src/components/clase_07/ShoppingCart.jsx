import { ShoppingCartContext } from "@/context/ShoppingCartContextProvider";
import { useContext } from "react";
import Product from "./Product";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const { state, addToCart, deleteFromCart } = useContext(ShoppingCartContext);

  const { products, cart } = state;

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;

// shortid -> id cortitos
// uuid -> id largos
