function removeItensQtdZero(arrayProdutos) {
    let resultado = [];

    for(const item of arrayProdutos) {
        if(item[2] > 0) resultado.push(item);
    }

    return resultado;
}

export { removeItensQtdZero };