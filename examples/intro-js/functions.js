function additionInitial(param1, param2, param3 = 0) {
    return param1 + param2 + param3;
  }
   
  // console.log(addition(1)); //=> NaN
  // console.log(addition(1, 2)); //=> 3
  // console.log(addition(1, 2, 3)); //=> 3

const additionForma2 = function(param1, param2) {
    return param1 + param2;
}

// console.log( additionForma2(5, 10));

const additionArrowFunction = (param1, param2) => {
    return param1 + param2;
}

const additionArrowFunctionF2 = (p1, p2) => p1 + p2;

// console.log( additionArrowFunctionF2(5, 10) );

// ------
function addition(param1, param2) {
    return param1 + param2;
}
   
function addition(param) {
    return param + 1;
}
   
// console.log(addition(1)); //=> 2
// console.log(addition(1, 2)); //=> 2

function additionRest(...parametroAsArray){
    let resultado = 0;

    for(const elem of parametroAsArray) {
        resultado += elem;
    }

    return resultado;
}

console.log( additionRest(3, 2, 5, 8, 10) );

function calculadora(op1, op2, callback) {
    return callback(op1, op2);
}

let resultado = calculadora(5, 10, (x, y) => x + y);
resultado = calculadora(5, 10, (x, y) => x - y);
resultado = calculadora(5, 10, (x, y) => x * y);
resultado = calculadora(5, 10, (x, y) => x / y);