/**
 * Função principal que verifica se a data de nascimento representa uma pessoa maior de idade.
 * @param {HTMLInputElement} campo - O campo de entrada HTML contendo a data de nascimento.
 */
export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  validadeIdade(dataNascimento); // Chama a função auxiliar para verificar a validade da idade
  console.log(validadeIdade(dataNascimento)); // Exibe o resultado no console
}

/**
 * Função auxiliar que verifica se a data representa uma pessoa maior de idade (18 anos ou mais).
 * @param {Date} data - A data de nascimento a ser verificada.
 * @returns {boolean} - Retorna true se a pessoa for maior de idade, caso contrário, retorna false.
 */
function validadeIdade(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );
  return dataAtual >= dataMais18; // Retorna verdadeiro se a pessoa for maior de idade
}
