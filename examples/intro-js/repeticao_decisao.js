const operando1 = 10;
const operando2 = 2;

let operador = '+';

// if(operador == '+') {
//     /* duas linhas de código */
//     console.log("Soma!");
//     console.log(operando1 + operando2);
// } else if(operador == '-') console.log(operando1 - operando2);
// else if(operador == '*') console.log(operando1 * operando2);
// else if(operador == '/') console.log(operando1 / operando2);

operador = '%';
switch(operador){
    case '+': 
        console.log(operando1 + operando2);
        break;

    case '-':
        console.log(operando1 - operando2);
        break;

    case '*':
        console.log(operando1 * operando2);
        break;

    case '/':
        console.log(operando1 / operando2);
        break;

    default:
        console.log('Operador não suportado');
}

/* Estruturas de repetição */

for(let i = 0; i < 10; i++){
    // console.log( i + 1 );
}

const str = "teste";
let contadorLetrasE = 0;
for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === 'e') contadorLetrasE++;
}

// console.log("Quantidade letras E: " + contadorLetrasE);

let i = 0;
while(i++ < 10) {
    // console.log(i);
    // a) 1 - 9
    // b) 1 - 10
}

i = 0;
// console.log('i: ', i);
do {
    // console.log('Vai ser impresso quantas vezes essa linha?');
} while(i++ < 10);

const arrayNumeros = [1, 2, 3, 10];
// console.log(arrayNumeros[3]);

let tamanho = arrayNumeros.length;

// for(let i = 0; i < tamanho; i++)
    // console.log(arrayNumeros[i]);

for(let i of ["olá", "mundo", "js"])
    console.log(i);
console.log('----');
for(let i in ["olá", "mundo", "js"])
    console.log(i);
console.log('----');
for(let c of "teste")
    console.log(c);