FROM node:12-alpine

WORKDIR /app

COPY . .

RUN ./scripts/deploy.sh

CMD ["node", "server.js"]
