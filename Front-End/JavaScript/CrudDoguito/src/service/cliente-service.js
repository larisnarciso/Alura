// Definição do endpoint da API
const endpointAPI = `http://localhost:3000/profile`;

// Função assíncrona que busca e lista os clientes da API
const listaClientes = async () => {
  // Faz uma requisição GET para o endpoint da API
  const conexao = await fetch(endpointAPI);
  // Aguarda a resposta do servidor e converte o corpo da resposta para JSON
  const conexaoConvertida = await conexao.json();
  // Retorna os dados JSON obtidos do servidor
  return conexaoConvertida;
};

// Função assíncrona para criar um novo cliente na API
const criaCliente = async (nome, email) => {
  // Faz uma requisição POST para o endpoint da API, enviando os dados do novo cliente
  const conexao = await fetch(endpointAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    // Converte os dados do novo cliente para o formato JSON e envia no corpo da requisição
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  });
  // Aguarda a resposta do servidor e converte o corpo da resposta para JSON
  const conexaoConvertida = await conexao.json();
  // Retorna os dados do cliente criado conforme a resposta do servidor
  return conexaoConvertida;
};

// Função assíncrona para remover um cliente na API
const removeCliente = async (id) => {
  // Faz uma requisição DELETE para o endpoint específico do cliente na API
  const conexao = await fetch(`${endpointAPI}/${id}`, {
    method: 'DELETE',
  });
  // Aguarda a resposta do servidor e converte o corpo da resposta para JSON
  const conexaoConvertida = await conexao.json();
  // Retorna os dados da remoção do cliente conforme a resposta do servidor
  return conexaoConvertida;
};

// Função assíncrona para editar um cliente na API
const exibeDadosCliente = async (id) => {
  // Faz uma requisição GET para o endpoint específico do cliente na API
  const conexao = await fetch(`${endpointAPI}/${id}`);
  // Aguarda a resposta do servidor e converte o corpo da resposta para JSON
  const conexaoConvertida = await conexao.json();
  // Retorna os dados do cliente conforme a resposta do servidor
  return conexaoConvertida;
};

const atualizaCliente = async (id, nome, email) => {
  const conexao = await fetch(`${endpointAPI}/${id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
};

// Objeto que exporta as funções
export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  exibeDadosCliente,
  atualizaCliente,
};
