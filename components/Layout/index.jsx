import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children , noFooter = false, noNavbar =false}) {
  return (
    <div  className=' mb-4 home-2'>




{!noNavbar &&

<Navbar/>
}


<div className=" min-h-[80vh]">
    {children}
</div>


{!noFooter &&

<Footer/>

}

    </div>
  )
}
