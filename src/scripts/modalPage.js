import '../styles/modalPage.scss';
import work1 from '../assets/images/work1.jpg';
import work2 from '../assets/images/work2.jpg';
import work3 from '../assets/images/work3.jpg';
import work4 from '../assets/images/work4.jpg';
import work5 from '../assets/images/work5.jpg';
import work6 from '../assets/images/work6.jpg';

function closeButtonClick(event) {
  const modal = document.querySelector('#modal');
  const modalOverlay = document.querySelector('#modal-overlay');
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  event.stopImmediatePropagation();
}

function cheatsheetLinkClick({ target }) {
  const modalPage = document.getElementById('modal-guts-img');
  switch (target.classList[0]) {
    case 'sectionWorks__item1':
      modalPage.src = work1;
      break;
    case 'sectionWorks__item2':
      modalPage.src = work2;
      break;
    case 'sectionWorks__item3':
      modalPage.src = work3;
      break;
    case 'sectionWorks__item4':
      modalPage.src = work4;
      break;
    case 'sectionWorks__item5':
      modalPage.src = work5;
      break;
    case 'sectionWorks__item6':
      modalPage.src = work6;
      break;
    default:
      break;
  }
  const modal = document.querySelector('#modal');
  const modalOverlay = document.querySelector('#modal-overlay');
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  modal.addEventListener('click', closeButtonClick);
}

const modalPage = document.querySelectorAll('.sectionWorks__item');
[].forEach.call(modalPage, (col) => {
  col.addEventListener('click', cheatsheetLinkClick);
});
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
modal.classList.toggle('closed');
modalOverlay.classList.toggle('closed');
