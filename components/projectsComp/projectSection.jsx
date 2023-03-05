import React from 'react'

export default function ProjectsSection() {
  return (
    <>
    
    <section className="portfolio-gallery s-padding">
<div className="container">
<div className="s-title-wrap">
<span className="s-sub-title">Our Portfolio</span>
<h2 className="s-title">Some of Our Finest Work</h2>
</div>
<div className="row">
<div className="col-12">
<div className="porftolio-filter-menu">
<div className="portfolio-filter-buttons text-center" id="filter-buttons">
<button className="filter-btn current" data-filter="*">
All Categories
</button>
<button className="filter-btn" data-filter=".software">
Software
</button>
<button className="filter-btn" data-filter=".design">Design</button>
<button className="filter-btn" data-filter=".cyber-security">
Cyber Security
</button>
<button className="filter-btn" data-filter=".engineering">
Engineering
</button>
<button className="filter-btn" data-filter=".consulting">
Consulting
</button>
</div>
</div>
</div>
</div>
<div className="row portfolio-gallery-container">
<div className="portfolio-item software">
<div className="portfolio-item__inner">
<div className="thumb">
<img src="assets/images/portfolio-thumb/portfolio-img-1.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3>Colorful Small Cards</h3>
<span>Branding</span>
</div>
<div className="p-right">
<a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="portfolio-item software">
<div className="portfolio-item__inner">
<div className="thumb">
<img src="assets/images/portfolio-thumb/portfolio-img-2.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3>Colorful Small Cards</h3>
<span>Branding</span>
</div>
<div className="p-right">
<a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="portfolio-item design">
<div className="portfolio-item__inner">
<div className="thumb">
<img src="assets/images/portfolio-thumb/portfolio-img-4.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3>Colorful Small Cards</h3>
<span>Branding</span>
</div>
<div className="p-right">
<a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="portfolio-item cyber-security">
<div className="portfolio-item__inner">
<div className="thumb">
<img src="assets/images/portfolio-thumb/portfolio-img-3.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3>Colorful Small Cards</h3>
<span>Branding</span>
</div>
<div className="p-right">
<a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="portfolio-item consulting">
<div className="portfolio-item__inner">
<div className="thumb">
<img src="assets/images/portfolio-thumb/portfolio-img-5.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3>Colorful Small Cards</h3>
<span>Branding</span>
</div>
<div className="p-right">
<a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="portfolio-item software">
<div className="portfolio-item__inner">
<div className="thumb">
<img src="assets/images/portfolio-thumb/porftolio-img-6.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3>Colorful Small Cards</h3>
<span>Branding</span>
</div>
<div className="p-right">
<a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="portfolio-item engineering">
<div className="portfolio-item__inner">
<div className="thumb">
<img src="assets/images/portfolio-thumb/portfolio-img-7.png" alt="" />
</div>
<div className="content">
<div className="p-left">
<h3>Colorful Small Cards</h3>
<span>Branding</span>
</div>
<div className="p-right">
<a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>





{/* ---------SLIDER_------ */}
    
<section className="project-slider-area-s1">
<div className="container-fluid">
<div className="s-title-wrap">
<span className="s-sub-title">Our Project</span>
<h2 className="s-title">Proud Team of Great Project</h2>
</div>
<div className="row project-slider-container-s1">
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
<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img src="assets/images/thumbs/project-thumb-2.webp" alt="" />
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
<img src="assets/images/thumbs/project-thumb-3.png" alt="" />
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
<img src="assets/images/thumbs/project-thumb-4.png" alt="" />
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
<div className="col-lg-4">
<div className="s-project-s1">
<div className="thumb">
<img src="assets/images/thumbs/project-thumb-4.png" alt="" />
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
</div>
</div>
</section>



    </>
  )
}
