// Paso 1 - Importar la nave
import { ThemeContext } from '@/context/ThemeContextProvider'
// Paso 2 - Importar al cartero -> useContext()
import { useContext } from 'react';

const Footer = () => {

  const paquete = useContext(ThemeContext)

  const {toggleTheme} = paquete;

  return (
    <>
        <footer style={{height: "100vh"}} className={toggleTheme}>
            <h2>Footer</h2>
        </footer>
    </>
  )
}

export default Footer