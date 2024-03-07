// Definição do endpoint da API
const endpointAPI = `http://localhost:3000/profile`;

// Função de utilitário para fazer uma requisição genérica e converter a resposta para JSON
const fetchJSON = async (url, options) => {
  const response = await fetch(url, options);
  const jsonResponse = await response.json();
  return jsonResponse;
};

// Função assíncrona para fazer uma requisição GET
const getFromAPI = async (url) => {
  return await fetchJSON(url);
};

// Função assíncrona para fazer uma requisição POST
const postToAPI = async (url, data) => {
  return await fetchJSON(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
};

// Função assíncrona para fazer uma requisição PUT
const putToAPI = async (url, data) => {
  return await fetchJSON(url, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
};

// Função assíncrona para fazer uma requisição DELETE
const deleteFromAPI = async (url) => {
  return await fetchJSON(url, { method: 'DELETE' });
};

// Objeto que exporta as funções
export const clienteService = {
  listaClientes: () => getFromAPI(endpointAPI),
  criaCliente: (nome, email) => postToAPI(endpointAPI, { nome, email }),
  removeCliente: (id) => deleteFromAPI(`${endpointAPI}/${id}`),
  exibeDadosCliente: (id) => getFromAPI(`${endpointAPI}/${id}`),
  atualizaCliente: (id, nome, email) =>
    putToAPI(`${endpointAPI}/${id}`, { nome, email }),
};
