let total = 0;

function adicionarAoCarrinho(botao) {
    const produtoDiv = botao.parentElement;
    const nome = produtoDiv.querySelector('h2').textContent;
    const preco = parseFloat(produtoDiv.querySelector('p').textContent.replace('R$', '').replace(',', '.').trim());

    const itensCarrinho = document.getElementById('itens-carrinho');
    const novoItem = document.createElement('li');
    novoItem.textContent = `${nome} - R$ ${preco.toFixed(2).replace('.', ',')}`;
    itensCarrinho.appendChild(novoItem);

    total += preco;
    document.getElementById('total').textContent = total.toFixed(2).replace('.', ',');
}

function comprar() {
    alert('Parabens eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    confetes();
    resetarCarrinho();
}

function resetarCarrinho() {
    document.getElementById('itens-carrinho').innerHTML = '';
    total = 0;
    document.getElementById('total').textContent = '0,00';
}

function confetes() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const confettiSettings = { target: canvas };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(() => {
        canvas.remove();
    }, 5000);
}
