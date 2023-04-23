
$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= $('#carouselExampleInterval').height()) {
            $('nav').removeClass('navbar-transparent');
            $('nav').addClass('bg-light');
        } else {
            $('nav').removeClass('bg-light');
            $('nav').addClass('navbar-transparent');
        }
    })
})