import { clienteService } from '../service/cliente-service.js';

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr');
  linhaNovoCliente.innerHTML = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
      <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
    </td>`;
  linhaNovoCliente.dataset.id = id;
  return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (event) => {
  if (event.target.classList.contains('botao-simples--excluir')) {
    const linhaCliente = event.target.closest('[data-id]');
    const id = linhaCliente.dataset.id;
    try {
      await clienteService.removeCliente(id);
      linhaCliente.remove();
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  }
});

const adicionarClientesNaTabela = async (clientes) => {
  for (const { nome, email, id } of clientes) {
    tabela.appendChild(criaNovaLinha(nome, email, id));
  }
};

try {
  const clientes = await clienteService.listaClientes();
  await adicionarClientesNaTabela(clientes);
} catch (error) {
  console.error('Erro ao carregar clientes:', error);
}
