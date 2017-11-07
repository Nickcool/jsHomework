// # Домашнее задание по JS.
//
// ## 1 задание
//
// Напишите функцию которая будет выводить текст на екран: "Как ваше имя?";
// После ввода имя запишите как свойство "name" для ссылки внутри функции this;
//
// Создайте пустой объект и вызовите эту функцию для объекта и просто для окна и посмотрите изменился ли объект,
// и создалась ли переменная name в окне браузера?

function getName() {
    var name = prompt("Say your name");
    return this.name;
}

var obj = {
    getName: getName
}

getName(obj);
console.log(obj);//{getName: ƒ} - свойство объекта берет значение из функции
getName(window);
console.log(window);//window.name: "result" - нашел такое свойство в window

// ## 2 задание
//
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

function sumTo(n) {
    sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(11));

//
// ## 3 задание
//
// Напишите код, который отсортирует массив объектов people по полю age, для сортировки используем метод массива sort.
//
//     Например:
//
// ```javascript
// var vasya = { name: 'Вася', age: 23 };
// var masha = { name: 'Маша', age: 18 };
// var vovochka = { name: 'Вовочка', age: 6 };
//
// var people = [ vasya , masha , vovochka ];
//
// // ... ваш код ...
//
// // теперь people: [vovochka, masha, vasya]
// console.log(people[0].age) // 6
// ```
//
// Выведите список имён в массиве после сортировки.

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var names = [];
var people = [ vasya , masha , vovochka ];

function compare (a, b) {
    return a.age - b.age;
}

people.sort(compare);
for (i = 0; i < people.length; i++) {
    names.push(people[i].name);
}
console.log(names);


// ## 4 задание
//
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).


function unique(arr) {
    arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
    for (var i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i].toLowerCase().split('').sort().join('') === arr[j].toLowerCase().split('').sort().join('')) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    console.log(arr);
}

unique();