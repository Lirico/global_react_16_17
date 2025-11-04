import ShoppingCart from "@/components/clase_07/ShoppingCart";
import ShoppingCartContextProvider from "@/context/ShoppingCartContextProvider";





export default function Home() {
  return (
    <>
      <ShoppingCartContextProvider>
        <ShoppingCart/>
      </ShoppingCartContextProvider>
    </>
  );
}


