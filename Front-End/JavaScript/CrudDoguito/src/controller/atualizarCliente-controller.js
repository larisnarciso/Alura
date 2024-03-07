import { clienteService } from '../service/cliente-service.js';

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');
const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');
const formulario = document.querySelector('[data-form]');

clienteService.exibeDadosCliente(id).then((dados) => {
  inputNome.value = dados.nome;
  inputEmail.value = dados.email;
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  clienteService
    .atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
      window.location.href = '../telas/edicao_concluida.html';
    });
});
