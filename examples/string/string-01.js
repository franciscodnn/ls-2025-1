// console.log('teste');
// console.log("teste");
// console.log(`teste`); // template literals

const nome = 'Francisco';
/*
console.log('Olá, ' + nome);
console.log(`Olá, ${nome}`);
*/

function criarTagImg(srcImage) {
    return "<img src=\"" + srcImage + "\">";
}

// console.log("teste");

// console.log( criarTagImg('ifpb.png') );

// console.log("linha1\nlinha2");

// console.log('\u2662');

// console.log(`2 === '2'? ${2 === '2'}`);

console.log( 'teste'.length );

console.log( 'teste'.includes('b') );

// console.log( 'lorem ipsum\n'.repeat(5) );

// console.log( 'teste'.substr(-1, 2) );

// console.log( 
    // 'L' + 
    // 'linguagem de script'.substring(1)
// );

console.log(
    'linguagem de script'.slice(-3)
);

let split_join = 'linguagem de script'.split(' ').join('_');
console.log(
    split_join
);

console.log(
    'teste'.replaceAll('e', 'E')
);
console.log('lorem ipsum'.search('ipsum')); //=> 6

console.log('10'.padStart(4, '_')); //=> "__10"

console.log('lorem ipsum'.endsWith('su')); //=> true