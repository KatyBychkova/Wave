$(function() {

    $('.menu__btn').on('click', function() {
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    var mixer = mixitup('.gallery__content', {
        animation: {
            duration: 300

        }
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 1,
            showinfo: 1,
            autoplay: true
        },
    });


    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'

    });



});