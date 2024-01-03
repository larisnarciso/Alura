const html = document.querySelector('html');
const listaBt = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarBtIcone = document.querySelector(
  '.app__card-primary-butto-icon'
);
const tempoNaTela = document.querySelector('#timer');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const audioPause = new Audio('/sons/pause.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioFinalizado = new Audio('/sons/beep.mp3');

//
musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
  if (musica.paused) musica.play();
  else musica.pause();
});

//
listaBt.forEach((botao) => {
  botao.addEventListener('click', () => {
    const contexto = botao.dataset.contexto;
    alterarContexto(contexto);
    botao.classList.add('active');
    listaBt.forEach((outroBotao) => {
      if (outroBotao !== botao) outroBotao.classList.remove('active');
    });
  });
});

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `/imagens/${contexto}.png`);
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      tempoDecorridoEmSegundos = 1500;
      break;
    case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      tempoDecorridoEmSegundos = 300;
      break;
    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
      tempoDecorridoEmSegundos = 900;
      break;
    default:
      break;
  }
  mostrarTempo();
}

//
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    audioFinalizado.play();
    alert('Tempo finalizado!');
    audioFinalizado.pause();
    audioFinalizado.currentTime = 0;
    tempoDecorridoEmSegundos = 5;
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    audioPause.play();
    zerar();
    return;
  }
  audioPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = 'Pausar';
  iniciarOuPausarBtIcone.setAttribute('src', '/imagens/pause.png');
}

function zerar() {
  clearInterval(intervaloId);
  iniciarOuPausarBt.textContent = 'Começar';
  iniciarOuPausarBtIcone.setAttribute('src', '/imagens/play_arrow.png');
  intervaloId = null;
}

//
function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-br', {
    minute: '2-digit',
    second: '2-digit',
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
