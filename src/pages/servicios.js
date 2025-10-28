import ThemeContextProvider from "@/context/ThemeContextProvider"


const servicios = () => {
  return (
    <>
      <ThemeContextProvider>
        <div>Hola desde Servicios</div>
      </ThemeContextProvider>
    </>
  )
}

export default servicios