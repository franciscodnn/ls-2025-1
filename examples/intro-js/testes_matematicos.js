// main - arquivo principal
import ePrimo from './lib/function_primo.js';

// import ParImpar from './lib/function_par_impar.js';

import numeroPar from './lib/function_par_impar.js';
import calcular from './lib/calculadora.js';

console.log( 'É primo? ', ePrimo(19) );
console.log('É par?', numeroPar(8));
// console.log('É par?', ePar(8));
// console.log('É ímpar?', eImpar(10));

console.log('Soma: ', calcular(5, 3, '+'));
console.log('Subtração: ', calcular(5, 3, '-'));
