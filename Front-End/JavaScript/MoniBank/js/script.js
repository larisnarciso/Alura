import ehUmCPF from './valida-cpf.js';
import ehMaiorDeIdade from './valida-idade.js';

const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');

// Adiciona um ouvinte de evento 'submit' ao formulário
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Cria um objeto com as respostas do formulário
  const listaRespostas = {
    nome: e.target.elements['nome'].value,
    email: e.target.elements['email'].value,
    rg: e.target.elements['rg'].value,
    cpf: e.target.elements['cpf'].value,
    aniversario: e.target.elements['aniversario'].value,
  };

  // Armazena as respostas do formulário no localStorage como JSON
  localStorage.setItem('cadastro', JSON.stringify(listaRespostas));

  // Redireciona para a próxima página do formulário
  window.location.href = './abrir-conta-form-2.html';
});

// Adiciona um ouvinte de evento 'blur' a cada campo do formulário
// Retira mensagem padrão do js
camposDoFormulario.forEach((campo) => {
  campo.addEventListener('blur', () => verificaCampo(campo));
  campo.addEventListener('invalid', (evento) => evento.preventDefault());
});

// Array contendo os tipos de erro possíveis durante a validação de um campo
const tiposDeErro = [
  'valueMissing', // Indica que o campo está vazio (nenhum valor presente).
  'typeMismatch', // Tipo de dado inserido não corresponde ao esperado (por exemplo, ao validar um e-mail).
  'patternMismatch', // Não atende ao padrão especificado, como em validações com regex.
  'tooShort', // O valor inserido é mais curto do que o mínimo permitido.
  'customError', // Erro personalizado definido pelo desenvolvedor para casos específicos.
];

// Objeto contendo mensagens de erro específicas para cada campo do formulário
const mensagens = {
  nome: {
    valueMissing: 'O campo de nome não pode estar vazio.',
    patternMismatch: 'Por favor, preencha um nome válido.',
    tooShort: 'Por favor, preencha um nome válido.',
  },
  email: {
    valueMissing: 'O campo de e-mail não pode estar vazio.',
    typeMismatch: 'Por favor, preencha um email válido.',
    tooShort: 'Por favor, preencha um e-mail válido.',
  },
  rg: {
    valueMissing: 'O campo de RG não pode estar vazio.',
    patternMismatch: 'Por favor, preencha um RG válido.',
    tooShort: 'O campo de RG não tem caractéres suficientes.',
  },
  cpf: {
    valueMissing: 'O campo de CPF não pode estar vazio.',
    patternMismatch: 'Por favor, preencha um CPF válido.',
    customError: 'O CPF digitado não existe.',
    tooShort: 'O campo de CPF não tem caractéres suficientes.',
  },
  aniversario: {
    valueMissing: 'O campo de data de nascimento não pode estar vazio.',
    customError: 'Você deve ser maior que 18 anos para se cadastrar.',
  },
  termos: {
    valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  },
};

/**
 * Função que verifica o campo quando ocorre o evento 'blur' (perda de foco).
 * @param {HTMLInputElement} campo - O campo de formulário a ser verificado.
 */
function verificaCampo(campo) {
  let mensagem = '';

  // Limpa qualquer mensagem de validação customizada previamente definida
  campo.setCustomValidity('');

  // Verifica se o campo é referente ao CPF e possui pelo menos 11 caracteres
  if (campo.name === 'cpf' && campo.value.length >= 11) ehUmCPF(campo);

  // Verifica se o campo é referente à data de aniversário e não está vazio
  if (campo.name === 'aniversario' && campo.value !== '') ehMaiorDeIdade(campo);

  // Itera sobre os tipos de erro e verifica se algum deles está presente no campo
  // Atribui a mensagem de erro correspondente ao tipo de erro encontrado
  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) mensagem = mensagens[campo.name][erro];
  });

  // Seleciona o elemento de mensagem de erro associado ao campo
  const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');

  // Verifica se o campo é inválido e exibe a mensagem de erro correspondente
  if (!campo.checkValidity()) mensagemErro.textContent = mensagem;
  else mensagemErro.textContent = ''; // Limpa a mensagem de erro se o campo for válido
}
