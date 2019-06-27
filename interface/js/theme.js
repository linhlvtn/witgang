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
    loop: true,
    margin: 0,
    nav: false,
    autoplay: false,
    dots: false,
    responsive: {
        0: {
            items: 1.5
        },
        600: {
            items: 3
        },
        1000: {
            items: 2.5
        }
    }
});



//Menu Mobile-----------------
var $menu = $("#mainMenu").clone();
$menu.attr("id", "my-mobile-menu");
$menu.mmenu({
    extensions: ["theme-white"]
});