'use client';
// Paso 1 - Importar la funcion creadora de la nave (createContext())
import { createContext, useState } from "react"

// Paso 2 - Usar la funcion para crear la nave
export const ThemeContext = createContext(); // Es como un []

const ThemeContextProvider = ({children}) => {

    // Paso 3 - El o los paquetes que quiero exportar en la nave (contexto)
    const [theme, setTheme] = useState(false)

    const handleTheme = () => setTheme((theme) => !theme)

    const toggleTheme = theme && "dark"

    const toggleIcon = theme ? "☀️" : "🌙"

    const paquete = {handleTheme, toggleTheme, toggleIcon}

    // Paso 4 - Definir al proveedor (el flaco de la gorra)
    // Paso 5 - Poner el paquete en la mano del flaco (value)
    // Paso 6 - Definir los hijos del contexto
  return (
    <ThemeContext.Provider value={paquete}>
        {children} 
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider