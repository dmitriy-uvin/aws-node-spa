FROM node:12-alpine

WORKDIR /app

COPY . .

RUN ./scripts/deploy.sh

EXPOSE 8081

CMD ["node", "server.js"]
