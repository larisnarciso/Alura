function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

// Armazena todos os elementos com a classe 'tecla' em uma lista
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach((tecla) => {
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  tecla.onclick = function () {
    tocaSom(idAudio);
  };
});
