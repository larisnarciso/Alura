// Importa a função conectaApi do arquivo conectaApi.js
import { conectaApi } from './conectaApi.js';

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
  evento.preventDefault();

  const imagem = document.querySelector('[data-imagem]').value;
  const url = document.querySelector('[data-url]').value;
  const titulo = document.querySelector('[data-titulo]').value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    window.location.href = '../pages/envio-concluido.html';
  } catch {
    formulario.innerHTML = `
      <h2 class="mensagem__titulo">Não foi possível enviar o vídeo</h2>
      <button class='botao__retornar' data-botao-retornar>Retornar</button>
    `;

    const botaoRetornar = document.querySelector('[data-botao-retornar]');
    botaoRetornar.addEventListener('click', () => {
      window.location.href = '../pages/enviar-video.html';
    });
  }
}

formulario.addEventListener('submit', (evento) => criarVideo(evento));
