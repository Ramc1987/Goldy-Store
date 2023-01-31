import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {choiceJs} from './modules/project/choices';
import {activateMobMenu} from './modules/project/mobile-menu';
import {initSwiperPromo} from './modules/project/swiper-promo';
import {initSwiperSaleProducts} from './modules/project/sale-product';
import {activatesTabs} from './modules/project/tabs';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const swiper = document.querySelector('.swiper');

  // Utils
  // ---------------------------------

  iosVhFix();
  initSwiperPromo(swiper);
  initSwiperSaleProducts(swiper);

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    choiceJs();
    activateMobMenu();
    activatesTabs();
  });
});

// ---------------------------------
