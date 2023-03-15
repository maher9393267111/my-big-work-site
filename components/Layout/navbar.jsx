import React from 'react'
import Link from 'next/link'
import {useState} from 'react'

export default function Navbar() {


  const offcanvasContainer=document.querySelector("#offcanvas-nav");
  const openBtn=document.querySelector("#nav-opn-btn");
  const closeBtn=document.querySelector("#nav-cls-btn")


const openNav=()=>{
  const offcanvasContainer=document.querySelector("#offcanvas-nav");
  offcanvasContainer.classList.add("open");
  

}


const closeNav=()=>{
  const offcanvasContainer=document.querySelector("#offcanvas-nav");
  offcanvasContainer.classList.remove("open");

  
}


  return (
    <div>
<header className="header-s3">
<div className="header-container">
<div className="header-top-container">
<div className="container">
<div className="header-s3__top">
<div className="p-left">
<div className="tb-single-info-s2">
<div className="icon">
<i className="fa-solid fa-phone"></i>
</div>
<div className="content">
<p><Link href="tel:88 ( 5548 ) 6548">+88 ( 5548 ) 6548</Link></p>
</div>
</div>
<div className="tb-single-info-s2">
<div className="icon">
<i className="fa-solid fa-envelope"></i>
</div>
<div className="content">
<p>
<Link href="mailto:futur2196@gmail.com"><span className="__cf_email__" data-cfemail="771e1911180e18020537101a161e1b5914181a">
  futur2196@gmail.com
  
  
  </span></Link>
</p>
</div>
</div>
<div className="tb-single-info-s2">
<div className="icon">
<i className="fa-solid fa-location-dot"></i>
</div>
<div className="content">
<p>
<Link href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415">Kocaeli , Turkey</Link
                      >
</p>
</div>
</div>
</div>
<div className="p-right">
<ul className="social-icons-s1">
<li>
<Link href="https://www.facebook.com/Patagonia.tourism?mibextid=ZbWKwl"><i className="fa-brands fa-facebook-f"></i
                    ></Link>
</li>


<li>
<Link href="https://wa.me//905385073947"><i className="fa-brands fa-whatsapp"></i
                    ></Link>
</li>



<li>
<Link href="https://www.instagram.com/patagonia_tourism_industries?igshid=ZDdkNTZiNTM="><i className="fa-brands fa-instagram"></i
                    ></Link>




{/* <li>
<Link href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-twitter"></i
                    ></Link>
</li> */}

{/* <li>

<Link href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-linkedin-in"></i
                    ></Link>
</li> */}



{/* <li>
<Link href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-youtube"></i
                    ></Link>
</li> */}


</li>
</ul>
</div>
</div>
</div>
</div>
<div className="header-bottom-container">
<div className="container">
<div className="header-s3__bottom">
<div className="p-left">
<div className="logo">
<img 
className=' w-24 h-[77px] object-cover'
src="/assets/images/logos/our-logo.jpeg"
// "/assets/images/logos/logo-blue.svg"

alt="" />
</div>
</div>
<div className="p-center">
<nav className="m-nav">
<ul>
{/* <li className="dropdown">
<Link href="">الرئيسية <i className="fa-solid fa-chevron-down"></i
                      ></Link>
<ul className="d-menu">
<li><Link >Home 1</Link></li>
<li><Link >Home 2</Link></li>
<li><Link >Home 3</Link></li>
</ul>
</li> */}


<li><Link href="/">
  الرئيسية
</Link>

</li>
{/* <li><Link href="about.html">About</Link></li> */}
<li><Link href="/about">الخدمات التي نقدمها</Link></li>
{/* <li className="dropdown">
<Link href="#">Pages <i className="fa-solid fa-chevron-down"></i
                      ></Link>
<ul className="d-menu">
<li><Link href="team.html">Team</Link></li>
<li><Link href="team-detail.html">Team Details</Link></li>
<li>
<Link href="service-detail.html">Service Detail</Link>
</li>
<li>
<Link href="portfolio-detail.html">Portfolio Details</Link>
</li>
<li><Link href="pricing.html">Pricing</Link></li>
<li><Link href="error.html">Error</Link></li>
</ul>
</li> */}
{/* <li><Link href="portfolio.html">Portfolio</Link></li> */}
{/* <li className="dropdown">
<Link href="#">Blog <i className="fa-solid fa-chevron-down"></i
                      ></Link>
<ul className="d-menu">
<li><Link href="blog.html">Blog Full Width</Link></li>
<li>
<Link href="blog-right-sidebar.html">Blog Right Sidebar</Link
                          >
</li>
<li><Link href="blog-detail.html">Blog Details</Link></li>
</ul>
</li> */}


<li><Link href="/projects">
  من مشاريعنا
</Link>

</li>


<li><Link href="/contact">تواصل معنا</Link></li>
</ul>
</nav>
</div>
{/* <div className="p-right">
<Link  className="btn btn-s3">Admin Dashboard</Link>
</div> */}
</div>
</div>
</div>
</div>
</header>



{/* ------MOBILE--- */}
<header className="mobile-header">
<div className="container">
<div className="mobile-header__container">
<div className="p-left">
<div className="logo">
<img
className=' w-24   h-[62px] object-cover'
src="assets/images/logos/our-logo.jpeg" 
alt="" />
</div>
</div>
<div className="p-right">
<button
onClick={openNav}

id="nav-opn-btn">
<i className="fa-solid fa-bars"></i>
</button>
</div>
</div>
</div>
</header>


{/* -SIDEEEE MOBILE--  Linkside */}
<div id="offcanvas-nav">
<nav className="m-nav">
<button
onClick={closeNav}

id="nav-cls-btn"><i className="fa-solid fa-xmark"></i></button>
<div className="logo">
<img 
className=' w-24 h-[77px]  object-cover'
src="assets/images/logos/our-logo.jpeg"
 alt="" />
</div>
<ul className="nav-links">
<li className="dropdown">
<Link href="#">
  الرئيسية
 {/* <i className="fa-solid fa-chevron-dow"></i> */}
 
 </Link>



{/* <ul className="d-menu">
<li><Link href="index-2.html">Home 1</Link></li>
<li><Link href="index-3.html">Home 2</Link></li>
<li><Link href="index-4.html">Home 3</Link></li>
</ul> */}
</li>
<li><Link href="/about">
  الخدمات التي نقدمها
  </Link></li>
<li><Link href="/projects">
  
  من مشاريعنا
  </Link></li>



<li><Link href="/contact">
  
  تواصل معنا
  
  </Link></li>
</ul>
<ul className="social-icons-s1">
<li>
<Link href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-facebook-f"></i
              ></Link>
</li>
<li>
<Link href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-twitter"></i
              ></Link>
</li>
<li>
<Link href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-linkedin-in"></i
              ></Link>
</li>
<li>
<Link href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-youtube"></i
              ></Link>
</li>
</ul>
</nav>
</div>




    </div>
  )
}
