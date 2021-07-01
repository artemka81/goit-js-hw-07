const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
/* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement(). */

const navEl = document.getElementById('ingredients');

const arr = [];
ingredients.forEach( value => {
  const linkEl = document.createElement('li');
  linkEl.textContent = value;
  arr.push(linkEl.outerHTML);
});
const stringLinks = arr.join('');
navEl.insertAdjacentHTML('afterbegin', stringLinks);

