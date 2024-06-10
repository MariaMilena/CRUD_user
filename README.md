# API de gerenciamento de usuários

Este projeto é uma API RESTful construída com Node.js e Express.js para gerenciar informações de usuários. A API permite as seguintes operações:

- Criar um novo usuário
- Listar todos os usuários
- Obter um usuário específico pelo ID
- Atualizar as informações de um usuário existente
- Deletar um usuário

## Pré-requisitos

- Node.js 
- npm

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/MariaMilena/CRUD_user.git
    cd CRUD_user
    ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando no terminal do Visual Studio Code ou no prompt de comando (certifique-se de estar dentro da pasta do projeto):

```bash
node src/index.js
```

## Testando a API

Você pode usar ferramentas como Postman ou Insomnia para testar os endpoints da API.

## Endpoints da API

- Criar Usuário

  - URL: http://localhost:3000/users

  - Método: `POST`

  - Corpo da Requisição:
    
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 25
    }
    ```
    
  - Resposta de Sucesso:
    ```json
    {
      "id": "UUID",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 25
    }
    ```

- Listar Usuários

  - URL: http://localhost:3000/users

  - Método: `GET`
 
  - Resposta de Sucesso:
    ```json
    [
      {
        "id": "UUID",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 25
      }
    ]
    ```
- Obter Usuário por ID

  - URL: http://localhost:3000/users/${id}

  - Método: `GET`

  - Resposta de Sucesso:
    ```json
    {
      "id": "UUID",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 25
    }

- Atualizar Usuário

  - URL: http://localhost:3000/users/${id}

  - Método: `PUT`
 
  - Corpo da Requisição:
    
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 26
    }
    ```
    
  - Resposta de Sucesso:
    ```json
    {
      "id": "UUID",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 26
    }
    ```

- Deletar Usuário

  - URL: http://localhost:3000/users/${id}

  - Método: `DELETE`
    
  - Resposta de Sucesso: `204 No Content`
