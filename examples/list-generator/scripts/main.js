function inserirH1(text) {
    const h1 = document.createElement("h1");
    // h1.innerHTML = text;
    const textNode = document.createTextNode(text);

    h1.appendChild(textNode);

    // document.body.appendChild(h1);
    document.body.insertAdjacentElement('afterbegin', h1);
}

function generateList() {
    const input = document
                    .querySelector('input[name=qtd-itens]');
    const ul = document.querySelector('.itens-gerados');

    const value = Number(input.value);

    if(Number.isNaN(value)) {
        console.log('Input precisa ser um número');
        ul.innerHTML = '';

        const erro = `
          <p id="erro"
            style="color: red">Valor inválido</p>
          `;

        ul.insertAdjacentHTML('afterend', erro);

        return;
    }

    let itens = '';
    for(let i = 0; i < value; i++) {
        itens += `<li>Item ${i+1}</li>`;
    }

    
    ul.innerHTML = itens;

    input.value = '';    
}