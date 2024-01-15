const elementoParaInserirLivros = document.getElementById('livros');
const elementoValorTotal = document.getElementById(
  'valor_total_livros_disponiveis'
);

function exibirLivros(listaLivros) {
  elementoParaInserirLivros.innerHTML = '';
  elementoValorTotal.innerHTML = '';
  listaLivros.forEach((livro) => {
    let disponibilidadeClasse = livro.quantidade <= 0 ? 'indisponivel' : '';
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens ${disponibilidadeClasse}" src=${
      livro.imagem
    } alt=${livro.alt}/>
      <h2 class="livro__titulo">${livro.titulo}</h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;
  });
}
