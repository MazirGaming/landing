$('.about-slider').slick({
    centerMode: true,
    centerPadding: '132px',
    slidesToShow: 2,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                centerPadding: '50%',
            }
        },
   
      ]
});
$('.footer-slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                centerPadding: '0px',
                variableWidth: false,
                autoplay: true,
            }
        },
      ]

});

let open = document.querySelector(".icon-menu")
let close = document.querySelector(".icon-close")
let menu = document.querySelector(".menu-mobile")
open.onclick = () => {
    menu.classList.add("menu-mobile__active");
    console.log(menu.classList)
}
close.onclick = () => {
    menu.classList.remove("menu-mobile__active");
}