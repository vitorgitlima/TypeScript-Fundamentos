// 1 - numbers
let x: number = 10;

console.log(x);

x = 16;

console.log(typeof x);

const y: number = 15.584848;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

// 2 - string

const firstName: string = "Vitor";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Lima";

fullName = firstName + " " + lastName;

console.log(fullName);

// 3 - boolean

let a: boolean = false;

console.log(a);
console.log(typeof a);

// 4 - inference e annotation

const annotation: string = "Teste";

let inference: string = "Teste";
// annotation = 1
// inference = 1

console.log("testando2")

//5 - desafio 2
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Estou imprimindo o número' ${numberToString}`

console.log(printMyNumber)