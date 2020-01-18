import slider1Img from '../assets/images/slader1.jpg';

const slider1 = document.getElementById('slider1');
slider1.src = slider1Img;
const slider2 = document.getElementById('slider2');
slider2.src = slider1Img;
const slider3 = document.getElementById('slider3');
slider3.src = slider1Img;
const slider4 = document.getElementById('slider4');
slider4.src = slider1Img;

let slideIndex = 1;
const cols = document.querySelectorAll('.sectionAboutUs-slider__item');
function showSlides(ivent) {
  let i;
  let n;
  if (typeof ivent !== 'number') {
    if (ivent.target.id === 'sectionAboutUs-slider1') {
      n = 1;
    } else if (ivent.target.id === 'sectionAboutUs-slider2') {
      n = 2;
    } else if (ivent.target.id === 'sectionAboutUs-slider3') {
      n = 3;
    } else if (ivent.target.id === 'sectionAboutUs-slider4') {
      n = 4;
    }
    slideIndex = n;
  } else {
    n = ivent;
  }
  const slides = document.getElementsByClassName('item');
  const dots = document.getElementsByClassName('sectionAboutUs-slider__item');
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

[].forEach.call(cols, (col) => {
  col.addEventListener('click', showSlides);
});
