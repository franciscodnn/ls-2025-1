import { removeItensQtdZero } from './lib-carrinho.js';

const arrayProdutos = [
    [1, 10, 2],
    [2, 10, 2],
    [3, 10, 2],
    [4, 10, 0]
];

let resultado = 0;
for(const item of arrayProdutos ) {
    resultado += item[1] * item[2];
}
console.log(`Total da compra: ${resultado}`);

console.log(removeItensQtdZero(arrayProdutos));

console.log('Programação funcional');

resultado = 0;

arrayProdutos.forEach(
    function(item) {
        resultado += item[1] * item[2];
    }
);

console.log(`Total da compra: ${resultado}`);

const arrayResultanteMap = arrayProdutos.map(
    // (item) => `ID: ${item[0]}, Preço unitário: ${item[1]}, 
// Quantidade: ${item[2]}`
    (item) => item[1] * item[2]
);

console.log(arrayResultanteMap);

const totalCompra = arrayResultanteMap.reduce(
    (somatorio, valorCorrente) => somatorio + valorCorrente,
    0
);
console.log(totalCompra);

const filtrarValoresMaioresQue0 = arrayResultanteMap.filter(
    (valor) => valor > 0
)
console.log(filtrarValoresMaioresQue0);

const arrayFiltrado =arrayProdutos.filter(
    (item) => {
        return item[1] * item[2] > 0
    }
);

console.log(arrayFiltrado);





