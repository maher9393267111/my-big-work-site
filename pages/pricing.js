import React from 'react'
import PriceBanner from '../components/priceComponents/priceBanner'
import PriceCards from '../components/priceComponents/priceCards'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { getAnalytics, logEvent } from "firebase/analytics";

export default function Pricing() {



 
  useEffect(() => {
    const analytics = getAnalytics();
    logEvent(analytics, "screen_Pricing", {
      firebase_screen: "Pricing",
    });
  }, []);




  return (
    <Layout>

<div>


<PriceBanner/>


<PriceCards/>


</div>



    </Layout>
  )
}
