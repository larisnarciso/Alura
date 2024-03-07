import { clienteService } from '../service/cliente-service.js';

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');
const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');
const formulario = document.querySelector('[data-form]');

async function carregarDadosCliente() {
  try {
    const dados = await clienteService.exibeDadosCliente(id);
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
  } catch (error) {
    console.error(error);
  }
}

carregarDadosCliente();

formulario.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value);
    window.location.href = '../telas/edicao_concluida.html';
  } catch (error) {
    console.error(error);
  }
});
