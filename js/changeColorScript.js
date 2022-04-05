const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;


colorBtn.addEventListener('click', () => {
  colorPanel.classList.toggle('show-colors');
  }
)

colorOne.addEventListener('click', ()  => {
  root.style.setProperty('--first-color', 'rgb(250,20,6)' );
  root.style.setProperty('--hover-color', 'rgb(209,33,24)');
});

colorTwo.addEventListener('click', ()  => {
  root.style.setProperty('--first-color', 'rgb(6,173,250)');
  root.style.setProperty('--hover-color', 'rgb(28,145,199)');
});

colorThree.addEventListener('click', ()  => {
  root.style.setProperty('--first-color', 'rgb(28,209,58)' );
  root.style.setProperty('--hover-color', 'rgb(209,33,24)');
});

