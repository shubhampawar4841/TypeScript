"use strict";
let x = 1001;
console.log(x);
function greeting(Name, Lastname, age) {
    console.log("Hello" + Name + Lastname);
}
greeting("shubham", "Pawar", 18);
function sum(a, b) {
    return a + b;
}
//type inference
greeting("shubham", "Pawar", 18);
function sum(a, b) {
    return a + b;
}

function mult(a,b) {
    return a*b;
}
const value = sum(1, 4);
console.log(value);
