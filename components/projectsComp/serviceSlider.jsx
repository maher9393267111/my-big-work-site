import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ServiceSlider() {

    
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 2500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 455,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false
            }
          },
        ]
      };






  return (
    <div>

{/* ---------SLIDER_------ */}
    
<section className="project-slider-area-s1  ">
<div className="container-fluid">
<div className="s-title-wrap">
<span className="s-sub-title">Our Project</span>
<h2 className="s-title">Proud Team of Great Project</h2>
</div>
<div className="row project-slider-container-s1">

<Slider {...settings}>


<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img src="assets/images/thumbs/project-thumb.webp" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3 className="name">Web Development</h3>
<ul className="p-catagories">
<li><a href="#">Branding</a></li>
<li><a href="#">Logo</a></li>
<li><a href="#">Mobile App</a></li>
</ul>
</div>
<div className="p-right">
<a href="portfolio-detail.html" className="r-btn">
<i className="fa-sharp fa-solid fa-angle-right"></i>
</a>
</div>
</div>
</div>
</div>
<div

className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img className='w-full' src="assets/images/thumbs/project-thumb.webp" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3 className="name">Web Development</h3>
<ul className="p-catagories">
<li><a href="#">Branding</a></li>
<li><a href="#">Logo</a></li>
<li><a href="#">Mobile App</a></li>
</ul>
</div>
<div className="p-right">
<a href="portfolio-detail.html" className="r-btn">
<i className="fa-sharp fa-solid fa-angle-right"></i>
</a>
</div>
</div>
</div>
</div>
<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img className='w-full' src="assets/images/thumbs/project-thumb-2.webp" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3 className="name">App Development</h3>
<ul className="p-catagories">
<li><a href="#">Branding</a></li>
<li><a href="#">Logo</a></li>
<li><a href="#">Mobile App</a></li>
</ul>
</div>
<div className="p-right">
<a href="portfolio-detail.html" className="r-btn">
<i className="fa-sharp fa-solid fa-angle-right"></i>
</a>
</div>
</div>
</div>
</div>
<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img className='w-full' src="assets/images/thumbs/project-thumb-3.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3 className="name">Consulting</h3>
<ul className="p-catagories">
<li><a href="#">Branding</a></li>
<li><a href="#">Logo</a></li>
<li><a href="#">Mobile App</a></li>
</ul>
</div>
<div className="p-right">
<a href="portfolio-detail.html" className="r-btn">
<i className="fa-sharp fa-solid fa-angle-right"></i>
</a>
</div>
</div>
</div>
</div>
<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img className='w-full' src="assets/images/thumbs/project-thumb-4.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3 className="name">Advertising</h3>
<ul className="p-catagories">
<li><a href="#">Branding</a></li>
<li><a href="#">Logo</a></li>
<li><a href="#">Mobile App</a></li>
</ul>
</div>
<div className="p-right">
<a href="portfolio-detail.html" className="r-btn">
<i className="fa-sharp fa-solid fa-angle-right"></i>
</a>
</div>
</div>
</div>
</div>
<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img className='w-full' src="assets/images/thumbs/project-thumb.webp" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3 className="name">Web Development</h3>
<ul className="p-catagories">
<li><a href="#">Branding</a></li>
<li><a href="#">Logo</a></li>
<li><a href="#">Mobile App</a></li>
</ul>
</div>
<div className="p-right">
<a href="portfolio-detail.html" className="r-btn">
<i className="fa-sharp fa-solid fa-angle-right"></i>
</a>
</div>
</div>
</div>
</div>
<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img className='w-full' src="assets/images/thumbs/project-thumb-4.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3 className="name">App Development</h3>
<ul className="p-catagories">
<li><a href="#">Branding</a></li>
<li><a href="#">Logo</a></li>
<li><a href="#">Mobile App</a></li>
</ul>
</div>
<div className="p-right">
<a href="portfolio-detail.html" className="r-btn">
<i className="fa-sharp fa-solid fa-angle-right"></i>
</a>
</div>
</div>
</div>
</div>


</Slider>



</div>
</div>
</section>




    </div>
  )
}
