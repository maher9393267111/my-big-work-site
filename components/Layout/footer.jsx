import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>


            <footer className="footer-s1 pb-[44px]">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-12">
                            <div className="footer-cta">
                                <div className="p-left">
                                    <span>For IT Company</span>
                                    <h2>Join IT Solution Our Community</h2>
                                </div>
                                <div className="p-right">
                                    <form action="#">
                                        <div className="f-subs-form">
                                            <input type="text" placeholder="Enter your email address" />
                                            <button type="submit">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row f-mai  p-[24]  md:relative md:left-[110px]">
                        <div className="col-xl-3 col-lg-6">
                            <div className="f-widget widget-1">
                                <div className="logo">
                                    <img
                                    className=' w-[88px] mb-6 object-cover rounded-[3.5rem]  h-[88px]'
                                    src="assets/images/logos/our-logo.jpeg" alt="" />
                                </div>
                                {/* <p className="desc">
                                    There are many variatons of pass Ipsum available, but the
                                    majority alteration in some form, by inject randomised words
                                </p> */}
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
                        <div className="col-xl-3 col-lg-6">
                            <div className="f-widget widget-2">
                                <h3 className="f-title">
                                    روابط الصفحات
                                </h3>
                                <ul className="f-menu">
                                    <li>
                                        <Link href='/'> الرئيسية</Link>
                                    </li>
                                    <li>
                                        <Link href='/services'>الخدمات</Link>
                                    </li>
                                    <li>
                                        <Link href='/projects'>
                                            مشاريعنا
                                        </Link>
                                    </li>
                                    <li>

<Link href='/contact'>
تواصل معنا
</Link>
                                    </li>
                                    <li>


                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6">
                            <div className="widget-4">
                                <h3 className="f-title">Contact Us</h3>
                                <ul className="info-list">
                                    <li>
                                        <a href="tel:750-1234"><i className="fa-solid fa-phone"></i>+(323) 750-1234</a
                                        >
                                    </li>
                                    <li>
                                        <a href="mailto:futur2196@gmail.com">
                                        
                                        <i className="fa-solid fa-location-dot"></i
                                        ><span className="__cf_email__" data-cfemail="650c0b030a1c0a1017250208040c094b060a08">
                                        futur2196@gmail.com
                                            </span></a
                                        >
                                    </li>




                                    {/* <li>
                                        <a href=""></i>374 FA Kocaeli ,Turkey
                                            </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-cr">
                    <div className="container">
                        <div className="footer-cr-container">
                            <div className="p-left">
                                <p>2022 © All rights reserved by QuomodoTheme</p>
                            </div>
                            <div className="p-right">
                                <ul className="cr-menu">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </footer>


        </div>
    )
}
