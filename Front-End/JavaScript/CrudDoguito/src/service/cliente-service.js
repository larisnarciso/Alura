// Exporta uma função assíncrona chamada listaClientes que realiza uma requisição para o endpoint http://localhost:3000/profile.
// Aguarda a resposta do servidor e converte o corpo da resposta para o formato JSON.
// Retorna os dados JSON obtidos do servidor.
const listaClientes = async () => {
  const response = await fetch(`http://localhost:3000/profile`);
  const json = await response.json();
  return json;
};

export const clienteService = {
  listaClientes,
};
