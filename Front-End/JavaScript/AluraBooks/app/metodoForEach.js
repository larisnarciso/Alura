const elementoParaInserirLivros = document.getElementById('livros');

function exibirLivros(listaLivros) {
  listaLivros.forEach((livro) => {
    const disponibilidadeClasse = livro.quantidade <= 0 ? 'indisponivel' : '';
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
