$('.brandTop').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



//Menu Mobile-----------------
var $menu = $("#mainMenu").clone();
$menu.attr("id", "my-mobile-menu");
$menu.mmenu({
    extensions: ["theme-white"]
});