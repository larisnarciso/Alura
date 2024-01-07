// Selecionar elementos HTML
const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

// Definir valores mínimo e máximo
const menorValor = 10;
const maiorValor = 100;

// Atualizar elementos HTML com os valores mínimo e máximo
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

// Gerar número aleatório entre o valor mínimo e máximo
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * (maiorValor - menorValor + 1) + menorValor);
}

// Exibir o número secreto no console para teste
console.log('numero secreto:', numeroSecreto);
