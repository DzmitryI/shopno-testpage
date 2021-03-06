import '../styles/slider.scss';
import slide1Img from '../assets/images/slader1.jpg';

const slide1 = document.querySelector('.slider__item--slide1');
slide1.src = slide1Img;
const slide2 = document.querySelector('.slider__item--slide2');
slide2.src = slide1Img;
const slide3 = document.querySelector('.slider__item--slide3');
slide3.src = slide1Img;
const slide4 = document.querySelector('.slider__item--slide4');
slide4.src = slide1Img;

let slideIndex = 1;
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.dots--slide');

function showSlides(ivent) {
  let i;
  let n;
  if (typeof ivent !== 'number') {
    if (ivent.target.classList[0] === 'dots--slide1') {
      n = 1;
    } else if (ivent.target.classList[0] === 'dots--slide2') {
      n = 2;
    } else if (ivent.target.classList[0] === 'dots--slide3') {
      n = 3;
    } else if (ivent.target.classList[0] === 'dots--slide4') {
      n = 4;
    }
    slideIndex = n;
  } else {
    n = ivent;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

showSlides(slideIndex);

[].forEach.call(dots, (col) => {
  col.addEventListener('click', showSlides);
});
