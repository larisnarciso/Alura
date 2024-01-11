const containerVideos = document.querySelector('.videos__container');

/* A constante API está sendo atribuída à chamada da função fetch, que realiza uma requisição para a URL 'http://localhost:3000/videos'
e retorna uma Promise. O método then() é encadeado para lidar com a resposta da requisição, convertendo-a para JSON através
do método response.json(). Assim, a constante API representa a Promise resultante da requisição assíncrona para obter dados de vídeos. */
const API = fetch('http://localhost:3000/videos').then((response) =>
  response.json().then((videos) => {
    videos.forEach((video) => {
      containerVideos.innerHTML += `
      <li class='videos__item'>
        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class='descricao-video'>
          <img class='img-canal' src='${video.imagem} alt='Logo do Canal'>
          <h3 class='titulo-video'>${video.titulo}</h3>
          <p class='titulo-canal'>${video.descricao}<p/>
        </div>
      </li>
      `;
    });
  })
);
