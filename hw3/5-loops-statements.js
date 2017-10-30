// ## 1 task
//
// Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even, and display a message to the screen.

    for (i = 0; i < 16; i++) {
    if (i % 2 == 0) {
        console.log(i + ' is even');
    }
    else {
        console.log(i + ' is odd');
    }
    }

// ## 2 task
//
// Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}

// ## 3 task
//
// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers

var a = +prompt('enter first value');
var b = +prompt('enter second value');
var gcd;
while (a!=b)
{
    if (a>b)
    {
        a = a -b;
    }
    else
    {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);

// ## 4 task
//
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var arr = [];
for (i = 0; i < 1000; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
        arr.push(i);
    }
}
var count = 0;
for (e in arr) {
    count += arr[e];
}
console.log(count);

// ## 5 task
//
// Console log all numbers from range 10-90 that divide to 5 and 3.

for (i = 10; i < 91; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
}

// ## 6 task
//
// Console log only odd numbers from range 11-70 in reverse order starting with 70.

for (i = 70; i > 10; i--) {
    if (i % 2 !== 0) {
        console.log(i + ' is odd');
    }
}

//     ## 7 task
//
// Console log only even numbers that divide to 2 and 3 from range 13-78 in reverse order.

for (i = 78; i > 12; i--) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i + ' is even');
    }
}