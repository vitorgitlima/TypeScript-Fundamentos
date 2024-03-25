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

const arr2: Array<number | string | boolean> = [1, "teste", true]
