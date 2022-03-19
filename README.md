# Teste BackEnd Mercafacil - por Pedro Aroucha(@pedr0aroucha)

### Algumas consideraçẽs

- Aplicação desenvolvida com Node.JS na versão 17.7.1
- Todo o código fonte está na pasta src
- Todos os testes estão na pasta \_\_tests\_\_

### Testando a aplicação

Para rodar todos os testes execute `chmod +x _test.sh && ./_test.sh`

### Executando a aplicação(Com docker)

Para executar a aplicação execute `chmod +x _start.sh && ./_start.sh`

## Tests
- Deve estar conectada a dois bancos de dados(`MySQL` e `PostgreSQL`)
- Deve ser possível fazer login(De onde vem as credenciais ?)
- Deve retornar um `token` ao fazer login com as credenciais corretas
- Deve retornar um erro ao fazer login com as credenciais erradas
- Deve receber uma lista de contatos na rota do tipo `POST` `macapa/newCliente` passando o `token` no `header`
- Deve receber uma lista de contatos na rota do tipo `POST` `varejao/newCliente` passando o `token` no `header`
- Deve retornar um erro ao tentar cadastrar novos contatos sem o `token`