// # Домашнее задание по JS.
//
// ## 1 задание
//
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
//
//     Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
//
// P.S. Код также должен легко модифицироваться для любых других интервалов.

function simple (num1, num2) {
    // впринципе зачем тебе делать одно и тоже тут и в else 
    // можно просто обьявить переменные например less, bigger
    // где less = num1 > num2 ? num2 : num1;
    // bigger = num1 > num2 ? num1 : num2;

    // а потом уже работать в переменными less bigger 

    if (num2 > num1) {
        for (i = num1; i < num2; i++) {
            for (j = num1; j <= i; j++) {
                if (i === j) {
                    console.log(i);
                }
                else if (i % j === 0) {
                    break;
                }
            }
        }
    }
    else {
        for (i = num2; i < num1; i++) {
            for (j = num2; j <= i; j++) {
                if (i === j) {
                    console.log(i);
                }
                else if (i % j === 0) {
                    break;
                }
            }
        }
    }
}

simple(2, 10);



// ## 2 задание
//
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

// P.S. Ваша функция не должна добавлять лишних пробелов.

var obj = {
    className: 'open menu'
}

function addClass (obj, cls) {
    var arr = obj.className.split(' ');

    for (i = 0; i < arr.length; i++) {
        // лучше три равно поставить ===
        if (arr[i] == cls) return;
    }
    
    arr.push(cls.trim());
    obj.className = arr.join(' ');
}

addClass(obj, '     new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, '  me'); // obj.className='open menu new me'

alert(obj.className);


// ## 3 задание
//
// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
//
//     ```javascript
// var obj = {
//   className: 'open menu'
// };
// ```
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
//
//     ```javascript
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// ```
var obj = {
    className: 'open menu'
}

function removeClass (obj, cls) {
    var arr = obj.className.split(' ');
    var cls = cls.trim();
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === cls) {
            var index = arr.indexOf(arr[i]);
            // можно сократить строку arr.splice(arr.indexOf(arr[i]), 1);
                arr.splice(index, 1);
        }
        else {
            // return не работает ля цыклов нужно использовать break(прервать выполнение всего цыкла) или continue(прервать выполнение этой итерации);
            return;
        }

    }
    obj.className = arr.join(' ');
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

alert(obj.className);

// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
//
//     ```javascript
// obj = {
//   className: 'my menu menu'
// };
// removeClass(obj, 'menu');
// alert( obj.className ); // 'my'
// ```
//
// Лишних пробелов после функции образовываться не должно.

var obj = {
    className: 'my menu menu'
}

function removeClass (obj, cls) {
    var arr = obj.className.split(' ');
    var cls = cls.trim();
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}
removeClass(obj, 'menu'); // obj.className='menu'

alert(obj.className);

//
// ## 4 задание
//
// Напишите код, который:
//
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//     Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//     Выводит сумму всех значений массива когда ввод прекращен.

var arr = [];

function ask () {
    var arrElement = prompt("enter value");
    while (!isNaN(+arrElement) && arrElement !== '' && arrElement !== null) {
        arr.push(+arrElement);
        arrElement = prompt("enter value");
    }
    var count = 0;
    for (i in arr) {
        count += arr[i];
        }
    console.log(count);
}

ask();


// ## 5 задание
//
// Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2).
// В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
//
// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
//
//     Например:

function fib(n) {
    var a = 0,
        b = 1;
    for (var i = 2; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}


console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757

//
// ## 6 задание
//
// Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
// Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'

function strCutter(str) {
    str = prompt("enter something");
    if (str.length <= 20) {
        return str;
    }
    else {
        var longStr = str.slice(0, 20) + '...';
    }
    console.log(longStr);
}

strCutter();

// ## 7 задание
//
// Напиште код который выведет сотрудника который выполнил больше всех задач.

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

function bestWorkerEver(list) {
    var tasks = 0,
        employee;
    for (n in tasksCompleted) {
        if (tasksCompleted[n] > 0) {
            tasks = tasksCompleted[n];
            employee = n;
        }
    }
    console.log(employee);
}

bestWorkerEver(tasksCompleted);

