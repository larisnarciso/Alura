// Seleciona o elemento HTML com a classe 'videos__container' e armazena na variável containerVideos
const containerVideos = document.querySelector('.videos__container');

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
