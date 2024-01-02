const html = document.querySelector('html');
// const listaBt = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

focoBt.addEventListener('click', () => {
  alterarContexto('foco');
});

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto');
});

longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo');
});

// listaBt.forEach((botao) => {
//   botao.addEventListener('click', () => {
//     const contexto = botao.dataset.contexto;
//     alterarContexto(contexto);
//   });
// });

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `/imagens/${contexto}.png`);
}
