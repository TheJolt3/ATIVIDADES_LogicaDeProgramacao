function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

let sorteados = [];
let numero;

// sorteia os números
for(let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
}

alert(sorteados);
}

// função para obter um número aleatório entre minimo e máximo
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}