# Debts Manager

### Passos para acessar

1. Para rodar a api, digite o seguinte comando no terminal:
`yarn start` ou `npm run start`

1. Para rodar o frontend, digite o seguinte comando no terminal:
`yarn start` ou `npm run start`

Agora é só acessar o projeto na rota http://localhost:3000/

#### Rotas da API

- **GET /debts**: Essa rota deve retornar uma listagem com todas as dívidas da aplicação.

`
{
    "success": true,
    "debts": [
        {
            "id": 1,
            "description": "teste",
            "value": 10,
            "date": null,
            "user_id": 1,
        }
]`

- **POST /debts**: A rota deve receber: description, value, date, e user_id para criar uma nova dívida.

- **PUT /debts**: A rota deve receber: description, value, date, e user_id para atualizar os dados da dívida.


- **DELETE /debts/:id**: A rota deve receber apenas o id da dívida passando o mesmo pela url, para excluír uma dívida.
