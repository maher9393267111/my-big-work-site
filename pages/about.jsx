import React from 'react'
import Layout from '../components/Layout'
import BannerAbout from '../components/about/banner'
import Features from '../components/about/Features'
import TeamSlider from '../components/about/teamSlider'

export default function About() {
  return (
    <Layout>


  
    <div>

<BannerAbout/>
<Features/>

<div className="w-full lg:w-full mx-12 flex flex-wrap px-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="relative w-full rounded">
                                    <div className="carausel-fade slick-carausel rounded" id="carausel-fade-1">
                                    <TeamSlider/>
                                    </div>
                                </div>
                            </div>









    </div>
    </Layout>
  )
}
