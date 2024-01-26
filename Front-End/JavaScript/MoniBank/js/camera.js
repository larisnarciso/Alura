const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

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
