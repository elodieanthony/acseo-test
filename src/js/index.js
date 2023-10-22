$(document).ready(function () {
  // Slick slider launch

  //Slider realization
  $('.slider').slick({
    arrows: true,
    slidesToShow: 1.5,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '20%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next'),
  });

  // Slider testimony
  $('.slider-testimony').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
