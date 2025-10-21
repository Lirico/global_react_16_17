import { useState } from "react";


const initialState = 0;

const Contador = () => {

    const [contador, setContador] = useState(initialState)

    const incrementar = () => setContador((contador) => contador + 1) 

    const resetear = () => setContador(initialState)

    const decrementar = () => setContador((contador) => contador - 1)

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={resetear}>0</button>
        <button onClick={decrementar}>-</button>
      </div>
      <h3>{contador}</h3>
    </div>
  );
};

export default Contador;




