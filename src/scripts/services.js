import '../styles/services.scss';
import service1Img from '../assets/images/service1.jpg';
import service2Img from '../assets/images/service2.jpg';
import service3Img from '../assets/images/service3.jpg';
import service4Img from '../assets/images/service4.jpg';
import service5Img from '../assets/images/service5.jpg';
import service6Img from '../assets/images/service6.jpg';

const service1 = document.querySelector('.sectionServices__item1-img');
service1.src = service1Img;
const service2 = document.querySelector('.sectionServices__item2-img');
service2.src = service2Img;
const service3 = document.querySelector('.sectionServices__item3-img');
service3.src = service3Img;
const service4 = document.querySelector('.sectionServices__item4-img');
service4.src = service4Img;
const service5 = document.querySelector('.sectionServices__item5-img');
service5.src = service5Img;
const service6 = document.querySelector('.sectionServices__item6-img');
service6.src = service6Img;

function LinkClick({ target }) {
  switch (target.classList[0]) {
    case 'sectionServices__item1-link':
      document.querySelector('.sectionServices__item1-img').style.opacity = '1';
      document.querySelector('.sectionServices__item1-inner').style.visibility = 'hidden';
      break;
    case 'sectionServices__item2-link':
      document.querySelector('.sectionServices__item2-img').style.opacity = '1';
      break;
    case 'sectionServices__item3-link':
      document.querySelector('.sectionServices__item3-img').style.opacity = '1';
      break;
    case 'sectionServices__item4-link':
      document.querySelector('.sectionServices__item4-img').style.opacity = '1';
      break;
    case 'sectionServices__item5-link':
      document.querySelector('.sectionServices__item5-img').style.opacity = '1';
      break;
    case 'sectionServices__item6-link':
      document.querySelector('.sectionServices__item6-img').style.opacity = '1';
      break;
    default:
      break;
  }
}

const service = document.querySelectorAll('.sectionServices__item-link');
[].forEach.call(service, (col) => {
  col.addEventListener('click', LinkClick);
});
