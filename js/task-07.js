const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.input.min = 10;

refs.input.addEventListener('input', onChangeFont);

function onChangeFont(event) {
  refs.span.style.fontSize = event.currentTarget.value + 'px';
}
