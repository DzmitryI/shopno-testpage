import '../styles/services.scss';
import service1Img from '../assets/images/service1.jpg';
import service2Img from '../assets/images/service2.jpg';
import service3Img from '../assets/images/service3.jpg';
import service4Img from '../assets/images/service4.jpg';
import service5Img from '../assets/images/service5.jpg';
import service6Img from '../assets/images/service6.jpg';

const service1 = document.querySelector('.item1-know-more--img');
service1.src = service1Img;
const service2 = document.querySelector('.item2-know-more--img');
service2.src = service2Img;
const service3 = document.querySelector('.item3-know-more--img');
service3.src = service3Img;
const service4 = document.querySelector('.item4-know-more--img');
service4.src = service4Img;
const service5 = document.querySelector('.item5-know-more--img');
service5.src = service5Img;
const service6 = document.querySelector('.item6-know-more--img');
service6.src = service6Img;

function linkKnowMorelick({ target }) {
  const val = target.classList[0].slice(0, 5);
  document.querySelector(`.${val}-know-more--img`).style.display = 'none';
  document.querySelector(`.${val}-know-more__inner`).style.display = 'none';
  document.querySelector(`.${val}-description__inner`).style.display = 'block';
  document.querySelector(`.${val}-know-more`).style.background = '#6ff4e9';
}
function linkDescriptionlick({ target }) {
  const val = target.classList[0].slice(0, 5);
  document.querySelector(`.${val}-know-more--img`).style.display = 'block';
  document.querySelector(`.${val}-know-more__inner`).style.display = 'block';
  document.querySelector(`.${val}-description__inner`).style.display = 'none';
  document.querySelector(`.${val}-know-more`).style.background = '#000000';
}
const linkKnowMore = document.querySelectorAll('.items-know-more__link');
[].forEach.call(linkKnowMore, (col) => {
  col.addEventListener('click', linkKnowMorelick);
});

const linkDescription = document.querySelectorAll('.items-description__link');
[].forEach.call(linkDescription, (col) => {
  col.addEventListener('click', linkDescriptionlick);
});
