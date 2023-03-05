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





})

})