import { useState, useEffect } from "react" // Hook (gancho) -> Funcion nativa de React



const initialState = "Morocho";

const Cabello = () => {

   // GETTERS Y SETTERS
   // GETTER -> Es una variable o funcion que provee un valor
   // SETTER -> Es una funcion que reestablece el valor un getter
   const [cabello, setCabello] = useState(initialState) 

  useEffect(() => {
    if(cabello === initialState)
    {
      console.log("Estado inicial")
    }
    else
    {
      console.log(`Cabello actualizado a ${cabello}`)
    }
  }, [cabello])
  

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <h2>{cabello}</h2>
        <button onClick={() => setCabello(initialState)}>Regresar a estado inicial</button>
        <button onClick={() => setCabello("Rubio")}>Super Saiyajin</button>
        <button onClick={() => setCabello("Rubio con rashitos")}>Super Saiyajin 2</button>
        <button onClick={() => setCabello("Rubio pelo largo sin cejas")}>Super Saiyajin 3</button>
        <button onClick={() => setCabello("Colorado boton")}>Saiyajin God</button>
        <button onClick={() => setCabello("Turqueza como mi buso de egresados")}>Super Saiyajin God</button>
        <button onClick={() => setCabello("Morocho resplandeciente")}>Ultra instinto a medias</button>
        <button onClick={() => setCabello("Plateado guirnalda")}>Ultra instinto completo</button>
    </div>
  )
}

export default Cabello


/* 
  CICLO DE VIDA DE UN COMPONETE (nace / come / se reproduce / muere)

  FASE DE MONTAJE (nace) -> La carga del navegador -> Ejecutando como respuesta a un montaje

  FASE DE ACTUALIZACION (lo que hace mientras vive) -> Pedimos a la API -> Respuesta a una actualizacion

  FASE DE DESMONTAJE (muerte) -> Si un reloj deja de verse -> Respueta al desmontaje -> Que el reloj pare de funcionar

  const [open, setOpen] = useState(false) -> true -> efecto secundario -> pida la info a la API

  DOM {
    <DOCTYPE!>
    <html>
      <head></head>
      <body>
        { open ? <p>Holis</p> : null }
      </body>
    </html>
  }
*/

