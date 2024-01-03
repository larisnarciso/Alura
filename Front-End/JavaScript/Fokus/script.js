const html = document.querySelector('html');
const listaBt = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

// const focoBt = document.querySelector('.app__card-button--foco');
// const curtoBt = document.querySelector('.app__card-button--curto');
// const longoBt = document.querySelector('.app__card-button--longo');
// focoBt.addEventListener('click', () => {
//   alterarContexto('foco');
// });
// curtoBt.addEventListener('click', () => {
//   alterarContexto('descanso-curto');
// });
// longoBt.addEventListener('click', () => {
//   alterarContexto('descanso-longo');
// });

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
      break;
    case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;

    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
      break;
    default:
      break;
  }
}
