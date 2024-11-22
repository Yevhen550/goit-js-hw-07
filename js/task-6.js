const boxEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

let boxSize = 20;

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const sum = +(amount.value = inputEl.value);
  let newArr = [];

  for (let i = 0; i < sum; i++) {
    boxSize += 10;

    const newDiv = document.createElement('div');
    const color = getRandomHexColor();
    newDiv.style.backgroundColor = color;
    newDiv.style.width = `${boxSize}px`;
    newDiv.style.height = `${boxSize}px`;

    newArr.push(newDiv);
  }
  boxEl.append(...newArr);
  inputEl.value = '';
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  boxSize = 20;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
