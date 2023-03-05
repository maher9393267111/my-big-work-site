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


        {/* <Script 
         type="text/javascript"
        src="assets/js/vendor.js" 
        strategy='beforeInteractive'
        ></Script> */}
    
 
{/* ---------------- */}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.js"async integrity="sha512-nO7wgHUoWPYGCNriyGzcFwPSF+bPDOR+NvtOYy2wMcWkrnCNPKBcFEkU80XIN14UVja0Gdnff9EmydyLlOL7mQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js" async integrity="sha512-WNZwVebQjhSxEzwbettGuQgWxbpYdoLf7mH+25A7sfQbbxKeS5SQ9QBf97zOY4nOlwtksgDA/czSTmfj4DUEiQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" async integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />


<Script    type="text/javascript" src="assets/js/plugins.js"   async  strategy='beforeInteractive'  ></Script>

<Script    type="text/javascript" src="assets/js/main.js"  async   strategy='beforeInteractive'  ></Script>

<Script    type="text/javascript" src="assets/js/me.js"   async  strategy='beforeInteractive'  ></Script>



{/* <Script data-cfasync="false" src="https://quomodothemes.website/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js" async> 
</Script> */}
<Script src="assets/js/vendor/font-awesome.min.js" async    strategy='beforeInteractive' ></Script>
<Script src="assets/js/vendor/jquery.min.js"  async   strategy='beforeInteractive'  ></Script>
<Script src="assets/js/vendor/slick.min.js"  async   strategy='beforeInteractive' ></Script>
<Script src="assets/js/vendor/waypoints.min.js" async   strategy='beforeInteractive' ></Script>
<Script src="assets/js/vendor/counterup.min.js" async   strategy='beforeInteractive' ></Script>
<Script src="assets/js/vendor/isotope.min.js" async   strategy='beforeInteractive' ></Script>
{/* <Script src="assets/js/vendor/youtube.api.js" async strategy='beforeInteractive'>    </Script> */}
<Script src="assets/js/videoPopup.js" async   strategy='beforeInteractive' ></Script>
<Script src="assets/js/vendor/gsap.min.js" async   strategy='beforeInteractive' ></Script>
<Script src="assets/js/vendor/scrollTrigger.min.js" async   strategy='beforeInteractive' ></Script>
<Script src="assets/js/animations.js" async   strategy='beforeInteractive' ></Script> 




      </body>
    </Html>
  )
}