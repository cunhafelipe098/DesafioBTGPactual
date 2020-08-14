# Desafio do BTG Pactual Digital

Teste de conhecimento em back-end com nodeJs.
Serviço web REST contendo 2 funcionalidades:

 1. Endpoint para autenticação do serviço (Login)
 
* Sing in
* Sing up
 2. Endpoint para geração do documento com os dados inputados pelo usuário e salvar no disco;

## 🚀 Começando

Segue instruções para obter o projeto rodando na sua máquina local.

### 📋 Pré-requisitos

Você precisa ter previamente em sua máquina:
```
Node
Docker
```

### 🔧 Instalação

Crie um contêiner a partir de uma imagem postgres

```
$ docker run --name databaseBTG -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11

```
OBS: para os testes já sendo usado o sqlite automaticamente.

Clone o repositório, navegue até o diretório raiz do projeto.

Rodar os testes:
```
$ yarn test 
```
Rodar o miniProjeto:

```
$ yarn dev 
```

## 📦 Decisões de desenvolvimento

Devido ao escopo do projeto foi escolhido a arquitetura MVC e utilizado o Postman para testar os endpoints.

## 🛠️ Construído com


* [Express](https://expressjs.com/pt-br/) - O framework web usado
* [Yarn](https://yarnpkg.com/) - Gerente de Dependência
* [Sequelize](https://sequelize.org/) - ORM utilizado
* [JWT](https://jwt.io/) - Autenticação por JWT
* [Postgresql](https://www.postgresql.org/) - Banco de dados utilizado
* [Docker](https://www.docker.com/) - Utilizado para isolar o BD

## Postman

https://www.getpostman.com/collections/ab3a8e5b4d52db99bff7

## ✒️ Autor

* Autor: Felipe Lima Cunha Vieira
* Siga no linkedin: https://www.linkedin.com/in/felipe-lima-cunha-vieira-976906174/
