
// ## 1 задание
//
// Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
//
//Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости
// от того является ли строка палиндромом или нет.
function isPal(string) {
    str = string.toLowerCase().split('');
    for (i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            str.splice(i, 1);
            i--;
        }
    }
    string = str.join();
    string === string.split("").reverse().join("") ? console.log("True") : console.log("False");
}


console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

// ## 2 задание
//
// Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
//
// воз - зов, киборг - гробик, корсет - костер - сектор,
//
//     Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.
//
//     ```javascript
//
//
// console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
var cleanArr = {};

function anClean(arr) {
    for (i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        cleanArr[sorted] = arr[i];
    }
    for (s in cleanArr) {
        console.log(cleanArr[s]);
    }
}

anClean(arr);
// ## 3 задание
//
// Создайте программу которая соеденит массив в строку, поменяет местами буквы в словах и порядок следования слов в массиве:
//
//     ```javascript
// var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
// ```

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];

function reversing() {
    var str = arr.join(' ').split('').reverse().join('');
    console.log(str);
}

reversing();
// ## 4 задание
//
// 1. Найти сумму целых чисел от 1 до 100
// 2. Найти сумму четных чисел от 0 до 100.

sum = 0;
function getSum(n) {
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

getSum(100);

//

sum = 0;
function getSum(n) {
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}

getSum(100);

// ## 5 задание
//
// Напишите функцию callMe которая будет принимать 3 аругумента, это будут цыфры,
// потом она будет суммировать их и выводить на екран результат их суммы!
//
// Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и возвращать null;
// (вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )

function callMe (a, b, c) {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        console.log(a + b + c);
    }
    else {
        console.error("Not a nimber!!!");
        return null;
    }
}

callMe(12, 5, 7);

// ## 6 задание
//
// Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом.
// Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));

function callMeAgain(arr) {
    arr = arr.sort().join(', ');
    console.log(arr);
}

arr = ['foo', 5, 'nice', ''];

callMeAgain(arr);

// ## 7 задание
// Дан массив объектов:
//
//     ```javascript
// Отсортируйте массив по полю age

var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];

function compare (a, b) {
    return a.age - b.age;
}

arr.sort(compare);
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ## 8 задание
//
// Через prompt узнайте у пользователя его имя и возраст,
// и запишите в отсортированный массив с 8 задания в правильную позицию,
// чтобы все элементы в массиве остались отсортированные по полю age
//
// Если такой пользователь уже существует в массиве верните пользователю сообщение: "Такой пользователь уже существует"


var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];

function compare (a, b) {
    return a.age - b.age;
}
var newName = prompt("enter name");
var newAge =  +prompt("enter age");
var newArr = [];

var newUser = [{name: newName, age: newAge}];
function pushUser() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].name == newUser[0].name) {
            alert("Already existing user!");
            break;
        }
        else {
            newArr = arr.concat(newUser).sort(compare);
        }
    }
    console.log(newArr);
}

pushUser();

// ## 9 task
//
// Дан массив с числами. Подсчитайте количество цифр 3 в данном массиве.
//
//     Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.

var arr = [13, 35, 3, 443, 7, 735];
var j = 0;
function howMany(n) {
    var newArr = arr.join('').split('');
    for (i = 0; i < newArr.length; i++) {
        if (+newArr[i] === n) {
            j++;
        }
    }
    console.log(j);
}

howMany(3);

// ## 10 task
//
// Дан массив ['1', '2', '3', '4', '5', '6']. Сделайте из него строку '16-25-34'. Массив, конечно же, может быть любым.

var arr = ['1', '2', '3', '4', '5', '6'];
var newArr = [];
function arrIntoStr() {
    for (i = 0; i < arr.length; i++) {
        var x = arr.shift();
        var y = arr.pop();
        i--;
        newArr.push(x+y);
    }
    var str = newArr.join('-');
    console.log(str);
}

arrIntoStr();

// ## 11 task
//
// Даны два массива, к примеру
//
//     ```javascript
// [1,2,3]
// [4,5,6]
// ```
//
// Создайте новый массив, заполненный суммами соответствующих элементов, то есть [1+4, 2+5, 3+6] = [5, 7, 9].
//
//     Скрипт должен работать для любых массивов, даже если их длина не одинакова (подумайте, что делать в этом случае).

var a = [1,2,3];
var b = [4,5,6,7];
var newArr = [];
function arrSumm() {
    var newArrLength = a.length;
    if (b.length > a.length) {
        newArrLength = b.length;
    }
    for (i = 0; i < newArrLength; i++) {
        var sum = (a[i] || 0) + (b[i] || 0);
        newArr.push(sum);
    }
    console.log(newArr);
}

arrSumm();

// ## 12 task
//
// Дан массив. Напишите функцию, которая будет удалять элемент из массива по его тексту.
//
//     Пример: arr = [1,2,3,4,3,3]. Удалим все элементы с содержимым 3: func(arr, 3).

var arr = [1,2,3,4,3,3];

function remover (n) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}

remover(3);

// ## 13 task
//
// Реализуйте функцию intersection, вернёт массив из элементов, встречающихся в каждом из переданных массивов.
//
//     Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2].
arr = [];

function intersection(arr1, arr2, arr3) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                for (k = 0; k < arr3.length; k++) {
                    if (arr1[i] === arr3[k]) {
                       arr.push(arr1[i]);
                    }
                }
            }
        }
    }
    console.log(arr);
}

intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);

// ## 14 task
//
// Дан массив с числами, к примеру [2, 3, 1, 4].
// Сделайте из него массив [2, 2, 3, 3, 3, 1, 4, 4, 4, 4]. В массиве могут быть только целые положительные числа.

var arr = [2, 3, 1, 4];
var newArr = [];
function adder() {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i]; j++) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

adder();
// ## 15 task
//
// Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера.
// Пример: [1,2,3] дополним нулями до размера 6 - [1,2,3,0,0,0].

var arr = [1,2,3];
function arrPusher(a, n) {
    for (i = arr.length; i < n; i++) {
        arr.push(a);
    }
    console.log(arr);
}

arrPusher(0, 6);

// ## 16 task
//
// Дан массив с числами. Не используя цикл, выведите:
//
// 1. Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).
// 2. Первые 3 отрицательных числа в массиве (по порядку следования).

var arr = [1, 4, 6, -3, 5, 14, 4, 3, 8, 77, 3];

arr = arr.sort(function (a,b) {
    return a - b;
});
var newArr = arr.slice(0,3);
console.log(newArr);

//

var arr = [1, -4, 6, -3, 5, 14, 4, 3, -8, 77, 3];

function findNegative(i) {
    return i < 0;
}
var numbers = arr.filter(findNegative).slice(0,3);
console.log(numbers);