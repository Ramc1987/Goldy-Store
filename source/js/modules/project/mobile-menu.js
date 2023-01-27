const mobileWrapper = document.querySelector('.wrapper');
const menuToggle = document.querySelector('.menu-toggle');

function activateMobMenu() {
  menuToggle.addEventListener('click', () => {
    if (mobileWrapper.classList.contains('wrapper--open-menu')) {
      mobileWrapper.classList.remove('wrapper--open-menu');
    } else {
      mobileWrapper.classList.add('wrapper--open-menu');
    }
  });
}

export {activateMobMenu};
