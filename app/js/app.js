
// BURGER MENU
$(document).ready(function () {
    $('.sidebar-btn').click(function () {
        $('.line-black').toggleClass('line-black-move');
        $('.sidebar-btn,.sidebar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// SLIDER
$(document).ready(function () {
    $('.mainSlider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDots: false,
        fade: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider-reviews').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDots: false,
        fade: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });
});

// REMOVE CLASS CONTAINER

if(document.body.clientWidth <= 768){
    let container = document.querySelector('.container');
    container.classList.remove('container');
}