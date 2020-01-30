import '../styles/sliderReview.scss';

const prevInner = document.querySelector('.prev__inner');
const prevNext = document.querySelector('.prev__next');
let slideIndex = 1;
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('content__inner');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
showSlides(slideIndex);
prevInner.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});
prevNext.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
});
