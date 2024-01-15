// Endpoint da API
const endpointAPI =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = []; // Array vazia para armazenar os livros

getBuscarLivrosDaAPI(); // Chama função para buscar os livros da API

async function getBuscarLivrosDaAPI() {
  // Função assíncrona para buscar os livros da API
  const response = await fetch(endpointAPI); // Requisição para o endpoint da API
  livros = await response.json(); // Converte as respostas para o formato JSON
  let livrosComDesconto = aplicarDesconto(livros); // Aplica desconto aos livros
  exibirLivros(livrosComDesconto); // Exibe os livros com desconto
}
