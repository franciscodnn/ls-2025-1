const array = [1, 'teste', [1, 2, 3]];

// Object.freeze(array);

// console.log(array[0]);

// console.log(array[2][1]);

array[1] = 'LS';

// console.log(Array.isArray(array[2]));

// const arrayAsObject = new Array(3);
// console.log(arrayAsObject);

let spread = [1, 3, 5];

let spread2 = [...spread, 2, 4, 6];

console.log(spread2);

for(let i = 0; i < spread2.length; i++) {
    // console.log(spread2[i]);
}

for(let i in spread2) {
    // console.log(spread2[i]);
}

for(const elemento of spread2) {
    // console.log(elemento);
}
// [ 1, 3, 5, 2, 4, 6 ]
spread2.splice(3, 3, 7)

console.log( spread2.join('; ') );

console.log([1, 2, 3, 4, 5].slice(1)); //=> 2, 3, 4, 5
