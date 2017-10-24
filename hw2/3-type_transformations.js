// Домашнее задание по JS.

// 1 задание

//Что будет в результате следующих операций:

    
var one = "1" + 2 + 3; // '123' string
var two = 4 + false + "5" + 6;// '456' as false transforms to 0 and adds to 4
var three = 7 + true + 6 + "8";// '148'
var four = false + true;// 1 - number


// 2 задание

//Каким будет результат следующих выражений:

    
var t = 0;
var h = 8;

t && h && console.log(9);//0 так как это первое false значение


// 3 задание

//Каким будет результат следующих выражений:

    
var pr = 9;
var g = 0;

(g || pr) && console.log(9);//9 так как при сравнении pr и g через || будет выбрано true значение


// 4 задание

//Каким будет результат следующих выражений:

    
var i = '1';
var j = 8;
var m = 7;

(m - j) == j;//false
(m - j) === j;//false

(m - 6) && j && console.log('Hi');// 'Hi' string as last true value


// 5 задание

//Каким будет результат следующих выражений:

    
var obj = {
    h: 0,
    i: 'hello'
}

var phrase = obj.i;
delete obj.i;

console.log(phrase);//'hello' string так как это простой тип данных и он был записан в ячейку памяти
// переменной phrase до того как свойство obj.i было удалено


// 6 задание

//Каким будет результат следующих выражений:

    
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var num = obj.i.y;

obj.i.y = obj.i.y + 1;

console.log(num, obj.i.y);// 9, 10 - опять простой и ссылочный типы данных


// 7 задание

//Каким будет результат следующих выражений:

    
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var arr = obj.h;

obj.h[1] = 9;

console.log(arr[1], obj.h[1]);//9, 9 так как ссылочный тип данных

