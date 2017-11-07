// ## 1 task
//
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

//var rep = '@'/gi;

console.log(str = 'aaa@bbb@ccc'.replace(/@/gi, '!'));

// ## 2 task
//
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

var str = 'aaa bbb ccc';

var str1 = str.split(' ').slice(1,2).join('');
console.log(str1);

var str = 'aaa bbb ccc';

var str2 = str.substr(str.indexOf('b'), 3);
console.log(str2);

var str = 'aaa bbb ccc';

var str3 = str.substring(str.indexOf('b'), 7);
console.log(str3);

// ## 3 task
//
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

console.log(date = '2025-12-31'.split('-').reverse().join('/'));

// ## 4 task
//
// Дана строка 'js'. Сделайте из нее строку 'JS'.

console.log(str = 'js'.toUpperCase());

// ## 5 task
//
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

console.log(str = 'я учу javascript!'.length);

// ## 6 task
//
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.

function strCutter(n) {
    var str = prompt("enter something");
    if (str.length <= n) {
        var result = str;
    }
    else {
        result = str.slice(0, n) + '...';
    }
    console.log(result);
}

strCutter(20);

// ## 7 task
//
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

console.log(str = 'я учу javascript!'.split(' '));

// ## 8 task
//
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

console.log(arr = ['я', 'учу', 'javascript', '!'].join('+'));

// ## 9 task
//
// Преобразуйте первую букву строки в верхний регистр.
var str = 'я учу javascript!';
console.log(str.replace(str.charAt(0), str.charAt(0).toUpperCase()));

// ## 10 task
//
// Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = "первая буква каждого слова строки";
var arr = str.split(' ');
for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
}
var newStr = arr.join(' ');
console.log(newStr);

// ## 11 task
//
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

var str = "var_test_text";
var arr = str.split('_');
for (i = 1; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
}
var newStr = arr.join('');
console.log(newStr);

// ## 12 task
//
// Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

var str = "varTestText";
for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
        str = str.replace(str.charAt(i), "_" + str.charAt(i).toLowerCase())
    }
}
console.log(str);

// ## 13 task
//
// Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца.
// То есть у нас должно получится '12 345 678'. Число, конечно же, может быть любым.

function separate(num) {
    console.log(num.toLocaleString().replace(/,/gi, ' '));
};
console.log(separate(12546352545));