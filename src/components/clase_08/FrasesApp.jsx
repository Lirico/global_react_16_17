import React, {useState, useEffect} from 'react'
import Cita from './Cita'
import Loader from './Loader'

const citaInicial = {
    cita: "",
    autor: ""
}

const FrasesApp = () => {
    const [cita, setCita] = useState(citaInicial)
    const [isLoading, setIsLoading] = useState(false)

    // ASYNC -> Declara una funcion como asincronica 
    // AWAIT -> Declara una instruccion como asincronica

    const obtenerCita = async () => {

        setIsLoading(true)

        // A donde pido la info -> ENDPOINT
        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes"

        const response = await fetch(ENDPOINT)
        const data = await response.json()
        const [nuevaCita] = data; // data -> [] -> nuevaCita -> {}
        const {quote, author} = nuevaCita;

        setCita((cita) => {
            return {
                ...cita,
                cita: quote,
                autor: author
            }
        })

        const TIEMPO_ALEATORIO_EN_MILISEGUNDOS = Math.round(Math.random() * 5000)

        setTimeout(() => {
            setIsLoading(false)
        }, TIEMPO_ALEATORIO_EN_MILISEGUNDOS);
    }

    useEffect(() => {
        obtenerCita()
    }, [])
    

  return (
    <>
        <div className='card' style={{display: "flex", flexDirection: "column", alignItems: "center", width: "300px"}}>
            <img style={{width: "300px"}} src="https://www.bekia.es/images/galeria/28000/28897_leonardo-dicaprio-rodaje-wolf-wall-street.jpg" alt="" />
            {
                isLoading && <Loader />
            }
            {
                !isLoading && <Cita data={cita} />
            }
            <button onClick={obtenerCita}>Pedir Cita</button>
        </div>
    </>
  )
}

export default FrasesApp