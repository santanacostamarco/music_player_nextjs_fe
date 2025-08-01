FROM node:22.17.1 AS builder

WORKDIR /app

COPY ./public ./public
COPY ./src ./src
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./next.config.ts ./next.config.ts
COPY ./tsconfig.json ./tsconfig.json

RUN npm i
