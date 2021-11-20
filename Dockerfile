FROM node:12-alpine

WORKDIR /app

COPY . .

RUN ./scripts/deploy.sh

EXPOSE 80

CMD ["node", "server.js"]
