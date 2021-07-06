const refs = {
  input: document.querySelector('input#validation-input'),
  length: document.querySelector('input#validation-input').dataset.length,
};

refs.input.addEventListener('blur', onVaildInput);

function onVaildInput(event) {
  const lengthValue = event.currentTarget.value.length;
  if (lengthValue == refs.length) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
  }
}
