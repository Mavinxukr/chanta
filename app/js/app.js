
// BURGER MENU
$(document).ready(function () {
    $('.sidebar-btn').click(function () {
        $('.line-black').toggleClass('line-black-move');
        $('.sidebar-btn,.sidebar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//AUTO SLIDER MAIN DESKTOP
// let intervalCsaHead = setInterval(csaHead,8000);

// let imgHead = [
//                 '../images/dist/img/mainBg/2.png',
//                 '../images/dist/img/mainBg/3.png',
//                 '../images/dist/img/mainBg/4.png',
//                 '../images/dist/img/mainBg/5.png',
//                 '../images/dist/img/mainBg/6.png',
//                 '../images/dist/img/mainBg/7.png',
//                 '../images/dist/img/mainBg/8.png',
//             ], i = 0;
// function csaHead(){
//     if(i > (imgHead.length - 1)){
//         clearInterval(intervalCsaHead);
//         }else{
//         $('.top-main-bg ').animate({'opacity':'0'}, 200,function(){
//             $('.top-main-bg ').css({
//                 'background':'url('+imgHead[i]+')',
//                 'background-size': 'cover',
//                 'background-repeat': 'no-repeat',
//             });
//             i++;
//         });
//         $('.top-main-bg ').animate({'opacity':'1'}, 200);
//     }
// }


    
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