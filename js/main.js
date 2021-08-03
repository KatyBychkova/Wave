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
    arrows : false
   
  });

  
 
});






