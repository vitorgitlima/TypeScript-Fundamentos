"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.584848;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Vitor";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Lima";
fullName = firstName + " " + lastName;
console.log(fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
// 4 - inference e annotation
const annotation = "Teste";
let inference = "Teste";
// annotation = 1
// inference = 1
console.log("testando2");
//5 - desafio 2
const n1 = 10;
const numberToString = n1.toString();
const printMyNumber = `Estou imprimindo o número' ${numberToString}`;
console.log(printMyNumber);
