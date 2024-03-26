# [CookinUp]()

![CookinUp](CookinUp.png)

Projeto desenvolvido no curso de [Vue 3: entendendo componentes, diretivas e reatividade no framework](https://cursos.alura.com.br/course/vue-3-componentes-diretivas-reatividade-framework).

Para visualizar o projeto, click no link: [CookinUp](https://larisnarciso.github.io/Alura/Front-End/Vue/CookinUp/)

Para visualizar o protótipo no figma, click no link: [Figma](https://www.figma.com/file/0YlJl7HQ7flDoEZZ8tB88A/Cookin'UP-%7C-Vue-1?type=design&node-id=1901-2&mode=design)

## Descrição

O projeto CookinUp é uma ferramenta projetada para ajudar usuários a encontrar receitas com base nos ingredientes disponíveis em suas casas. Os usuários podem selecionar os ingredientes que possuem, como azeite de oliva, alho, orégano, ovos, queijo e leite, através de uma interface intuitiva de seleção de cards. Conforme os ingredientes são escolhidos, eles são exibidos em uma lista na parte superior da página, intitulada "Sua lista". Os usuários têm a flexibilidade de remover ingredientes da lista, se assim desejarem.

Após selecionar os ingredientes desejados, os usuários podem clicar no botão "Buscar receitas" para visualizar uma lista de receitas que podem ser preparadas com os ingredientes selecionados. Se necessário, os usuários podem clicar no botão "Editar lista" para realizar uma nova busca de receitas, adicionando ou removendo ingredientes conforme necessário.

O aplicativo CookinUp visa simplificar o processo de planejamento de refeições, oferecendo aos usuários uma maneira conveniente de encontrar e explorar receitas com base nos ingredientes disponíveis em suas despensas.

- Foi construido um projeto Vue do zero, entendendo os conceitos iniciais e criando os primeiros componentes, compreendendo sua finalidade e utilidade no desenvolvimento web moderno.
- Explorado diversas diretivas do Vue que otimizam o desenvolvimento, resolvendo problemas comuns de HTML e CSS, especialmente relacionados à repetição de código.
- Entendimento do que é estado e reatividade, fundamentais para a compreensão dos frameworks front-end e sua capacidade de atualizar automaticamente a interface do usuário em resposta a mudanças nos dados.
- Implementado comunicação entre componentes, utilizando props e eventos, resolvendo desafios típicos encontrados no desenvolvimento com frameworks front-end.
- Explorado os métodos do ciclo de vida do Vue, com foco especial no método Created, compreendendo como e quando utilizar esses recursos importantes.

## Instalação:

1. Clone o repositório.

```
https://github.com/larisnarciso/Alura.git
```

2. Abra a pasta /Front-End/Vue/CookinUp no vscode

3. Caso não tenha o Nodejs, baixe-o.

- Windows:

```
 https://nodejs.org/en/download/current
```

- Linux:

```
 sudo apt update
 sudo apt install nodejs
```

4. É utilizado o json-server para simular um servidor e consumir os dados. Para instalar:

```
npm install
```

5. Inicializar o servidor:

```
json-server --watch db.json
```

6. Dentro da pasta /Front-End/JavaScript/CrudCookinUp/src/telas/ abra o arquivo lista_cliente.html no navegador.

## Tecnologias:

![VUE3](https://img.shields.io/badge/Vue.js-%2320232a.svg?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
