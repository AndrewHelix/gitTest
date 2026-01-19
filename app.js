// const arr = new Array();
const someStr = 'some new string';

const fruits = ['apple', 'banana', 'kiwi'];
const fruitsToAdd = ['pineapple'];

// const newFruits = fruits.concat();
// console.log(fruitsToAdd);
// newFruits[0] = 'pineapple';
// console.log(fruits);
// console.log('newFruits', newFruits);

// const index = fruits.indexOf('sdfsdf');
// console.log(index);

// const reversed = fruits.toReversed();
// console.log(fruits);
// console.log(reversed);

// const sliced = fruits.slice(1);
// console.log(fruits);
// console.log(sliced);

// fruits.splice(1, 0, 'pineapple', 'sdfsdf');
// console.log(fruits);

// const hasElement = fruits.includes('sdfsdf');
// console.log(hasElement);

// const resStr = fruits.join(', ');
// console.log(resStr);

// const stack = ['React', 'Vue', 'Angular']
// 1. Удалить последний элемент и показать в консоль
// 2. Добавить Svelte и Stimulus в начало массива
// 3. Развернуть массив, т.е. последний должен стать первым, а
// первый — последним
// 4. Добавить в конец Solid
// 5. Показать в консоль индекс Vue
// 6. Превратить массив в строку, где разделителем между каждым
// элементом будет / . Результат записать в переменную и
// проверить через консоль

// Написать функцию, которая добавляет в конец массива новый
// элемент. Она принимает два аргумента arr и item , где arr — массив
// в который добавляется item . Использовать метод push нельзя, в
// решении пригодится свойство length .
// Пример:
// const arr = ['a', 'b']
// addItem(arr, 'c')
// console.log(arr) // -> ['a', 'b', 'c']

// Есть массив с объектами:
// const users = [
// { name: 'Alex', age: 31},
// { name: 'Olga', age: 17},
// { name: 'Carl', age: 15},
// { name: 'Nancy', age: 28},
// { name: 'Eric', age: 9}
// ]
// Создать новый массив с именами пользователей, у которых возраст
// меньше 18 . Для решения задачи используем цикл for..of и метод
// push .

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   const newStr = fruit.toUpperCase();
//   console.log(newStr);
// }
// console.log('=============');
// for (const element of fruits) {
//   const newStr = element.toUpperCase();
//   console.log(newStr);
// }

// const res = fruits.push('apple', 'banana', 'kiwi'); //добавляет в конец
// const res = fruits.pop(); //извлекает последний элемент
// const res = fruits.unshift('123'); //добавляет в начало
// const res = fruits.shift(); //извлекает первый элемент
// console.log(res);
// console.log(fruits);

// const users = [
//   { firstName: 'Ivan', password: 'sfdjlk1231k3lj' },
//   { firstName: 'Oleg', password: 'sfdjlk1231k3lj' },
//   { firstName: 'Petr', password: 'sfdjlk1231k3lj' },
// ];

// const newUser = { firstName: 'Vitalik', password: 'sfdjlk1231k3lj' };
// users.push(newUser);

// for (const user of users) {
//   console.log(user.firstName);
// }

// const urls = ['http://example.com'];
// const aboutUsUrs = 'http://example.com/about';
// const socialMediaUrl = 'http://example.com/find-us';
// urls.push(aboutUsUrs);
// // urls.push(socialMediaUrl);
// console.log(urls);
// console.log('click back');
// const lastVisitedUrl = urls.pop();
// console.log(lastVisitedUrl);

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// Написать функцию, которая принимает массив в качестве аргумента и
// возвращает сумму всех элементов массива. Исходный массив всегда
// содержит только числа. Пример:
// calcSumArr([2, 5, 1, 3]) // -> 11
// arr [123, 13] , sum elements - 123123
