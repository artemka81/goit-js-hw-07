const refs = {
  input: document.querySelector('#controls input'),
  btnRender: document.querySelector('#controls button[data-action="render"]'),
  btnDestroy: document.querySelector('#controls button[data-action="destroy"]'),
  container: document.getElementById('boxes'),
};

refs.btnRender.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = refs.input.value;
  const arrBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor =
      '#' + (Math.random().toString(16) + '000000').substring(2, 8);
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.margin = '16px';
    arrBoxes.push(box);
  }
  refs.container.append(...arrBoxes);
}



function destroyBoxes() {
  refs.container.innerHTML = '';
  refs.input.value = '';
}
