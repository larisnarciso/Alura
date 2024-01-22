// Importa a função conectaApi do arquivo conectaApi.js
import { conectaApi } from './conectaApi.js';

// Seleciona o elemento do DOM com o atributo data-lista
const lista = document.querySelector('[data-lista]');

// Função que constrói um card de vídeo com base nos parâmetros fornecidos
export default function constroiCard(titulo, descricao, url, imagem) {
  const video = document.createElement('li');
  video.className = 'videos__item';
  // Cria um iframe para incorporar o vídeo
  video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
  <div class="descricao-video">
      <!-- Adiciona a imagem do canal e o título e descrição do vídeo -->
      <img src="${imagem}" alt="logo canal alura">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
  </div>`;
  return video;
}

// Função assíncrona que lista os vídeos obtidos da API
async function listaVideos() {
  // Chama a função da API para obter a lista de vídeos
  const listaApi = await conectaApi.listaVideos();
  // Para cada elemento na lista da API, adiciona um card à lista no DOM
  listaApi.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );
}

// Chama a função para listar os vídeos ao carregar a página
listaVideos();
