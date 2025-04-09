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

console.log("Quantidade letras E: " + contadorLetrasE);