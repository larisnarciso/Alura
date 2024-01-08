// Função principal para verificar se o chute é válido e fornecer feedback ao usuário
function verificacaoValida(chute) {
  // Converter o chute para um número
  const numero = +chute;

  // Verificar se o chute é inválido (não é um número)
  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === 'GAME OVER') {
      document.body.innerHTML = `
              <h2>Game Over !!!</h2>
              <h3>Pressione o botão para jogar novamente</h3>
              <button id="jogar-novamente" class="btn gameover" >Jogar novamente</button>
              `;
      document.body.style.backgroundColor = '#111';
    } else {
      elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }

    // Exibir mensagem de valor inválido
    elementoChute.innerHTML += '<div>Valor inválido</div>';
    return;
  }

  // Verificar se o número está fora do intervalo permitido
  if (numeroForMaiorMenor(numero)) {
    // Exibir mensagem indicando o intervalo válido
    elementoChute.innerHTML += `<div>Valor inválido: Escolha um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  // Verificar se o número é igual ao número secreto
  if (numero === numeroSecreto) {
    // Exibir mensagem de acerto
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id='jogar-novamente' class='btn'>Jogar novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    // Exibir mensagem indicando que o número secreto é menor
    elementoChute.innerHTML += ` <div>O número secreto é menor
      <i class="fa-solid fa-arrow-down-long"></i>
    </div> `;
  } else {
    // Exibir mensagem indicando que o número secreto é maior
    elementoChute.innerHTML += ` <div>O número secreto é maior
      <i class="fa-solid fa-arrow-up-long"></i>
    </div>`;
  }
}

// Função para verificar se o chute é inválido (não é um número)
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

// Função para verificar se o número está fora do intervalo permitido
function numeroForMaiorMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

// Aciona botão jogar novamente
document.body.addEventListener('click', (evento) => {
  if (evento.target.id == 'jogar-novamente') {
    window.location.reload();
  }
});
