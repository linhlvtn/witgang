$('.brandTop').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1.5
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


$('.owl-slidehome').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: true,
    items: 1,
    autoHeight: true
});


$('.owl-productHome').owlCarousel({
    nav: true,
    navText: ['<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-left fa-w-14 fa-2x"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>', '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-right fa-w-14 fa-2x"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>'],
    autoplay: false,
    dots: false,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1.5
        },
        600: {
            items: 2.5
        },
        1000: {
            items: 3
        }
    }
});


$(".fancybox").fancybox({

    openEffect: "none",

    closeEffect: "none"

});



//Menu Mobile-----------------
var $menu = $("#mainMenu").clone();
$menu.attr("id", "my-mobile-menu");
$menu.mmenu({
    extensions: ["theme-white"]
});