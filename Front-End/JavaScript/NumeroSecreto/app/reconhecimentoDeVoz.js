// Obter referência ao elemento HTML com o ID 'chute'
const elementoChute = document.getElementById('chute');

// Verificar se a API de reconhecimento de fala é suportada pelo navegador
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// Criar uma instância de reconhecimento de fala
const recognition = new SpeechRecognition();

// Definir o idioma para reconhecimento como 'pt-Br'
recognition.lang = 'pt-Br';

// Iniciar o reconhecimento de fala
recognition.start();

// Lida com os resultados do reconhecimento de fala
recognition.addEventListener('result', onSpeak);

// Função chamada quando ocorre um evento de reconhecimento de fala
function onSpeak(e) {
  // Obter o texto transcrito a partir dos resultados
  const chute = e.results[0][0].transcript;

  // Exibir o chute na tela
  exibeChuteNaTela(chute);

  // Verificar se o chute é válido
  verificacaoValida(chute);
}

// Função para exibir o chute na tela
function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse: </div>
    <span class='box'> ${chute}</span>`;
}

// Reinicia o reconhecimento de fala quando termina
recognition.addEventListener('end', () => recognition.start());
