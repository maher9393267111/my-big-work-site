import '../styles/globals.css'
import { useEffect, useState } from "react";
import "swiper/css";
import { StateContextProvider } from "../context/index";
import { ToastContainer } from "react-toastify";
import Alert from '../components/common/Alert';

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);



  return (
    
    <>
    {!isSSR && (
    
    <StateContextProvider>
      <Alert/>
    <Component {...pageProps} /> 
    </StateContextProvider>
    
    )}
 

  
  </>
  )
}

export default MyApp
