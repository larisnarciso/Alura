/**
 * Função principal que verifica se o valor de um campo representa um número de CPF válido.
 * @param {HTMLInputElement} campo - O campo de entrada HTML contendo o valor do CPF.
 */
export default function ehUmCPF(campo) {
  // Remover pontos e traços do valor do CPF para facilitar a validação
  const cpf = campo.value.replace(/\.|-/g, '');
  if (
    validaNumerosRepetidos(cpf) ||
    validaPrimeiroDigito(cpf) ||
    validaSegundoDigito(cpf)
  )
    console.log('Esse CPF não existe');
  else console.log('Esse CPF existe');
}

/**
 * Função auxiliar que verifica se o CPF possui números repetidos.
 * @param {string} cpf - O número de CPF sem pontos e traços.
 * @returns {boolean} - Retorna true se o CPF contiver números repetidos, caso contrário, retorna false.
 */
function validaNumerosRepetidos(cpf) {
  const numeroRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];
  return numeroRepetidos.includes(cpf); // Verifica se o CPF está na lista de números repetidos
}

/**
 * Função auxiliar que valida o primeiro dígito do CPF.
 * @param {string} cpf - O número de CPF sem pontos e traços.
 * @returns {boolean} - Retorna true se o primeiro dígito for válido, caso contrário, retorna false.
 */
function validaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;

  return soma != cpf[9];
}

/**
 * Função auxiliar que valida o segundo dígito do CPF.
 * @param {string} cpf - O número de CPF sem pontos e traços.
 * @returns {boolean} - Retorna true se o segundo dígito for válido, caso contrário, retorna false.
 */
function validaSegundoDigito(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for (let tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;

  return soma != cpf[10];
}
