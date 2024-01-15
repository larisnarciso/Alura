const botoes = document.querySelectorAll('.btn');
// Evento de click para cada botão com a classe btn, chamando função de filtrar os livros
botoes.forEach((btn) => btn.addEventListener('click', FiltrarLivros));

// Função para filtrar os livros com base no botão clicado
function FiltrarLivros() {
  const elementoBtn = document.getElementById(this.id); // Obtem o elemento do botão pelo ID
  const categoria = elementoBtn.value; // Obtem a categoria associada ao botão
  // Filtra os livros com base na categoria selecionada
  let livrosFiltrados =
    categoria == 'disponivel'
      ? livros.filter((livro) => livro.quantidade > 0)
      : livros.filter((livro) => livro.categoria == categoria);

  exibirLivros(livrosFiltrados); //
  // Se a categoria é disponivel, calcula e exibe o valor total dos livros
  if (categoria == 'disponivel') {
    const valorTotal = totalLivrosDisponiveis(livrosFiltrados);
    exibirValorTotal(valorTotal);
  }
}
// Função para exibir o valor total dos livros
function exibirValorTotal(valorTotal) {
  elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `;
}
