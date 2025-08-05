FROM node:22.17.1 AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit-dev

FROM node:22.17.1 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

RUN npm run build

FROM node:22.17.1 AS runner

ARG BFF_BASE_URL

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

ENV NODE_ENV=production
ENV BFF_BASE_URL=$BFF_BASE_URL


CMD ["npm", "run", "start"]



