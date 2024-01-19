// Endpoint da API
const endpointAPI = 'http://localhost:3000/videos';

async function listaVideos() {
  // Função assíncrona para buscar os videos da API
  const conexao = await fetch(endpointAPI); // Requisição
  const conexaoConvertida = await conexao.json(); // Converte para o formato JSON
  return conexaoConvertida;
}

listaVideos();

export const conectaApi = {
  listaVideos,
};
