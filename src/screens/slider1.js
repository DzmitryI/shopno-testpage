import sectionTheySaysSliderImg from '../assets/images/slader2.jpg';

const sectionTheySaysSlider1 = document.getElementById('sectionTheySays-slider1');
sectionTheySaysSlider1.src = sectionTheySaysSliderImg;
const sectionTheySaysSlider2 = document.getElementById('sectionTheySays-slider2');
sectionTheySaysSlider2.src = sectionTheySaysSliderImg;
const sectionTheySaysSlider3 = document.getElementById('sectionTheySays-slider3');
sectionTheySaysSlider3.src = sectionTheySaysSliderImg;
const sectionTheySaysSlider4 = document.getElementById('sectionTheySays-slider4');
sectionTheySaysSlider4.src = sectionTheySaysSliderImg;

let slideIndex = 1;
// const prev = document.getElementById('prev');
const cols = document.querySelectorAll('.sectionTheySays-slider__item');
/* Основная функция слайдера */
function showSlides(ivent) {
  let i;
  let n;
  if (typeof ivent !== 'number') {
    if (ivent.target.id === 'sectionTheySays-slider1') {
      n = 1;
    } else if (ivent.target.id === 'sectionTheySays-slider2') {
      n = 2;
    } else if (ivent.target.id === 'sectionTheySays-slider3') {
      n = 3;
    } else if (ivent.target.id === 'sectionTheySays-slider4') {
      n = 4;
    }
    slideIndex = n;
  } else {
    n = ivent;
  }
  // const n = ivent;
  const slides = document.getElementsByClassName('sectionTheySays-item');
  const dots = document.getElementsByClassName('sectionTheySays-slider__item');
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
/* Индекс слайда по умолчанию */
// let slideIndex = 1;
showSlides(slideIndex);
// /* eslint-disable */
// /* Функция увеличивает индекс на 1, показывает следующй слайд */
// function plusSlide() {
//   showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд */
// function minusSlide() {
//   showSlides(slideIndex -= 1);
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// prev.addEventListener('click', () => {
//   // console.log('hello');
//   showSlides(slideIndex -= 1);
// });

[].forEach.call(cols, (col) => {
  col.addEventListener('click', showSlides);
});
