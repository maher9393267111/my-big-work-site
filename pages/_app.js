import '../styles/globals.css'
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);



  return (
    
    <>
    {!isSSR && (
    
    <Component {...pageProps} /> )}

  
  </>
  )
}

export default MyApp
