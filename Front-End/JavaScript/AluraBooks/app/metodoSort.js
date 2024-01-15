let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  // Método sort para ordenar os livros com base no preço
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirLivros(livrosOrdenados); // Exibe os livros ordenados
}
