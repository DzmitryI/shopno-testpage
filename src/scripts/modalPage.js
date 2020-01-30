import '../styles/modalPage.scss';
import work1 from '../assets/images/work1.jpg';
import work2 from '../assets/images/work2.jpg';
import work3 from '../assets/images/work3.jpg';
import work4 from '../assets/images/work4.jpg';
import work5 from '../assets/images/work5.jpg';
import work6 from '../assets/images/work6.jpg';

const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');

function closeButtonClick(event) {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  event.stopImmediatePropagation();
}

function cheatsheetLinkClick({ target }) {
  const modalPage = document.querySelector('.modal__guts--img');
  switch (target.classList[0]) {
    case 'works__item1':
      modalPage.src = work1;
      break;
    case 'works__item2':
      modalPage.src = work2;
      break;
    case 'works__item3':
      modalPage.src = work3;
      break;
    case 'works__item4':
      modalPage.src = work4;
      break;
    case 'works__item5':
      modalPage.src = work5;
      break;
    case 'works__item6':
      modalPage.src = work6;
      break;
    default:
      break;
  }
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  modal.addEventListener('click', closeButtonClick);
  modalOverlay.addEventListener('click', closeButtonClick);
}

const modalPage = document.querySelectorAll('.works__item');
[].forEach.call(modalPage, (col) => {
  col.addEventListener('click', cheatsheetLinkClick);
});
modal.classList.toggle('closed');
modalOverlay.classList.toggle('closed');
