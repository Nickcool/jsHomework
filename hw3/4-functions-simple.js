// ## 1 task
//
// Create function "getName" that ask user his name with prompt window and alerts his name to him in format: "Hello, <his_name>".

function showName(name) {
    name = prompt("enter your name");
    alert ('Hello, '+ name);
}

showName(); // "Hello, Lily";

// ## 2 task
//
// Create function double(x) that returns the number passed to it as an argument, multiply with 2

function double(x) {
    x *= 2;
    console.log(x);
}

double(6); // logs in console => 12

//     ## 3 task
//
// Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];

function range(x, y) {
    var count = 0;
    for (i = x; i <= y; i++){
        count += i;
    }
    console.log(count);
}

range(1,3); // logs in console => 6

// ## 4 task
//
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению.
//     Пример работы: - Решето Эратосфена

function getPrimesSumBelow(x) {
    var arr = [];
    for (var i = 2; i < x; i++) {
        arr[i] = true
    }
    var p = 2;
    do {
        for (i = 2 * p; i < x; i += p) {
            arr[i] = false;
        }
        for (i = p + 1; i < x; i++) {
            if (arr[i]) break;
        }
        p = i;
    } while (p * p < x);
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
            sum += i;
        }
    }
    console.log(sum);
}
getPrimesSumBelow(10);

// ## 5 task
//
// Create a function that returns true if number is odd, and false if even;

function number(a) {
    a = +prompt("enter number");
    if (a % 2 !== 0)
        {
            return true;
        }
        else {
            return false;
            }
        }

console.log(number());


// ## 6 task
//
// Create a function that returns all odd numbers in range, use the previous function inside this one;

function number(x, y) {
    x = +prompt("enter number");
    y = +prompt("enter number");

    var arr = [];
    for (i = x; i < y; i++) {
        if (i % 2 !== 0)
        {
            arr.push(i);
        }

    }
    console.log(arr);
}

number();

// ## 7 task
//
// Create a function that will call promt window that will ask for a number to user, until he enters 9;

function call(number) {
    do {
        var number = +prompt('enter number');
    }
    while (number !== 9);
}

call();
