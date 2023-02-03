const initSwiperSaleProducts = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#swiperSale', {
      loop: true,
      cssMode: true,
      autoplay: {
        delay: 1000,
      },

      pagination: {
        el: '.swiper-pagination',
      },
      mousewheel: true,
      keyboard: true,
    });
  }
};

export {initSwiperSaleProducts};
