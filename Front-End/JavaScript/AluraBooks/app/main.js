const endpointAPI =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = [];

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const response = await fetch(endpointAPI);
  livros = await response.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivros(livrosComDesconto);
}
