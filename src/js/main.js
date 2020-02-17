$(document).ready(function () {

    $('.section-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,

        smartSpeed: 900,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'/>", "<i class='fas fa-arrow-right'/>"],
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });
})