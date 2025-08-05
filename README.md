## Descrição

Projeto front-end para o desafio técnico LuizaLabs.

## Rodando a aplicão

### 1. Instale as dependências

```bash
$ npm install
```

### 2. Configure as variáveis de ambiente

Para rodar a aplicação em modo desenvolvimento, é necessário adicionar algumas variáveis de ambinte.

Crie um arquivo `.env` na raiz deste projeto.

Adicione a variável `BFF_BASE_URL` como o exemplo abaixo.

```
# ./.env

BFF_BASE_URL=http://localhost:3001
```

### 3. Iniciar o projeto em desenvolvimento

```bash
$ npm run dev
```

## Deployment com Docker

Necessário ter o Docker instalado. Caso precise instalar, siga as [instruções de instalação](https://docs.docker.com/engine/install/) nos manuais oficiais do Docker. Após instalar, siga as instruções abaixo para construir e iniciar a aplicação.

### 1. Crie a rede

Para que o front-end se comunique com o bff, é necessário criar uma rede para conectar os containers.

Crie a rede `spotfy-luizalabs` com o comando abaixo.

```bash
docker network create spotfy-luizalabs
```

### 2. Construa a imagem

Utilize o comando abaixo para construir a imagem com o nome de `spotfy-luizalabs-fe`.

```bash
docker build -t spotfy-luizalabs-fe .
```

### 3. Inicie a aplicação

Inicie um container com a imagem criada no passo anterior usando o comando a seguir.

```bash
docker run -d --name spotfy-luizalabs-fe \
  --network spotfy-luizalabs \
  -p 3000:3000 \
  --env-file .env.docker \
  spotfy-luizalabs-fe
```
