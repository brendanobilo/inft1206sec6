// Function Declaration

function greeting1() {
    console.log("Hello");
}

greeting1();

function greeting2() {
    return "Hello";
}

let str = greeting2();
console.log(str);
console.log(greeting2())

function greeting3(name) {
    return `Hello ${name}`
}

console.log(greeting3("Brendan"))
console.log(greeting3(5))


function greeting4(name = "sam") {
    return `Hello ${name}`;
}
console.log(greeting4());

function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(sum(3, 5));

// Function expression
let m = sum()
console.log(typeof (m));

let f = sum;
console.log(typeof (f));
console.log(f(6, 10));
f = 9;

const f2 = function () {
    return "Good afternoon"
}

console.log(f2());

// Arrow expression

const f3 = () => "Good afternoon"
console.log(f3())

const sum2 = function (num1 = 0, num2 = 0) {
    return num1 + num2;
}

const sum3 = (num1 = 0, num2 = 0) => num1 + num2;

console.log(sum2(2, 3));
console.log(sum3(2, 3));

console.log(Math.round(7.567).toFixed(2));

let myString = "WEB222";
console.log( myString.substring(1,4) ); // "EB2"
console.log( myString.substring(4,4) ); // ""
console.log( myString.substring(4,2) ); // "B2"

console.log("123" * 3)
