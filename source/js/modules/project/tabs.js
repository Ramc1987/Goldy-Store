const activatesTabs = () => {
  const tabs = document.querySelectorAll('.sale-tabs__button');
  const tabsContent = document.querySelectorAll('.sale-tabs__content-list');

  if (tabs) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        if (tabsContent) {
          tabsContent.forEach((item) => {
            item.classList.remove('sale-tabs__content-list--active');
            target.classList.add('sale-tabs__content-list--active');
          });
        }
        tabs.forEach((tabitem) => {
          tabitem.classList.remove('sale-tabs__button--active');
        });

        tab.classList.add('sale-tabs__button--active');
      });
    });
  }
};

export {activatesTabs};
