# Macedo Monteiro Backend :office:

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

API da implementação do sistema da Macedo Monteiro.

Essa API requer requer [Node.js](https://nodejs.org/) para funcionar.

Instale as dependências e inicie o servidor.

```
$ yarn install
$ yarn start
```

No presente momento, esta aplicação permite as seguintes operações nas rotas a seguir:

- [Usuários](#usuário) :information_desk_person:
- [Ativos](#ativos) :house:
- [Pendências](#pendências) :clock3:
- [Chat das Pendências](#chat-das-pendências) :speech_balloon:
- [Contas a Receber](#contas-a-receber) :moneybag:
- [Contas a Pagar](#contas-a-pagar) :dollar:
- [Clientes](#clientes) :woman:

### :heavy_exclamation_mark: Parâmetros marcados com `*` são obrigatórios :heavy_exclamation_mark:

## Usuário

### Cadastro

#### Request

`POST /register`
|Parâmetros|Descrição|Tipo|
|-|-|-|
|nome*|Nome do usuário|String|
|email*|Email do usuário|String|
|senha|Senha do usuário|String|
|representacao*|Quanto o usuário possui da empresa|Number|
|cotas*|Número de cotas do usuário|Number|

#### Response

```
{
  "user": {
    "_id": "5f62595304efd62cac59711a",
    "nome": "Teste",
    "email": "email@email.com",
    "senha": "$2a$10$BW3RCx77uSCo.XJKTNaLD.4IQljXEarAB4D1LxeIIxUe8Zj4WojiK",
    "representacao": 10,
    "cotas": 10000,
    "codigo": 1,
    "__v": 0
  }
}
```

### Login

`POST /login`

#### Request

| Parâmetros | Descrição        | Tipo   |
| ---------- | ---------------- | ------ |
| email\*    | Email do usuário | String |
| senha\*    | Senha do usuário | String |

#### Response

```
{
  "user": {
    "_id": "5f62594a04efd62cac597118",
    "nome": "Teste",
    "email": "email@email.com",
    "representacao": 10,
    "cotas": 10000,
    "codigo": 1,
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjI1OTRhMDRlZmQ2MmNhYzU5NzExOCIsImlhdCI6MTYwMDI4MTcxN30.W9OaDPf0m7SJ8bAzWOR3Z-4TPyU554crVAMhRlAgGbc"
}
```

### Receber usuário

`GET /user`

#### Request

| Parâmetros | Descrição     | Tipo   |
| ---------- | ------------- | ------ |
| id\*       | Id do usuário | String |

#### Response

```
{
  "user": {
    "_id": "5f60b21c6e27ef0c84454de9",
    "nome": "Teste",
    "email": "email@email.com",
    "codigo": 1,
    "__v": 0
  }
}
```

### Receber todos os usuários

`GET /todos/user`

#### Response

```
{
  "res": [
    {
      "_id": "5f63783a1f151623106ec4c2",
      "nome": "Teste1",
      "email": "teste1@email.com",
      "senha": "$2a$10$VGiTd40itlZXX6uoQ1aZAO6MUsSOePTfxaP6idReBxG7qSpXfAWIu",
      "representacao": 10,
      "cotas": 10000,
      "codigo": 0,
      "__v": 0
    },
    {
      "_id": "5f6378921f151623106ec4c3",
      "nome": "Teste2",
      "email": "teste2@email.com",
      "senha": "$2a$10$Ypv8xmxaPj4pb.QlFJRp1urR.I0w1HQPEGp3aIwDjiIn.MPJULWQy",
      "representacao": 10,
      "cotas": 10000,
      "codigo": 1,
      "__v": 0
    }
  ]
}
```

### Mudança de senha

`PUT /user`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição     | Tipo   |
| ---------- | ------------- | ------ |
| Id\*       | Id do usuário | String |
| senha\*    | Nova senha    | String |

#### Response

```
{
  "res": {
    "_id": "5f60b21c6e27ef0c84454de9",
    "nome": "Teste",
    "email": "email@email.com",
    "codigo": 0,
    "__v": 0
  }
}
```

## Ativos

### Cadastro

#### Request

`POST /ativos`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros         | Descrição                           | Tipo                                                             |
| ------------------ | ----------------------------------- | ---------------------------------------------------------------- |
| apelido            | Apelido do ativo                    | String                                                           |
| endereco\*         | Endereço do ativo                   | String                                                           |
| bairro\*           | Bairro do ativo                     | String                                                           |
| cep                | CEP do ativo                        | Number                                                           |
| municipio\*        | Município do ativo                  | String                                                           |
| coordenadas        | Latitude e longitude do ativo       | [Number] -> `[lat, long]`                                        |
| disponibilidade    | Disponibilidade do ativo            | String -> `("aluguel","venda","aluguel e venda","indisponivel")` |
| titular            | Dono do imóvel perante ao requisito | String                                                           |
| valor              | Valor do imóvel                     | Number                                                           |
| sku\*              | SKU do imóvel                       | String                                                           |
| inscricao          | ID do IPTU                          | String                                                           |
| dataAquisicao      | Data de aquisição                   | Date                                                             |
| valorMatricula     | Valor de negociação do imóvel       | Number                                                           |
| area               | Área do imóvel                      | String                                                           |
| valor IPTU         | Precificação do imóvel              | Number                                                           |
| mercado            | Precificação do imóvel a mercado    | Number                                                           |
| nomeMatricula      | Proprietário na matrícula           | String                                                           |
| nomeIPTU           | Proprietário no IPTU                | String                                                           |
| escritura          | Proprietário na escritura           | String                                                           |
| cartorioDeRegistro | Local de registro da escritura      | String                                                           |
| observacao         | Observações a mais                  | String                                                           |

#### Response

```
{
  "ativo": {
    "_id": "5f620b714b97ff3284a1172d",
    "endereco": "Algum endereço",
    "bairro": "Algum bairro",
    "municipio": "Fortaleza",
    "sku": "783231232",
    // se foram passados mais parâmetros, eles constarão aqui
    "__v": 0
  }
}
```

### Edição

#### Request

`PUT /ativos`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros         | Descrição                           | Tipo                                                             |
| ------------------ | ----------------------------------- | ---------------------------------------------------------------- |
| id\*               | Id do ativo                         | String                                                           |
| apelido            | Apelido do ativo                    | String                                                           |
| endereco           | Endereço do ativo                   | String                                                           |
| bairro             | Bairro do ativo                     | String                                                           |
| cep                | CEP do ativo                        | Number                                                           |
| municipio          | Município do ativo                  | String                                                           |
| coordenadas        | Latitude e longitude do ativo       | [Number] -> `[lat, long]`                                        |
| disponibilidade    | Disponibilidade do ativo            | String -> `("aluguel","venda","aluguel e venda","indisponivel")` |
| titular            | Dono do imóvel perante ao requisito | String                                                           |
| valor              | Valor do imóvel                     | Number                                                           |
| sku                | SKU do imóvel                       | String                                                           |
| inscricao          | Id do IPTU                          | String                                                           |
| dataAquisicao      | Data de aquisição                   | Date                                                             |
| valorMatricula     | Valor de negociação do imóvel       | Number                                                           |
| area               | Área do imóvel                      | String                                                           |
| valor IPTU         | Precificação do imóvel              | Number                                                           |
| mercado            | Precificação do imóvel a mercado    | Number                                                           |
| nomeMatricula      | Proprietário na matrícula           | String                                                           |
| nomeIPTU           | Proprietário no IPTU                | String                                                           |
| escritura          | Proprietário na escritura           | String                                                           |
| cartorioDeRegistro | Local de registro da escritura      | String                                                           |
| observacao         | Observações a mais                  | String                                                           |

#### Response

```
{
  "ativo": {
	 "_id": "5f620b714b97ff3284a1172d",
     "coordenadas": [
      23,
      -1
    ],
    "endereco": "Outro endereço",
    "bairro": "Algum bairro",
    "municipio": "Fortaleza",
    "sku": "783231232",
    // se foram passados mais parâmetros, eles constarão aqui
    "__v": 0
  }
}
```

### Receber ativo

`GET /ativos`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição   | Tipo   |
| ---------- | ----------- | ------ |
| id\*       | Id do ativo | String |

#### Response

```
{
  "ativo": {
	 "_id": "5f620b714b97ff3284a1172d",
     "coordenadas": [
      23,
      -1
    ],
    "endereco": "Outro endereço",
    "bairro": "Algum bairro",
    "municipio": "Fortaleza",
    "sku": "783231232",
    // se foram passados mais parâmetros, eles constarão aqui
    "__v": 0
  }
}
```

### Deletar ativo

`DELETE /ativos`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição   | Tipo   |
| ---------- | ----------- | ------ |
| id\*       | Id do ativo | String |

#### Response

```
{
  "ativo": {
	 "_id": "5f620b714b97ff3284a1172d",
     "coordenadas": [
      23,
      -1
    ],
    "endereco": "Outro endereço",
    "bairro": "Algum bairro",
    "municipio": "Fortaleza",
    "sku": "783231232",
    // se foram passados mais parâmetros, eles constarão aqui
    "__v": 0
  }
}
```

### Receber todos os ativos

`GET /todos/ativos`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

#### Response

```
{
  "res": [
    {
      "_id": "5f61f8cb77cd233f6c75b008",
      "endereco": "Endereço 1",
      "bairro": "Bairro 1",
      "municipio": "Fortaleza",
      "sku": "43783245632",
      "__v": 0
    },
    {
      "_id": "5f61f9818dfac40af84c06d6",
      "endereco": "Endereço 2",
      "bairro": "Bairro 2",
      "municipio": "Fortaleza",
      "sku": "7832456032",
      "__v": 0
    }
  ]
}
```

## Pendências

### Cadastro

#### Request

`POST /pendencias`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros    | Descrição                     | Tipo                                |
| ------------- | ----------------------------- | ----------------------------------- |
| solicitante\* | Nome do que criou a pendência | String                              |
| assunto\*     | Assunto da pendência          | String                              |
| opcao\*       | Opção de voto                 | String -> `("um, "dois, "oitenta")` |
| chat\*        | Mensagem da pendência         | [Object]                            |

#### \* Chat

| Parâmetros | Descrição              | Tipo   |
| ---------- | ---------------------- | ------ |
| mensagem\* | Mensagem a ser passada | String |
| autor\*    | Autor da mensagem      | String |
| data\*     | Data da mensagem       | Date   |

#### Response

```
{
  "res": {
    "_id": "5f6358d12c20a3237c382093",
    "solicitante": "Teste",
    "assunto": "Teste",
    "opcao": "dois",
    "votos": [],
    "situacao": "pendente",
    "__v": 0
  },
  "res2": {
    "_id": "5f6358d12c20a3237c382094",
    "idPendencia": "5f6358d12c20a3237c382093",
    "chat": [
      {
        "_id": "5f6358d12c20a3237c382095",
        "mensagem": "Olá! Eu sou uma mensagem",
        "autor": "Teste",
        "data": "1999-06-02T00:00:00.000Z"
      }
    ],
    "__v": 0
  }
}
```

### Receber todas as pendências

#### Request

`POST /todos/pendencias`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

#### Response

```
{
   "res": [
    {
      "_id": "5f61f77ab1abf332f842a469",
      "solicitante": "Teste",
      "assunto": "Teste",
      "opcao": "oitenta",
      "situacao": "aprovado",
      "__v": 0,
      "votos": [
        {
          "_id": "5f623a7b14401e1074151d8f",
          "idPessoa": "5f60b21c6e27ef0c84454de9",
          "voto": "aprovado"
        },
        {
          "_id": "5f623acc14401e1074151d93",
          "idPessoa": "5f60b21c6e27ef0c84454de9",
          "voto": "aprovado"
        }
      ]
    },
    "res": [
    {
      "_id": "5f61f77ab1abf332f842a469",
      "solicitante": "Outro teste",
      "assunto": "Outro teste",
      "opcao": "dois",
      "situacao": "em aberto",
      "__v": 0,
      "votos": [
        {
          "_id": "5f623a7b14401e1074151d8f",
          "idPessoa": "5f60b21c6e27ef0c84454de9",
          "voto": "aprovado"
        },
        {
          "_id": "5f623acc14401e1074151d93",
          "idPessoa": "5f60b21c6e27ef0c84454de9",
          "voto": "reprovado"
        }
      ]
    },
}
```

### Receber pendência

`GET /pendencias`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição   | Tipo   |
| ---------- | ----------- | ------ |
| id\*       | Id do ativo | String |

#### Response

```
{
  "pendencia": {
    "_id": "5f6358d12c20a3237c382093",
    "solicitante": "Teste",
    "assunto": "Teste",
    "opcao": "dois",
    "votos": [
      {
        "_id": "5f635b832c20a3237c382096",
        "idPessoa": "5f62594a04efd62cac597118",
        "voto": "aprovado",
        "representacao": 10
      }
    ],
    "situacao": "pendente",
    "__v": 0
  },
  "chat": [
    {
      "_id": "5f6358d12c20a3237c382094",
      "idPendencia": "5f6358d12c20a3237c382093",
      "chat": [
        {
          "_id": "5f6358d12c20a3237c382095",
          "mensagem": "Olá! Eu sou uma mensagem",
          "autor": "Teste",
          "data": "1999-06-02T00:00:00.000Z"
        }
      ],
      "__v": 0
    }
  ]
}
```

### Votar em uma pendência

`PUT /pendencias`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros  | Descrição               | Tipo                                  |
| ----------- | ----------------------- | ------------------------------------- |
| pendencia\* | Objeto da pendência     | Object                                |
| idPessoa\*  | Id de quem está votando | String                                |
| voto        | Voto da pessoa          | String -> `("aprovado", "reprovado)"` |

#### Response

```
{
  "res": {
    "_id": "5f6358d12c20a3237c382093",
    "solicitante": "Teste",
    "assunto": "Teste",
    "opcao": "dois",
    "votos": [
      {
        "_id": "5f635b832c20a3237c382096",
        "idPessoa": "5f62594a04efd62cac597118",
        "voto": "aprovado",
        "representacao": 10
      }
    ],
    "situacao": "pendente",
    "__v": 0
  }
}
```

## Chat das pendências

### Enviar mensagem

#### Request

`PUT /chat`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição             | Tipo     |
| ---------- | --------------------- | -------- |
| id\*       | Id da pendência       | String   |
| chat\*     | Mensagem da pendência | [Object] |

#### \* Chat

| Parâmetros | Descrição              | Tipo   |
| ---------- | ---------------------- | ------ |
| mensagem\* | Mensagem a ser passada | String |
| autor\*    | Autor da mensagem      | String |
| data\*     | Data da mensagem       | Date   |

#### Response

```
{
  "res": {
    "_id": "5f63a64d4e26170e70380695",
    "idPendencia": "5f63a64d4e26170e70380694",
    "chat": [
      {
        "_id": "5f63a64d4e26170e70380696",
        "mensagem": "Olá! Eu sou uma mensagem",
        "autor": "Teste",
        "data": "1999-06-02T00:00:00.000Z"
      },
      {
        "_id": "5f63a6544e26170e70380697",
        "mensagem": "Olá, eu sou outra mensagem!",
        "autor": "Um outro autor",
        "data": "1999-06-02T00:00:00.000Z"
      }
    ],
    "__v": 0
  }
}
```

## Contas a receber

### Cadastrar

#### Request

`POST /contas/receber`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros       | Descrição           | Tipo   |
| ---------------- | ------------------- | ------ |
| valor\*          | Valor da conta      | Number |
| pagador\*        | Nome do pagador     | String |
| dataVencimento\* | Data de vencimento  | Date   |
| emissao\*        | Data de emissao     | Date   |
| cpf_cnpj\*       | CPF/CNPJ            | Number |
| condominio       | Valor do condomínio | Number |
| energia          | Valor da energia    | Number |
| outros           | Outros valores      | Number |
| unidade          | Unidade             | String |

#### Response

```
{
  "conta": {
    "_id": "5f639f385560a64198fe0596",
    "valor": 500,
    "pagador": "João",
    "dataVencimento": "1999-06-02T00:00:00.000Z",
    "emissao": "1999-06-02T00:00:00.000Z",
    "cpf_cnpj": 50721981,
    "codigo": 1,
    "situacao": "pendente",
    "__v": 0
  }
}
```

### Receber conta

#### Request

`GET/contas/receber`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição   | Tipo   |
| ---------- | ----------- | ------ |
| id\*       | Id da conta | String |

#### Response

```
{
  "res": {
    "_id": "5f639f385560a64198fe0596",
    "valor": 500,
    "pagador": "João",
    "dataVencimento": "1999-06-02T00:00:00.000Z",
    "emissao": "1999-06-02T00:00:00.000Z",
    "cpf_cnpj": 50721981,
    "codigo": 1,
    "situacao": "pendente",
    "__v": 0
  }
}
```

### Receber todas as contas

#### Request

`GET/todos/contas/receber`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

#### Response

```
{
  "res": [
    {
      "_id": "5f637e6ca3f38d26643b9aa1",
      "valor": 500,
      "pagador": "João",
      "dataVencimento": "1999-06-02T00:00:00.000Z",
      "emissao": "1999-06-02T00:00:00.000Z",
      "cpf_cnpj": 50721981,
      "codigo": 0,
      "__v": 0,
      "dataRecebimento": "1999-06-12T00:00:00.000Z",
      "desconto": 0,
      "juros": 0.001627,
      "multa": 0.1,
      "total": 558.135,
      "situacao": "pago"
    },
    {
      "_id": "5f639f385560a64198fe0596",
      "valor": 500,
      "pagador": "João",
      "dataVencimento": "1999-06-02T00:00:00.000Z",
      "emissao": "1999-06-02T00:00:00.000Z",
      "cpf_cnpj": 50721981,
      "codigo": 1,
      "situacao": "pendente",
      "__v": 0
    }
  ]
}
```

### Confirmar o recebimento

`PUT /contas/receber`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros        | Descrição             | Tipo                                  |
| ----------------- | --------------------- | ------------------------------------- |
| id\*              | Id da conta           | String                                |
| valor\*           | Valor da conta        | Number                                |
| dataVencimento\*  | Data de vencimento    | Date                                  |
| dataRecebimento\* | Data de recebimento   | Date                                  |
| juros\*           | Porcentagem dos juros | Number -> `(10% = 0.1)`               |
| desconto\*        | Valor do desconto     | Number                                |
| multa\*           | Porcentagem da multa  | Number -> `(10% = 0.1)`               |
| situacao\*        | Situação da conta     | String -> `("pendente", "em aberto")` |

#### Response

```
{
  "res": {
    "_id": "5f637e6ca3f38d26643b9aa1",
    "valor": 500,
    "pagador": "João",
    "dataVencimento": "1999-06-02T00:00:00.000Z",
    "emissao": "1999-06-02T00:00:00.000Z",
    "cpf_cnpj": 50721981,
    "codigo": 0,
    "__v": 0,
    "dataRecebimento": "1999-06-12T00:00:00.000Z",
    "desconto": 0,
    "juros": 0.001627,
    "multa": 0.1,
    "total": 558.135,
    "situacao": "pago"
  }
}
```

## Contas a pagar

### Cadastrar

#### Request

`POST /contas/pagar`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros         | Descrição          | Tipo   |
| ------------------ | ------------------ | ------ |
| valor\*            | Valor da conta     | Number |
| chaveDePagamento\* | Chave do pagamento | String |
| pagador\*          | Nome do pagador    | String |
| dataVencimento\*   | Data de vencimento | Date   |
| emissao\*          | Data de emissao    | Date   |
| cpf_cnpj\*         | CPF/CNPJ           | Number |

#### Response

```
{
  "conta": {
    "_id": "5f63aa08bd51e435a006dc87",
    "valor": 1000,
    "chaveDePagamento": "chavealeatoria",
    "pagador": "Pedro",
    "dataVencimento": "1999-06-02T00:00:00.000Z",
    "emissao": "1999-06-02T00:00:00.000Z",
    "cpf_cnpj": 54828318426,
    "codigo": 3,
    "situacao": "pendente",
    "__v": 0
  }
}
```

### Receber conta

#### Request

`GET/contas/pagar`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição   | Tipo   |
| ---------- | ----------- | ------ |
| id\*       | Id da conta | String |

#### Response

```
{
  "res": {
    "_id": "5f63aa08bd51e435a006dc87",
    "valor": 1000,
    "chaveDePagamento": "chavealeatoria",
    "pagador": "Pedro",
    "dataVencimento": "1999-06-02T00:00:00.000Z",
    "emissao": "1999-06-02T00:00:00.000Z",
    "cpf_cnpj": 54828318426,
    "codigo": 3,
    "situacao": "pendente",
    "__v": 0
  }
}
```

### Receber todas as contas

#### Request

`GET/todos/contas/pagar`

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

#### Response

```
{
  "res": [
    {
      "_id": "5f63a943bd51e435a006dc86",
      "valor": 500,
      "chaveDePagamento": "chavealeatoria",
      "pagador": "João",
      "dataVencimento": "1999-06-02T00:00:00.000Z",
      "emissao": "1999-06-02T00:00:00.000Z",
      "cpf_cnpj": 54828318426,
      "codigo": 2,
      "situacao": "pendente",
      "__v": 0
    },
    {
      "_id": "5f63aa08bd51e435a006dc87",
      "valor": 1000,
      "chaveDePagamento": "chavealeatoria",
      "pagador": "Pedro",
      "dataVencimento": "1999-06-02T00:00:00.000Z",
      "emissao": "1999-06-02T00:00:00.000Z",
      "cpf_cnpj": 54828318426,
      "codigo": 3,
      "situacao": "pendente",
      "__v": 0
    }
  ]
}
```

### Pagar uma conta (Em construção)

`PUT /contas/pagar`

#### Request

#### :warning: É necessário passar como parâmetro o header `authorization : "Bearer ${token_do_usuário}"`:warning:

| Parâmetros | Descrição   | Tipo   |
| ---------- | ----------- | ------ |
| id\*       | Id da conta | String |

#### Response

```
{
  "res": {
    "_id": "5f63a943bd51e435a006dc86",
    "valor": 500,
    "chaveDePagamento": "chavealeatoria",
    "pagador": "João",
    "dataVencimento": "1999-06-02T00:00:00.000Z",
    "emissao": "1999-06-02T00:00:00.000Z",
    "cpf_cnpj": 54828318426,
    "codigo": 2,
    "situacao": "pago",
    "__v": 0,
    "dataPagamento": "2020-09-17T18:42:26.087Z"
  }
}
```

## Clientes

### Cadastro

#### Request

`POST /clientes`
|Parâmetros|Descrição|Tipo|
|-|-|-|
|nome*|Nome do cliente|String|
|email*|Email do cliente|String|
|contato*|Contato do cliente|String|
|cpf_cnpj*|CPF/CNPJ|Number|
|endereco\*|Endereço do cliente|String|

#### Response

```
{
  "ativo": {
    "_id": "5f63aef2fbdf0a384ccb5d5b",
    "nome": "Cliente 1",
    "email": "cliente1@email.com",
    "contato": "85993867483",
    "cpf_cnpj": 74827462718,
    "endereco": "Endereço 1",
    "__v": 0
  }
}
```

### Edição de dados

#### Request

`PUT /clientes`
|Parâmetros|Descrição|Tipo|
|-|-|-|
|id\*|Id do cliente|String|
|nome|Nome do cliente|String|
|email|Email do cliente|String|
|contato|Contato do cliente|String|
|cpf_cnpj|CPF/CNPJ|Number|
|endereco|Endereço do cliente|String|

#### Response

```
{
  "res": {
    "_id": "5f63aef2fbdf0a384ccb5d5b",
    "nome": "Cliente 1",
    "email": "cliente1@email.com",
    "contato": "85993867483",
    "cpf_cnpj": 74827462718,
    "endereco": "Outro endereço!",
    "__v": 0
  }
}
```

### Receber cliente

`GET /clientes`

#### Request

| Parâmetros | Descrição     | Tipo   |
| ---------- | ------------- | ------ |
| id\*       | Id do cliente | String |

#### Response

```
{
  "res": {
    "_id": "5f63aef2fbdf0a384ccb5d5b",
    "nome": "Cliente 1",
    "email": "cliente1@email.com",
    "contato": "85993867483",
    "cpf_cnpj": 74827462718,
    "endereco": "Outro endereço!",
    "__v": 0
  }
}
```

### Receber todos os clientes

`GET /todos/clientes`

#### Response

```
{
  "res": [
    {
      "_id": "5f63aef2fbdf0a384ccb5d5b",
      "nome": "Cliente 1",
      "email": "cliente1@email.com",
      "contato": "85993867483",
      "cpf_cnpj": 74827462718,
      "endereco": "Outro endereço!",
      "__v": 0
    },
    {
      "_id": "5f63aff8fbdf0a384ccb5d5c",
      "nome": "Cliente 2",
      "email": "cliente2@email.com",
      "contato": "85993867483",
      "cpf_cnpj": 47387427348,
      "endereco": "Endereço 1",
      "__v": 0
    }
  ]
}
```
