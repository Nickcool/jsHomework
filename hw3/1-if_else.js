// /*
// # Домашнее задание по условным операторам JS.
//
// ## 1 задание

// for all tasks where is checking with other a values?????
//
// Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

    var a = +prompt("Enter number");
    switch (a) {
        case 0:
            alert("Верно!");
            break;
        default:
            alert("Неверно!");
            break;
    }
// in this case better use if/else

// ## 2 задание
//
// Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3.

    var b = prompt("Enter word");
    if (b === 'test') {
        console.log("Верно!");
    }
    else {
        console.log("Неверно!");
    }

// ## 3 задание
//
// Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.

    var test = confirm('true of false?');
    test === true ? console.log("Верно!") : console.log("Неверно!");
    // 2 shorter variants:
    
    /*
        test ? console.log("Верно!") : console.log("Неверно!");    
        or
        console.log(test ? "Верно!" : "Неверно!")
    */

    var test = confirm("true of false?");
    if (test === true) {
        console.log("Верно!");
    }
    else {
        console.log("Неверно!");
    }

// ## 4 задание
//
// Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result.
// Если result больше 5, то присвойте переменной result значение 5.
// Если же она меньше 5-ти - то умножьте ее на 10.
// Выведите на экран значение переменной result.
// Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.

    var a = +prompt("a number");
    var b = +prompt("b number");
    var result = a + b;
    if (result >= 5) {
        result = 5;
    }
    else {
        result *= 10;
    }
    console.log(result);

// ## 5 задание
//
// Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

    var a = +prompt("enter number");
    switch (a) {
        case 0:
        case 2:
            a /= 10;
            break;
        default:
            a += 7;
            break;
    }
    console.log(a);

// ## 6 задание
//
// Если переменная a равна или меньше 1, а переменная b больше или равна 3,
// то выведите сумму этих переменных, иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

    var a = +prompt("a number");
    var b = +prompt("b number");

    if (a <= 1 && b >= 3) {
        console.log(a + b);
    }
    else {
        console.log('Неверно!');
    }

// ## 7 задание
//
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти,
// то увеличьте a на 2, иначе прибавьте к a число 5.
// Выведите новое значение перенной на экран. Проверьте работу скрипта самостоятельно.

    var a = +prompt("a number");
    var b = +prompt("b number");

    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log(a += 2);
    }
    else {
        console.log(a += 5);
    }

// ## 8 задание
//
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима',
// если имеет значение '2' – 'лето' и так далее. Решите задачу через switch-case.

    var num = +prompt("Enter number");
    switch (num) {
        case 1:
            alert("зима");
            break;
        case 2:
            alert("лето");
            break;
        case 3:
            alert("так");
            break;
        case 4:
            alert("далее");
            break;
        default:
            alert("Неверно!");
            break;
    }

// ## 9 задание
//
//     Переменная lang может принимать три значения: 'ru', 'en', 'de'.
// Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
// если имеет значение 'en' – то на английском, если 'de' – на немецком.
// Решите задачу через 3 if, через switch-case и через многомерный массив*/

    var lang = prompt("enter lang type: ru, en, de");
    var arr = [];
    switch (lang) {
        case 'ru':
            arr.push('понедельник', 'вторник', 'среда');
            break;
        case 'en':
            arr.push('monday', 'tuesday', 'wednesday');
            break;
        case 'de':
            arr.push('montag', 'dienstag', 'mittwoch');
            break;
        default:
            alert("Неверно!");
            break;
    }
    console.log(arr);

    //

    var lang = prompt("enter lang type: ru, en, de");
    var arr = [];
    if (lang === 'ru') {
        arr.push('понедельник', 'вторник', 'среда');
    }
    else if (lang === 'en') {
        arr.push('monday', 'tuesday', 'wednesday');
    }
    else if (lang === 'de') {
        arr.push('montag', 'dienstag', 'mittwoch');
    }
    else {
        alert("Неверно!");
    }
    console.log(arr);

    //

    var days = [
        ['понедельник', 'вторник', 'среда'],
        ['monday', 'tuesday', 'wednesday'],
        ['montag', 'dienstag', 'mittwoch']
    ]
    var arr = [];
    var lang = prompt("enter lang type: ru, en, de");

    if (lang === 'ru') {
        arr = days[0];
    }
    else if (lang === 'en') {
        arr = days[1];
    }
    else if (lang === 'de') {
        arr = days[2];
    }
    else {
        alert("Неверно!");
    }
    console.log(arr);
