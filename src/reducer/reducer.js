import { TYPES } from "./actions";

const {INCREMENTAR, DECREMENTAR, RESETEAR, MANEJAR_VISIBILIDAD} = TYPES;

export const reducer = (state, action) => {
  switch(action.type){
    case INCREMENTAR: {
      return {
        ...state, // A visible (y los mas estados que puedan existir) no le hagas nada, conservalo de fabrica
        contador: state.contador + 1, // aaaaaaah, pero a contador, manosealo
      };
    }
    case RESETEAR: {
        return {
          ...state,
          contador: 0
        }
    }
    case DECREMENTAR: {
      return {
        ...state,
        contador: state.contador - 1,
      };
    }
    case MANEJAR_VISIBILIDAD: {
      return {
        ...state,
        visible: !state.visible
      }
    }
    default: {
      return state
    }
  }
}