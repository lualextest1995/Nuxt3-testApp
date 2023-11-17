FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY . .

RUN npm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/.output .

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", "server/index.mjs"]