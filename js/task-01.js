// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const navEl = document.querySelector('#categories');

const navLinksEl = navEl.querySelectorAll('.item');
console.log(`В списке ${navLinksEl.length} категории`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

for (let i = 0; i < navLinksEl.length; i++) {
  const titleEl = navLinksEl[i].firstElementChild;
  const itemsAnimallEl = titleEl.nextElementSibling.children.length;
  console.log(`
		Категория: ${titleEl.innerText}
		Количество элементов: ${itemsAnimallEl}
	`);
}
