// Importa as funções necessárias dos arquivos externos
import { conectaApi } from './conectaApi.js';
import constroiCard from './mostrarVideos.js';

// Função assíncrona para buscar e exibir vídeos com base na pesquisa
async function buscarVideo(evento) {
  // Previne o comportamento padrão do formulário ao ser enviado
  evento.preventDefault();

  // Obtém os dados de pesquisa do elemento de entrada
  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;

  // Chama a função de busca na API, aguardando a resposta
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);

  // Obtém a referência à lista onde os vídeos serão exibidos
  const lista = document.querySelector('[data-lista]');

  // Limpa a lista de vídeos existente
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  // Para cada elemento na busca, cria um card e adiciona à lista
  busca.forEach((elemento) =>
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

// Obtém a referência ao botão de pesquisa
const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

// Adiciona um ouvinte de evento para chamar a função buscarVideo quando o botão de pesquisa é clicado
botaoDePesquisa.addEventListener('click', (evento) => buscarVideo(evento));
