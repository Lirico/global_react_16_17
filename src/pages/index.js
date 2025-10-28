

import Footer from "@/components/clase_06/Footer";
import Header from "@/components/clase_06/Header";
import Main from "@/components/clase_06/Main";
import ThemeContextProvider from "@/context/ThemeContextProvider";



export default function Home() {
  return (
    <>
     <ThemeContextProvider>
        <Header />
        <Main />
        <Footer />
     </ThemeContextProvider>
    </>
  );
}


