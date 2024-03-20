const firstName = 'Vitor';
const anotherName = 1;
const x = true;

function greeting(name){
    console.log('Olá,' + name)
}


function sumTWoNumbers(numeroA: number, numeroB: number){
    const soma = numeroA + numeroB;
    console.log("A Soma é: " + soma)
}

sumTWoNumbers(100,100);


greeting(firstName)