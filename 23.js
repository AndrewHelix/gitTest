// Создать две страницы index.html и about.html с произвольным содержимым. Подключить файл script.js на
// обе страницы. В процессе выполнения пунктов проверяем и комментируем, чтобы не было конфликтов.
// 1. Выводим в консоль полный путь текущей страницы ( location )
// 2. Переходим на страницу about.html ( location )
// 3. Перезагружаем страницу ( location )
// 4. Возвращаемся на прошлую страницу ( history )

// console.log(location);

// if (!location.pathname.endsWith('/about.html')) {
//   setTimeout(() => {
//     location.assign('/about.html');
//   }, 2000);
//   // location.assign('/about.html');
// }

// setTimeout(() => {
//   history.back();
// }, 3000);

// if (!location.pathname.endsWith('/index.html')) {
//   setTimeout(() => {
//     location.reload();
//   }, 4000);
// }

///================
// console.log(document.forms);
// const liElement = document.querySelector('li');
// const aInsideLi = liElement.querySelector('a');
// console.log(aInsideLi);

// const allLisNodes = document.querySelectorAll('li');
// console.log(allLisNodes);
// const arr = Array.from(allLisNodes);

// // const liWithId = document.getElementById('listItem3');
// // console.log(liWithId);

// const allLis = document.getElementsByTagName('li');
// console.log(allLis);
// const arr2 = Array.from(allLis);
// console.log(arr2);

// const newLi = document.createElement('li');
// document.body.append(newLi);

// const allByClass = document.getElementsByClassName('list-item1');
// console.log(allByClass);

// const allByName = document.getElementsByName('test-input');
// console.log(allByName);

// const h1 = document.querySelector('h1');
// console.log(h1.parentElement);

// const ul = document.querySelector('ul');
// console.log(ul.previousElementSibling);

// const ul = document.querySelector('ul');
// console.log(ul.children);
// // console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

const listItem3 = document.getElementById('listItem3');
// const parent = listItem3.closest('.wrapper');
// console.log(parent);

// const res = listItem3.classList.toggle('new-class');
// console.log(res);
// console.log(listItem3.classList.contains('new-class-2'));

// listItem3.setAttribute('role', 'custom-role');
// console.log(listItem3.hasAttribute('role'));
// const res = listItem3.getAttribute('role');
// console.log(res);
// listItem3.removeAttribute('role');

// listItem3.role = 'blabla';
// console.log(listItem3.role);

// listItem3.dataset.testId = 'test-li';
// console.log(listItem3.getAttribute('data-test-id'));

// listItem3.setAttribute('data-test-id', 'test-test');

// const ul = document.querySelector('ul');
// const text = ul.textContent;
// console.log(text);

// listItem3.textContent = 'New value for li 3';
// listItem3.innerHTML = '<b>ssdf</b>';

// Работаем с переменными из задачи 2:
// 1. вывести в консоль текстовое содержимое (без дочерних тегов) параграфа с классов text
// 2. изменить содержимое заголовка h1 на «Title level 1»
// 3. элементу li с идентификатором listItem3 задать содержимое «<strong>List item 3</strong>», текст внутри
// должен быть жирным

// const pWithText = document.querySelector('.text').textContent;
// // console.log(pWithText);
// const h1 = document.querySelector('h1');
// h1.textContent = 'Title level 1';

// listItem3.innerHTML = '<strong>List item 3</strong>';

// Найти и записать в переменную элемент a , который находится в первом параграфе.
// 1. Задать ей атрибут target="_blank" и rel="noopener" .
// 2. Удалить атрибут role .
// 3. Изменить значение атрибута href

const newElement = document.createElement('h2');
newElement.textContent = 'Hello from h2';
newElement.classList.add('myClass');

const ul = document.querySelector('ul');
// ul.append(newElement);
ul.insertAdjacentHTML('beforebegin', '<strong>List with items</strong>');

ul.remove();
// console.log(newElement);
// const cloneNewElement = newElement.cloneNode(true);
// document.body.append(newElement);
// document.body.append(cloneNewElement);

// const fragment = document.createDocumentFragment();
// fragment.append(newElement);
// fragment.append(newElement);
// document.body.append(newElement);
// console.log(fragment);

// const fragment = document.createDocumentFragment();
// [
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
//   'green',
//   'blue',
//   'red',
//   'brown',
// ].forEach((element) => {
//   const p = document.createElement('p');
//   p.textContent = element;
//   document.body.append(p);
// });

// document.body.append(fragment);

// // Дана ссылка на картинку:
// const imageUrl =
//   'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
// // Вам надо создать через Javascript элемент img , добавить ему атрибут src , значение для которого берем из
// // переменной imageUrl . Вставить этот элемент под заголовок h1 . Далее клонировать картинку и вставить копию
// // в конец страницы.
// const image = document.createElement('img');
// image.src = imageUrl;
// image.width = 200;
// image.height = 200;
// const h1 = document.querySelector('h1');
// h1.insertAdjacentElement('afterend', image);

// const cloneImage = image.cloneNode(true);
// document.body.append(cloneImage);

// Сгенерировать элементы a на основании массива. Для каждого элемента:
// 1. уставить атрибуту href значение из массива
// 2. в содержимое добавить Link n , где n — индекс + 1 ссылки из массива
// 3. добавить класс link
// 4. выполнить вставку в конец body .

const links = [
  'https://learn.javascript.ru',
  'https://learn.javascript.ru/searching-elements-dom',
  'https://learn.javascript.ru/structure',
  '#test',
];
