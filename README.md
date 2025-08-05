## Descrição

Spotfy Luizalabs

## Instale as dependências

```bash
$ npm install
```

## Iniciar o projeto em desenvolvimento

```bash
$ npm run dev
```

## Deployment com Docker

### Crie a rede

```bash
docker network create spotfy-luizalabs
```

### Construa

```bash
docker build -t spotfy-luizalabs-fe .
```

### Inicie a aplicação

```bash
docker run -d --name spotfy-luizalabs-fe \
  --network spotfy-luizalabs \
  -p 3000:3000 \
  --env-file .env.docker \
  spotfy-luizalabs-fe
```
