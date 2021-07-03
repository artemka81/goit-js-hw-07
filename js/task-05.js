const inputEl = document.querySelector('input#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length === 0
    ? (nameOutputEl.textContent = 'незнакомец')
    : (nameOutputEl.textContent = event.currentTarget.value);
}
