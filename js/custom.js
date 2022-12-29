(function ($) {

    "use strict";
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back2top').fadeIn('slow');
        } else {
            $('.back2top').fadeOut('slow');
        };
    });
    // Back to top button

    // navbar scrolling
    $(window).scroll(function () {
        var scrolling = $(window).scrollTop();

        if (scrolling > 70) {
            $('.menu_bg').addClass('bg')
        } else {
            $('.menu_bg').removeClass('bg')
        };
    });
    // navbar scrolling

    // toggle button
    let navToggler = document.querySelector('.menu_btn');

    navToggler.addEventListener("click", navToggle);

    function navToggle() {
        navToggler.classList.toggle('active');
        let nav = document.querySelector('.menu_bar');
        nav.classList.toggle('open');
        if (nav.classList.contains('open')) {
            nav.style.maxHeight = nav.scrollHeight + 'px'
        } else {
            nav.removeAttribute('style');
        }
    };
    // slider js
    $('.hero_slide').owlCarousel({
        loop: true,
        autoPlay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // mixitup
    var config = document.querySelector('.mixit_box');
    var mixer = mixitup(config);
    // mixitup
    // AOS
    AOS.init();
    // AOS


})(window.jQuery);