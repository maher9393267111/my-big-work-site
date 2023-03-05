import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >

      <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
<link rel="stylesheet" href="assets/css/vendor/slick.css" />
<link rel="stylesheet" href="assets/css/vendor/floating.css" />
<link rel="stylesheet" href="assets/css/style.css" />



        </Head>
      <body>
        <Main />
        <NextScript />

       

    
<Script data-cfasync="false" src="https://quomodothemes.website/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script>

{/* <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> */}

<Script    type="text/javascript" src="/assets/js/vendor/font-awesome.min.js"  async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/jquery.min.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/slick.min.js"  async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/waypoints.min.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/counterup.min.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/isotope.min.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/youtube.api.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript"src="/assets/js/videoPopup.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/gsap.min.js" async   strategy='beforeInteractive' ></Script>
<Script   type="text/javascript" src="/assets/js/vendor/scrollTrigger.min.js" async   strategy='beforeInteractive' ></Script>
<Script src="/assets/js/animations.js" async   strategy='beforeInteractive' ></Script>
{/* <Script src="assets/js/plugins.js" async   strategy='beforeInteractive' ></Script> */}
<Script   type="text/javascript" src="/assets/js/main.js" async    strategy='lazyOnload' ></Script>

<Script    type="text/javascript" src="/assets/js/me.js" async   strategy='lazyOnload' ></Script>







{/* // async   strategy='beforeInteractive'  */}


      </body>
    </Html>
  )
}