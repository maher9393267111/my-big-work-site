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



    const settings2 = {

        dots: true, infinite: true, autoplay: false, prevArrow: '', nextArrow: '', speed: 300, slidesToShow: 3, slidesToScroll:1 ,
        responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,dots:false}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]




    }






    return (
        <div>

            {/* ---------SLIDER_ONE------ */}

            <section className="project-slider-area-s1  ">
                <div className="container-fluid">
                    <div className="s-title-wrap">
                        <span className="s-sub-titl text-white text-3xl font-arabic">

خدماتنا

                        </span>
                        {/* <h2 className="s-title">Proud Team of Great Project</h2> */}
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
                                            <h3 className="name">
                                                برمجة مواقع
                                            </h3>
                                            {/* <ul className="p-catagories">
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">Logo</a></li>
                                                <li><a href="#">Mobile App</a></li>
                                            </ul> */}
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
                                            <h3 className="name">
                                                تصميم مواقع متوافقة مع كل الشاشات
                                            </h3>
                                            {/* <ul className="p-catagories">
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">Logo</a></li>
                                                <li><a href="#">Mobile App</a></li>
                                            </ul> */}
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
                                            <h3 className="name">
تصاميم  سوشيال ميديا

                                            </h3>
                                            {/* <ul className="p-catagories">
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">Logo</a></li>
                                                <li><a href="#">Mobile App</a></li>
                                            </ul> */}
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
                                            <h3 className="name">
                                                تصاميم وبروشورات إعلانية
                                            </h3>
                                            {/* <ul className="p-catagories">
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">Logo</a></li>
                                                <li><a href="#">Mobile App</a></li>
                                            </ul> */}
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
                                            <h3 className="name">
                                                قوالب احترافية جذابة
                                            </h3>
                                            {/* <ul className="p-catagories">
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">Logo</a></li>
                                                <li><a href="#">Mobile App</a></li>
                                            </ul> */}
                                        </div>
                                        <div className="p-right">
                                            <a href="portfolio-detail.html" className="r-btn">
                                                <i className="fa-sharp fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4">
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
                            </div> */}


                        </Slider>



                    </div>
                </div>
            </section>










   {/* ---------SLIDER_TWO------ */}


            {/* <section class="project-slider-area-s2 s-padding">
                <div class="container">
                    <div class="row project-slider-container-s2">

                        <Slider {...settings2}>


                            <div class="col-lg-4">
                                <div class="s-project-s2">
                                    <div class="s-project-s2-inner">
                                        <div class="thumb">
                                            <img src="assets/images/thumbs/portfolio-1.jpg" alt="" />
                                        </div>
                                        <div class="content">
                                            <p>Product Design</p>
                                            <h3><a href="pricing.html">Web Application</a></h3>
                                            <a href="pricing.html" class="btn">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="s-project-s2">
                                    <div class="s-project-s2-inner">
                                        <div class="thumb">
                                            <img src="assets/images/thumbs/portfolio-1.jpg" alt="" />
                                        </div>
                                        <div class="content">
                                            <p>Product Design</p>
                                            <h3><a href="pricing.html">Software</a></h3>
                                            <a href="pricing.html" class="btn">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="s-project-s2">
                                    <div class="s-project-s2-inner">
                                        <div class="thumb">
                                            <img src="assets/images/thumbs/portfolio-2.jpg" alt="" />
                                        </div>
                                        <div class="content">
                                            <p>Product Design</p>
                                            <h3><a href="pricing.html">UI/UX Design</a></h3>
                                            <a href="pricing.html" class="btn">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="s-project-s2">
                                    <div class="s-project-s2-inner">
                                        <div class="thumb">
                                            <img src="assets/images/thumbs/portfolio-3.jpg" alt="" />
                                        </div>
                                        <div class="content">
                                            <p>Product Design</p>
                                            <h3><a href="pricing.html">Consulting</a></h3>
                                            <a href="pricing.html" class="btn">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="s-project-s2">
                                    <div class="s-project-s2-inner">
                                        <div class="thumb">
                                            <img src="assets/images/thumbs/portfolio-4.jpg" alt="" />
                                        </div>
                                        <div class="content">
                                            <p>Product Design</p>
                                            <h3><a href="pricing.html">Business</a></h3>
                                            <a href="pricing.html" class="btn">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="s-project-s2">
                                    <div class="s-project-s2-inner">
                                        <div class="thumb">
                                            <img src="assets/images/thumbs/portfolio-5.jpg" alt="" />
                                        </div>
                                        <div class="content">
                                            <p>Product Design</p>
                                            <h3><a href="pricing.html">Web Application</a></h3>
                                            <a href="pricing.html" class="btn">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider >

                    </div>
                </div>
            </section> */}




        </div>
    )
}
