const containerVideos = document.querySelector('.videos__container');
const barraPesquisa = document.querySelector('.pesquisar__input');

// Define uma função assíncrona chamada buscarVideos
async function buscarVideos() {
  try {
    // Usa a função fetch para fazer uma requisição GET para 'http://localhost:3000/videos' e aguarda a resposta
    const response = await fetch('http://localhost:3000/videos');
    // Converte a resposta para JSON e armazena o resultado na variável videos
    const videos = await response.json();
    videos.forEach((video) => {
      if ((video.categoria = '')) throw new Error('Vídeo não tem categoria');
      // Adiciona conteúdo HTML ao containerVideos para cada vídeo no loop
      containerVideos.innerHTML += `
        <li class='videos__item'>
        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class='descricao-video'>
        <img class='img-canal' src='${video.imagem}' alt='Logo do Canal'>
        <h3 class='titulo-video'>${video.titulo}</h3>
        <p class='titulo-canal'>${video.descricao}</p>
        </div>
        </li>
        `;
    });
  } catch (err) {
    // Bloco de código a ser executado se uma exceção ocorrer
    containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${err}</p>`;
  }
}

// Chama a função buscarVideos para iniciar o processo de busca e exibição dos vídeos
buscarVideos();

barraPesquisa.addEventListener('input', filtrarPesquisa);

// Filtra os vídeos com base no texto inserido na barra de pesquisa.
function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');

  // Converte o valor da barra de pesquisa para minúsculas
  const valorFiltro = barraPesquisa.value.toLowerCase();

  // Itera sobre cada vídeo e verifica se o título do vídeo contém o valor da barra de pesquisa.
  videos.forEach((video) => {
    // Obtém o texto do título do vídeo
    const titulo = video
      .querySelector('.titulo-video')
      .textContent.toLowerCase();

    // Define a exibição do vídeo com base na correspondência do título com o valor da barra de pesquisa.
    // Se houver correspondência, exibe o vídeo ('block'); caso contrário, oculta ('none'). Se a barra de pesquisa estiver vazia, exibe todos os vídeos.
    video.style.display = valorFiltro
      ? titulo.includes(valorFiltro)
        ? 'block'
        : 'none'
      : 'block';
  });
}
