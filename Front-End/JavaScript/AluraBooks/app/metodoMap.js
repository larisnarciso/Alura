// Função para aplicar desconto a todos os livros na lista
function aplicarDesconto(livros) {
  const desconto = 0.3; // Definindo a taxa de desconto como 0.3 (30%)

  // Utilizando o método map para criar uma nova lista de livros com preços ajustados
  // O desconto é aplicado subtraindo a porcentagem do preço original
  livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: livro.preco - livro.preco * desconto };
  });

  // Retornando a lista de livros com desconto
  return livrosComDesconto;
}
