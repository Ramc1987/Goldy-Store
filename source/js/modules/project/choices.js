import Choices from 'choices.js';

const element = document.querySelector('.choices');

function choiceJs() {
  // eslint-disable-next-line no-unused-vars
  const choice = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });
}


export {choiceJs};
