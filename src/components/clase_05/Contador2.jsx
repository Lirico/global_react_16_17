import { useReducer } from "react";
import { TYPES } from "@/reducer/actions";
import { initialState } from "@/reducer/initialState";
import { reducer } from "@/reducer/reducer";

const {INCREMENTAR, DECREMENTAR, RESETEAR, MANEJAR_VISIBILIDAD} = TYPES;
// Cada dispatch despacha un objeto llamado "action"
// Cada objeto action tiene 2 propiedades:
// 1. type -> Define el tipo de accion a despachar
// 2. payload -> Guarda un valor a despachar para que sea utilizado en la logica del caso correspondiente
// Ejemplo: -> Un ID

const Contador2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const incrementar = () => dispatch({type: INCREMENTAR}) // La accion con la que me quiero comunicar en el reductor

  const resetear = () => dispatch({type: RESETEAR})

  const decrementar = () => dispatch({type: DECREMENTAR})

  const manejarVisibilidad = () => dispatch({type: MANEJAR_VISIBILIDAD})

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={resetear}>0</button>
        <button onClick={decrementar}>-</button>
        <button onClick={manejarVisibilidad}>Mostrar/Ocultar</button>
      </div>
      {state.visible && <h3>{state.contador}</h3>}
    </div>
  );
};

export default Contador2;

