// function hello(origin) {
//     console.log(`Hello ${origin}!`);
// }

// hello('Head Script');

function incrementar() {
    const valor = Number(
        document.querySelector('#resultado').innerHTML
    );

    document.querySelector('p:nth-of-type(2)').innerHTML = valor + 1;
}

function valorInicial() {
    const init = Number(document.querySelector('input').value);

    if(Number.isNaN(init)) {
        const h3 = document.querySelector('h3');
        h3.style.display = 'block';
        h3.style.color = 'red';
        h3.style.fontSize = '30px';

        document.querySelectorAll('p')[1].innerHTML = 0;

        setTimeout(function() {
            h3.style.display = 'none';
        }, 5000);

        return;
    }

    document.querySelectorAll('p')[1].innerHTML = init;
}