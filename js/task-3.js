const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
  if (inputEl.value.trim() === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputEl.value.trim();
  }
});
