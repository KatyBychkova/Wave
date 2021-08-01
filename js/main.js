$(function(){

  var mixer = mixitup('.gallery__content', {
    animation: {
      duration: 300

  }});

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1,
        autoplay : true
    },
   });


  $('.slider-blog__inner').slick({
    dots : true,
    prevArrow : '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow : '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="стрелка вправо"></button>'
  });

  // $('.gallery__content').slice(0, 6).show()
  // $('.gallery__more-link').on('click', function(){
  //   $('.gallery__content:hidden').slice(0, 6).slideDown()
  //   // if($('.gallery__content-list:hidden').length = 0) {
  //   //   $('.gallery__more-btn').fadeOut('slow')
  //   // }
  // })

 
});



// $(function(){

//   $('div').slice(0, 4).show()
//  $('.load__more').on('click', function(){
//    $('div:hidden').slice(0, 4).slideDown()
//    })
  
// })



