// const arrowFunction = () => {
//   return 1;
// };
// const arrowFunction2 = () => 1;
// const res = arrowFunction2();
// console.log(res);

// //возврат объекта без использования return
// const createUser = (lastName = 'no last name') => ({
//   name: 'Ivan',
//   password: 'fwf1234sdf',
//   lastName,
// });
// const res = createUser('Last name');
// console.log(res);

// //возврат чего-либо без слова return с использованием тернарного оператора
// const createString = (isDay) => (isDay ? 'Good morning' : 'Good night');
// const result = createString(true);
// console.log(result);

// Создайте стрелочную функцию rgb() , которая будет принимать три
// числовых аргумента и возвращать строку вида 'rgb(23, 100, 134)' .
// Если аргументы не заданы, считать их равными нулю. Не проверять
// переменные на тип данных
// const rgb = (r = 0, g = 0, b = 0) => `rgb(${r}, ${g}, ${b})`

// const createUser = (b) => {
//   console.log(arguments); //error - у стрелочной нет коллекции argements
// };

// createUser('123', '456', '789');

// const CreateUser = () => {
//   return { firstName: 'user' };
// };

// const newUser = new CreateUser(); //error - не могу использовать в качестве функции-конструктора
// console.log(newUser);

// const user = {
//   firstName: 'Oleg',
//   getFirstName: function () {
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);
//     });
//   },
// };

// // const test = () => {
// //   console.log(this.firstName);
// // };
// // console.log(test.call(user));

// const fn = user.getFirstName;
// fn();

// const user = {
//   name1: 'andrew',
//   getName: function () {
//     return this;
//   },
// };
// console.log(user.getName());

// const saySmth = (isDay, fn1, fn2) => (isDay ? fn1() : fn2());
// // function saySmth(isDay, fn1, fn2) {
// //   if (isDay) {
// //     fn1();
// //   } else {
// //     fn2();
// //   }
// // }

// function sayGoodMorning() {
//   console.log('Good morning');
// }
// function sayGoodNight() {
//   console.log('Good night');
// }

// saySmth(true, sayGoodMorning, sayGoodNight);

// Переписать код ниже с использованием стрелочных функций:
// function ask(question, yes, no) {
// if (confirm(question)) {
// yes()
// } else {
// no()
// }
// }
// ask(
// 'Вы согласны?',
// function() { alert('Вы согласились.') },
// function() { alert('Вы отменили выполнение.') }
// )

// Есть функция confirmPassword() , у которой 3 параметра:
// password — строка с паролем;
// runSuccess — функция, которая вызывается, если пароль прошел
// проверку;
// runError — функция, которая вызывается, если пароль не прошел
// проверку.
// Функция confirmPassword() при вызове показывает prompt окно, в
// котором пользователь должен подтвердить свой пароль. Если
// password совпадает с полученным из prompt значением, то вызывается
// функция runSuccess() , в противном случае — runError() .
// На место runSuccess передаем стрелочную функцию, которая
// показывает сообщение в alert вида «Пароль успешно подтвержден»,
// на место runError — «Пароль не совпадает».
// Пример:
// confirmPassword(
// '1234', // 1 аргумент
// () => { // 2 аргумент
// // ...
// },
// () => { // 3 аргумент
// // ...
// }
// )
// // '1234' будет сверяться с введенным в prompt значением

// const arr = ['forEach', 'reduce', 'map'];
// const copy = [];
// arr.forEach((element) => {
//   copy.push(element);
// });

// const newArray = arr.map((str) => {
//   return 'new' + str;
// });
// const users = [
//   { firstName: 'Oleg', password: 'sdfs13', age: 18 },
//   { firstName: 'Viktor', password: 'sdfs13', age: 32 },
// ];
// const newUsers = users.map((element) => {
//   return {
//     firstName: element.firstName,
//     password: element.password,
//     age: element.age,
//     lastName: 'Last' + element.firstName,
//   };
// });
// console.log(newUsers);

// const numbers = [32, -7, 74, 0, -46, -2, 101, -13]
// 1. Используя метод forEach , вывести в консоль только
// положительные числа.
// 2. Создать новый массив, состоящий из абсолютных значений чисел
// массива numbers . Решить через метод map . Для получения
// абсолютного значение можно воспользоваться методом Math.abs .

// const users = [
//   { firstName: 'Oleg', password: 'sdfs13', age: 18 },
//   { firstName: 'Viktor', password: 'sdfs13', age: 32 },
//   { firstName: 'Viktor2', password: 'sdfs13', age: 34 },
// ];
//findIndex - аналог find, но возвращает index элемента
// const res = users.filter((element) => element.age > 30);
// console.log(res);

// 3. Найти в исходном массиве число 0 . Берем метод find .
// 4. Получить новый массив, состоящий только из отрицательных
// чисел, для решения используем метод filter

// const users = [
//   { firstName: 'Oleg', password: 'sdfs13', age: 18 },
//   { firstName: 'Oleg', password: 'sdfs13', age: 18 },
//   { firstName: 'Viktor', password: 'sdfs13', age: 32 },
//   { firstName: 'Viktor2', password: 'sdfs13', age: 34 },
// ];
// const res = users.reduce((acc, user) => {
//   acc[user.age] = (acc[user.age] || 0) + 1;
//   return acc;
// }, {});
// const res = users.reduce((acc, user) => {
//   return (acc += user.age);
// }, 0);
// console.log(res);

// 5. Через reduce посчитать сумму всех чисел в массиве

// (function (str) {
//   console.log(str);
// })('hello world');
// ((str) => {
//   console.log(str);
// })('arrow function');

//Обернуть функцию в IIFE
//Сделайте так, чтобы x и y стали аргументами

// function User(fistName, age) {
//   this.fistName = fistName;
//   this.age = age;

//   this.getAge = function () {
//     return this.age;
//   };
// }

// const newUser1 = new User('Oleg', 22);
// const newUser2 = new User('Oleg2', 23);
// // console.log(newUser1);
// // console.log(newUser2);
// // console.log(newUser2 instanceof User);

// const userAge = newUser1.getAge();
// console.log(userAge);

// Напишите функцию-контруктор HtmlElement , которая служит шаблоном
// для объектов такого вида:
// const element = {
// name: 'div',
// content: 'Hello world',
// styles: {
// fontSize: '12px',
// backgroundColor: 'gray'
// // ...
// },
// show: function () {
// this.styles.display = 'block'
// },
// hide: function () {
// this.styles.display = 'none'
// }
// }
// В качестве входных данных выступает 3 поля: name , content и объект
// styles

const user = {
  name: 'sfsfd',
  age: 11,
};

function changeUserAge(newAge) {
  this.age = newAge;
}

//call, applyy, bind
// changeUserAge.call(user, 12);
// changeUserAge.apply(user, [13]);
// const bindChangeUserAge = changeUserAge.bind(user);
// bindChangeUserAge(14);

// console.log(user);

// Есть такой код:
// function changeUserName (newUserName) {
// this.userName = newUserName
// }
// const user = {
// userName: ''
// }
// Задать userName пользователю через глобальную функцию
// changeUserName с помощью:
// 1. декоратора call
// 2. декоратора apply
// 3. новой функции, полученной через bind исходной
