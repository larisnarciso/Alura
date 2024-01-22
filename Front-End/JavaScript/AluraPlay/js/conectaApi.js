// Endpoint da API
const endpointAPI = 'http://localhost:3000/videos';

// Função assíncrona para obter a lista de vídeos através de uma requisição GET
async function listaVideos() {
  const conexao = await fetch(endpointAPI); // Realiza a requisição
  const conexaoConvertida = await conexao.json(); // Converte a resposta para o formato JSON
  return conexaoConvertida;
}

// Função assíncrona para criar um novo vídeo através de uma requisição POST
async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch(endpointAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

// Objeto que exporta as funções para conectar à API
export const conectaApi = {
  listaVideos,
  criaVideo,
};
