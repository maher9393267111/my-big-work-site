import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <div  className=' mb-4 home-2'>

<Navbar/>


<div className=" min-h-[80vh]">
    {children}
</div>


<Footer/>


    </div>
  )
}
