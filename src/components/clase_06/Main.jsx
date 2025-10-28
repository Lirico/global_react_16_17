// Paso 1 - Importar la nave
import { ThemeContext } from '@/context/ThemeContextProvider'
// Paso 2 - Importar al cartero -> useContext()
import { useContext } from 'react';


const Main = () => {

  const paquete = useContext(ThemeContext)
    
  const {toggleTheme} = paquete;

  return (
    <>
        <main style={{height: "100vh"}} className={toggleTheme}>
            <h1>Main</h1>
        </main>
    </>
  )
}

export default Main