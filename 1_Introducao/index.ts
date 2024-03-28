const primeiroNome = 'Vitor';
const anotherName = 1;
const xx = true;

function greeting1(nome: string) {
    console.log('Olá,' + nome);
}


function sumTWoNumbers(numeroA: number, numeroB: number){
    const soma = numeroA + numeroB;
    console.log("A Soma é: " + soma)
}

sumTWoNumbers(100,100);


greeting1(primeiroNome)