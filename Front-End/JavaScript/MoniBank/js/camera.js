const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
let imagemURL = '';

// Adiciona um ouvinte de evento 'click' ao botão de iniciar a câmera
botaoIniciarCamera.addEventListener('click', async function () {
  // Solicita permissão para acessar a câmera
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  // Esconde o botão de iniciar a câmera e exibe o campo da câmera
  botaoIniciarCamera.style.display = 'none';
  campoCamera.style.display = 'block';

  // Configura o objeto de mídia do elemento de vídeo para iniciar o vídeo da câmera
  video.srcObject = iniciarVideo;
});

// Adiciona um ouvinte de evento 'click' ao botão de tirar foto
botaoTirarFoto.addEventListener('click', function () {
  // Captura a imagem do vídeo e desenha no contexto 2D do canvas
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  // Converte o conteúdo do canvas para uma URL de imagem no formato JPEG
  imagemURL = canvas.toDataURL('image/jpeg');

  // Esconde o campo da câmera e exibe a mensagem
  campoCamera.style.display = 'none';
  mensagem.style.display = 'block';
});
