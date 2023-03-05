// $(function() {


$(document).ready(function () {

    console.log('Loading1')
    /**-----------------------------
     *  Navbar fix
     * ---------------------------*/
 

    $(document).on('click', 's-sub-title', function (e) {

 
      console.log('click', '!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      e.preventDefault();
     
    })
    



   
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






$(document).on('click', '.portfolio-filter-buttons button', function (e) {
  e.preventDefault();
// console.log('FILTER BUTTON')

var filterbtn = $('.filter-btn');

filterbtn.removeClass('current');
console.log('remove filter')
 $(this).addClass('current');var selector=$(this).attr('data-filter');$('.portfolio-gallery-container').isotope({filter:selector,animationOptions:{duration:1000,easing:'linear',queue:false}});return false;

  
})










})

// })