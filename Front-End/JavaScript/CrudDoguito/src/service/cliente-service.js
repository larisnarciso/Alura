const endpointAPI = `http://localhost:3000/profile`;

// Exporta uma função assíncrona chamada listaClientes que realiza uma requisição para o endpoint http://localhost:3000/profile.
// Aguarda a resposta do servidor e converte o corpo da resposta para o formato JSON.
// Retorna os dados JSON obtidos do servidor.
const listaClientes = async () => {
  const response = await fetch(endpointAPI);
  const json = await response.json();
  return json;
};

// Esta função assíncrona cria um novo cliente no servidor utilizando o método HTTP POST.
// Recebe o nome e o email do cliente como parâmetros.
// Faz uma requisição para o endpoint especificado pela variável 'endpointAPI'.
// Envia os dados do novo cliente no corpo da requisição em formato JSON.
// Aguarda a resposta do servidor e converte o corpo da resposta para o formato JSON.
// Retorna os dados do cliente criado, conforme a resposta do servidor.
const criaCliente = async (nome, email) => {
  const conexao = await fetch(endpointAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
};

export const clienteService = {
  listaClientes,
  criaCliente,
};
