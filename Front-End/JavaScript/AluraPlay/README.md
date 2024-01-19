# [AluraPlay](https://larisnarciso.github.io/Alura/Front-End/JavaScript/AluraPlay/index.html)

![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)

Projeto desenvolvido no curso de [JavaScript: criando requisições](https://cursos.alura.com.br/course/javascript-criando-requisicoes).

Para visualizar o projeto, click no link: [AluraPlay](https://larisnarciso.github.io/Alura/Front-End/JavaScript/AluraPlay/index.html)

## Descrição

O AluraPlay é uma plataforma de compartilhamento de vídeos, contendo header, barra de pesquisa, botão de inserção de novos vídeos. Neste projeto foi utilizada uma API.

- NodeJS e o json-server
- Mockar uma API
- Requisições GET e POST
- JavaScript assíncrono
- Funcionalidade de pesquisa
- Manipulação do DOM
- Tratar erros em requisições

## Instalação:

1. Clone o repositório.

```
https://github.com/larisnarciso/Alura.git
```

2. Instalando JSON Server.

```
npm install -g json-server
```

3. Permitindo política de execução de scripts (apenas Windows)
   Execute o seguinte comando para permitir a execução de scripts no seu computador:

```
Set-ExecutionPolicy RemoteSigned
```

Obs: é uma boa prática reverter a política de execução para o valor original para garantir a segurança do sistema

```
Set-ExecutionPolicy Restricted
```

4. Inicialização do JSON Server

```
json-server --watch backend/videos.json
```

5. Dentro da pasta /Front-End/JavaScript/AluraPlay abra o arquivo `index.html` no navegador.

## Tecnologias:

![JAVASCRIPT](https://img.shields.io/badge/javascript-%2320232a.svg?style=for-the-badge&logo=javascript&logoColor=%)
![NODEJS](https://img.shields.io/badge/nodejs-%2320232a.svg?style=for-the-badge&logo=nodejs&logoColor=%)
