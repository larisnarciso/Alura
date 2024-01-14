const elementoParaInserirLivros = document.getElementById('livros');
const disponibilidadeLivro = document.querySelectorAll('.livro_imagens');
const endpointAPI =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = [];

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const response = await fetch(endpointAPI);
  livros = await response.json();
  exibirLivros(livros);
}

function exibirLivros(listaLivros) {
  listaLivros.forEach((livro) => {
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src=${livro.imagem} alt=${livro.alt}/>
      <h2 class="livro__titulo">${livro.titulo}</h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;
  });
}
