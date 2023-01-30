const initSwiperPromo = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#swiperPromo', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      loop: true,
      cssMode: true,
      autoplay: {
        delay: 4000,
      },

      pagination: {
        el: '.swiper-pagination',
      },
      mousewheel: true,
      keyboard: true,
    });
  }
};

export {initSwiperPromo};
