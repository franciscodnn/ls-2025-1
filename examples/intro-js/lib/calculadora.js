function calcular(n1, n2, op){
    switch(op){
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n1 / n2;
        default: return 'operação não suportada';
    }    
}

export default calcular;