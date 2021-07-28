$(function(){
    $('.slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev" alt="prev arrow"> <img src="images/arrow-left.svg" alt="prew arrow"> </button>',
        nextArrow: '<button class="slick-arrow slick-next" alt="next arrow"> <img src="images/arrow-right.svg" alt="next arrow"> </button>',
        fade: true,
        responsive: [
            {
              breakpoint: 441,
              settings: {
               arrows: false,
              }
            },
        ]
     });
   
     

});

$(function(){
var mixer = mixitup('.gallery__content');
});