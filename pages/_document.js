import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >

      <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
<link rel="stylesheet" href="/assets/css/vendor/slick.css" />
<link rel="stylesheet" href="/assets/css/vendor/floating.css" />
<link rel="stylesheet" href="/assets/css/style.css" />


{/* --------fonts---- */}

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;400;500&display=swap" rel="stylesheet"></link>


{/* ----project icon ---- */}

<link
          rel="icon"
          href="/assets/images/logos/our-logo.jpeg"
        
         
        />




{/* -----------JS----- */}

    




        </Head>
      <body>
        <Main />
        <NextScript />

        <Script data-cfasync="false" src="https://quomodothemes.website/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script>


<Script    type="text/javascript" src="/assets/js/vendor/font-awesome.min.js"  async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/jquery.min.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/slick.min.js"  async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/waypoints.min.js" async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/counterup.min.js" async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/isotope.min.js" async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/youtube.api.js" async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript"src="/assets/js/videoPopup.js" async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/gsap.min.js" async   strategy='lazyOnload' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/scrollTrigger.min.js" async   strategy='lazyOnload' ></Script>
<Script src="/assets/js/animations.js" async   strategy='lazyOnload' ></Script>
<Script
onLoad={()=>console.log('LOADED PLUGINS FILE 🔸️🔷️🔶️▫️')}

src="/assets/js/plugins.js" async   strategy='lazyOnload' ></Script>




<Script 

onLoad={()=>console.log('LOADED MAIN FILE 🔸️🔷️🔶️▫️')}
type="text/javascript" src="/assets/js/main.js" async  strategy='lazyOnload'   ></Script>




   


{/* // async   strategy='beforeInteractive'  */}


      </body>
    </Html>
  )
}