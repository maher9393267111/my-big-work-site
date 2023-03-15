import React from 'react'
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
SwiperCore.use([Navigation]);

export default function TeamSlider() {

  return (
    <div>




<>
<Swiper
                breakpoints={{                 
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next"
                }}             
            >
                <SwiperSlide>
                <div className="">
<div className="single-team-s2">
<div className="thumb">
<img src="assets/images/thumbs/about-team-4.jpg" alt="" />
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

                    <a href="https://www.facebook.com/QuomodoSoft"><i className="fa-brands fa-instagram"></i
                    ></a>
</li>
</ul>
</div>
<div className="content">
<h3 className="name">Druid Wensleydale</h3>
<p className="designation">Marketing Expert</p>
</div>
</div>
</div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="single-team-s2">
<div className="thumb">
<img src="assets/images/thumbs/about-team-4.jpg" alt="" />
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
<div className="content">
<h3 className="name">Druid Wensleydale</h3>
<p className="designation">Marketing Expert</p>
</div>
</div>

                </SwiperSlide>
                <SwiperSlide>
                <div className="single-team-s2">
<div className="thumb">
<img src="assets/images/thumbs/about-team-4.jpg" alt="" />
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
<div className="content">
<h3 className="name">Druid Wensleydale</h3>
<p className="designation">Marketing Expert</p>
</div>
</div>

                </SwiperSlide>
                <SwiperSlide>
                <div className="single-team-s2">
<div className="thumb">
<img src="assets/images/thumbs/about-team-4.jpg" alt="" />
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
<div className="content">
<h3 className="name">Druid Wensleydale</h3>
<p className="designation">Marketing Expert</p>
</div>
</div>

                </SwiperSlide>
            </Swiper>

            <div id="carausel-2-columns-1-arrows " className="flex  mt-4 mb-4 ml-6">
                <span className="mr-4 text-blue-500 flex slick-arrow custom_prev">
                    <svg className="w-6 h-6" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                    </svg>
                </span>
                <span className="text-blue-500 flex slick-arrow custom_next">
                    <svg className="w-6 h-6" fill="none" stroke="#20676a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </span>
            </div>

</>





    </div>
  )
}
