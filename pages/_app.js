import '../styles/globals.css'
import { useEffect, useState } from "react";
import "swiper/css";
import { StateContextProvider } from "../context/index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Alert from '../components/common/Alert';
import { useRouter } from "next/router";

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


    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />


    </StateContextProvider>
    
    )}
 

  
  </>
  )
}

export default MyApp
