# Teste BackEnd Mercafacil

Por __*Pedro Aroucha(@pedr0aroucha)*__

<hr>

## Algumas consideraçẽs

- Aplicação desenvolvida com Node.JS na versão 17.7.1
- Todo o código fonte está na pasta src
- Todos os testes estão na pasta \_\_tests\_\_
- É preferencial que o S.O para executar a API seja do tipo unix(Linux, MacOS, ...)

## Testando a aplicação

`$ chmod +x _test.sh && ./_test.sh`

## Executando a aplicação(Com docker)

`$ chmod +x _start.sh && ./_start.sh`

## Executando a aplicação(Sem docker)

`$ npm i && npm start`


# Sobre a API

### `POST`

`http://localhost:8080/login`

Corpo da requisição:
```json
{
    "username": "admin",
    "password": "admin"
}
```
Resposta da requisição:
```json
{
    "token": "<token>"
}
```

<hr>

### `GET`

`http://localhost:8080/contats/<client>`(macapa ou varejao)

Resposta da requisição:
```json
[
	{
		"id": 1,
		"name": "Pedro Aroucha",
		"cellphone": "+55 (62) ****-****"
	}
]
```
<hr>

### `POST`

`http://localhost:8080/contats/<client>`(macapa ou varejao)

Corpo da requisição:
```json
{
    "contacts": [
        {
            "name": "Pedro Aroucha",
            "cellphone": "5562********"
        },
    ]
}
```
Resposta da requisição:
```json
{
    "contacts": [
        {
            "name": "Pedro Aroucha",
            "cellphone": "5562********"
        },
    ]
}
```

<hr>

## Tests
- Deve ser possível fazer login(usuário e senha padrão é 'admin')
- Deve retornar um `token` ao fazer login com as credenciais corretas
- Deve retornar um erro ao fazer login com as credenciais erradas
- Deve salvar no banco ao receber uma lista de contatos na rota do tipo `POST` `contacts/macapa` passando o `token` no `header`
- Deve salvar no banco ao receber uma lista de contatos na rota do tipo `POST` `contacts/varejao` passando o `token` no `header`
- Deve retornar um erro ao tentar cadastrar novos contatos sem o `token`
- Deve listar todos os contatos de cada client