var slider = $('.slider');
var nextButton = $('.slider__next');
var prevButton = $('.slider__prev');

$('.slider').slick({
  //   dots: true,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow: prevButton,
  nextArrow: nextButton,
});

// var isPrevActive = false;

// slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//   isPrevActive = nextSlide < currentSlide;
// });

// slider.on('afterChange', function (event, slick, currentSlide) {
//   if (isPrevActive) {
//     prevButton.addClass('active');
//     nextButton.removeClass('active');
//   } else {
//     prevButton.removeClass('active');
//     nextButton.addClass('active');
//   }
// });

// prevButton.on('click', function () {
//   isPrevActive = true;
//   prevButton.addClass('active');
//   nextButton.removeClass('active');
// });
