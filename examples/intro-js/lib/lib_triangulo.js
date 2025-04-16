const verificarTriangulo = (l1, l2, l3) => {
    if(!eTriangulo(l1, l2, l3)) return 'None';

    if(l1 == l2 && l2 == l3) return 'equilatero';

    if(l1 == l2 || l1 == l3 || l2 == l3) return 'isosceles';

    return 'escaleno';
}

function eTriangulo(l1, l2, l3) {
    return (l1 + l2 > l3 
        && l1 + l3 > l2
        && l2 + l3 > l1);
}

export default verificarTriangulo;