// Declaração de variáveis
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');

// Recupera as tarefas armazenadas localmente ou inicializa uma lista vazia
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Função para criar a representação visual de uma tarefa
function criarElementoTarefa(tarefa) {
  // Cria um elemento de lista
  const li = document.createElement('li');
  li.classList.add('app__section-task-list-item');

  // Cria um ícone de status para a tarefa
  const svg = document.createElement('svg');
  svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
      <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg> 
  `;

  // Cria um parágrafo para a descrição da tarefa
  const paragrafo = document.createElement('p');
  paragrafo.textContent = tarefa.descricao;
  paragrafo.classList.add('app__section-task-list-item-description');

  // Cria um botão de edição
  const botao = document.createElement('button');
  botao.classList.add('app_button-edit');

  // Cria uma imagem para o botão de edição
  const imagemBotao = document.createElement('img');
  imagemBotao.setAttribute('src', 'imagens/edit.png');

  // Adiciona a imagem ao botão
  botao.append(imagemBotao);

  // Adiciona os elementos à lista
  li.append(svg);
  li.append(paragrafo);
  li.append(botao);

  return li;
}

// Adiciona um ouvinte de evento para mostrar/ocultar o formulário de adição de tarefas
btnAdicionarTarefa.addEventListener('click', () => {
  formAdicionarTarefa.classList.toggle('hidden');
});

// Adiciona um ouvinte de evento para tratar o envio do formulário de adição de tarefas
formAdicionarTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

  // Cria um objeto de tarefa com a descrição do textarea
  const tarefa = {
    descricao: textarea.value,
  };

  // Adiciona a nova tarefa à lista de tarefas
  tarefas.push(tarefa);

  // Cria o elemento visual da tarefa e adiciona à lista na interface
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);

  // Atualiza as tarefas armazenadas localmente
  localStorage.setItem('tarefas', JSON.stringify(tarefas));

  // Limpa o conteúdo do textarea
  textarea.value = '';

  // Oculta o formulário de adição de tarefas
  formAdicionarTarefa.classList.add('hidden');
});

// Percorre a lista de tarefas existentes e adiciona os elementos visuais à interface
tarefas.forEach((tarefa) => {
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
});
