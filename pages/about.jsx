import React from 'react'
import Layout from '../components/Layout'
import BannerAbout from '../components/about/banner'
import Features from '../components/about/Features'
// import TeamSlider from '../components/about/teamSlider'
import HistoryAbout from '../components/about/history'
import SozBanner from '../components/about/sozBanner'
import WhyChooseUs from '../components/home/WhyChooseUs'
import WorkingWith from '../components/about/workingWith'
import { useEffect } from 'react'
import { getAnalytics, logEvent } from "firebase/analytics";

export default function About() {



 
  useEffect(() => {
    const analytics = getAnalytics();
    logEvent(analytics, "screen_About", {
      firebase_screen: "About",
    });
  }, []);





  return (
    <Layout>



    <div>




<BannerAbout/>

<HistoryAbout/>



<WhyChooseUs/>

{/* <Features/> */}

<SozBanner/>

<WorkingWith/>



{/* <div className=" lg:w-full  m-auto w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="relative w-full rounded">
                                    <div className="carausel-fade slick-carausel rounded" id="carausel-fade-1">
                                    <TeamSlider/>
                                    </div>
                                </div>
                            </div> */}









    </div>
    </Layout>
  )
}
