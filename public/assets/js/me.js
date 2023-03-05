$(function() {


$(document).ready(function () {

    console.log('Loading')
    /**-----------------------------
     *  Navbar fix
     * ---------------------------*/
 
   
    $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
        console.log('click', e.target);
        e.preventDefault();
    })
   

    // ----Open Mobile menu ----

    $(document).on('click', '#nav-opn-btn', function (e) {
        var mainmenu = $('#offcanvas-nav');
       
        console.log('click', e.target);
        e.preventDefault();
        mainmenu.addClass('open');
        document.body.style.overflowY="hidden"
      //  offcanvasContainer.classList.add("open");
    })
   


// ------Cloise Mobile Menu---

$(document).on('click', '#nav-cls-btn', function (e) {
    var mainmenu = $('#offcanvas-nav');
    const $body = $('body');
   
    console.log('click', e.target);
    e.preventDefault();
    mainmenu.removeClass('open');
    // document.body.style.overflowY="hidden"
    $body.addClass('over-hidden')
    
  //  offcanvasContainer.classList.add("open");
})



$('.team-slider-s1').slick({dots:true,infinite:true,autoplay:false,prevArrow:'',nextArrow:'',speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,dots:false}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.feature-s3-inner').slick({dots:true,infinite:true,autoplay:true,prevArrow:'',nextArrow:'',speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,dots:false}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});







})

})