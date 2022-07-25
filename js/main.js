$(function() {


    $(window).on("scroll", function () {
        var scrolled = $(this).scrollTop();
        if( scrolled > 130 ) {
            $('.header__top').addClass('scrolled');
            $('.header__content').addClass('margined');
        }   
        if( scrolled <= 130 ) {     
            $('.header__top').removeClass('scrolled');
            $('.header__content').removeClass('margined');
        }
    });

	$(".menu a, .header__content-inner a, .header__top-inner a, .footer__logo a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
    	top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	});


    $('.menu__btn, .menu a').on('click', function() {
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    $(".gallery__inner").each(function() {
        let more = $(this).find(".gallery__more-btn");
        let hide = $(this).find(".hide-content");
        hide.hide();
        more.click(function() {
            hide.slideToggle();
            more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
        });
    });

    var mixer = mixitup('.gallery__content', {
        animation: {
            duration: 300,
            "nudge": false,
            "reverseOut": false,
            "effects": "fade translateX(-1%) rotateY(-2deg)"
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
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 950,
              settings: {
                arrows: false
              }
            }
        ]

    });





});