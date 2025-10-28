// Paso 1 - Importar la nave
import { ThemeContext } from '@/context/ThemeContextProvider'
// Paso 2 - Importar al cartero -> useContext()
import { useContext } from 'react';


const Header = () => {
    // Paso 3 - Extraer el paquete del contexto
    const paquete = useContext(ThemeContext)
    
    // Paso 4 - Destructurar las propiedades del paquete
    const {handleTheme, toggleTheme, toggleIcon} = paquete;
    
  return (
    <>
        <header className={toggleTheme}>
            <nav>
            </nav>
            <button onClick={handleTheme}>{toggleIcon}</button>
        </header>

        <style jsx>{`
            button {
                background-color: transparent;
                border: none;
                font-size: 2rem;
            }
        `}</style>
    </>
  )
}

export default Header