import '../styles/team.scss';

const quote = document.querySelectorAll('.team__item');

function quoteMouseOver({ target }) {
  if (target.classList[1] === 'team__item') {
    if (target.children[0].style.display !== 'block') {
      // [].forEach.call(quote, (val) => {
      //   const col = val;
      //   col.children[0].style.display = 'none';
      // });
      document.querySelector(`.${target.classList[0]}`).children[0].style.display = 'block';
    }
  }
}

[].forEach.call(quote, (col) => {
  col.addEventListener('mouseover', quoteMouseOver);
});
