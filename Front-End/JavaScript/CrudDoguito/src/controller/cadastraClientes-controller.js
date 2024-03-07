import { clienteService } from '../service/cliente-service.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nome = event.target.querySelector('[data-nome]').value;
  const email = event.target.querySelector('[data-email]').value;

  try {
    await clienteService.criaCliente(nome, email);
    window.location.href = '../telas/cadastro_concluido.html';
  } catch (error) {
    console.error(error);
  }
});
