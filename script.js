// 1-st
var str = "Have a nice day!";
console.log(str);

// 2-nd
var age = 25;
console.log(age);
age = undefined;

// 3-rd
var info = {
name: "Nick",
age: 24
};

console.log(info.name, info.age);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

// 4-th
var customArray = [1,2,3];
console.log(customArray);
customArray = 0;
console.log(customArray);

// 5-th
var student = "Nick";
console.log(student);
console.log(student = "Nick Cool");

// 6-th
var complex = [ ];
complex.push("My name is:");
complex.push(7);
complex.push(null);
complex.push(info);
console.log(complex[3]);

// 7-th
var complexObj = { };
    complexObj.name = "Nuck";
    complexObj.age = 27;
    complexObj.friends = ["Nikolay", "Viktor", "Vsevolod"];
    complexObj.soc_links= {
        facebook:'https://www.facebook.com/',
        google:'https://www.google.com'
    };

console.log(`My name is ${complexObj.name}. I am ${complexObj.age}. I have a lot of friends, but the best one is: ${complexObj.friends[2]}. You can find me on facebook: ${complexObj.soc_links.facebook} or on goole groups: ${complexObj.soc_links.google}`);
