$(document).ready(function(){

		$('.slides').slick({
  		centerMode: true,
  		centerPadding: '60px',
  		slidesToShow: 2,
		nextArrow: '<button class="slick-bttn right"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-bttn left"><i class="fas fa-chevron-left"></i></button>',
  		responsive: [
    	{
      	breakpoint: 768,
      	settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
	  	}
    	},
    	{
      	breakpoint: 480,
      	settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      	}
    	}
  		]
		});	
		
});
