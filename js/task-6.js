const boxEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

let boxSize = 30;

btnCreate.addEventListener('click', () => {
  const amount = Number(inputEl.value.trim());

  if (amount <= 0 || amount > 100 || isNaN(amount)) {
    alert('Введіть число від 1 до 100');
    inputEl.value = '';
    return;
  }

  createBoxes(amount);
  inputEl.value = '';
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let newArr = [];

  for (let i = 0; i < amount; i++) {
    boxSize += 10;

    const newDiv = document.createElement('div');
    const color = getRandomHexColor();
    newDiv.style.backgroundColor = color;
    newDiv.style.width = `${boxSize}px`;
    newDiv.style.height = `${boxSize}px`;

    newArr.push(newDiv);
  }
  boxEl.append(...newArr);
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
