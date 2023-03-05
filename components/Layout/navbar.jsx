import React from 'react'

export default function Navbar() {
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
<p><a href="tel:88 ( 5548 ) 6548">+88 ( 5548 ) 6548</a></p>
</div>
</div>
<div className="tb-single-info-s2">
<div className="icon">
<i className="fa-solid fa-envelope"></i>
</div>
<div className="content">
<p>
<a href="https://quomodothemes.website/cdn-cgi/l/email-protection#e48d8a828b9d8b9196a48389858d88ca878b89"><span className="__cf_email__" data-cfemail="771e1911180e18020537101a161e1b5914181a">[email&#160;protected]</span></a>
</p>
</div>
</div>
<div className="tb-single-info-s2">
<div className="icon">
<i className="fa-solid fa-location-dot"></i>
</div>
<div className="content">
<p>
<a href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415">Circle Kitty New York</a
                      >
</p>
</div>
</div>
</div>
<div className="p-right">
<ul className="social-icons-s1">
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-facebook-f"></i
                    ></a>
</li>
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-twitter"></i
                    ></a>
</li>
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-linkedin-in"></i
                    ></a>
</li>
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-youtube"></i
                    ></a>
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
<img src="assets/images/logos/logo-blue.svg" alt="" />
</div>
</div>
<div className="p-center">
<nav className="m-nav">
<ul>
<li className="dropdown">
<a href="javascript:void(0)">Home <i className="fa-solid fa-chevron-down"></i
                      ></a>
<ul className="d-menu">
<li><a href="index-2.html">Home 1</a></li>
<li><a href="index-3.html">Home 2</a></li>
<li><a href="index-4.html">Home 3</a></li>
</ul>
</li>
<li><a href="about.html">About</a></li>
<li><a href="service.html">Services</a></li>
<li className="dropdown">
<a href="javascript:void(0)">Pages <i className="fa-solid fa-chevron-down"></i
                      ></a>
<ul className="d-menu">
<li><a href="team.html">Team</a></li>
<li><a href="team-detail.html">Team Details</a></li>
<li>
<a href="service-detail.html">Service Detail</a>
</li>
<li>
<a href="portfolio-detail.html">Portfolio Details</a>
</li>
<li><a href="pricing.html">Pricing</a></li>
<li><a href="error.html">Error</a></li>
</ul>
</li>
<li><a href="portfolio.html">Portfolio</a></li>
<li className="dropdown">
<a href="javascript:void(0)">Blog <i className="fa-solid fa-chevron-down"></i
                      ></a>
<ul className="d-menu">
<li><a href="blog.html">Blog Full Width</a></li>
<li>
<a href="blog-right-sidebar.html">Blog Right Sidebar</a
                          >
</li>
<li><a href="blog-detail.html">Blog Details</a></li>
</ul>
</li>
<li><a href="contact.html">Contact</a></li>
</ul>
</nav>
</div>
<div className="p-right">
<a href="service.html" className="btn btn-s3">Start a Project</a>
</div>
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
<img src="assets/images/logos/logo-blue.svg" alt="" />
</div>
</div>
<div className="p-right">
<button id="nav-opn-btn">
<i className="fa-solid fa-bars"></i>
</button>
</div>
</div>
</div>
</header>


{/* -SIDEEEE-- */}
<aside id="offcanvas-nav">
<nav className="m-nav">
<button id="nav-cls-btn"><i className="fa-solid fa-xmark"></i></button>
<div className="logo">
<img src="assets/images/logos/logo-blue.svg" alt="" />
</div>
<ul className="nav-links">
<li className="dropdown">
<a href="javascript:void(0)">Home <i className="fa-solid fa-chevron-down"></i></a>
<ul className="d-menu">
<li><a href="index-2.html">Home 1</a></li>
<li><a href="index-3.html">Home 2</a></li>
<li><a href="index-4.html">Home 3</a></li>
</ul>
</li>
<li><a href="about.html">About</a></li>
<li><a href="service.html">Services</a></li>
<li className="dropdown">
<a href="javascript:void(0)">Pages <i className="fa-solid fa-chevron-down"></i></a>
<ul className="d-menu">
<li><a href="team.html">Team</a></li>
<li><a href="team-detail.html">Team Details</a></li>
<li>
<a href="service-detail.html">Service Detail</a>
</li>
<li>
<a href="portfolio-detail.html">Portfolio Details</a>
</li>
<li><a href="pricing.html">Pricing</a></li>
<li><a href="error.html">Error</a></li>
</ul>
</li>
<li><a href="portfolio.html">Portfolio</a></li>
<li className="dropdown">
<a href="javascript:void(0)">Blog <i className="fa-solid fa-chevron-down"></i></a>
<ul className="d-menu">
<li><a href="blog.html">Blog Full Width</a></li>
<li>
<a href="blog-right-sidebar.html">Blog Right Sidebar</a>
</li>
<li><a href="blog-detail.html">Blog Details</a></li>
</ul>
</li>
<li><a href="contact.html">Contact</a></li>
</ul>
<ul className="social-icons-s1">
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-facebook-f"></i
              ></a>
</li>
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-twitter"></i
              ></a>
</li>
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-linkedin-in"></i
              ></a>
</li>
<li>
<a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-youtube"></i
              ></a>
</li>
</ul>
</nav>
</aside>




    </div>
  )
}
