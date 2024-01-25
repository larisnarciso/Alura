// Importa a função ehUmCPF do módulo valida-cpf.js
import ehUmCPF from './valida-cpf.js';

// Seleciona todos os campos do formulário marcados como obrigatórios
const camposDoFormulario = document.querySelectorAll('[required]');

// Adiciona um ouvinte de evento 'blur' a cada campo do formulário
camposDoFormulario.forEach((campo) => {
  campo.addEventListener('blur', () => verificaCampo(campo));
});

/**
 * Função que verifica o campo quando ocorre o evento 'blur' (perda de foco).
 * @param {HTMLInputElement} campo - O campo de formulário a ser verificado.
 */
function verificaCampo(campo) {
  // Verifica se o campo é referente ao CPF e possui pelo menos 11 caracteres
  if (campo.name == 'cpf' && campo.value.length >= 11) {
    // Chama a função ehUmCPF para validar o CPF
    ehUmCPF(campo);
  }
}
