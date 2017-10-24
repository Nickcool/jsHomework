// 1 задание

// Определите результат и тип переменных в следующих случаях:


var r = '9' + 0;// '90', string

var r = 9 + '0';// '90', string

var r = 4 + 9;// 13, number

var r = null + 7;// 7, null преобразовывается в 0

var r = '6' + null;// '6null', string - null преобразовывается в стрингу 'null'

var r = '6' + [];// '6', string, [] -> " "

var r = '6' + undefined;// '6undefined', string - undefined преобразовывается в стрингу 'undefined'


/* 2 задание

 Будет ли верным  выражение:


 2/3 + 1 + 1/3 == 2

 Опишите почему да или нет?

 Результатом выполнения этого равенства будет false по причине того что '2/3 + 1 + 1/3' в машинном вычеслении
 будет чуть меньше 2-х - 1.9999999999999998.

*/

// 3 задание

// Определите результат в следующих случаях:


var r;
var t = ++2;
var u = 1++;
var w = 2--;

r = 6 && 0 && 7;// 0 так как && (и) работает до первого false и запищет первое false значение коим и будет 0

r = -9 && -8;// -8 так как оба значения true запишется последнее из них

r = 6 && 0 && 7;// так же как и в 1-м примере

r = "string" && 0;// 0 так так "string" будет true

r = [] && {} && 7;// 7 так как судя по всему пустой массив и пустой объект будут true значениями

r = [] || 7;// [] так как || (или) работает до первого true и запишет первое true значение

r = {} || 0;// [] так как || (или) работает до первого true и запишет первое true значение

r = false || true;// true

r = "2" > "3";// false так как 3 ниже чем 2 в таблицу ascii и при сравнении будет больше.

r = "ab" <= "fg";// true - как в предыдущем но наоборот. так же тут символы сравниваются попарно - 1 с 1-м и т д

r = "2k" <= "8l";// true - как в предыдущем

r = "2" != 2;// false потому что "2" будет преобразована в число 2 которое = 2

r = "2" !== 2;// true потому что строго сравниваются два операнда а string != number

r = t + 2;// так как t = ++2 = 3 а 3+2 = 5

r = t + 2--;// так как ++2 + 2-- = 5

r = u - w;// так как 1++ - 2-- = -1


