import React from 'react'

export default function Banner() {
  return (
    <section  dir='rtl' className="hero-s2 gradient-moving">
    <div className="stretch-container">
    <div className="row flex-lg-col-reverse">
    <div className="col-lg-6 hero-s2__content">
    <h2 className="content-sh">Future Technology</h2>
    <h3  className="content-   text-white    text-3xl mb-12 w-[80%]   leading-[44px]  font-arabic"
    >نحن نقدم  خدمات تقنية وبرمجية في مجال تصميم وبرمجة المواقع وخدمات تصميم هوية بصرية كاملة  </h3>
    <a href="service-detail.html" className="btn btn-s1">Read More</a>
    </div>
    <div className="col-lg-6 hero-s2__thumb">
    <div className="img">
    <img src="assets/images/hero-img/2.png" alt="" />
    <img src="assets/images/backgrounds/hero-2-thumb-bg.png" alt="" className="b-img" />
    <div className="shapes">
    <img src="assets/images/shapes/hero-2-thumb-shape-1.png" alt="" className="shp-1 spin" />
    <img src="assets/images/shapes/hero-2-thumb-shape-2.png" alt="" className="shp-2 spin" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}
