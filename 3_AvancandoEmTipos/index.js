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
// function saudacao(name: string): string{
//     return `Olá ${name}`
// }
// console.log(saudacao("Vitor"))
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
// - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("A: " + b);
    console.log("A: " + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - validando argumentos opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Vitor", "Lima"));
console.log(advancedGreeting("Barley"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é  R$${balance}`);
}
showBalance(100);
showBalance("500");
// 11 - Avancando em union types
function showUserRole(role) {
    if (typeof role == "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
console.log(1);
console.log("200");
function showCoords(obje) {
    console.log(`X: ${obje.x} Y: ${obje.y} Z: ${obje.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Vitor", age: 29 };
// type personType = {
//     age: string
// } não permitido em type alias
// 16 - Literal Types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção escolhida é: ${direction}`);
}
showDirection("left");
// 16 - Non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigInt
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
