
$(document).ready(function() {
	
$('.single-item').slick({
  autoplay: false, 
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
    });

    $('.two-items').slick({
      autoplay:false,
      dots:false,
      infinite:true,
      speed:200,
      slidesToShow:2,
      slidesToScroll:2,
    });
  
});
