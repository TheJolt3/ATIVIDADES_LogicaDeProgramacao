function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

let sorteados = [];
let numero;

// sorteia os números
for(let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    // garante que o número não seja repedito
    while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }
    
    sorteados.push(numero);
}
// Exibir os números sorteados na página
let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
alterarStatusBotao();

alert(sorteados);
}

// função para obter um número aleatório entre minimo e máximo
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// função para alterar o status do botão reiniciar
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
//função para reiniciar o sorteio
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}   