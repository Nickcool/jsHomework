// Опишите что будет в результате выполнения следующих операций

// 1

    
var t = {
    y: 9
};// создали объект t со свойством y которое равно 9
var number = t.y; //создали переменную number которой присвоили значение свойства y
number += 5;// увеличили значение на 5
console.log(t.y, number); // 9, 14



// 2

    
var t = {
    y: [1, 3, 5, 7]
};// объект t со свойством y которое является массивом чисел
var number = t.y[2];// переменной number присвоили значение 2-го (начиная с 0) элемента массива
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}// цикл перебора массива но не совсем понятно зачем он здесь и что он делает помимо перебора.
// t.y[i]++ - так вроде не надо делать так как i++ уже указывает инкремент с каждым новым циклом
console.log(number); // 5



// 3

    
var t = 9;
var obj = {
    number: t
};// тут значение obj.number будет 9
obj.number++;// а тут стало 10. t остался неизменным
console.log(obj.number, t); // 10, 9

// 4

    
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;// тут object1.str.number присваивается значение 67
obj.number++;// obj.number станет 68 а object1.str.number так и останется 67 (простой тип данных)

var str = object1.str;// тут будет name: "L", number: 67

object1.str.name = "Kolya";// а тут str будет уже name: "Kolya", number: 67 так как тип данных ссылочный

console.log(str, object1.str.number); // name: "Kolya", number: 67, 67


// 5

    
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number;// по сути значение переменной не присвоено так что будет undefined

object2.str.number++;// undefined++ все равно будет undefined

console.log(object2.str.number);// undefined

