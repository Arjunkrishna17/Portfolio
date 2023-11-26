export const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,

  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
