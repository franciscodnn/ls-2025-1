
function ePrimo(numero) {
    let resultado = true;
    for(let i = 2; i < (numero / 2); i++) {
        if(numero % i === 0) 
            resultado = false;
    }

    return resultado;
    
}

const PI = 3.14;

export default ePrimo;
