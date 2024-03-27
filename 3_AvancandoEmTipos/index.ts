// 1 - Arrays

// Lista de inteiros
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// Lista de Strings
const nomes: string[] = ["Vitor", "Lima"]
console.log(nomes[0])

// 2 - Outra sintaxe para arrays

const nums: Array<number> = [100, 200]
nums.push(300)

console.log(nums)

// 4 - parametros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(4, 5)

// 5 - retorno de função

// function saudacao(name: string): string{
//     return `Olá ${name}`
// }

// console.log(saudacao("Vitor"))

// 6 - funcoes anonimas

setTimeout(function(){

    const sallay: number = 1000

    // console.log(parseFloat(sallay))
    // console.log(sallay)

}, 2000)

// 7 - tipos de objeto

function passCordinates(coord: {x: number, y: number}){
   console.log("X cordinatews: " + coord.x);
   console.log("X cordinatews: " + coord.y);
}

const objCoord = {x: 329, y: 84.2}

passCordinates(objCoord)

// - propriedades opcionais

function showNumbers(a: number, b:number, c?: number){
    console.log("A: " + a)
    console.log("A: " + b); 
    console.log("A: " + c);

}

showNumbers(1, 2, 3)
showNumbers(1, 2,)

// 9 - validando argumentos opcionais
function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
    
}

console.log(advancedGreeting("Vitor", "Lima"));
console.log(advancedGreeting("Barley"));

// 10 - union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é  R$${balance}`);
    
}

showBalance(100)
showBalance("500")

// 11 - Avancando em union types
function showUserRole(role: boolean | string){
    if(typeof role == "boolean"){
        return "Usuário não aprovado!"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - type alias
type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`);
    
}

console.log(1)
console.log("200") 


// 13 - Interface
interface Point{
    x: number
    y: number
    z: number
}

function showCoords(obje: Point){
    console.log(`X: ${obje.x} Y: ${obje.y} Z: ${obje.z}`);
    
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - interface vs type alias
interface Person{
    name: string
}

interface Person{
    age: number
}

const somePerson: Person = {name: "Vitor", age: 29}

type personType = {
    name: string
}

// type personType = {
//     age: string
// } não permitido em type alias

// 16 - Literal Types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção escolhida é: ${direction}`);
    
}

showDirection("left")

// 16 - Non null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigInt
let n: bigint

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n +  100n);

// 18 - Symbol. valores unicos
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);



