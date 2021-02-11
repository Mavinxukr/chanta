
// BURGER MENU
$(document).ready(function () {
    $('.sidebar-btn').click(function () {
        $('.line-black').toggleClass('line-black-move');
        // if($('.sidebar-btn').hasClass('active') ){
        //     $('.line-red').addClass('line-red-move');
        // }
        // }else{
        //     $('.line-black').removeClass('line-black-move');
        // }
        
        $('.sidebar-btn,.sidebar').toggleClass('active');
        $('body').toggleClass('lock');
    });

});

// SLIDER
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

