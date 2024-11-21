const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const blockEl = document.querySelector('.widget');

blockEl.style

buttonEl.addEventListener('click', () => {
  const color = getRandomHexColor();

  colorEl.textContent = color;
  bodyEl.style.backgroundColor = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
