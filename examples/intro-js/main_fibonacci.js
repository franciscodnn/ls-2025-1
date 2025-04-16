function fibonacci(qtdTermos) {
    if(qtdTermos === 0) return '';

    if(qtdTermos === 1) return 0;

    if(qtdTermos === 2) return '0, 1';

    let valorAnterior = 0;
    let valorCorrente = 1;

    let valuesFibonacci = [0, 1];
    for(let i = 2; i < qtdTermos; i++) {        
        const temp = valorCorrente;
        valorCorrente = valorAnterior + valorCorrente;
        valorAnterior = temp;

        valuesFibonacci.push(valorCorrente);
    }

    return valuesFibonacci;
}

console.log( fibonacci(9) );