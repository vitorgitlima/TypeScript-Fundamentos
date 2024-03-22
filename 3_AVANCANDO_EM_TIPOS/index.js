"use strict";
// 1 - Arrays
// Lista de inteiros
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// Lista de Strings
const nomes = ["Vitor", "Lima"];
console.log(nomes[0]);
// 2 - Outra sintaxe para arrays
const nums = [100, 200];
nums.push(300);
console.log(nums);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Vitor"));
// 6 - funcoes anonimas
setTimeout(function () {
    const sallay = 1000;
    // console.log(parseFloat(sallay))
    // console.log(sallay)
}, 2000);
// 7 - tipos de objeto
function passCordinates(coord) {
    console.log("X cordinatews: " + coord.x);
    console.log("X cordinatews: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);
