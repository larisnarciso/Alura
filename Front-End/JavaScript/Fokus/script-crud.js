// encontrar o botão adicionar tarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');
const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
  formAdicionarTarefa.classList.toggle('hidden'); // mostrar/ocultar nova tarefa
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault(); // evitar que paginas recarregue
  const tarefa = {
    descricao: textarea.value,
  };
  tarefas.push(tarefa); // coloca a tarefa dentro da lista de tarefas
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
});
