// Declaração de variáveis
const html = document.querySelector('html');
const listaBt = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.querySelector('#alternar-musica');
const resetBt = document.querySelector('#reset');
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarBtIcone = document.querySelector(
  '.app__card-primary-butto-icon'
);
const tempoNaTela = document.querySelector('#timer');
const musica = new Audio('sons/luna-rise-part-one.mp3');
const audioPause = new Audio('sons/pause.mp3');
const audioPlay = new Audio('sons/play.wav');
const audioFinalizado = new Audio('sons/beep.mp3');

// Configuração da música (em loop) com evento para alternar entre tocar/pausar
musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
  if (musica.paused) musica.play();
  else musica.pause();
});

// Mapeamento dos tempos inicias por contexto
const tempoInicialPorContexto = {
  foco: 5,
  'descanso-curto': 300,
  'descanso-longo': 900,
};

// Variáveis do temporizador
let tempoDecorridoEmSegundos = tempoInicialPorContexto['foco'];
let intervaloId = null;

// Função que retorna o título com base no contexto
function obterTitulo(contexto) {
  switch (contexto) {
    case 'foco':
      return `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
    case 'descanso-curto':
      return `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
    case 'descanso-longo':
      return `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
    default:
      return 'Otimize sua produtividade';
  }
}

// Função que atualiza a interface com base no contexto
function atualizarContexto(contexto) {
  html.setAttribute('data-contexto', contexto); // muda a cor da tela
  alternarAtributo(banner, 'src', `imagens/${contexto}.png`); // muda a imagem
  tempoDecorridoEmSegundos = tempoInicialPorContexto[contexto] || 1500; // Usa o valor inicial correspondente ao contexto ou 1500 como padrão
  titulo.innerHTML = obterTitulo(contexto); // obtem o titulo
  mostrarTempo();
}

// Função para a contagem regressiva
const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    audioFinalizado.play(); // a música do cronômetro zerado será tocada
    alert('Tempo finalizado!'); // sendo exibido uma mensagem de alerta
    audioFinalizado.pause(); // ao clicar em ok, a música será parada
    audioFinalizado.currentTime = 0; // e a música voltará ao início
    const focoAtivo = html.getAttribute('data-contexto') == 'foco';
    if (focoAtivo) {
      const evento = new CustomEvent('FocoFinalizado');
      document.dispatchEvent(evento);
    }
    zerarIntervalo(); // chama função para redefinir o temporizador
    resetar(); // resetar temporizador
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

// Adiciona ou remove a classe 'active'
function atualizarClasseAtiva(botaoSelecionado) {
  listaBt.forEach((botao) => {
    botao.classList.toggle('active', botao == botaoSelecionado);
  });
}

// Função para a exibição do tempo na tela
function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-br', {
    minute: '2-digit',
    second: '2-digit',
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

// Função para alternar atributo em um elemento
function alternarAtributo(elemento, atributo, valor) {
  elemento.setAttribute(atributo, valor);
}

// Função para zerar o intervalo do temporizador
function zerarIntervalo() {
  clearInterval(intervaloId);
  iniciarOuPausarBt.textContent = 'Começar';
  alternarAtributo(iniciarOuPausarBtIcone, 'src', 'imagens/play_arrow.png');
  intervaloId = null;
}

// Função para alternar entre iniciar e pausar
function alternarIniciarPausar() {
  // se o 'intervaloId' não for nulo, ele está em execução
  if (intervaloId) {
    audioPause.play(); // reproduz som de pausa
    zerarIntervalo();
    return; // encerra função
  }
  audioPlay.play(); // ao clicar no botão, aciona música de play
  intervaloId = setInterval(contagemRegressiva, 1000); // contagem regressiva de 1 segundo
  iniciarOuPausarBt.textContent = 'Pausar'; // muda o texto do botão para pausar
  alternarAtributo(iniciarOuPausarBtIcone, 'src', 'imagens/pause.png'); // muda ícone do botão para o de pause
}

// Função para resetar temporizador
function resetar() {
  if (intervaloId) {
    audioPause.play();
    zerarIntervalo();
  }
  const contextoAtual = html.getAttribute('data-contexto');
  tempoDecorridoEmSegundos = tempoInicialPorContexto[contextoAtual] || 1500; // Mostra o tempo inicial correspondente ao contexto atual ou 1500 como padrão
  mostrarTempo();
}

// Ao clicar em cada botão da lista
listaBt.forEach((botao) => {
  botao.addEventListener('click', () => {
    const contexto = botao.dataset.contexto; // pega o conteúdo do atributo 'data-contexto'
    atualizarContexto(contexto);
    atualizarClasseAtiva(botao);
  });
});

// Iniciar/pausar temporizador
startPauseBt.addEventListener('click', alternarIniciarPausar);

// Resetar temporizador
resetBt.addEventListener('click', resetar);

// Inicialização do tempo na tela
mostrarTempo();
