'useClient'
import { useState, useEffect } from "react"


const Reloj = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [estaVisible, setEstaVisible] = useState(false)

    useEffect(() => {
        let temporizador; // No tiene logica adosada

        if(estaVisible){ // Montaje
            // Si se ve el reloj quiero adosarle logica
            temporizador = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000); // Actualizacion
        }

        // Desmontaje
        // Si el reloj no se ve mas, quiero quitarle la logica
        return () => clearInterval(temporizador);

    }, [estaVisible])
    
    
  return (
    <>
        <h2>Reloj con Effect</h2>
        {estaVisible && <h3>{hora}</h3>}
        <button onClick={() => setEstaVisible((estaVisible) => !estaVisible)}>Iniciar/Detener</button>
    </>
  )
}

export default Reloj