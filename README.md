# Descrição do Frontend Museu 📃

O frontend da API Museu é uma aplicação web desenvolvida para oferecer uma
interface amigável e intuitiva para os usuários interagirem com os recursos
disponíveis no backend. Este frontend é projetado para permitir que os usuários
realizem tarefas como cadastro de visitantes, confirmação de visitas e
visualização de dados estatísticos por meio de uma dashboard restrita.

## Tecnologias Utilizadas 🛠️

- **React.js com Typescript ⚛️**: Utilizado para desenvolver uma aplicação de
  página única (SPA) eficiente e escalável, combinando a poderosa biblioteca
  React.js com a segurança e tipagem estática proporcionadas pelo Typescript.
  Essa combinação permite uma codificação mais robusta e confiável, garantindo
  um desenvolvimento mais fluido e de fácil manutenção.
- **Styled-Components: 🎨** Para criar componentes de estilo com possibilidade de
  inserir propriedades personalizadas.
- **React Router: 🗺️** Para controlar a navegação na aplicação, permitindo que os usuários acessem diferentes páginas de forma dinâmica.
- **React Context API 🈸** Utilizando os contextos de forma dinamica para utilização de dados especificos em pontos diferentes da aplicação.
- **Axios:** Para fazer requisições HTTP para o backend e interagir com a API
  Museu de forma assíncrona.
- **Prime-React: 🖲️** Para criar uma interface de usuário responsiva e
  esteticamente agradável, com componentes pré-projetados que podem ser
  utilizados em combinação com o tailwind css que ja vem integrado de forma
  nativa com a biblioteca.

## Funcionalidades Principais 💫

### 1. Cadastro de Visitantes 💾

O frontend permite que os usuários preencham um formulário para cadastrar novos
visitantes. Os campos necessários incluem informações pessoais, como nome,
e-mail, cpf e telefone.

### 2. Confirmação de Visita ✅

Usuários já cadastrados podem confirmar sua visita por meio de uma
funcionalidade dedicada, fornecendo as informações necessárias para a
confirmação, como o número do visitante ou e-mail.

### 3. Dashboard Restrita 📈

A dashboard restrita é acessível apenas por usuários autenticados. Nela, os
usuários podem visualizar dados estatísticos, relatórios e informações
importantes sobre as visitas ao museu. Essa dashboard é projetada para fornecer
insights valiosos aos administradores do museu.

## Requisitos de Autenticação 🔏

Para acessar as funcionalidades avançadas, como a confirmação de visitas e a
visualização da dashboard restrita, os usuários devem autenticar-se por meio de
um sistema de autenticação baseado em tokens JWT. Isso garante a segurança dos
dados e a integridade do sistema.

## Integração com o Backend 🔗🚡

O frontend se comunica com o backend por meio de requisições HTTP, utilizando a
API Museu fornecida pelo backend para realizar operações como cadastro de
visitantes e acesso à dashboard restrita. O backend fornece os dados necessários
para a construção da interface do usuário e processa as ações dos usuários de
acordo com as regras de negócio definidas.

para entender melhor como as regras de negocio estão definidas, acesse a documentação da API e veja as regras de negocio implementadas nesta aplicação!

Link do Repositorio da API: [aqui](https://github.com/DavidBrito32/registro-visitors-backend)