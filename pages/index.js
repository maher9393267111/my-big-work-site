import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Banner from '../components/home/banner'
import AboutOne from '../components/home/AboutOne'
import SectionTwo from '../components/home/AboutTwo'
import WhyChooseUs from '../components/home/WhyChooseUs'
import SectionFive from '../components/home/sectionFive'
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from 'react'








export default function Home() {


 
  useEffect(() => {
    const analytics = getAnalytics();
    logEvent(analytics, "screen_Home", {
      firebase_screen: "Home",
    });
  }, []);





  return (
    <Layout>

    
    <div classNameName=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
{/* ---Banner header ---- */}

<Banner/>

{/* -------ABOUT_ONE- */}

<AboutOne/>


<SectionTwo/>


<WhyChooseUs/>


<SectionFive/>


{/* <section className="blog-area-s2 s-padding">
<div className="container">
<div className="s-title-wrap">
<span className="s-sub-title  text-white">Our Latest News</span>
<h2 className="s-title  text-white">Learn More Our Blog Post</h2>
</div>
<div className="row">
<div className="col-lg-4 col-md-6">
<div className="b-post-s2">
<div className="thumb">
<img src="assets/images/blog-post/post-thumb-1.png" alt="" />
<div className="date">
<p>26 May 2022</p>
</div>
</div>
<div className="content">
<ul className="meta">
<li>
<span className="icon"><i className="fa-regular fa-user"></i></span>
<span className="text">By Admin</span>
</li>
<li>
<span className="icon"><i className="fa-regular fa-comment"></i
                    ></span>
<span className="text">12 Comments</span>
</li>
</ul>
<h4 className="title">
<a href="blog-detail.html">Desk with Charts Smart Dusinessman Sitting</a>
</h4>
<div className="btm">
<a className="readmore" href="blog-detail.html">Learn More <i className="fa-solid fa-arrow-right"></i
                  ></a>
</div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6">
<div className="b-post-s2">
<div className="thumb">
<img src="assets/images/blog-post/post-thumb-2.png" alt="" />
<div className="date">
<p>26 May 2022</p>
</div>
</div>
<div className="content">
<ul className="meta">
<li>
<span className="icon"><i className="fa-regular fa-user"></i></span>
<span className="text">By Admin</span>
</li>
<li>
<span className="icon"><i className="fa-regular fa-comment"></i
                    ></span>
<span className="text">12 Comments</span>
</li>
</ul>
<h4 className="title">
<a href="blog-detail.html">Medium shot woman with vr glasses</a>
</h4>
<div className="btm">
<a className="readmore" href="blog-detail.html">Learn More <i className="fa-solid fa-arrow-right"></i
                  ></a>
</div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 d-lg-none">
<div className="b-post-s2">
<div className="thumb">
<img src="assets/images/blog-post/post-thumb-3.png" alt="" />
<div className="date">
<p>26 May 2022</p>
</div>

</div>
<div className="content">
<ul className="meta">
<li>
<span className="icon"><i className="fa-regular fa-user"></i></span>
<span className="text">By Admin</span>
</li>
<li>
<span className="icon"><i className="fa-regular fa-comment"></i
                    ></span>
<span className="text">12 Comments</span>
</li>
</ul>
<h4 className="title">
<a href="blog-detail.html">Easy & Most Powerful Server and Platform.</a>
</h4>
<div className="btm">
<a className="readmore" href="blog-detail.html">Learn More <i className="fa-solid fa-arrow-right"></i
                  ></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}





    </div>
    </Layout>
  )
}
