function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

// Armazena todos os elementos com a classe 'tecla' em uma lista
const listaDeTeclas = document.querySelectorAll('.tecla');

// Para cada elemento da lista
listaDeTeclas.forEach((tecla) => {
  // Extrai a segunda classe do elemento atual
  const instrumento = tecla.classList[1];
  // Gera o ID do elemento correspondente
  const idAudio = `#som_${instrumento}`;
  // Ao clicar em um botão, será reproduzido o som correspondente
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  // Ao navegar pelo teclado
  tecla.onkeydown = function (event) {
    // Se apertar Enter, Espaço ou o Enter ao lado do teclado númerico
    if (
      event.code === 'Enter' ||
      event.code === 'Space' ||
      event.code === 'NumpadEnter'
    ) {
      // Irá adicionar a classe 'ativa' para adicionar os efeitos definidos no css
      tecla.classList.add('ativa');
    }
  };
  // Quando soltar a tecla, irá retirar a classe 'ativa'
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  };
});
